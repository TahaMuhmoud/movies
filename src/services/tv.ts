import { FullTvShow } from "../types/types";
import { apiV3 } from "./api";

export const getTv: (series_id: number) => Promise<FullTvShow> = async (
  series_id,
) => {
  const { data } = await apiV3
    .get(`/tv/${series_id}`, {
      params: {
        append_to_response:
          "videos,images,translations,similar,keywords,credits,external_ids",
      },
    })
    .catch((err) => err);

  return data;
};
