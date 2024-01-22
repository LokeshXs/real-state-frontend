import axios from "axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const auth = useSelector((state) => state.auth);

  const axiosPrivate = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevrequest = error?.config;
        if (error?.response?.status === 403 && !prevrequest?.sent) {
          prevrequest.sent = true;

          const newAccessToken = await refresh();
          prevrequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axiosPrivate(prevrequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
