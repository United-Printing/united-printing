# United Printing Company

Commercial printing company website. Nuxt 3 + Tailwind CSS, rewritten from Vue 2 + Vuetify. Lead-generation site — every page funnels visitors toward requesting a quote.

## Aesthetics

This site represents a veteran-owned, award-winning print shop with 30 years of history. The design should feel **crafted, confident, and industrial** — not generic SaaS or startup aesthetic.

### Typography
- **Primary:** Montserrat (Google Fonts) — weights 200-800. Use weight contrast aggressively: 200 for elegance, 700-800 for impact.
- **Display:** Helvetica Now Micro (self-hosted in `/public/fonts/`) — use for typographic moments that need a tighter, more refined feel.
- Never fall back to Inter, Roboto, Arial, or system fonts. If adding new type, choose something with character.

### Color System
Commit to the palette. These aren't suggestions — they're the brand:

| Token | Hex | Role |
|-------|-----|------|
| `accent` | `#FEE137` | Primary CTA, highlights, active states. The conversion color. |
| `teal` | `#19B4B0` | Quote page background, secondary brand. Confidence and action. |
| `teal-dark` | `#17A09D` | Hover/pressed state for teal. |
| `dark` | `#111111` | Footer, overlays, weight. Not pure black — warmer. |
| `muted` | `#ACAEB1` | Secondary text, inactive states. |

Use dominant color with sharp accents. The accent yellow should pop against dark backgrounds — it's the "do something" color. Avoid pastel palettes, purple gradients, or evenly-distributed rainbow schemes.

### Motion & Animation
Animations serve the brand narrative — a company with momentum and precision.

- **Page loads:** Staggered reveals using `animation-delay` create orchestrated entrances. The home hero rotator (7s presets with crossfade) is the flagship example.
- **Scroll reveals:** `.reveal` / `.reveal.visible` classes via `useScrollReveal()` composable. 0.6s ease, translateY(30px) to translateY(0). Use on content sections, not every element.
- **Micro-interactions:** Hover transforms (translateX on menu items), border-color transitions on dots (`glow` animation), slide-in animations on nav elements.
- **CSS-first:** Prefer CSS transitions and `@keyframes` over JS animation libraries. Tailwind's `animation` and `keyframes` extend config is already set up.
- Page transitions: `opacity 0.3s ease` out-in, configured in nuxt.config.

### Imagery & Creative Freedom
Images in `public/img/` are not sacred — feel free to experiment with new imagery, CSS-generated backgrounds, gradients, or generative visuals. The fonts and color system are the brand constants; imagery is flexible. Surprise and delight over safe and predictable.

### Backgrounds & Atmosphere
- **Home:** Full-bleed background images per preset, dark overlay for text readability, decorative dot grids and ring elements for depth.
- **Services:** Gradient blob background on hero, clean white content below.
- **Contact:** Subtle texture blocks (`texture.jpg` at 11% opacity, rounded corners) layered as decorative elements.
- **Quote:** Layered background — teal base with texture overlay through CSS gradient stacking.
- Never default to flat solid-color backgrounds when atmosphere is possible. Layer gradients, textures, or imagery.

### Breakpoints
Custom breakpoints — not Tailwind defaults:
- `sm`: 600px
- `md`: 720px (quote button appears)
- `lg`: 1200px (full desktop layout, location text)
- `xl`: 1920px (maximum sizing tier)

## Lead Generation & Conversion

The site exists to generate quote requests. Every design decision should reduce friction toward `/quote`.

### Quote Funnel
- **StickyQuoteCTA** (`components/StickyQuoteCTA.vue`): Fixed yellow bar at bottom, appears after 200px scroll, hides when footer is visible, hidden on `/quote` itself. This is always one tap away.
- **Header CTA**: "Request a Quote" button in header on `md+` screens. Always visible above the fold.
- **Per-service CTAs**: Every service category on `/services` has its own "Request a Quote" link. Don't make users hunt.
- **Mobile popup**: Home page mobile view has a dedicated quote CTA card.

### Conversion Tracking
- Google Ads account: `AW-10880773539`
- Quote submission conversion: `AW-10880773539/wDx4CP6q25gYEKPbrcQo`
- Google Maps click conversion: `AW-10880773539/u9XbCJPBsZoYEKPbrcQo` (value: $10 USD)
- Use `useGtag()` composable for all tracking calls.
- Never break conversion tags. Test after any changes to `/quote` or contact links.

### Quote Form (`pages/quote.vue`)
- Required fields: Name, Email, Description (validated client-side)
- Optional: Phone, Company Name, Stock, Colors (front/back), Proof Type, Shipping
- Submission via `useQuoteApi()` composable to backend API
- Success state shows confirmation + "Send Another" reset
- The form should feel effortless. Minimize friction, maximize completion.

### Design for Conversion
- Accent yellow (`#FEE137`) is the action color — buttons, CTAs, highlights that say "click me"
- High contrast CTAs against their backgrounds (yellow on dark, dark border on light)
- Phone number `(704) 525-3710` and email `info@unitedprintingnc.com` should be prominent on contact pages — some customers will call instead of filling out forms

## Technical Conventions

### SSR Safety
- Wrap anything using `Math.random()`, `Date.now()`, or browser APIs in `<ClientOnly>` or `onMounted()` to avoid hydration mismatches.
- `HomeDots.vue` generates dots in `onMounted` for this reason.

### Project Structure
- `pages/` — route pages (index, about, services, contact, quote)
- `components/` — shared components (AppHeader, AppFooter, MobileMenu, StickyQuoteCTA, HomeDots, HomeRings)
- `composables/` — reusable logic (useHeaderTheme, useQuoteApi, useGtag, useScrollReveal)
- `data/` — static content (homePresets, aboutFeatures, serviceCategories)
- `layouts/default.vue` — wraps all pages with header, mobile menu, footer, sticky CTA
- `assets/css/main.css` — Tailwind directives, Helvetica Now font faces, scroll reveal classes, page transitions
- `public/img/` — all images (backgrounds, service photos, textures, icons)
- `public/fonts/` — Helvetica Now Micro font files

### Header Theme
`useHeaderTheme()` returns `isDark` — true on `/about` and `/services` (dark header text), false elsewhere (white header text). Update this if adding new routes.

### Dev Server
`npm run dev` — port 3000. Preview config in `.claude/launch.json`.
