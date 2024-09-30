import { useEffect, useState } from "react";
import { checkDeviceSize } from "../utils/helpers";
export function useWindowResize() {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInterval(() => {
        setWindowSize(checkDeviceSize(window.innerWidth));
      }, 500);
    });
    return () => {};
  }, []);

  return windowSize;
}
