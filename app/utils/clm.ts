import type { ClassValue } from "clsx";
import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  // Custom merge options can be added here
  // https://github.com/dcastil/tailwind-merge/blob/v3.3.1/docs/configuration.md
});

const clm = (...inputs: ClassValue[]) => twMerge(clsx(...inputs));

export default clm;
