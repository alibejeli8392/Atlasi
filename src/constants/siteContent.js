import matchaImage from "@/assets/images/menu/matcha.png"
import raspberryRoseMatchaImage from "@/assets/images/menu/Raspberry-Rose-Matcha.png"
import saffronRoseMatchaImage from "@/assets/images/menu/Saffron-Rose-Matcha.png"

/** Cubic-bezier used by Framer Motion transitions site */
export const MOTION_EASE = [0.25, 0.1, 0.25, 1]

export const SCROLL_INVIEW_OPTIONS = { once: true, margin: "-80px" }

export const NAV_SECTION_LINKS = [
  { label: "HOME", id: "hero" },
  { label: "MENU", id: "menu" },
  { label: "ABOUT", id: "about" },
]

export const BRAND_STORY_BODY_LINES = [
  "atlasi — from the persian atlas.",
  "a fabric so smooth, it was worn only by those who knew the worth of softness.",
  "a flower that blooms in every color, in every garden.",
  "a sky that holds everything above it, quietly.",
  "atlasi café was made for the in-between moments — warm like silk, colorful like the flower, open like the ninth sky.",
  "somewhere you can arrive exactly as you are.",
]

export const FAVORITES_DRINK_CARDS = [
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

export const ABOUT_HEADING_WORDS = "born from a question.".split(" ")
