import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function getAssetPath(path: string) {
  if (path.startsWith('http') || path.startsWith('//')) return path
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${cleanPath}`
}
