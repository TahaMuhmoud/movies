import { Genre } from "../types/types";
import { apiV3 } from "./api";
import { MovieType } from "./all";

export const getGenres: (params: {
  type: MovieType;
}) => Promise<{ genres: Genre[] }> = async ({ type }) => {
  const { data } = await apiV3.get(`/genre/${type}/list`);
  return data;
};
