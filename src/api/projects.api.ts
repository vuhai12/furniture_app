import { axiosInstance } from "./axiosInstance";

export const getProjectsApi = async () => {
  const res = await axiosInstance.get("/projects");
  return res;
};
