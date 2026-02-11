import { ParticlesCanvas } from "@/components/particles-canvas"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <>
      <ParticlesCanvas />
      <main>
        <HeroSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <footer className="text-center py-8 text-muted-foreground text-sm">
        {"© 2026 BIGROSS"}
      </footer>
    </>
  )
}
