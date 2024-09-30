import { useQuery } from "@tanstack/react-query";
import { getTv } from "../services/tv";

export function useSeries(series_id: number) {
  return useQuery({
    queryKey: ["full-series", series_id],
    queryFn: () => getTv(series_id),
  });
}
