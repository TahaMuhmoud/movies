import { useEffect, useState } from "react";

type UseIntervalNumberProps = {
  interval?: number;
  times?: number;
  loop?: boolean;
};
export function useIntervalNumber({
  interval = 1000,
  loop = true,
  times = 1,
}: UseIntervalNumberProps) {
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    const intervall = setInterval(() => {
      if (loop) {
        setState((prev) => {
          if (prev >= times || times <= 0) return 0;
          return prev + 1;
        });
      } else {
        setState((prev) => {
          if (prev >= times) return prev;
          return prev + 1;
        });
      }
    }, interval);
    return () => {
      clearInterval(intervall);
    };
  }, [interval, loop, times]);
  return state;
}
