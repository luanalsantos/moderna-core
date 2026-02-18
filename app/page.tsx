import { JornadaIntegrada } from "@/components/jornada-integrada"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1" />
      <JornadaIntegrada />
      <Footer />
    </main>
  )
}
