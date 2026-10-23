# UI/UX Design Rules — Kha Hoàng Minh (MANDATORY)

> Every coding agent MUST read this file before creating or editing any UI (pages, components, CSS, Tailwind config, copy layout).
> If a request conflicts with this file, follow this file and tell the user why.

Role: act as an elite product designer, not a template generator. The site belongs to **Kha Hoàng Minh**, a Vietnamese stainless-steel (inox) supplier: coils, sheets, pipes, fittings. The audience is B2B buyers (contractors, factories). The design must feel like a **trusted industrial trade catalog**, not a SaaS landing page.

---

## 0. Workflow Gate (non-negotiable)

1. **Token sheet first.** Before building or restyling any page, output ONE clean style guide + token system (colors, spacing, type scale, corners, shadows, motion) and wait for user approval.
2. Once approved, tokens live in a single source of truth (`client/app/globals.css` CSS variables / Tailwind theme). Components may only reference tokens. No ad-hoc hex, px, or font values in components.
3. Do not build full pages until the token sheet is approved. Small fixes to existing components may follow existing tokens.
4. Before finishing, run the **Anti-AI Checklist** (section 9) and state the result.

---

## 1. Core Vibe

- Anchor: **mid-century industrial trade catalog meets Swiss editorial print** — think a printed metals-supplier spec booklet: ruled lines, numbered sections, spec tables, tight captions, real material photography.
- Voice of the interface: factual, precise, confident. Show specs (grade 201/304/316, thickness, finish 2B/BA/HL/No.4, standard) instead of adjectives.
- FORBIDDEN vibes: "modern, clean, sleek, futuristic, startup, premium SaaS, glassmorphism, neon, cyberpunk".
- Structure comes from **hairline rules (1px), grid alignment, and type scale**, not from cards, shadows and gradients.

## 2. Typography

All fonts MUST support Vietnamese (subsets `latin`, `latin-ext`, `vietnamese`). Verify diacritics render (ặ, ữ, ỳ, ợ, ế) before approving.

| Role | Font | Notes |
|---|---|---|
| Headings (display) | **Fraunces** (variable, opsz axis) | Tight tracking (-0.02em), weights 400–600, large sizes only |
| Body / UI | **Be Vietnam Pro** | 400/500/600; designed for Vietnamese |
| Specs / labels / numbers | **IBM Plex Mono** | Uppercase small labels, table figures, section numbers |

- **BANNED**: Inter, Roboto, Arial, Helvetica, system-ui, `sans-serif` as the primary font, Open Sans, Poppins, Montserrat, Space Grotesk, default Geist.
- Load via `next/font` (self-hosted, `display: swap`, include `vietnamese` subset). Never hotlink Google Fonts CSS.
- Type scale (ratio ≈ 1.25, fluid via `clamp`): 12 / 14 / 16 / 20 / 25 / 31 / 39 / 49 / 61 / 76 px. Body 16–18px, line-height 1.6; headings line-height 1.05–1.15.
- Max 3 sizes visible per section. Max 2 weights per family on a page.
- Body line length 60–72 characters. Never center-align paragraphs longer than 2 lines.
- Headings: sentence case in Vietnamese. No ALL-CAPS headings (mono labels may be uppercase). No gradient text. No emoji in headings.

## 3. Color

Grounded in the real material: brushed stainless steel, warm shop-paper, and a welding-torch accent. No gradients as decoration.

| Token | Hex | Use |
|---|---|---|
| `--bg` (dominant) | `#ECEAE4` | Page background (warm steel-paper, NOT pure white) |
| `--bg-alt` | `#DEDBD3` | Alternate bands, table zebra |
| `--surface-dark` | `#16181B` | Dark bands, footer, hero overlay base |
| `--text` | `#16181B` | Primary text (contrast ≥ 12:1 on `--bg`) |
| `--text-muted` | `#5A5D62` | Secondary text (≥ 4.5:1 on `--bg`) |
| `--rule` | `#B9B6AD` | 1px hairlines, borders |
| `--accent` | `#D9480F` | **Primary CTA only** (weld-orange) |
| `--accent-hover` | `#B93A09` | CTA hover/active |

Rules:
- `--accent` is used **strictly for primary CTAs** (one per viewport) and the keyboard focus ring. Not for icons, headings, badges, links, borders, or decoration.
- Links: `--text` with underline (2px offset). Secondary buttons: outline `--text`, no fill.
- **BANNED**: indigo/purple/violet/blue-to-pink gradients, glowing orbs/blobs, mesh gradients, neon glows, `backdrop-blur` glass panels, colored drop shadows, rainbow borders, pure `#000`/`#fff` backgrounds.
- Success/error states may use muted green `#2F6B3F` / red `#A32121` only inside forms.
- Dark mode is not required; if added, derive from the same tokens, don't invert blindly.

## 4. Layout & Grammar

- **12-column grid**, max content width 1280px, gutters 24px (mobile 16px). Align everything to it.
- Use **asymmetry**: e.g. 5/7 or 4/8 splits, text hanging in the left margin, large numerals/section index (`01 — Sản phẩm`) in mono, images bleeding to a viewport edge.
- Section separation by **1px rules and spacing**, not by colored boxes.
- Spacing scale (8px base): 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Section vertical padding 96–128px desktop, 64px mobile. Use only these values.
- Negative space must be intentional: one idea per viewport-height block, no filler.
- **BANNED page template**: centered hero + floating pill badge → 3 identical icon cards → logo wall → FAQ accordion → footer. Also banned: three-column equal feature cards with icon-in-circle, "Trusted by" logo marquee as a standalone strip, stat counters row (`10K+ users`) without real data, testimonial carousel with stock avatars, gradient CTA banner.
- Preferred patterns: spec table of products (grade / size / finish / standard), numbered process list, product catalog index with large type rows, real-project gallery with captions (location, quantity, grade), contact block with real address/phone/Zalo map.
- Hero: left-aligned headline (max 12 words), one primary CTA + one text link, real photo/video occupying asymmetrical area. No badge above the headline.

## 5. Components

- **Corners**: radius `0` for images, tables, cards; `2px` for buttons and inputs. Nothing above `4px`. No pill buttons, no fully rounded cards.
- **Borders over shadows**: default elevation = 1px `--rule` border. Shadows only for floating layers (dropdown, modal): `0 8px 24px rgba(22,24,27,.12)`. No glow, no multi-layer "soft" shadows on cards.
- **Buttons**: height 48px (mobile tap target ≥ 44px), padding 0 24px, font Be Vietnam Pro 600 16px, no icon-bubble arrows, no gradient. Hover = color shift to `--accent-hover` (120ms), no scale/bounce.
- **Cards**: avoid. Prefer ruled list rows. If a card is justified, it has no shadow, no radius, image + caption + spec line.
- **Tables**: real `<table>`, mono numerals, right-aligned numbers, sticky header, horizontal scroll wrapper on mobile.
- **Forms**: visible labels above fields (never placeholder-only), 1px border, inline error text, `autocomplete` attributes, Vietnamese error messages.
- **Icons**: only functional (menu, phone, arrow, close), one stroke family (1.5px, Lucide OK), never inside colored circles/squares as decoration. No emoji as icons.
- **Navigation**: text links, current page underlined, a single CTA button ("Nhận báo giá"). Mobile: full-height sheet, not a tiny dropdown.

## 6. Visual Assets

- **Use reality**: real photographs of the actual products (coils, sheets, pipes, fittings, warehouse, cutting/polishing operations, delivered projects) — high-contrast, natural light, no heavy filters. Or a real 15–20s muted looping video of the workshop/warehouse.
- **BANNED**: AI-generated or abstract 3D blobs, glossy 3D shapes, isometric tech illustrations, stock handshake/laptop photos, gradient meshes, decorative grid/dot backgrounds, floating mockup cards.
- Existing remote images (`khahoangminh.com.vn/upload/...`) may be used temporarily but are over `http` and unoptimized: mirror into `client/public/images/`, use `next/image` with explicit `width/height` or `fill`+`sizes`, descriptive Vietnamese `alt`. Never leave a gray placeholder box; if no image exists, ask the user for one.
- Image treatment: consistent aspect ratios (3:2 or 4:5), no rounded corners, caption in mono under the image.

## 7. Motion

- Purposeful only: 120–200ms ease-out for hover/focus; one subtle fade/translate-up (≤ 12px, 400ms) on section entry, once.
- **BANNED**: parallax everywhere, floating/bobbing elements, infinite pulsing glows, cursor-follow effects, typewriter headlines, auto-scrolling marquees, scroll-jacking, bounce/spring on buttons.
- Respect `prefers-reduced-motion: reduce` (disable all non-essential motion).

## 8. Content, Accessibility, Performance

- **Copy**: Vietnamese-first, specific and factual (grade, size, standard, delivery area, MOQ). All strings through the existing `useLanguage()` / `t()` i18n service; no hardcoded text in components. Banned filler: "Revolutionize", "Elevate", "Seamless", "Unleash", "Cutting-edge", "Next-gen", "Tailored solutions", "Welcome to".
- Never invent statistics, certifications, clients, or testimonials. Use only data provided by the user; otherwise leave the section out and ask.
- **Accessibility (WCAG 2.2 AA)**: contrast per tokens, visible focus ring (2px `--accent`, 2px offset), semantic landmarks, one `<h1>` per page and ordered headings, labels on all inputs, keyboard-operable nav, alt text, tap targets ≥ 44px, never convey meaning by color alone.
- **Responsive**: design mobile-first at 360px; test 360 / 768 / 1280 / 1920. No horizontal scroll. Asymmetric layouts must collapse to a single column with preserved hierarchy.
- **Performance**: LCP image prioritized, fonts self-hosted, no layout shift (reserve image space), total JS minimal; avoid heavy animation libraries for simple effects.
- **SEO**: unique `<title>` and meta description per page (Vietnamese), `lang="vi"`, OpenGraph tags, `LocalBusiness`/`Product` JSON-LD where data exists.

## 9. Anti-AI Checklist (run before declaring done)

Answer each; any "yes" to a banned item must be fixed.

- [ ] Any banned font (Inter/Roboto/Arial/Helvetica/system) in use?
- [ ] Any gradient, glow, blob, glass blur, or purple/indigo tone?
- [ ] Accent color used anywhere other than primary CTA/focus ring?
- [ ] Centered hero with badge, or 3 equal icon cards, or standalone logo strip?
- [ ] Border radius > 4px, pill shapes, or soft shadow cards?
- [ ] Any value outside the token scales (color, spacing, size)?
- [ ] Any placeholder, abstract, or AI-generated imagery, or invented statistics?
- [ ] Hardcoded text bypassing i18n? Missing alt text? Vietnamese diacritics broken?
- [ ] Does it look like it could be any company's site if the logo were swapped? (If yes, add specific product/spec/photo content.)
- [ ] Reduced-motion and mobile (360px) verified?

## 10. Output Rule

Step 1 → output the token sheet (colors, spacing, type scale, corners, borders/shadows, motion) as a single document or `/design` preview page, and **stop for approval**.
Step 2 → after approval, implement section by section, reusing tokens and updating existing components in `client/components/` instead of creating near-duplicates.
