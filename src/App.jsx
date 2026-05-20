import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "motion/react"
import { AtlasiHeroCanvas } from "./components/sections/AtlasiHeroCanvas.jsx"
import heroImage from "./assets/images/hero/Hero.png"
import brandStoryImage from "./assets/images/brand/brand-story.png"
import bornImage from "./assets/images/brand/born.jpg"
import matchaImage from "./assets/images/menu/matcha.png"
import raspberryRoseMatchaImage from "./assets/images/menu/Raspberry-Rose-Matcha.png"
import saffronRoseMatchaImage from "./assets/images/menu/Saffron-Rose-Matcha.png"

const ease = [0.25, 0.1, 0.25, 1]
const inViewOpts = { once: true, margin: "-80px" }

const storyBodyLines = [
  "atlasi — from the persian atlas.",
  "a fabric so smooth, it was worn only by those who knew the worth of softness.",
  "a flower that blooms in every color, in every garden.",
  "a sky that holds everything above it, quietly.",
  "atlasi café was made for the in-between moments — warm like silk, colorful like the flower, open like the ninth sky.",
  "somewhere you can arrive exactly as you are.",
]

const favoritesCards = [
  {
    nameEn: "TIRAMISU LATTE",
    nameFa: "لاته تیرامیسو",
    description: "layers of warmth in every sip",
    price: "$—",
    image: matchaImage,
  },
  {
    nameEn: "RASPBERRY & ROSE MATCHA",
    nameFa: "ماچای رز و تمشک",
    description: "bloomed with intention",
    price: "$—",
    image: raspberryRoseMatchaImage,
  },
  {
    nameEn: "SAFFRON & ROSE MATCHA",
    nameFa: "ماچای زعفران و گل",
    description: "a persian afternoon, iced",
    price: "$—",
    image: saffronRoseMatchaImage,
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  const brandStoryRef = useRef(null)
  const brandStoryInView = useInView(brandStoryRef, inViewOpts)

  const favoritesRef = useRef(null)
  const favoritesInView = useInView(favoritesRef, inViewOpts)

  const menuRef = useRef(null)
  const menuInView = useInView(menuRef, inViewOpts)

  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, inViewOpts)

  const footerRef = useRef(null)
  const footerInView = useInView(footerRef, inViewOpts)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const aboutHeadingWords = "born from a question.".split(" ")

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-12 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(44,74,62,0.85)] backdrop-blur-[20px] border-b border-[rgba(201,146,42,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div
          className="text-xl text-[#F5EFE0] cursor-pointer"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          onClick={() => scrollToSection("hero")}
        >
          ATLASI
        </div>
        <div className="flex gap-10">
          {[
            { label: "HOME", id: "hero" },
            { label: "MENU", id: "menu" },
            { label: "ABOUT", id: "about" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs text-[#F5EFE0] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#C9922A]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section id="hero" className="relative h-screen overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ mixBlendMode: "soft-light" }}
        >
          <AtlasiHeroCanvas />
        </div>
      </section>

      <section className="bg-[#F5EFE0] border-t border-[#C9922A]">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-0">
          <div ref={brandStoryRef} className="py-24 px-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#8B6F47] mb-6">
              OUR STORY — داستان ما
            </div>
            <motion.h2
              className="text-4xl text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
              initial={{ opacity: 0, y: 30 }}
              animate={brandStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.9, ease }}
            >
              soft like silk. open like the sky.
            </motion.h2>
            <div className="text-base text-[#8B6F47] leading-[1.9] mt-6" style={{ fontWeight: 300 }}>
              {storyBodyLines.map((line, i) => (
                <motion.p
                  key={i}
                  className={i > 0 ? "mt-3" : undefined}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={brandStoryInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease,
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[#C9922A] mt-8">
              <motion.div
                className="h-[1px] bg-[#C9922A] w-12 origin-left"
                initial={{ scaleX: 0 }}
                animate={brandStoryInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5, ease }}
              />
              <span>✦</span>
              <motion.div
                className="h-[1px] bg-[#C9922A] w-12 origin-right"
                initial={{ scaleX: 0 }}
                animate={brandStoryInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5, ease }}
              />
            </div>
            <div className="text-2xl text-[#C9922A] mt-4" style={{ fontFamily: "Vazirmatn, sans-serif" }}>
              نوش جان
            </div>
          </div>
          <div className="bg-[#EDE5D0] flex flex-col items-center justify-center p-12">
            <img
              src={brandStoryImage}
              alt=""
              className="w-full min-h-[280px] object-cover rounded-xl"
            />
            <div className="text-xs uppercase tracking-[0.2em] text-[#8B6F47] mt-4">@atlasicafe</div>
          </div>
        </div>
      </section>

      <section ref={favoritesRef} className="bg-[#2C4A3E] py-24 px-6">
        <div className="text-center mb-16">
          <div className="w-32 h-[1px] bg-[#C9922A] mx-auto" />
          <motion.h2
            className="text-4xl text-[#F5EFE0] my-4"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
            initial={{ opacity: 0, y: 24 }}
            animate={favoritesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease }}
          >
            OUR FAVORITES
          </motion.h2>
          <div className="text-base text-[#C9922A]" style={{ fontFamily: "Vazirmatn, sans-serif" }}>
            علاقه‌مندی‌ها
          </div>
          <div className="w-32 h-[1px] bg-[#C9922A] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {favoritesCards.map((item, index) => {
            const cardVariants = [
              { initial: { x: -20, y: 40, opacity: 0 }, delay: 0 },
              { initial: { y: 50, opacity: 0 }, delay: 0.15 },
              { initial: { x: 20, y: 40, opacity: 0 }, delay: 0.3 },
            ][index]
            return (
              <motion.div
                key={index}
                className="bg-[#1E3530] border border-[#C9922A]"
                initial={cardVariants.initial}
                animate={
                  favoritesInView
                    ? { x: 0, y: 0, opacity: 1 }
                    : cardVariants.initial
                }
                transition={{ duration: 0.7, delay: cardVariants.delay, ease }}
              >
                <div className="aspect-[4/5] bg-[#2C4A3E] relative p-1">
                  <div className="w-full h-full border-[3px] border-[#C9922A] overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div
                    className="text-lg text-[#F5EFE0]"
                    style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
                  >
                    {item.nameEn}
                  </div>
                  <div className="text-sm text-[#C9922A] mt-1" style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                    {item.nameFa}
                  </div>
                  <div className="text-xs text-[#F5EFE0] opacity-50 mt-2" style={{ fontWeight: 300 }}>
                    {item.description}
                  </div>
                  <div className="text-sm text-[#C9922A] tracking-wider mt-3">{item.price}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="menu" className="bg-[#F5EFE0] py-24 px-6">
        <div ref={menuRef} className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="w-32 h-[1px] bg-[#C9922A] mx-auto" />
              <h2
                className="text-4xl text-[#1A1A1A]"
                style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
              >
                THE MENU
              </h2>
              <div className="text-base text-[#C9922A] mt-1" style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                منو
              </div>
              <div className="flex items-center justify-center gap-2 text-[#C9922A] mt-4">
                <div className="h-[1px] w-12 bg-[#C9922A]" />
                <span>✦</span>
                <div className="h-[1px] w-12 bg-[#C9922A]" />
              </div>
            </motion.div>
          </div>

          <div className="mb-12">
            <motion.div
              className="text-xs uppercase tracking-[0.2em] text-[#2C4A3E] border-b-2 border-[#C9922A] pb-2 mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              MATCHA — ماچا
            </motion.div>
            <motion.div
              className="border-b border-[#EDE5D0] py-4"
              initial={{ x: -30, opacity: 0 }}
              animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
            >
              <div className="flex items-baseline">
                <div className="text-xl text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
                  Pistachio Cream Matcha Latte
                </div>
                <div className="flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1" />
                <div className="text-sm text-[#C9922A] tracking-wider">$8</div>
              </div>
              <div className="text-xs text-[#8B6F47] mt-1" style={{ fontWeight: 300 }}>
                matcha + agave, pistachio butter, pistachio cream top
              </div>
            </motion.div>
            <motion.div
              className="border-b border-[#EDE5D0] py-4"
              initial={{ x: -30, opacity: 0 }}
              animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
            >
              <div className="flex items-baseline">
                <div className="text-xl text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
                  Raspberry & Rose Matcha
                </div>
                <div className="flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1" />
                <div className="text-sm text-[#C9922A] tracking-wider">$—</div>
              </div>
            </motion.div>
            <motion.div
              className="border-b border-[#EDE5D0] py-4"
              initial={{ x: -30, opacity: 0 }}
              animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease }}
            >
              <div className="flex items-baseline">
                <div className="text-xl text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
                  Saffron & Rose Matcha
                </div>
                <div className="flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1" />
                <div className="text-sm text-[#C9922A] tracking-wider">$—</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center text-[#C9922A] my-8"
            initial={{ x: -30, opacity: 0 }}
            animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
          >
            ✦
          </motion.div>

          <div className="mb-12">
            <motion.div
              className="text-xs uppercase tracking-[0.2em] text-[#2C4A3E] border-b-2 border-[#C9922A] pb-2 mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.38, ease }}
            >
              LATTES — لاته
            </motion.div>
            <motion.div
              className="border-b border-[#EDE5D0] py-4"
              initial={{ x: -30, opacity: 0 }}
              animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.46, ease }}
            >
              <div className="flex items-baseline">
                <div className="text-xl text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
                  Tiramisu Latte
                </div>
                <div className="flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1" />
                <div className="text-sm text-[#C9922A] tracking-wider">$—</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center text-[#C9922A] my-8"
            initial={{ x: -30, opacity: 0 }}
            animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.54, ease }}
          >
            ✦
          </motion.div>

          <div>
            <motion.div
              className="text-xs uppercase tracking-[0.2em] text-[#2C4A3E] border-b-2 border-[#C9922A] pb-2 mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.62, ease }}
            >
              SPECIALS — ویژه
            </motion.div>
            <motion.div
              className="border-b border-[#EDE5D0] py-4"
              initial={{ x: -30, opacity: 0 }}
              animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
            >
              <div className="flex items-baseline">
                <div className="text-xl text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
                  Seasonal Special
                </div>
                <div className="flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1" />
                <div className="text-sm text-[#C9922A] tracking-wider italic">ask us!</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={aboutRef} id="about" className="grid lg:grid-cols-2 min-h-[70vh]">
        <div className="bg-[#2C4A3E] p-12 flex flex-col items-center justify-center min-h-[70vh]">
          <motion.div
            className="w-full flex-1 min-h-0"
            initial={{ x: -60, opacity: 0 }}
            animate={aboutInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <img
              src={bornImage}
              alt=""
              className="h-full w-full min-h-[280px] object-cover rounded-lg"
            />
          </motion.div>
          <p className="text-xs text-[#C9922A] text-center mt-3 italic" style={{ fontWeight: 300 }}>
            the hands behind your cup
          </p>
        </div>
        <div className="bg-[#EDE5D0] flex flex-col justify-center p-16">
          <motion.div
            className="text-center text-[#C9922A] mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease }}
          >
            ◆◆◆
          </motion.div>
          <h2 className="text-4xl text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}>
            {aboutHeadingWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline-block"
                style={{ marginRight: i < aboutHeadingWords.length - 1 ? "0.25em" : 0 }}
                initial={{ opacity: 0, y: 12 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="text-base text-[#8B6F47] leading-relaxed mt-4"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            Atlasi Café began as a search for softness in a fast world. Like the atlas flower that blooms in every
            color, we welcome every person, every mood, every moment. Come as you are. Stay as long as you need.
          </motion.p>
          <motion.p
            className="text-sm text-[#8B6F47] mt-4"
            dir="rtl"
            style={{ fontFamily: "Vazirmatn, sans-serif" }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={aboutInView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            transition={{ duration: 1.4, ease }}
          >
            کافه اطلسی برای لحظه‌های میان‌راهی ساخته شد.
          </motion.p>
          <div className="flex items-center gap-2 text-[#C9922A] mt-8">
            <div className="h-[1px] w-12 bg-[#C9922A]" />
            <span>✦</span>
            <div className="h-[1px] w-12 bg-[#C9922A]" />
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#2C4A3E] mt-6">@atlasicafe</div>
        </div>
      </section>

      <footer ref={footerRef} className="bg-[#1E3530] border-t border-[#C9922A] py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="text-[#C9922A] text-4xl mb-6">✦</div>
          <h3
            className="text-3xl text-[#F5EFE0]"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            ATLASI CAFÉ
          </h3>
          <div className="text-base text-[#C9922A] mt-1" style={{ fontFamily: "Vazirmatn, sans-serif" }}>
            کافه اطلسی
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-2 text-[#C9922A] mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
        >
          <div className="h-[1px] w-12 bg-[#C9922A]" />
          <span>✦</span>
          <div className="h-[1px] w-12 bg-[#C9922A]" />
        </motion.div>
        <motion.p
          className="text-sm text-[#F5EFE0] opacity-60 mt-4 italic"
          style={{ fontFamily: "Playfair Display, serif" }}
          initial={{ opacity: 0, y: 12 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.24, ease }}
        >
          soft like silk. open like the sky.
        </motion.p>
        <motion.div
          className="text-xs uppercase tracking-[0.2em] text-[#C9922A] mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.36, ease }}
        >
          @atlasicafe
        </motion.div>
        <motion.div
          className="text-2xl text-[#C9922A] mt-4"
          style={{ fontFamily: "Vazirmatn, sans-serif" }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ delay: 4, duration: 0.6, ease, times: [0, 0.5, 1] }}
        >
          نوش جان
        </motion.div>
        <motion.div
          className="text-xs text-[#F5EFE0] opacity-30 mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.48, ease }}
        >
          © 2025 Atlasi Café
        </motion.div>
      </footer>
    </div>
  )
}
