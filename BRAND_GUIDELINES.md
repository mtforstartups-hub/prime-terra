# Brand & Design Guidelines: prime-terra-global

Follow these instructions strictly to maintain the premium corporate aesthetic.

## 1. Visual Identity & Palette

- **Primary Color:** Deep Forest Green (`#1C5244`) - Used for trust, stability, and backgrounds.
- **Accent Color:** Golden Amber (`#F8AB1D`) - Used for CTAs, highlights, and status indicators.
- **Secondary Color:** Dark Charcoal (`#333333`) - Used for text and secondary elements.
- **Aesthetic:** "Premium Corporate." High contrast, clean lines, and subtle glassmorphism (`backdrop-blur`).

- **Shapes:** Use large border-radii (`rounded-2xl` or `rounded-3xl`) for cards and containers.

## 2. Typography

- **Headings:** Montserrat (Weights: 700, 800). Tracking: tight.
- **Body:** IBM Plex Sans (Weights: 400, 500). Line-height: 1.6.
- **Scale:** Large, impactful headings (e.g., `text-[4.5vw]` for Hero) and readable body text.

## 3. Animation Strategy (CRITICAL)

The site must feel "alive" but professional. Avoid "bouncy" animations; use "smooth/elegant" ones.

- **Engine:** GSAP for timelines and scroll-triggered sequences. Framer Motion for component-level transitions.
- **Entry Animations:** Use `clip-path` reveals for images and "text-line" reveals (overflow-hidden with
  translate-y) for headings.
- **Scroll Effects:** Implement subtle parallax on background layers and images. Fade out content as it scrolls
  out of view.
- **Micro-interactions:** Buttons should have subtle `translate-y-[-2px]` and soft shadows on hover. Use
  `lucide-react` icons.

## 4. Technical Stack

- **Framework:** Next.js (App Router), TypeScript.
- **Styling:** Tailwind CSS v4.
- **Icons:** Lucide React.
- **Animations:** GSAP + `@gsap/react` + `framer-motion`.

## 5. UI Component Patterns

- **Hero Section:** Full-screen height, background video or high-quality image with a dark overlay
  (`bg-black/60`), and centered or left-aligned high-impact typography.
- **Cards:** Glassmorphism style (`bg-white/5` with `backdrop-blur`) or clean off-white backgrounds with subtle
  borders.
- **Sections:** Generous vertical padding (`py-24`). Clear, uppercase section badges (e.g., "WHAT WE DO") in the
  primary color.
