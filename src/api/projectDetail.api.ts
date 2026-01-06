import { axiosInstance } from "./axiosInstance";

export const getProjectDetailApi = async (project_id: string | undefined) => {
  const res = await axiosInstance.get("/project_info", {
    params: { project_id: `eq.${project_id}` },
  });
  return res;
};
