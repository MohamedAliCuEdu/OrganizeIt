import axios from "axios";

const BASE_URL = "https://organizeit-api-production.up.railway.app";

const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivateApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosApi;
