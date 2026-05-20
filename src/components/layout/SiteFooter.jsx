import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { MOTION_EASE, SCROLL_INVIEW_OPTIONS } from "@/constants/siteContent.js"

export function SiteFooter() {
  const footerRef = useRef(null)
  const footerInView = useInView(footerRef, SCROLL_INVIEW_OPTIONS)

  return (
    <footer ref={footerRef} className="bg-[#1E3530] border-t border-[#C9922A] py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: MOTION_EASE }}
      >
        <div className="text-[#C9922A] text-4xl mb-6">✦</div>
        <h3 className="text-3xl text-[#F5EFE0] font-['Playfair_Display',serif] italic">ATLASI CAFÉ</h3>
        <div className="text-base text-[#C9922A] mt-1 font-['Vazirmatn',sans-serif]">کافه اطلسی</div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-2 text-[#C9922A] mt-6"
        initial={{ opacity: 0, y: 12 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.6, delay: 0.12, ease: MOTION_EASE }}
      >
        <div className="h-[1px] w-12 bg-[#C9922A]" />
        <span>✦</span>
        <div className="h-[1px] w-12 bg-[#C9922A]" />
      </motion.div>
      <motion.p
        className="text-sm text-[#F5EFE0] opacity-60 mt-4 italic font-['Playfair_Display',serif]"
        initial={{ opacity: 0, y: 12 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.6, delay: 0.24, ease: MOTION_EASE }}
      >
        soft like silk. open like the sky.
      </motion.p>
      <motion.div
        className="text-xs uppercase tracking-[0.2em] text-[#C9922A] mt-6"
        initial={{ opacity: 0, y: 12 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.6, delay: 0.36, ease: MOTION_EASE }}
      >
        @atlasicafe
      </motion.div>
      <motion.div
        className="text-2xl text-[#C9922A] mt-4 font-['Vazirmatn',sans-serif]"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ delay: 4, duration: 0.6, ease: MOTION_EASE, times: [0, 0.5, 1] }}
      >
        نوش جان
      </motion.div>
      <motion.div
        className="text-xs text-[#F5EFE0] opacity-30 mt-8"
        initial={{ opacity: 0, y: 12 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.6, delay: 0.48, ease: MOTION_EASE }}
      >
        © 2025 Atlasi Café
      </motion.div>
    </footer>
  )
}
