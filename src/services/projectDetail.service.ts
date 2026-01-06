import { getProjectDetailApi } from "@api/projectDetail.api";

export const getProjectDetailService = async (
  project_id: string | undefined
) => {
  const res = await getProjectDetailApi(project_id);
  return res;
};
