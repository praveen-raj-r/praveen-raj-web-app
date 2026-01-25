import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 200; // ✅ Correct height

  const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
