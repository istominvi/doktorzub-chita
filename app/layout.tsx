import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "@/components/ui/sonner"
import './globals.css'
import { getAssetPath } from "@/lib/utils"

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'Стоматология «Доктор Зуб» — Чита | Ваша улыбка — Наша профессия!',
  description: 'Стоматология в Чите с 20-летним опытом. Лечение зубов, протезирование, отбеливание, детская стоматология. Бесплатная консультация. Запись: 8 (3022) 32-06-30',
  keywords: 'стоматология чита, доктор зуб, лечение зубов, протезирование, отбеливание зубов, детская стоматология',
    generator: 'v0.app',
    icons: {
      icon: getAssetPath('/icon.svg'),
      apple: getAssetPath('/apple-icon.png'),
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
