import { useQuery } from "@tanstack/react-query";
import { getSeason } from "../services/season";

export function useSeason(params: {
  series_id: string;
  season_number: string;
}) {
  return useQuery({
    queryKey: ["full-Season", params],
    queryFn: () => getSeason(params),
  });
}
