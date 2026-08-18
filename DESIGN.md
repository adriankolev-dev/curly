# Design — CURly Gabrovo

Locked system. Elegencia DNA adapted for CURly — dark atmospheric luxury with Bulgarian content.

## Logo DNA
- Script wordmark + geometric tagline (“Made to be enjoyed”)
- High-contrast on dark backgrounds (logo-white in header/footer)

## Genre
atmospheric

## Macrostructure family
- Marketing (home): **studied-DNA (Elegencia)** — preloader → dual header → hero slider → food showcase → menu list → opening hours → specialties → cinematic cocktail → reservation → footer

## Theme · studied-DNA (Elegencia)
- `--color-paper`   #040D10
- `--color-paper-2` #091E24
- `--color-ink`     #FFFFFF
- `--color-ink-2`   #C8C8C8
- `--color-rule`    #4F4836
- `--color-accent`  #FFD28D

## Typography
- Display: Baskervville 400 roman
- Body: Prompt 300–600
- Display tracking: normal (Elegencia serif voice)

## Signature
Letter preloader (C U R L Y) with split-curtain exit. Hero slider with staggered title reveal. Menu rows with dotted leaders. Food showcase hover overlay. **Cinematic cocktail section retained** from prior build.

## Motion
- Preloader: letter flip + curtain wipe
- Hero: staggered enter (0.6s, ease-hero)
- Reduced-motion: skip animations, instant reveal

## CTA voice
- Border button with gold fill sweep (`btn-elegencia`)
- Copy: Запази маса / Резервация

## Navigation & footer
- Nav: Elegencia dual-header + fullscreen overlay
- Footer: four-column + garden image strip

## Content
`data/curly.ts` only. No invented dishes, prices, hours, or reviews.

## Photography
Hero, interior, garden, and logo are official Curly photography. Food and drinks use stock stand-ins until official shots replace them.

## Hallmark stamp
`/* Hallmark · studied-DNA: Elegencia · Baskervville + Prompt · dark gold */`

## Exports
Source of truth: `tokens.css`. Tailwind v4 mapped in `src/app/globals.css`.
