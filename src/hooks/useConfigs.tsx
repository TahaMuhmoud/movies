import { useQuery } from "@tanstack/react-query";
import { getImgSizes } from "../services/imagesSize";

export function useConfigs() {
  return useQuery({
    queryKey: ["configs"],
    queryFn: getImgSizes,
  });
}
