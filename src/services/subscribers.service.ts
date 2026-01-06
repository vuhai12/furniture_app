import { subscribersApi } from "@api/subscribers.api";

export const subscribersServices = async (data: { email: string }) => {
  try {
    const res = await subscribersApi(data);
    return res;
  } catch (error) {
    throw error;
  }
};
