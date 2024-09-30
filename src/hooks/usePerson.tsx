import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../services/people";

export function usePerson(person_id: number) {
  return useQuery({
    queryKey: ["person", person_id],
    queryFn: () => getPerson(person_id),
  });
}
