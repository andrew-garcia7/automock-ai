import axios from "axios";

export const API = axios.create({
  baseURL: "https://automock-ai-production.up.railway.app",
});