import { axiosInstance } from "./axiosInstance";

export const subscribersApi = async (data: { email: string }) => {
  try {
    const res = await axiosInstance.post("/subscribers", data);
    return res;
  } catch (error) {
    throw error;
  }
};
