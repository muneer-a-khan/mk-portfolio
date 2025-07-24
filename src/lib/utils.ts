import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
} 