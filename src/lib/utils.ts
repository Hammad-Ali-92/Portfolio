import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Memoize the cn function for better performance
const memoizedCn = (() => {
  const cache = new Map<string, string>();
  
  return (...inputs: ClassValue[]): string => {
    const key = JSON.stringify(inputs);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = twMerge(clsx(inputs));
    cache.set(key, result);
    return result;
  };
})();

export const cn = memoizedCn;

// Add image loading utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Add lazy loading utility
export const lazyLoad = <T,>(factory: () => Promise<T>): Promise<T> => {
  return new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve(factory());
    } else {
      window.addEventListener('load', () => {
        resolve(factory());
      });
    }
  });
};