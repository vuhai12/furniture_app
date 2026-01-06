import axios from "axios";

export const axiosApp = axios.create({
  baseURL: "/", // hoặc http://localhost:3000
  headers: {
    "Content-Type": "application/json",
  },
});
