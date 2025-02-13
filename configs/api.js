import axios from "axios";
import { getCookie } from "./cookies";

const api = axios.create({
  baseURL: "http://localhost:3400/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((req) => {
  const accessToken = getCookie();
  try {
    if (accessToken) {
      req.headers.Authorization = `bearer ${accessToken}`;
    }
  } catch (error) {
    console.log(error.message)
  }

  return req;
});

export default api;
