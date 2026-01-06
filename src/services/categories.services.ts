import {
  getCategoriesApi,
  getProjectsByCategoriesApi,
} from "@api/categories.api";

export const getCategoriesServices = async () => {
  try {
    const data = await getCategoriesApi();
    return data;
  } catch (error) {}
};

export const getProjectsByCategoriesServices = async (
  category_id: string | null | undefined,
  keyword: string | undefined,
  from: number,
  to: number
) => {
  try {
    const data = await getProjectsByCategoriesApi(
      category_id,
      keyword,
      from,
      to
    );
    return data;
  } catch (error) {}
};
