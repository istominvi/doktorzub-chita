import Image from "next/image"
import { Gift, Percent } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAssetPath } from "@/lib/utils"

const certificates = [
  { amount: "1 000 ₽", image: getAssetPath("/images/certificate-1000.jpeg") },
  { amount: "2 000 ₽", image: getAssetPath("/images/certificate-2000.jpeg") },
  { amount: "5 000 ₽", image: getAssetPath("/images/certificate-5000.jpeg") },
]

export function GiftCards() {
  return (
    <section id="gift-cards" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Certificate Images Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Gift className="h-4 w-4" />
              Подарочные сертификаты
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Подарите здоровую улыбку
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Сертификат «Доктор Зуб» — отличный подарок для близких. 
              Выберите номинал от 1 000 до 5 000 рублей. Действителен в течение года.
            </p>
          </div>

          {/* Certificate Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.amount} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={cert.image || getAssetPath("/placeholder.svg")}
                    alt={`Подарочный сертификат на ${cert.amount}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold text-lg">{cert.amount}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Discount Cards */}
          <div className="flex justify-center">
            <Card className="border-border/50 max-w-2xl w-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Percent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Социальные скидки</CardTitle>
                    <CardDescription>Особые условия для категорий</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Скидки для пенсионеров
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Скидки для студентов
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Возможность рассрочки
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Скидка для членов семьи – до 15%
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
