import axios from "axios";

const BASE_URL = "https://organizeit-nk11py4mq-mohamedalicuedus-projects.vercel.app";

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
