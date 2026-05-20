import { useRef } from "react"
import { motion, useInView } from "motion/react"
import bornImage from "@/assets/images/brand/born.jpg"
import { ABOUT_HEADING_WORDS, MOTION_EASE, SCROLL_INVIEW_OPTIONS } from "@/constants/siteContent.js"

export function AboutSection() {
  const aboutSectionRef = useRef(null)
  const aboutInView = useInView(aboutSectionRef, SCROLL_INVIEW_OPTIONS)

  return (
    <section ref={aboutSectionRef} id="about" className="grid lg:grid-cols-2 min-h-[70vh]">
      <div className="bg-[#2C4A3E] p-12 flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          className="w-full flex-1 min-h-0"
          initial={{ x: -60, opacity: 0 }}
          animate={aboutInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
          transition={{ duration: 0.9, ease: MOTION_EASE }}
        >
          <img
            src={bornImage}
            alt=""
            className="h-full w-full min-h-[280px] object-cover rounded-lg"
          />
        </motion.div>
        <p className="text-xs text-[#C9922A] text-center mt-3 italic font-light">
          the hands behind your cup
        </p>
      </div>
      <div className="bg-[#EDE5D0] flex flex-col justify-center p-16">
        <motion.div
          className="text-center text-[#C9922A] mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: MOTION_EASE }}
        >
          ◆◆◆
        </motion.div>
        <h2 className="text-4xl text-[#1A1A1A] font-['Playfair_Display',serif] italic">
          {ABOUT_HEADING_WORDS.map((word, wordIndex) => (
            <motion.span
              key={`${word}-${wordIndex}`}
              className={`inline-block ${wordIndex < ABOUT_HEADING_WORDS.length - 1 ? "mr-[0.25em]" : ""}`}
              initial={{ opacity: 0, y: 12 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: wordIndex * 0.07, ease: MOTION_EASE }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.p
          className="text-base text-[#8B6F47] leading-relaxed mt-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: MOTION_EASE }}
        >
          Atlasi Café began as a search for softness in a fast world. Like the atlas flower that blooms in every
          color, we welcome every person, every mood, every moment. Come as you are. Stay as long as you need.
        </motion.p>
        <motion.p
          className="text-sm text-[#8B6F47] mt-4 font-['Vazirmatn',sans-serif]"
          dir="rtl"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={aboutInView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
          transition={{ duration: 1.4, ease: MOTION_EASE }}
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
  )
}
