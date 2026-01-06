import { axiosInstance } from "./axiosInstance";

export const getProjectsApi = async () => {
  try {
    const res = await axiosInstance.get("/projects");
    return res.data;
  } catch (error) {}
};
