import { GetAllReturn } from "../types/apiTypes";
import { Movie, TVShow } from "../types/types";
import { apiV3 } from "./api";
export type GetSearchedData = {
  query?: string;
  page?: number;
  type: "movie" | "tv" | "multi";
};

export const getSearchedData: (
  params: GetSearchedData,
) => Promise<GetAllReturn<Movie & TVShow>> = async ({
  query = "",
  page = 1,
  type = "multi",
}) => {
  const { data } = await apiV3
    .get(`/search/${type}`, {
      params: {
        query,
        page,
      },
    })
    .catch((err) => err);

  return data;
};
