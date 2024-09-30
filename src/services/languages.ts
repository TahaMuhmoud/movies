import { Language } from "../types/types";
import { apiV3 } from "./api";

export const getLanguages: () => Promise<Language[]> = async () => {
  const { data } = await apiV3.get("/configuration/languages");
  const sortedData = data.sort((a: Language, b: Language) => {
    if (a.english_name < b.english_name) {
      return -1;
    }
    if (a.english_name > b.english_name) {
      return 1;
    }
    return 0;
  });

  return sortedData;
};
