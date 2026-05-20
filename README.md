# Atlasi Cafe - Immersive Frontend Experience

Atlasi is a high-fidelity, single-page React experience built to showcase premium brand storytelling through motion, 3D visuals, and polished UI composition.  
The project demonstrates production-minded frontend engineering: modular architecture, performance-aware animation, custom WebGL shader work, and design-system consistency.

While this repository focuses on the client experience (no backend/API layer), the implementation style mirrors the quality bar expected in fintech product teams where reliability, clarity, and UX precision matter.

## Resume-Ready Highlights

- Built a production-grade React + Vite experience featuring custom Three.js/GLSL rendering, motion-driven storytelling, and modular section architecture.
- Implemented performance and accessibility safeguards (DPR capping, lifecycle cleanup, reduced-motion support) while preserving premium visual quality.
- Structured the frontend for scale with centralized content/motion configuration and reusable UI patterns, enabling faster iteration and cleaner handoff.

## Project Overview

The app is composed as a scroll-driven landing experience with distinct product storytelling sections:

- Hero section with cinematic visuals and dynamic canvas effects
- Brand story section with animated reveal and bilingual copy
- Featured products section with reusable card patterns
- Menu section with category-rich content and strong visual hierarchy
- About/contact section and persistent navigation/footer system

All major content and motion tuning values are centralized for easier iteration and maintainability.

## Tech Stack Used

- **Framework:** React 18
- **Bundler/Tooling:** Vite 6, `@vitejs/plugin-react`
- **Styling:** Tailwind CSS v4, CSS variable-based theming, `tw-animate-css`
- **Animation:** Motion (`motion/react`) + Intersection Observer driven reveal logic
- **3D/Graphics:** Three.js + custom GLSL shaders for hero canvas effects
- **UI Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`
- **Component Ecosystem:** shadcn-style structure with Radix UI primitives
- **Icons/Charts/UX libs (available):** Lucide, Recharts, Embla (scaffolded for extensibility)

## Key Features

- **Custom WebGL Hero Layer:** Real-time shader-driven overlay built with Three.js and GLSL.
- **Performance-Conscious Rendering:** Device pixel ratio capping, resize handling, cleanup on unmount, and reduced-motion fallback support.
- **Modular Section Architecture:** Clear separation between layout, section-level components, and shared content constants.
- **Centralized Content Model:** Navigation links, motion timing, and card/menu content are sourced from `src/constants/siteContent.js`.
- **Responsive, Brand-First UI:** Typography, spacing, color, and interaction are consistently orchestrated via shared styles and design tokens.
- **Smooth In-Page Navigation:** Scroll-aware navbar behavior with section anchors and motion-enhanced transitions.

## Screenshots

Add your screenshots to a folder like `docs/screenshots/` and reference them below.

```md
![Hero Experience](docs/screenshots/hero.png)
![Brand Story Section](docs/screenshots/brand-story.png)
![Menu Section](docs/screenshots/menu.png)
```

Suggested captures:

- Full hero viewport (showing 3D/shader effect)
- Mid-scroll storytelling section
- Menu/favorites section on desktop and mobile

## How To Run Locally

### Prerequisites

- Node.js 18+ (recommended: latest active LTS)
- npm 9+

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## What I Learned / Challenges Solved

- **Bridging design and engineering:** Built a consistent system where visual fidelity did not compromise maintainability.
- **Custom shader integration in React:** Managed Three.js scene lifecycle safely (init, animate, resize, dispose) inside React component boundaries.
- **Motion without chaos:** Unified easing/timing patterns across sections to keep transitions expressive but coherent.
- **Performance as a feature:** Balanced rich animation with practical safeguards like DPR caps and reduced-motion accessibility.
- **Scalable frontend structure:** Organized content, sections, and utility layers in a way that supports future evolution (A/B testing, CMS wiring, analytics instrumentation, etc.).

## Repository Structure (Quick View)

```text
src/
  components/
    layout/
    sections/
    ui/
  constants/
  styles/
  assets/images/
  lib/
```

## Notes

- `ATTRIBUTIONS.md` includes asset/source credits.
- This project currently targets frontend UX excellence; backend integrations can be layered in next (auth, data APIs, analytics, feature flags).
