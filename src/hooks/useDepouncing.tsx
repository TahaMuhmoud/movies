import { useEffect, useState } from "react";

export function useDebounce<T>({
  value,
  delay = 500,
}: {
  delay: number;
  value?: T;
}) {
  const [state, setState] = useState<T | undefined>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(value);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay, value]);
  return state;
}
