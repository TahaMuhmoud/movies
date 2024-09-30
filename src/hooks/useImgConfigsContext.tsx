import { useContext } from "react";
import { ImgConfigContext } from "../context/ImgConfigContext";

export function useImgConfigsContext() {
  const configs = useContext(ImgConfigContext);
  return configs;
}
