import clsx from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges and conditionally applies Tailwind CSS classes.
 *
 * This function takes an array of class values, processes them with "clsx" to handle
 * conditional class names, and then passes the result to "twMerge" to merge, deduplicate,
 * and optimize the final class string specifically for Tailwind CSS.
 *
 * @param classes - A spread of class values which can be strings, arrays, or objects that represent CSS classes.
 * @returns A single string containing the optimized set of class names.
 */
export const clm = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};

/**
 * Creates a delay for the specified milliseconds
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
