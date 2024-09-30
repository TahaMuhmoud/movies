import axios from "axios";
export const TOKEN = import.meta.env.VITE_API_KEY;
export const apiV3 = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});
export const apiV4 = axios.create({
  baseURL: "https://api.themoviedb.org/4",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});
