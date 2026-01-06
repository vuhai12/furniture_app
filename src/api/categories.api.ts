import { axiosInstance } from "./axiosInstance";

export const getCategoriesApi = async () => {
  try {
    const res = await axiosInstance.get("/categorys");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProjectsByCategoriesApi = async (
  category_id: string | null | undefined,
  keyword: string | undefined,
  from: number,
  to: number
) => {
  try {
    const res = await axiosInstance.get("/projects", {
      params: { category_id: `eq.${category_id}`, title: `ilike.%${keyword}%` },
      headers: {
        Range: `${from}-${to}`,
        Prefer: "count=exact",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
