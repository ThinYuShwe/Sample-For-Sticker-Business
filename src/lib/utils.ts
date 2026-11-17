import { type ClassValue, clsx } from "clsx";
// import { PrinterCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";
// need to install this "npm install clsx tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  opts: Intl.NumberFormatOptions = {},
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: opts.currency ?? "USD",
    notation: opts.notation ?? "compact",
  }).format(Number(price));
}
