import axios from "axios";
import Cookies from "js-cookie";

const COOKIE_KEY = "apiBaseUrl";
const DEFAULT_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create();

const getApiBaseUrl = () => {
  return Cookies.get(COOKIE_KEY) || DEFAULT_URL;
};

instance.interceptors.request.use(
  (config) => {
    config.baseURL = getApiBaseUrl();
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
