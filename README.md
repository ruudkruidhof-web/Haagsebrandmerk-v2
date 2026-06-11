# Haagse Brandmerk — Astro

De website van Haagse Brandmerk (haagsebrandmerk.nl), gebouwd met **Astro + Tailwind CSS**.
Dit is de Astro-herbouw van de oorspronkelijke Lovable/React-site — een exacte kopie qua
design en content, maar volledig in eigen beheer en flexibel aan te passen met Claude Code.

## Tech stack

- **Astro** (static output) — snelle, statische site, overal te hosten.
- **Tailwind CSS** — het volledige design-systeem uit de originele site (warm/retro thema,
  exacte kleuren en fonts).
- **Lenis** — smooth scrolling.
- **Astro View Transitions** — zachte paginatransities.
- Geen React, geen Supabase, geen build-time backend.

## Ontwikkelen

```bash
npm install      # dependencies installeren
npm run dev      # dev-server op http://localhost:4321
npm run build    # productiebuild → dist/
npm run preview  # de productiebuild lokaal bekijken
```

## Structuur

```
src/
  data/content.ts            ← alle teksten (NL) + projecten & testimonials
  data/portfolio-v2-cases.ts ← 6 data-gedreven cases
  data/editorial-cases.ts    ← 4 maatwerk-cases (Angela, Reuring, Digitale Hand, Breeze)
  layouts/BaseLayout.astro   ← <head>, SEO, fonts, Navbar, Footer, ContactDialog
  components/                ← herbruikbare componenten (Navbar, Footer, kaarten, decor, …)
  components/case-study/     ← case-templates (CaseV2, CaseEditorial) + gedeelde secties
  pages/                     ← routes: /, /over, /portfolio, /portfolio/[slug], /prijzen,
                                /contact, /privacy, 404
  styles/global.css          ← design-tokens + alle utility-classes
public/images/               ← alle afbeeldingen
```

## Pagina's

- `/` — homepage
- `/over` — over Ruud
- `/portfolio` — overzicht met filter (Alle / Redesigns / Nieuw)
- `/portfolio/<slug>` — 10 case-studies
- `/prijzen` — pakketten, vergelijkingstabel, dashboard (visueel), FAQ
- `/contact`, `/privacy`, 404

## Nog te doen (bewust nu nog niet gebouwd)

- Login / dashboard (komt later).
- Werkende website-scan (nu visueel; backend volgt met de login).
- Blog en losse landingspagina's.
- Contactformulier verstuurt nu via `mailto:`; later eventueel koppelen aan een
  formulier-endpoint of eigen backend.

## Deployen

Statische build (`dist/`) is overal te hosten. Aanbevolen: **Vercel** gekoppeld aan deze
GitHub-repo (auto-deploy bij elke push). Het domein `haagsebrandmerk.nl` blijft bij GoDaddy;
alleen de DNS wijst naar de host. Alternatief: `dist/` via cPanel/FTP naar GoDaddy uploaden.
