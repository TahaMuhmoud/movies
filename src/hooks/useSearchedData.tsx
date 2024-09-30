import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetSearchedData, getSearchedData } from "../services/search";

export function useSearchedData(params: GetSearchedData) {
  const nextParams = { ...params, page: (params.page || 1) + 1 };
  const qClient = useQueryClient();
  qClient.prefetchQuery({
    queryKey: [`searched-${params.type}`, nextParams],
    queryFn: () => getSearchedData(nextParams),
  });
  return useQuery(
    {
      queryKey: [`searched-${params.type}`, params],
      queryFn: () => getSearchedData(params),
    },
    qClient,
  );
}
