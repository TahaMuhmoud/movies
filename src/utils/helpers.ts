import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function CN(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

export const checkDeviceSize: (windowWidth: number) => string = (
  windowWidth,
) => {
  if (windowWidth < 576) return "xs";
  else if (windowWidth < 768) return "sm";
  else if (windowWidth < 992) return "md";
  else if (windowWidth < 1200) return "lg";
  else if (windowWidth < 1400) return "xl";
  else if (windowWidth >= 1400) return "xxl";
  return "";
};

export const makeRuntime: (runtime: number) => string = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const mins = runtime - hours * 60;
  return `${hours}h ${mins}m`;
};
export const makeBudget: (budget: number) => string = (budget) => {
  const l = budget.toString().length;
  if (l <= 3) return `${budget}`;
  else if (l <= 6) return `${budget / 1000}K`;
  else if (l <= 9) return `${budget / 1000000}M`;
  return `${budget}`;
};
