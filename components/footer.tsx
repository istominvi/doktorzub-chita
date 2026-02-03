import Image from "next/image"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"

const socialLinks = [
  {
    name: "ВКонтакте",
    href: "https://vk.com/club78495029",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.001-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.042-2.763-5.32-2.763-5.795 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.492 2.272 4.675 2.856 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.746c.372 0 .508.203.508.643v3.472c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/doktorzubstom",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/doktorzubchita",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.665 3.717l-17.73 6.837c-1.213.486-1.203 1.163-.222 1.462l4.552 1.42 1.589 4.829c.19.525.095.732.65.732.427 0 .61-.194.848-.425l2.27-2.206 4.716 3.485c.868.479 1.493.232 1.708-.8l3.097-14.615c.317-1.27-.482-1.844-1.314-1.464z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer id="contacts" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={getAssetPath("/images/logo-white.svg")}
                alt="Логотип Доктор Зуб"
                width={40}
                height={59}
                className="h-10 w-auto"
              />
              <div>
                <div className="font-bold text-lg">Доктор Зуб</div>
                <div className="text-sm text-background/70">Стоматология в Чите</div>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Ваша улыбка — Наша профессия! Более 20 лет заботимся о здоровье ваших зубов.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+73022320630" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <Phone className="h-4 w-4" />
                  8 (3022) 32-06-30
                </a>
              </li>
              <li>
                <a href="tel:+79141338887" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  +7 (914) 133-88-87
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>г. Чита, ул. Новобульварная, 96, 2 этаж, каб. №26</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Режим работы</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Clock className="h-4 w-4" />
                <span>Пн — Пт: 10:00 — 19:00</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Clock className="h-4 w-4" />
                <span>Сб — Вс: по записи</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Мы в соцсетях</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon
                    className={
                      `text-background/70 group-hover:text-background transition-colors ${
                        link.name === "Telegram"
                          ? "h-[18px] w-[18px] -translate-x-[1px] translate-y-[1px]"
                          : "h-5 w-5"
                      }`
                    }
                  />
                </a>
              ))}
            </div>
            <Button asChild variant="secondary" className="w-full mt-4">
              <a href="#appointment">Записаться на приём</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © 2004 — {new Date().getFullYear()} ООО «Доктор Зуб». Все права защищены.
            </p>
            <p className="text-sm text-background/50">
              ИНН: 7536000000 | ОГРН: 1047536000000
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
