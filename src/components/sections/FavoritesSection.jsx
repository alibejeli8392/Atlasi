import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { FAVORITES_DRINK_CARDS, MOTION_EASE, SCROLL_INVIEW_OPTIONS } from "@/constants/siteContent.js"

const FAVORITES_CARD_ENTRY_VARIANTS = [
  { initial: { x: -20, y: 40, opacity: 0 }, delay: 0 },
  { initial: { y: 50, opacity: 0 }, delay: 0.15 },
  { initial: { x: 20, y: 40, opacity: 0 }, delay: 0.3 },
]

export function FavoritesSection() {
  const favoritesSectionRef = useRef(null)
  const favoritesInView = useInView(favoritesSectionRef, SCROLL_INVIEW_OPTIONS)

  return (
    <section ref={favoritesSectionRef} className="bg-[#2C4A3E] py-24 px-6">
      <div className="text-center mb-16">
        <div className="w-32 h-[1px] bg-[#C9922A] mx-auto" />
        <motion.h2
          className="text-4xl text-[#F5EFE0] my-4 font-['Playfair_Display',serif] italic"
          initial={{ opacity: 0, y: 24 }}
          animate={favoritesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: MOTION_EASE }}
        >
          OUR FAVORITES
        </motion.h2>
        <div className="text-base text-[#C9922A] font-['Vazirmatn',sans-serif]">علاقه‌مندی‌ها</div>
        <div className="w-32 h-[1px] bg-[#C9922A] mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {FAVORITES_DRINK_CARDS.map((drinkCard, cardIndex) => {
          const entryVariant = FAVORITES_CARD_ENTRY_VARIANTS[cardIndex]
          return (
            <motion.div
              key={drinkCard.nameEn}
              className="bg-[#1E3530] border border-[#C9922A]"
              initial={entryVariant.initial}
              animate={
                favoritesInView ? { x: 0, y: 0, opacity: 1 } : entryVariant.initial
              }
              transition={{ duration: 0.7, delay: entryVariant.delay, ease: MOTION_EASE }}
            >
              <div className="aspect-[4/5] bg-[#2C4A3E] relative p-1">
                <div className="w-full h-full border-[3px] border-[#C9922A] overflow-hidden">
                  <img
                    src={drinkCard.image}
                    alt=""
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="text-lg text-[#F5EFE0] font-['Playfair_Display',serif] italic">
                  {drinkCard.nameEn}
                </div>
                <div className="text-sm text-[#C9922A] mt-1 font-['Vazirmatn',sans-serif]">
                  {drinkCard.nameFa}
                </div>
                <div className="text-xs text-[#F5EFE0] opacity-50 mt-2 font-light">
                  {drinkCard.description}
                </div>
                <div className="text-sm text-[#C9922A] tracking-wider mt-3">{drinkCard.price}</div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}