import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { usePopup } from "../contexts/PopupContext";
import useDidMountEffect from "./useDidMountEffect";
import useHttpClient from "./useHttpClient";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        loading: true,
        // error: null,
        // data: null,
      };
      break;
    }
    case "ERROR": {
      return {
        loading: false,
        error: action.error,
        // data: null,
      };
      break;
    }
    case "RESPONSE": {
      return {
        loading: false,
        // error: null,
        data: action.data,
      };
      break;
    }

    default:
      break;
  }
};

function useDelete(url, options) {
  const [refetchCount, setRefetch] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
  });
  const httpClient = useHttpClient();
  const { showError, showSuccess } = usePopup();

  const fetchCall = useCallback(
    (deleteId) => {
      dispatch({
        type: "LOADING",
      });
      httpClient
        .delete(`${url}/${deleteId}`, {})
        .then((res) => {
          dispatch({
            type: "RESPONSE",
            data: res.data,
          });
          if (options?.afterSuccess) {
            options?.afterSuccess(res);
          }
        })
        .catch((error) => {
          dispatch({
            type: "ERROR",
            error,
          });
        });
    },
    [httpClient, url]
  );

  useDidMountEffect(() => {
    const { error, data, loading } = state;
    if (error) {
      console.log("error", error);
      if (error?.response?.data.message) {
        showError(error?.response?.data.message);
      } else {
        showError(error?.message);
      }
      return;
    }
    if (data) {
      if (options?.noPopup) {
        return;
      }

      if (data.message) {
        showSuccess(data.message);
      }
    }
  }, [state]);

  if (options?.obj) {
    return [fetchCall, state];
  }
  return [fetchCall, state.loading, state.data, state.error];
}

export default useDelete;
