import { useQuery } from "@tanstack/react-query";
import { getFullMovie } from "../services/movie";

export function useFullMovie(movie_id: number) {
  return useQuery({
    queryKey: ["fullMovie", movie_id],
    queryFn: () => getFullMovie(movie_id),
  });
}
