import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
 
const instance = axios.create({
    baseURL: API_URL
});
 
instance.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
 
const getAuthToken = () => {
  const token = localStorage.getItem('token')
  return token;
}
 
export default instance;