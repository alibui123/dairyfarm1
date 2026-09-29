# Design System — Al Shukr Dairy Farm

<!-- impeccable:design-schema 1 -->

## World

Premium Pakistani dairy as a modern luxury food brand. Dark cinematic opening (logo black) into warm ivory editorial storytelling. Gold is accent only. Olive appears in nature/conversion moments.

**FORM seed:** `3937907c` (persuade). Brief-pinned direction (logo black/gold → ivory editorial) overrides the catalog challenger roll.

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| ivory | `#F7F4EC` | Page paper |
| ivory-deep | `#EFE9DC` | Soft section alternate |
| milk | `#FFFCF7` | Light surfaces / light CTAs |
| ink | `#1A1814` | Primary text |
| ink-soft | `#3D3830` | Body secondary |
| muted | `#6B6458` | Labels / meta |
| gold | `#C4A35A` | Accent (buttons, rules, marks) |
| gold-soft | `#D4BC7A` | Hover / soft gold |
| gold-deep | `#9A7B3C` | Focus / deep accent |
| olive | `#4A5A3A` | Nature / Fresh Milk CTA field |
| charcoal | `#161412` | Dark sections / footer |
| black | `#0A0908` | Deep overlays |

## Typography

- **Display:** Bodoni Moda — editorial headlines, brand moments
- **Body:** Figtree — navigation, UI, supporting copy
- Display type is always roman (no italic headers)

## Motion

- **GSAP + ScrollTrigger:** hero load sequence, image clip reveals, process horizontal pin, parallax, milk-flow path draw
- **Framer Motion:** magnetic buttons, mobile nav, subtle animal-image cursor parallax
- **Lenis:** smooth scrolling (disabled under `prefers-reduced-motion`)
- Prefer `transform` / `opacity` / `clip-path` only

## Signature

**Milk Flow** — fixed right-rail cream/gold path: Farm → Care → Milk → Quality → Home, drawn on scroll.

## Components

- Sharp, low-radius CTAs (magnetic on desktop)
- Hairline gold rules as section punctuation
- Minimal principle columns (not icon cards)
- Organic clip-path image reveals

## Imagery

Local files under `public/images/` mapped in `src/lib/images.ts`. Replace with authentic Al Shukr farm photography before launch.

## Do not

- SaaS / ERP / dashboard UI
- Excessive cards, glass, neon, purple gradients
- Gold as dominant background
- Invented metrics or testimonials
