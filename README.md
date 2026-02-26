## 🍸 Velvet Elixir

**Velvet Elixir** is a modern **React + TypeScript + Vite** project – an animation‑heavy cocktail bar landing page.  
It combines rich scroll‑based animations powered by GSAP, a modern UI with Tailwind CSS, and a fully type‑safe codebase.

---

## 🚀 Live Demo & Source

- 🔗 **Live Demo:** [`https://velvet-elixir.vercel.app/`](https://velvet-elixir.vercel.app/)
- 💻 **GitHub Repository:** [`https://github.com/aniltanriverdiler/velvet-elixir.git`](https://github.com/aniltanriverdiler/velvet-elixir.git)

---

## ✨ Features

- **Modern Landing Page**: Single‑page (SPA) cocktail bar marketing site  
- **GSAP Animations**:
  - Hero heading and copy animations (SplitText)
  - Section‑based scroll animations with ScrollTrigger
  - Decorative parallax visuals (leaves, etc.)
  - Pinned video playback synced with scroll
- **Rich Sections**:
  - `Hero`: Video‑backed hero with title and description
  - `Cocktails`: Most popular cocktails & mocktails lists
  - `About`: Grid‑based visual storytelling “about us” section
  - `The Art`: Masked image and craft storytelling
  - `Menu`: Slider‑driven cocktail menu component
  - `Contact`: Opening hours, address, and social links
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **TypeScript‑Driven**:
  - Centralized type definitions for all data structures (`src/types`)
  - Explicit typing for `constants` and components
- **Production‑Ready**:
  - Vite production build
  - ESLint + strict TypeScript configuration

---

## 🧱 Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (dev & production build)
- **GSAP 3** + `@gsap/react` + `ScrollTrigger` + `SplitText`
- **Tailwind CSS 4**
- **react-responsive** (media‑query based behavior)
- ESLint (flat config) + `typescript-eslint`

---

## 📂 Project Structure

```bash
velvet-elixir/
├─ public/                 # Static assets (images, videos)
├─ constants/              # App constants (nav, cocktails, menu data, etc.)
├─ src/
│  ├─ components/          # Page sections
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Cocktails.tsx
│  │  ├─ About.tsx
│  │  ├─ Art.tsx
│  │  ├─ Menu.tsx
│  │  └─ Contact.tsx
│  ├─ types/               # TypeScript type definitions
│  ├─ App.tsx              # Root layout
│  ├─ main.tsx             # React entry point
│  └─ index.css            # Global styles + Tailwind
├─ tsconfig*.json
├─ vite.config.ts
└─ eslint.config.js
```

---

## 🛠️ Installation & Run

### Requirements

- Node.js **18+**
- `npm` (or `pnpm` / `yarn`)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/aniltanriverdiler/velvet-elixir.git
cd velvet-elixir

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in your browser
# Default Vite address:
http://localhost:5173
```

### Production Build

```bash
# TypeScript + Vite build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📜 NPM Scripts

- **`npm run dev`** – Vite development server
- **`npm run build`** – TypeScript `tsc -b` + Vite production build
- **`npm run preview`** – Preview the production build
- **`npm run lint`** – Static analysis with ESLint

---

## 🔐 Type Safety & Architecture

- In `src/types/index.ts`:
  - `NavLink`, `Beverage`, `SliderItem`, `OpeningHour`, `Social`, `StoreInfo`, and more
- `constants/index.ts` uses these types to strongly type all data sources
- Components:
  - `React.JSX.Element` return types
  - Explicit types in `.map()` and other callbacks
- `tsconfig.app.json`:
  - `strict: true`
  - Path aliases:
    - `@/*` → `src/*`
    - `@constants/*` → `constants/*`

This architecture keeps the project both **easy to maintain** and **safe for production**.

---

## 🤝 Contributing

If you have an idea for improvement or spot a bug:

1. Fork the repository  
2. Create a new branch (`feat/...` or `fix/...`)  
3. Implement and test your changes  
4. Use clear, descriptive commit messages  
5. Open a Pull Request  

---

## 📧 Contact

- GitHub: [`https://github.com/aniltanriverdiler/velvet-elixir.git`](https://github.com/aniltanriverdiler/velvet-elixir.git)  
- Live demo: [`https://velvet-elixir.vercel.app/`](https://velvet-elixir.vercel.app/)

For any feedback or suggestions, feel free to open an issue or pull request on GitHub.
