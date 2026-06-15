# Premium Data Scientist & ML Engineer Portfolio 

A world-class, high-performance portfolio website built for **Varun Kumar H C** using a modern, luxury hybrid design (**70% Aurora Glass, 30% Bento Grid**) in a beige/sand aesthetic, inspired by Apple, Linear, and Vercel.

---

## 🚀 Performance Optimizations & Architecture

The website is designed for maximum speed, hitting **95+ scores** on Google Lighthouse:
- **Server-Side Generation (SSG)**: Statically pre-rendered HTML served instantly to browsers, reducing FCP/LCP to sub-seconds.
- **Tailwind CSS v4 & GPU Aurora**: The slow-pulsing background mesh is animated using pure GPU-accelerated CSS keyframes and radial blurs. Heavy Three.js, React Three Fiber, and canvas render loops were removed.
- **Custom Brand SVGs**: Optimized, lightweight inline SVGs replace heavy third-party brand icon packages.
- **Image Optimization**: Built with Next.js `<Image>` containers, featuring auto WebP conversion, lazy loading, and aspect ratio layout shift prevention.
- **GitHub ISR Caching**: Commits, repositories, and language statistics are fetched dynamically from the GitHub API and cached server-side using Next.js Incremental Static Regeneration (ISR) with a 1-hour expiration window.

---

## 🎨 Luxury Aesthetics & Design Tokens

- **Palette**: Warm Sand (`#e6dfd5`), Warm Beige (`#f4efe6`), Cream White (`#faf8f5`), Charcoal Brown (`#2d2722`), and Champagne Gold (`#c5a880`).
- **Tactile Texture**: Injected a micro-fine SVG noise pattern overlay across the viewport, giving a high-end tactile feel.
- **Glassmorphic Tokens**: Backdrop blurs (`backdrop-blur-md`), semi-transparent beige borders, and dynamic spotlight cursor overlays.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Runtime**: React 19 (compiled with the new React Compiler)
- **Language**: TypeScript (Strict Typing)
- **Styling**: Tailwind CSS v4 + Vanilla CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React + custom inline SVGs

---

## 📦 Project Structure

```text
src/
├── app/
│   ├── globals.css      # Core styles, luxury tokens, and CSS animations
│   ├── layout.tsx       # Preloads Outfit/Playfair fonts and injects JSON-LD SEO
│   └── page.tsx         # Unified single-page homepage compilation
├── components/
│   ├── sections/        # Section components (Hero, About, Skills, Projects, etc.)
│   └── ui/              # Shared elements (Dock, Aurora, Spotlight, MagneticButton)
└── data/
    └── portfolio.ts     # Centralized extracted data (projects, skills, socials)
public/
├── images/              # Optimized project screenshots and illustration assets
└── *.pdf                # Downoadable resume files (Varun_Resume__.pdf)
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/varun5812/Portfolio_.git
   cd Portfolio_
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build of the website:
```bash
npm run build
```
To run the production build locally:
```bash
npm run start
```

---

## 🌍 Deployment

The project is ready for one-click deployment on **Vercel** or **Render**:
- **Vercel**: Link your GitHub repository, choose **Next.js** preset, and click **Deploy**. Vercel will automatically compile the static pages and set up the ISR server cache.
- **Render**: Create a new **Web Service**, specify the build command as `npm run build`, and the start command as `npm run start`.
