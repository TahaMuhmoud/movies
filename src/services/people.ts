import { PersonDetails } from "../types/types";
import { apiV3 } from "./api";

export const getPerson: (person_id: number) => Promise<PersonDetails> = async (
  person_id,
) => {
  const { data } = await apiV3
    .get(`/person/${person_id}`, {
      params: {
        append_to_response:
          "images,external_ids,movie_credits,tv_credits,translations",
      },
    })
    .catch((err) => err);
  return data;
};
