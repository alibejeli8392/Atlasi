import { SiteNavbar } from "@/components/layout/SiteNavbar.jsx"
import { SiteFooter } from "@/components/layout/SiteFooter.jsx"
import { HeroSection } from "@/components/sections/HeroSection.jsx"
import { BrandStorySection } from "@/components/sections/BrandStorySection.jsx"
import { FavoritesSection } from "@/components/sections/FavoritesSection.jsx"
import { MenuSection } from "@/components/sections/MenuSection.jsx"
import { AboutSection } from "@/components/sections/AboutSection.jsx"

export default function App() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <SiteNavbar />
      <HeroSection />
      <BrandStorySection />
      <FavoritesSection />
      <MenuSection />
      <AboutSection />
      <SiteFooter />
    </div>
  )
}
