import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, CheckCircle } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

const features = [
  "Более 20 лет опыта",
  "Бесплатная консультация",
  "Безболезненное лечение",
  "Работа со сложными случаями",
]

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Работаем с 2004 года
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Ваша улыбка —{" "}
                <span className="text-primary">Наша профессия!</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Стоматологическая клиника «Доктор Зуб» в Чите. Качественное лечение зубов с гарантией долговечности. Бережный подход к каждому пациенту.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <a href="#appointment">
                  Записаться на приём
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <a href="tel:+73022320630">
                  <Phone className="h-4 w-4 mr-2" />
                  8 (3022) 32-06-30
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Пн-Пт: 10:00 — 19:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>ул. Новобульварная, 96</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={getAssetPath("/images/unwatermarked-1-1.jpeg")}
                alt="Врачи стоматологии Доктор Зуб проводят лечение"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">20+</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Лет опыта</div>
                  <div className="text-sm text-muted-foreground">с 2004 года</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
