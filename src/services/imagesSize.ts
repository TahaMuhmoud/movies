import { apiV3 } from "./api";

export type ImgSizes = {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
};

export const getImgSizes: () => Promise<ImgSizes> = async () => {
  const { data }: { data: { images: ImgSizes } } = await apiV3
    .get("/configuration")
    .catch((err) => err);

  return data.images;
};
