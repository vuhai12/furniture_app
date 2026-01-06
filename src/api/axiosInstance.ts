import axios from "axios";

const BASE_URL = import.meta.env.VITE_SUPABASE_URL + "/rest/v1";
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Prefer: "return=representation",
    apikey: ANON_KEY,
    // Authorization: `Bearer sb_publishable_p_IS89E7dkBJyeWtfr21Lg_jgKsF5gU`,
    "Content-Type": "application/json",
  },
});
