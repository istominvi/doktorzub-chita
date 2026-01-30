import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { GiftCards } from "@/components/gift-cards"
import { AppointmentForm } from "@/components/appointment-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <GiftCards />
      <AppointmentForm />
      <Footer />
    </main>
  )
}
