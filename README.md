# Al Shukr Dairy Farm — Homepage

Premium customer-facing homepage for **Al Shukr Dairy Farm** — *Purity Promised*.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger + `@gsap/react`
- Framer Motion
- Lenis smooth scroll

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/           # layout, page, globals
  components/    # homepage sections
  lib/           # content.ts, images.ts
public/images/   # brand + farm photography (replaceable)
```

## Content & contact

Edit copy in `src/lib/content.ts`.

Update WhatsApp / email / location placeholders in the `brand` object before launch.

## Imagery

Temporary high-quality farm photography lives in `public/images/`.  
Map is centralized in `src/lib/images.ts` — swap files or paths there.

Official logo: `public/images/brand/logo.jpg`

## Design

See `PRODUCT.md`, `DESIGN.md`, and `tokens.css`.
