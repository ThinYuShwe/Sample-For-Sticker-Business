import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// need to install this "npm install clsx tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
