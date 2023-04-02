import React, { useContext, createContext, useState, useCallback } from "react";
import { PopupBounce } from "../../components/Animation";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../components/Common/AlertModal";

const PopupContext = createContext();

const usePopup = () => useContext(PopupContext);

export default function PopupProvider({ children }) {
  const [successAlert, setSuccessAlert] = useState();
  const [errorAlert, setErrorAlert] = useState();
  const [warningAlert, setWarningAlert] = useState();

  // Call methods
  const showSuccess = useCallback((message, time) => {
    setTimeout(() => {
      setSuccessAlert(null);
    }, time || 5000);
    setErrorAlert(null);
    setSuccessAlert(message);
    setWarningAlert(null);
  }, []);

  const showError = useCallback((message, time) => {
    setTimeout(() => {
      setErrorAlert(null);
    }, time || 5000);
    setSuccessAlert(null);
    setErrorAlert(message);
    setWarningAlert(null);
  }, []);

  const showWarning = useCallback((message, time) => {
    setTimeout(() => {
      setErrorAlert(null);
    }, time || 5000);
    setSuccessAlert(null);
    setErrorAlert(null);
    setWarningAlert(message);
  }, []);

  return (
    <PopupContext.Provider
      value={{
        showSuccess,
        showError,
        showWarning,
      }}>
      {successAlert ? (
        <PopupBounce>
          <SuccessMessage successAlert={successAlert} />
        </PopupBounce>
      ) : errorAlert ? (
        <PopupBounce>
          <ErrorMessage errorAlert={errorAlert} />
        </PopupBounce>
      ) : warningAlert ? (
        <PopupBounce>
          <WarningMessage warningAlert={warningAlert} />
        </PopupBounce>
      ) : null}
      {children}
    </PopupContext.Provider>
  );
}

export { PopupContext, usePopup, PopupProvider };
