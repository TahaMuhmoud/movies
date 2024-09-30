import { FullMovie } from "../types/types";
import { apiV3 } from "./api";

export const getFullMovie: (movie_id: number) => Promise<FullMovie> = async (
  movie_id,
) => {
  const { data } = await apiV3.get(`/movie/${movie_id}`, {
    params: {
      append_to_response:
        "videos,images,translations,similar,keywords,credits,external_ids",
    },
  });
  return data;
};
