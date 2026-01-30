import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    text: "10 лет назад лечил зубы в «Доктор Зубе». До сих пор всё в порядке! Качество работы на высшем уровне.",
    author: "Алексей К.",
    highlight: "Надёжность результата",
  },
  {
    text: "Сделали ребёнку реставрацию переднего зуба. Быстро, качественно, бережно. Ребёнок даже не испугался!",
    author: "Мария С.",
    highlight: "Детская стоматология",
  },
  {
    text: "Врач видел, как меня от страха трясло... давал время успокоиться, отвлекал разговорами. Теперь лечить зубы только там!",
    author: "Ольга П.",
    highlight: "Психологический комфорт",
  },
  {
    text: "Не ощутила даже укола анестезии! Очень деликатный подход. Рекомендую всем, кто боится стоматологов.",
    author: "Елена В.",
    highlight: "Безболезненное лечение",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Отзывы пациентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нам доверяют сотни семей в Чите. Вот что говорят наши пациенты.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground ml-1">на 2GIS</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="relative overflow-hidden border-border/50">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                  {review.highlight}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-4 text-lg">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{review.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{review.author}</div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
