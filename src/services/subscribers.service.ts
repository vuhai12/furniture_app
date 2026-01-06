import { subscribersApi } from "@api/subscribers.api";
import { AxiosError } from "axios";

export const subscribersServices = async (data: { email: string }) => {
  try {
    const res = await subscribersApi(data);
    return res;
  } catch (error) {
    throw error;
  }
};
