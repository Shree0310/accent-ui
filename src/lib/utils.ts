// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines clsx and tailwind-merge for best results with Tailwind
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}