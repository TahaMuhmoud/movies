import { useQuery } from "@tanstack/react-query";
import { GetAllParams, getMovies } from "../services/all";

export function useGenreMovies(params: GetAllParams) {
  return useQuery({
    queryKey: ["genreMovies", params.type],
    queryFn: () => getMovies(params),
  });
}
