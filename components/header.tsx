"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"

const navigation = [
  { name: "Главная", href: "#" },
  { name: "Услуги", href: "#services" },
  { name: "О клинике", href: "#about" },
  { name: "Отзывы", href: "#reviews" },
  { name: "Контакты", href: "#contacts" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Основная навигация">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Image
              src={getAssetPath("/images/logo-black.svg")}
              alt="Логотип Доктор Зуб"
              width={40}
              height={59}
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-lg leading-tight">Доктор Зуб</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Стоматология в Чите</span>
            </div>
          </Link>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+73022320630" className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>8 (3022) 32-06-30</span>
            </a>
            <Button asChild size="sm">
              <a href="#appointment">
                <MessageCircle className="h-4 w-4 mr-2" />
                Записаться
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:+73022320630" className="flex items-center gap-2 text-sm font-medium text-foreground mt-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>8 (3022) 32-06-30</span>
              </a>
              <Button asChild size="sm" className="w-full mt-2">
                <a href="#appointment">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Записаться на приём
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
