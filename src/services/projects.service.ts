import { getProjectsApi } from "@api/projects.api";

export const getProjectsService = async () => {
  try {
    const res = await getProjectsApi();
    return res;
  } catch (error) {
    return error;
  }
};
