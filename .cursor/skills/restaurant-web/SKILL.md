---
name: restaurant-web
description: Build dynamic, cinematic restaurant websites with editorial warmth — menus, reservations, chef stories. Use when building restaurant, cafe, bistro, or hospitality sites. Combines Hallmark editorial genre, Refero research, and project DESIGN.md.
---

# Restaurant Web

Orchestrates design skills for a dynamic restaurant site that feels cinematic and human, not AI-generated.

## When to use

- Building or redesigning a restaurant, cafe, bistro, or bar website
- Menu pages with filters, categories, dietary tags
- Reservation flows, hours, location, chef/about pages
- Any hospitality UI in this project

## Workflow

1. **Read `DESIGN.md`** at project root — tokens and mood are locked there.
2. **Research** via **refero-design** — find 2–3 hospitality references (menus, reservations, editorial food sites). Lock direction before coding.
3. **Build** via **hallmark** editorial genre — asymmetric layouts, warm paper palette, terracotta accent, no template rhythm.
4. **Gate** — run Hallmark slop-test before handoff (57 gates in `hallmark/references/slop-test.md`).

## Restaurant-specific patterns

### Hero

- Full-bleed or asymmetric split with food/atmosphere photography
- One line of specific copy ("Wood-fired plates, late reservations, candlelight") — not generic taglines
- Single primary CTA: reserve or view menu

### Menu (dynamic)

- Category filters with smooth transitions (transform/opacity)
- Editorial list layout preferred over card grid
- Show price, dietary icons, seasonal badge, optional "chef's pick"
- Stagger reveal on scroll; static list for reduced-motion

### Reservations

- Date, time, party size — minimal fields
- Clear confirmation and error states
- Sticky CTA on mobile (`hallmark` component C4 sticky bottom bar)

### About / Chef

- Asymmetric 5:3 or 3:5 image + prose
- Pull quote with marginalia (Hallmark T1) for chef voice
- No three-column team grid with identical headshots

## Motion for dining

- Scroll-scrubbed hero parallax (subtle, not dizzying)
- Menu category crossfade, not bounce animations
- One orchestrated page entrance; quiet elsewhere
- 60fps target; lazy-load below-fold images

## Banned for hospitality

- "Revolutionize", "Elevate your", "Curated experience" without specifics
- Stock photo grids of smiling people with plates
- OpenTable-style blue/indigo if not the actual brand
- Menu as three identical cards with fork/knife emoji

## Related skills

- `.cursor/skills/hallmark/` — anti-slop, editorial genre, structure variety
- `.cursor/skills/refero-design/` — research-first methodology, craft references
