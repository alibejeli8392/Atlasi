import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { MOTION_EASE, SCROLL_INVIEW_OPTIONS } from "@/constants/siteContent.js"

function MenuDishRow({ title, price, description, menuInView, delaySeconds }) {
  return (
    <motion.div
      className="border-b border-[#EDE5D0] py-4"
      initial={{ x: -30, opacity: 0 }}
      animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
      transition={{ duration: 0.6, delay: delaySeconds, ease: MOTION_EASE }}
    >
      <div className="flex items-baseline">
        <div className="text-xl text-[#1A1A1A] font-['Playfair_Display',serif]">{title}</div>
        <div className="flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1" />
        <div className="text-sm text-[#C9922A] tracking-wider">{price}</div>
      </div>
      {description ? (
        <div className="text-xs text-[#8B6F47] mt-1 font-light">{description}</div>
      ) : null}
    </motion.div>
  )
}

export function MenuSection() {
  const menuInnerRef = useRef(null)
  const menuInView = useInView(menuInnerRef, SCROLL_INVIEW_OPTIONS)

  return (
    <section id="menu" className="bg-[#F5EFE0] py-24 px-6">
      <div ref={menuInnerRef} className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: MOTION_EASE }}
          >
            <div className="w-32 h-[1px] bg-[#C9922A] mx-auto" />
            <h2 className="text-4xl text-[#1A1A1A] font-['Playfair_Display',serif] italic">
              THE MENU
            </h2>
            <div className="text-base text-[#C9922A] mt-1 font-['Vazirmatn',sans-serif]">منو</div>
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
            transition={{ duration: 0.6, delay: 0, ease: MOTION_EASE }}
          >
            MATCHA — ماچا
          </motion.div>
          <MenuDishRow
            title="Pistachio Cream Matcha Latte"
            price="$8"
            description="matcha + agave, pistachio butter, pistachio cream top"
            menuInView={menuInView}
            delaySeconds={0.08}
          />
          <MenuDishRow title="Raspberry & Rose Matcha" price="$—" menuInView={menuInView} delaySeconds={0.16} />
          <MenuDishRow title="Saffron & Rose Matcha" price="$—" menuInView={menuInView} delaySeconds={0.24} />
        </div>

        <motion.div
          className="text-center text-[#C9922A] my-8"
          initial={{ x: -30, opacity: 0 }}
          animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: MOTION_EASE }}
        >
          ✦
        </motion.div>

        <div className="mb-12">
          <motion.div
            className="text-xs uppercase tracking-[0.2em] text-[#2C4A3E] border-b-2 border-[#C9922A] pb-2 mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.38, ease: MOTION_EASE }}
          >
            LATTES — لاته
          </motion.div>
          <MenuDishRow title="Tiramisu Latte" price="$—" menuInView={menuInView} delaySeconds={0.46} />
        </div>

        <motion.div
          className="text-center text-[#C9922A] my-8"
          initial={{ x: -30, opacity: 0 }}
          animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.54, ease: MOTION_EASE }}
        >
          ✦
        </motion.div>

        <div>
          <motion.div
            className="text-xs uppercase tracking-[0.2em] text-[#2C4A3E] border-b-2 border-[#C9922A] pb-2 mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.62, ease: MOTION_EASE }}
          >
            SPECIALS — ویژه
          </motion.div>
          <motion.div
            className="border-b border-[#EDE5D0] py-4"
            initial={{ x: -30, opacity: 0 }}
            animate={menuInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: MOTION_EASE }}
          >
            <div className="flex items-baseline">
              <div className="text-xl text-[#1A1A1A] font-['Playfair_Display',serif]">Seasonal Special</div>
              <div className="flex-1 border-b border-dotted border-[#8B6F47] opacity-30 mx-4 mb-1" />
              <div className="text-sm text-[#C9922A] tracking-wider italic">ask us!</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
