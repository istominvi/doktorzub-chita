import { Stethoscope, Sparkles, Crown, Smile, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Терапия",
    description: "Лечение кариеса, пульпита и периодонтита. Сохраняем ваши зубы живыми и здоровыми.",
    items: ["Лечение кариеса", "Лечение пульпита", "Лечение периодонтита"],
  },
  {
    icon: Sparkles,
    title: "Эстетика и Гигиена",
    description: "Профессиональная чистка и отбеливание для идеальной улыбки.",
    items: ["Ультразвук + AirFlow", "Фторирование", "Отбеливание Opalescence"],
  },
  {
    icon: Crown,
    title: "Протезирование",
    description: "Восстановление зубов любой сложности с гарантией долговечности.",
    items: ["Металлокерамика", "Съёмные протезы", "Бюгельные протезы"],
  },
  {
    icon: Smile,
    title: "Реставрация",
    description: "Художественное восстановление формы и цвета зубов.",
    items: ["Передние зубы", "Жевательные зубы", "Детская реставрация"],
  },
  {
    icon: Heart,
    title: "Лечение дёсен",
    description: "Комплексный подход к здоровью дёсен и полости рта.",
    items: ["Инъекционная терапия", "Дарсонвализация", "Профилактика"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр стоматологических услуг для всей семьи. Первичная консультация — бесплатно.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
            <Sparkles className="h-4 w-4" />
            Консультация — 0 ₽
          </div>
        </div>
      </div>
    </section>
  )
}
