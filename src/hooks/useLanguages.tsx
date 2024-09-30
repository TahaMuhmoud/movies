import { useQuery } from "@tanstack/react-query";
import { getLanguages } from "../services/languages";

const useLanguages = () => {
  return useQuery({
    queryKey: ["languages"],
    queryFn: getLanguages,
  });
};

export default useLanguages;
