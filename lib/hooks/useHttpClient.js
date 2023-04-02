import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import BrowserDatabase from "../../util/BrowserDatabase";
import { useAuth } from "../contexts/AuthContext";

const useHttpClient = () => {
  const { accessToken, setUser, setAccessToken, logout, makeRefreshInterval } =
    useAuth() || {};

  const axiosInstance = axios.create({
    baseURL: "/",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    if (!accessToken) {
      return req;
    }
    req.headers.Authorization = `Bearer ${accessToken}`;
    return req;
  });

  return axiosInstance;
};

export default useHttpClient;
