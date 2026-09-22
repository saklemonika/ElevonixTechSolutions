# Elevonix Solutions — Website

A full-responsive company website built with **Next.js (App Router)** and **Tailwind CSS v4**, modeled on the structure of a typical software-services site (Home / About / Services / Work / Contact), branded for **Elevonix Solutions**.

## Pages

- `/` — Home: hero, services overview, "why us", featured work, testimonials, CTA
- `/about` — Company story, values, stats
- `/services` — Full service list with details
- `/work` — Portfolio / case studies grid
- `/contact` — Contact form (client-side validation) + contact details

## Tech

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4
- Self-hosted fonts (Space Grotesk, Inter, JetBrains Mono) — no external font requests
- Fully responsive: mobile, tablet, desktop

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Notes

- The logo lives at `public/logo.png` — replace it any time; it's referenced from `components/Navbar.js` and `components/Footer.js`.
- Site content (services, portfolio, testimonials, values) lives in `lib/data.js` — edit that file to update copy without touching page markup.
- The contact form (`components/ContactForm.js`) is client-side only right now (validates and shows a success state). To actually receive submissions, wire the `handleSubmit` function to an API route, or a service like Formspree/Resend.
- Brand colors and fonts are defined as CSS variables in `app/globals.css` (`--ink`, `--blue`, `--cyan`, etc.) — change them there to re-theme the whole site.
