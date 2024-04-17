import axios from "axios";

export const API_URL = "https://bank-app-backend-hu3253486-sonyaflexxs-projects.vercel.app";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;