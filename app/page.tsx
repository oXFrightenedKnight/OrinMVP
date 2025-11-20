import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { KillerFeaturesSection } from "@/components/killer-features-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="bg-gradient-radial-blue">
        <Navbar />
        <HeroSection />
      </div>
      <ServicesSection />
      <ProblemSolutionSection />
      <KillerFeaturesSection />
      <IntegrationsSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
