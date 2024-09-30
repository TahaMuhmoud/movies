import { FullSeason } from "../types/types";
import { apiV3 } from "./api";

export const getSeason: (params: {
  series_id: string;
  season_number: string;
}) => Promise<FullSeason> = async ({ series_id, season_number }) => {
  const { data } = await apiV3
    .get(`/tv/${series_id}/season/${season_number}`, {
      params: {
        append_to_response: "videos,images,translations,credits,external_ids",
      },
    })
    .catch((err) => err);

  return data;
};
