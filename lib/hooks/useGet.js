import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { usePopup } from "../contexts/PopupContext";
import useDidMountEffect from "./useDidMountEffect";
import useHttpClient from "./useHttpClient";

const reducer = (state, action) => {
  // if (action.type === "LOADING") {
  //   return [];
  // }
  // return {};
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
        data: action.data,
      };

      break;
    }

    default:
      break;
  }
};
``;
function useGet(url, options) {
  const [refetchCount, setRefetch] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
  });
  const httpClient = useHttpClient();
  const { showError, showSuccess } = usePopup();

  const fetchCall = useCallback(() => {
    dispatch({
      type: "LOADING",
    });

    httpClient
      .get(url, options?.payload || {})
      .then((res) => {
        dispatch({
          type: "RESPONSE",
          data: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          error,
        });
      });
  }, [httpClient, url, options?.payload]);

  const refetch = useCallback(() => {
    setRefetch((pS) => pS + 1);
  }, []);

  useEffect(() => {
    fetchCall();
  }, [refetchCount]);

  useDidMountEffect(() => {
    if (options?.noAlert) {
      return;
    }
    const { error, data, loading } = state;
    if (error) {
      if (error.response.message) {
        showError(error.response.message);
      } else {
        showError(error.message);
      }
      return;
    }
    if (data) {
      if (data.message) {
        showSuccess(data.message);
      }
    }
  }, [state]);

  return [state.data, state.error, state.loading, refetch];
}

export default useGet;
