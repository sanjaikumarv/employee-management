import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import BrowserDatabase from "../../util/BrowserDatabase";
import { usePopup } from "./PopupContext";
import Router from "next/router";
import useRefreshInterval from "../hooks/useRefreshInterval";
import useDidMountEffect from "../hooks/useDidMountEffect";
import useHttpClient from "../hooks/useHttpClient";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const { showSuccess, showError, showWarning } = usePopup();
  const [accessToken, setAccessToken] = useState();
  const [user, setUser] = useState();
  const [initialLoading, setInitialLoading] = useState(true);
  const httpClient = useHttpClient();

  const login = useCallback(async (loginDetails) => {
    try {
      const response = await httpClient.post("/api/user/login", loginDetails);
      const accessTokenR = response.data.accessToken;
      setTimeout(() => {
        makeSessionRefresh();
      }, response.data.expiry * 1000);
      showSuccess(response.data.message);
      setAccessToken(accessTokenR);
      setUser(jwtDecode(accessTokenR));
      BrowserDatabase.setItem(accessTokenR, "accessToken");
      Router.push("/animal");
    } catch (error) {
      console.log("error", error);
      showError(error?.response?.data.message);
    }
  }, []);

  const logout = useCallback(async (message) => {
    try {
      const response = await httpClient.get("/api/user/logout");
      Router.push("/farm");
      setAccessToken();
      setUser();
      BrowserDatabase.deleteItem("accessToken");
      showSuccess(
        message || response.data.message,
        message ? 1000 * 60 * 60 * 24 : null
      );
    } catch (error) {
      showError(error.message);
    }
  }, []);

  const setInitailState = useCallback(() => {
    const accessTokenB = BrowserDatabase.getItem("accessToken");
    setAccessToken(accessTokenB);
    setUser(accessTokenB ? jwtDecode(accessTokenB) : null);
    setInitialLoading(false);
  }, [setAccessToken, setUser]);

  const makeSessionRefresh = useCallback(() => {
    httpClient
      .get("api/user/refresh")
      .then((res) => {
        const newAccessToken = res.data.accessToken;
        if (!newAccessToken) {
          logout();
        }
        setTimeout(() => {
          makeSessionRefresh();
        }, res.data.expiry * 1000);

        // makeRefreshInterval(res.data.refreshToken);
        BrowserDatabase.setItem(newAccessToken, "accessToken");
        setAccessToken(newAccessToken);
        setUser(jwtDecode(newAccessToken));
      })
      .catch((err) => {
        showError(err.message);
      });
  }, []);

  useEffect(() => {
    setInitailState();
  }, [setInitailState]);

  useDidMountEffect(() => {
    if (initialLoading) {
      return;
    }
    if (accessToken) {
      makeSessionRefresh();
    }
  }, [initialLoading]);

  return (
    <AuthContext.Provider
      value={{
        initialLoading,
        user,
        setUser,
        accessToken,
        setAccessToken,
        login,
        logout,
        loggedIn: !!accessToken,
      }}>
      {initialLoading ? null : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
