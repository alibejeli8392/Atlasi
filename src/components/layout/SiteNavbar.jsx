import { useState, useEffect } from "react"
import { NAV_SECTION_LINKS } from "@/constants/siteContent.js"

function scrollToSectionId(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export function SiteNavbar() {
  const [hasScrolledPastFold, setHasScrolledPastFold] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledPastFold(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-12 transition-all duration-300 ${
        hasScrolledPastFold
          ? "bg-[rgba(44,74,62,0.85)] backdrop-blur-[20px] border-b border-[rgba(201,146,42,0.3)]"
          : "bg-transparent"
      }`}
    >
      <button
        type="button"
        className="text-xl text-[#F5EFE0] cursor-pointer bg-transparent border-0 p-0 font-['Playfair_Display',serif] italic focus:outline-none"
        onClick={() => scrollToSectionId("hero")}
      >
        ATLASI
      </button>
      <div className="flex gap-10">
        {NAV_SECTION_LINKS.map((navLink) => (
          <button
            key={navLink.id}
            type="button"
            onClick={() => scrollToSectionId(navLink.id)}
            className="text-xs text-[#F5EFE0] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#C9922A] bg-transparent border-0 focus:outline-none"
          >
            {navLink.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
