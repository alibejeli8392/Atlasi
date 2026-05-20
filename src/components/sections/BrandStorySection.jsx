import { useRef } from "react"
import { motion, useInView } from "motion/react"
import brandStoryImage from "@/assets/images/brand/brand-story.png"
import { BRAND_STORY_BODY_LINES, MOTION_EASE, SCROLL_INVIEW_OPTIONS } from "@/constants/siteContent.js"

export function BrandStorySection() {
  const brandStoryColumnRef = useRef(null)
  const brandStoryInView = useInView(brandStoryColumnRef, SCROLL_INVIEW_OPTIONS)

  return (
    <section className="bg-[#F5EFE0] border-t border-[#C9922A]">
      <div className="grid lg:grid-cols-[3fr_2fr] gap-0">
        <div ref={brandStoryColumnRef} className="py-24 px-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#8B6F47] mb-6">
            OUR STORY — داستان ما
          </div>
          <motion.h2
            className="text-4xl text-[#1A1A1A] leading-tight font-['Playfair_Display',serif] italic"
            initial={{ opacity: 0, y: 30 }}
            animate={brandStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: MOTION_EASE }}
          >
            soft like silk. open like the sky.
          </motion.h2>
          <div className="text-base text-[#8B6F47] leading-[1.9] mt-6 font-light">
            {BRAND_STORY_BODY_LINES.map((line, lineIndex) => (
              <motion.p
                key={line}
                className={lineIndex > 0 ? "mt-3" : undefined}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={
                  brandStoryInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }
                }
                transition={{
                  duration: 0.8,
                  delay: lineIndex * 0.15,
                  ease: MOTION_EASE,
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
              transition={{ duration: 1, delay: 0.5, ease: MOTION_EASE }}
            />
            <span>✦</span>
            <motion.div
              className="h-[1px] bg-[#C9922A] w-12 origin-right"
              initial={{ scaleX: 0 }}
              animate={brandStoryInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: MOTION_EASE }}
            />
          </div>
          <div className="text-2xl text-[#C9922A] mt-4 font-['Vazirmatn',sans-serif]">
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
  )
}
