import Image from "next/image"

const galleryImages = [
  {
    src: "/images/unwatermarked-4-1.jpeg",
    alt: "Стоматологический кабинет с синим интерьером",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/unwatermarked-3-1.jpeg",
    alt: "Кабинет с розовым креслом и зелёным интерьером",
    className: "",
  },
  {
    src: "/images/unwatermarked-2-1.jpeg",
    alt: "Врачи проводят лечение ребёнка",
    className: "",
  },
  {
    src: "/images/unwatermarked-5-1.jpeg",
    alt: "Кабинет с ярким художественным оформлением",
    className: "md:col-span-2",
  },
]

export function Gallery() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наша клиника
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Современное оборудование и уютная атмосфера для вашего комфорта. 
            Каждый кабинет оформлен в уникальном стиле.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group ${image.className}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/unwatermarked-gemini-generated-image-z9xt45z9xt45z9xt.jpeg"
              alt="Сертификаты и дипломы специалистов клиники"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Квалифицированные специалисты
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Наши врачи регулярно повышают квалификацию и имеют многочисленные сертификаты 
              от ведущих производителей стоматологического оборудования и материалов.
            </p>
            <ul className="space-y-3">
              {[
                "Сертифицированные специалисты",
                "Современные методики лечения",
                "Регулярное обучение",
                "Международные стандарты качества",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
