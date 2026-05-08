# Prime Terra Global Ventures

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1-f9f9f9?logo=bun)](https://bun.sh/)

Prime Terra Global Ventures is a premium corporate platform for a Dubai-based Free Zone Company (FZCO) specializing in proprietary non-manufactured gold and silver trading. Incorporated under DIEZA at Dubai Silicon Oasis, the site reflects a high-trust, stable, and professional brand identity.

## ✨ Core Features

- **Premium Visual Identity:** Deep Forest Green and Golden Amber palette following strict [Brand Guidelines](./BRAND_GUIDELINES.md).
- **Dynamic Animations:** Smooth and elegant transitions powered by GSAP and Motion (Framer Motion).
- **Responsive Architecture:** Built with Next.js 16 App Router for optimal performance and SEO.
- **Strategic Business Sections:**
    - High-impact Hero Section.
    - Executive Summary & Business Pillars.
    - Governance & Compliance transparency.
- **Founder Profile:** Detailed professional legacy and global exposure.
- **Contact Integration:** Server Actions-powered contact form for direct inquiries.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/) + [@gsap/react](https://www.npmjs.com/package/@gsap/react) + [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Montserrat (Headings) & IBM Plex Sans (Body)
- **Package Manager:** [Bun](https://bun.sh/)

## 📁 Project Structure

```text
├── app/
│   ├── components/
│   │   ├── HomePage/        # Hero, Pillars, Governance, etc.
│   │   ├── FounderProfile/   # Professional background components
│   │   └── common/           # Navbar, Footer, Badge
│   ├── contact/              # Server Actions for form handling
│   ├── founder/              # Founder profile page
│   ├── globals.css           # Tailwind & Global styles
│   ├── layout.tsx            # Root layout with fonts & providers
│   └── page.tsx              # Homepage entry
├── public/                   # High-quality assets & images
├── BRAND_GUIDELINES.md       # Visual & Animation standards
└── AGENTS.md                # Development & Maintenance rules
```

## 🚀 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/prime-terra.git

# Install dependencies
bun install
```

### Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To create an optimized production build:

```bash
bun run build
```

## 🎨 Design Philosophy

The project adheres to a "Premium Corporate" aesthetic.
- **Palette:** Deep Forest Green (`#1C5244`) and Golden Amber (`#F8AB1D`).
- **Typography:** Impactful Montserrat headings and readable IBM Plex Sans body text.
- **Animations:** Subtle, smooth, and professional. Avoid bouncy or frantic motion.

For detailed specifications, refer to [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md).

## 📄 License

This project is private and proprietary.
