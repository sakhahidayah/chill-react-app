import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: api_url,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
