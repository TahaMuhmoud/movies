import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/genres";
import { MovieType } from "../services/all";

export function useGenres(type: MovieType) {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => getGenres({ type }),
  });
}
