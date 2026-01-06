import { getProjectsApi } from "@api/projects.api";

export const getProjectsService = async () => {
  try {
    const data = await getProjectsApi();
    return data;
  } catch (error) {
    return error;
  }
};
