import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetAllParams, getMovies } from "../services/all";

export function useFilteredMovies(params: GetAllParams) {
  const nextParams = { ...params, page: params.page + 1 };
  const qClient = useQueryClient();
  qClient.prefetchQuery({
    queryKey: [`filtered-${params.type}`, nextParams],
    queryFn: () => getMovies(nextParams),
  });
  return useQuery(
    {
      queryKey: [`filtered-${params.type}`, params],
      queryFn: () => getMovies(params),
    },
    qClient,
  );
}
