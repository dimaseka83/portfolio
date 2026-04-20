# Dhimas Portfolio

Personal portfolio for **Dhimas Eka Prasetya** — Full Stack Developer (Rails + Vue), Malang, Indonesia.

Built with **Vue 3**, **Vite**, **Tailwind CSS v4**, and **Vue Router**.

## Quick start

```bash
npm install
npm run dev       # dev server on http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Routes

Three visual variants, each a separate route — Dhimas can deploy whichever as
the canonical URL and the others remain as alternate code paths.

| Path        | Variant       | Feel                                        |
| ----------- | ------------- | ------------------------------------------- |
| `/`         | Editorial     | Big serif type, grid layout, marquee        |
| `/sticker`  | Sticker Book  | Chunky offset-shadow cards, highlighter     |
| `/terminal` | Terminal      | Dark IDE window, git-log timeline           |

## Features (all variants share these)

- **Bilingual** EN / ID toggle (persisted to `localStorage`)
- **Light / dark theme** toggle (persisted)
- **Floating nav** — hamburger + dropdown menu, with section tracker
- **Section dot rail** on desktop (≥ 1024px) — hover-reveal labels
- **Cursor trail** (canvas-based, desktop-only, color adapts to variant)
- **Typing effect** on hero rotating words, restarts on language change
- **Reveal-on-scroll** via `IntersectionObserver`
- **Konami easter egg** — `↑↑↓↓←→←→BA` triggers a full-screen color flash
- **Fully responsive** — breakpoints at 640/768/900/1024px

## Project structure

```
src/
├── App.vue                          # Shell: nav + dot rail + cursor trail + <router-view>
├── main.js
├── router.js                        # /, /sticker, /terminal + catch-all redirect
├── assets/
│   └── main.css                     # Tailwind + @theme tokens + keyframes
├── data/
│   └── portfolio.js                 # All content (EN/ID), SECTIONS list
├── composables/                     # Shared logic
│   ├── useI18n.js                   # Global lang state + t() translator
│   ├── useTheme.js                  # Global theme state (writes data-theme)
│   ├── useTyping.js                 # Reactive typewriter, restarts on word change
│   ├── useReveal.js                 # IntersectionObserver-based fade-in
│   ├── useSectionTracker.js         # Which section is in view
│   ├── useKonami.js                 # Konami code listener
│   └── useCursorTrail.js            # Canvas cursor trail (desktop only)
├── components/                      # Shared UI
│   ├── FloatingNav.vue              # Hamburger + chips (fixed positioning bug)
│   ├── SectionDotRail.vue           # Left-side dot rail (≥ lg)
│   ├── RevealBlock.vue              # Wrapper that fades children in on scroll
│   └── CursorTrail.vue              # Renderless; mounts the composable
└── views/
    ├── editorial/                   # Each variant is a folder with 9 files
    │   ├── EditorialView.vue        #   View composes 8 sections
    │   ├── HeroSection.vue
    │   ├── AboutSection.vue
    │   ├── SkillsSection.vue
    │   ├── ExperienceSection.vue
    │   ├── ProjectsSection.vue
    │   ├── CredentialsSection.vue
    │   ├── EducationSection.vue
    │   └── ContactSection.vue
    ├── sticker/   (same 9 files)
    └── terminal/  (same 9 files)
```

## Styling approach

- **Design tokens** live in `src/assets/main.css` inside `@theme { ... }`.
  Tailwind v4 picks them up automatically, so `bg-cream`, `text-ink`,
  `font-display`, etc. work as utilities.
- **Dark mode** via `@custom-variant dark (&:where([data-theme="dark"] *, [data-theme="dark"]))` — toggled by writing `data-theme` on `<html>`.
- **Variant mode** by writing `data-variant` on `<html>` (done in the router's
  `afterEach` hook). Terminal variant overrides palette tokens inside
  `html[data-variant="terminal"] { --color-cream: #0A0D12; ... }`.
- Heavy per-variant styling lives in each component's `<style scoped>` block
  (animations, offset shadows, rotations, pseudo-elements) — anywhere
  utility classes would be noisy.

## Bugs fixed from prototype

1. **Floating nav chips were clipped above the viewport on desktop.**
   The prototype positioned chips at `translateY(-60px)` relative to the
   hamburger, which put them at viewport `y = -38` — off-screen, behind the
   browser's bookmarks bar.
   **Fix:** chips now sit to the **left** of the hamburger on `md+` viewports
   (same row, always visible) and move **inside the dropdown menu** on
   `< md` (only visible when the menu is open — can never clip).

2. **Responsive gaps at mobile/tablet.** The prototype only had breakpoints at
   700/800/900px. The rebuild uses a 640 / 768 / 900 / 1024 scale, with
   mobile-first defaults and proper tablet layouts.

## Deployment notes

- Static build — drop `dist/` on Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.
- Uses HTML5 History mode. Configure your host to rewrite unknown paths to
  `index.html` (on Netlify: the `_redirects` pattern `/* /index.html 200`).
- Google Fonts are loaded via `<link>` in `index.html` — no self-hosting set up.

## License

Personal portfolio — content © 2026 Dhimas Eka Prasetya.
