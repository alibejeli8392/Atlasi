import heroImage from "@/assets/images/hero/Hero.png"
import { AtlasiHeroCanvas } from "@/components/sections/AtlasiHeroCanvas.jsx"

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] pointer-events-none mix-blend-soft-light">
        <AtlasiHeroCanvas />
      </div>
    </section>
  )
}
