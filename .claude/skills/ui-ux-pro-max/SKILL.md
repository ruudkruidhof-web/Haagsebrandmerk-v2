---
name: ui-ux-pro-max
description: Grondige UI/UX-review en doelgerichte verbetering van deze site (Astro + Tailwind). Gebruik bij vragen over design verbeteren, "maak het mooier/strakker/professioneler", typografie, kleur/contrast, witruimte en ritme, visuele hiërarchie, component-consistentie, hover/focus-states, responsive/mobiel en micro-interacties. Werkt op het design-systeem in src/styles/global.css en de retro-huisstijl.
---

# UI/UX Pro Max — review & verbeterwerkwijze

Doel: het design van deze site (Haagse Brandmerk, Astro + Tailwind, warme "neo-retro"
huisstijl) meetbaar sterker maken, zonder de merkidentiteit te breken. Werk in vier fasen:
**audit → prioriteer → implementeer → verifieer**. Lever altijd zichtbaar bewijs (screenshots
vóór/ná) en houd de bestaande design-tokens aan.

## 0. Eerst begrijpen (niet blind herontwerpen)
- Lees `src/styles/global.css` (de `:root` design-tokens + retro-utilities) en
  `tailwind.config.ts`. Verander tokens centraal, nooit ad-hoc hardcoded kleuren per component.
- Kernpalet (HSL-vars): `--retro-cream/butter/terracotta/rust/mustard/olive/plum/ink`.
  Fonts: Bricolage Grotesque (display), Space Grotesk (UI), Lato, Caveat (handgeschreven),
  Fraunces (cijfer-accenten).
- Identificeer het type pagina/sectie en het doel (informatie, conversie, navigatie).

## 1. Audit — loop deze checklist langs
**Typografie**
- Eén heldere schaal (bijv. 12/14/16/18/20/24/30/36/48/64). Geen willekeurige groottes.
- Koppen `text-balance`/`text-pretty` waar passend; regellengte body 60–75 tekens (`max-w-prose`/`max-w-[65ch]`).
- Line-height: koppen strak (0.95–1.1), body ruim (1.6–1.7). Consistente `letter-spacing` op display.
- Hiërarchie klopt: H1 > H2 > H3 visueel onderscheidend; niet meer dan één H1 per pagina.

**Kleur & contrast**
- WCAG AA: tekst ≥ 4.5:1, grote tekst/UI ≥ 3:1. Check vooral tekst op gekleurde banden
  (mustard/terracotta) en `*/0.6`-tinten. Gebruik donkerdere ink-tint of meer opacity.
- Accentkleur met discipline: één accent per sectie/pagina; niet alle retro-kleuren tegelijk.
- Statuskleuren en links duidelijk onderscheidend van gewone tekst.

**Ruimte & ritme**
- Consistente verticale sectie-spacing (bijv. `py-20 md:py-28`). Wissel achtergronden voor ritme,
  maar houd de stap-grootte consistent.
- Uitlijning: alles op een grid; geen "net niet" marges. Gelijke gaps in grids.
- Witruimte als ontwerpmiddel: laat belangrijke elementen ademen.

**Visuele hiërarchie & focus**
- Eén primaire CTA per sectie; secundaire acties visueel lichter.
- Oog wordt geleid: maat, kleur, contrast en positie versterken het belangrijkste, niet alles.
- Verminder ruis: niet elke sectie hetzelfde kaart-patroon (varieer vorm/behandeling).

**Componenten & consistentie**
- Hergebruik componenten i.p.v. kopiëren. Knoppen, kaarten, stickers, badges uniform.
- Radius, randdikte en schaduw-stijl consistent (de retro hard-shadow `Npx Npx 0`).
- Iconen één set, één stroke-width, optisch gelijke grootte.

**Interactie-states (vaak vergeten)**
- Hover, focus-visible, active én disabled voor álle interactieve elementen.
- Zichtbare focus-ring voor toetsenbordgebruikers (nooit `outline:none` zonder vervanging).
- Touch targets ≥ 44×44px.

**Beweging / micro-interacties**
- Subtiel en doelgericht (150–400ms, `cubic-bezier(.2,.8,.2,1)`).
- Animeer transform/opacity (GPU), niet `width/height/top` — behalve de `grid-template-rows`-truc
  voor soepele accordions. Respecteer `prefers-reduced-motion`.

**Responsive & mobiel**
- Mobile-first; check 360/390px, tablet en desktop. Geen horizontale overflow.
- Leesbare basisfont (≥16px body op mobiel), knoppen vol breed waar logisch.

**Toegankelijkheid**
- Semantische HTML (`<nav> <main> <section> <button> <h1-3>`), `alt` op beeld, labels op velden.
- Aria waar nodig (`aria-expanded`, `aria-label`), logische tab-volgorde.

**Performance van de UI**
- Geen onnodige zware shadows/blurs in lange lijsten; `loading="lazy"` op below-fold beeld;
  lettertypes met `display=swap`.

## 2. Prioriteer
Rangschik bevindingen op **impact × moeite**. Pak eerst: leesbaarheid/contrast,
hiërarchie van de hero en CTA's, consistentie van componenten. Daarna verfijning en motion.
Noem expliciet wat je NIET aanraakt en waarom (merkbehoud).

## 3. Implementeer
- Wijzig centraal (tokens, gedeelde componenten) zodat verbeteringen overal doorwerken.
- Houd je aan de retro-huisstijl: warme tinten, hard-shadows, speelse stickers — maar netjes,
  uitgelijnd en met rust. "Speels maar verzorgd."
- Kleine, reviewbare stappen. Geen ongevraagde inhoudswijzigingen.

## 4. Verifieer (verplicht)
- `npm run build` moet slagen.
- Maak screenshots (desktop én ~390px mobiel) en leg vóór/ná naast elkaar. Forceer scroll-reveals
  zichtbaar bij het screenshotten zodat secties niet leeg ogen.
- Loop de checklist nogmaals na op de gewijzigde secties. Benoem wat verbeterd is en wat nog open staat.

## Stijl-uitgangspunten voor déze site
- Behoud: warme neo-retro look, Bricolage display-koppen, hard-shadows, stickers/stamps, sunbursts.
- Verbeter richting: meer rust en uitlijning, sterkere typografische hiërarchie, hoger contrast op
  gekleurde banden, gevarieerde sectie-behandelingen (niet overal dezelfde kaart), soepele micro-interacties.
- Vermijd: em-dashes, inconsistente groottes, rommelige losse chips, lege/zwevende elementen,
  te veel accentkleuren tegelijk.
