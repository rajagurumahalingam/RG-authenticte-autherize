import axios, { AxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

const httpCookies = new Cookies("Authorization");

export const setAxiosDefauls = () => {
  const axiosRequestId = axios.interceptors.request.use(
    onRequestFulfilled, onRequestRejected);

  const axiosResponseId = axios.interceptors.response.use(
    onResponseFulfilled, onResponseRejected);
}

export const establishSession = () => {
  const tokens = window.location.href.match(/token=(.*)/);
  console.log('token', tokens);
  if (tokens) {
    const token = tokens.pop();
    if (token) {
      const options = {};
      httpCookies.set("token", token, options);
      axios.defaults.headers = {
        "Authorization": "Bearer " + token
        , "Cache-Control": "no-cache"
        , "Pragma": "no-cache"
        , "X-Frame-Options": "SAMEORIGIN",
      };
      window.location.assign('/');
    }
  }
}

export const resetSession = () => {
  httpCookies.remove("token");
  window.location.assign('/');
}

const onRequestFulfilled = (config) => {
  const token = httpCookies.get("token");
  if (token) {
    config.headers = {
      "Authorization": "Bearer " + token
      , "Cache-Control": "no-cache"
      , "Pragma": "no-cache"
      , "X-Frame-Options": "SAMEORIGIN",
    };
  } else {
    window.location.assign('login');
  }
  return Promise.resolve(config);
}

const onRequestRejected = (error) => {
  return Promise.reject(error);
}

const onResponseFulfilled = (config) => {
  return Promise.resolve(config);
}

const onResponseRejected = (error) => {
  return Promise.reject(error);
}