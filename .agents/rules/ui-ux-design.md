---
trigger: always_on
---

# Kha Hoàng Minh — Senior UI/UX Engineering & Design System Rules (MANDATORY)

> **Authority**: Every coding agent and developer MUST read and strictly follow this document before creating or modifying any UI code (`client/app/`, `client/components/`, `client/app/globals.css`, `client/tailwind.config.ts`).

---

## 1. Core Philosophy: Senior UI/UX Developer vs. "AI Slop"

The website represents **Kha Hoàng Minh (KHM)**, a premier Vietnamese B2B industrial stainless-steel (*Inox*) supplier and CNC processing center (coils, sheets, pipes, fittings in grades SUS 304, 316, 201, 430). Our audience consists of B2B buyers, construction contractors, M&E engineers, and manufacturing plants.

Every screen must reflect the precision of a **Senior UI/UX Developer & Design Systems Engineer**, never a generic AI-generated template.

| Dimension | Generic "AI Slop" (BANNED) | Senior UI/UX Engineering (REQUIRED) |
|---|---|---|
| **Dark Mode** | Blindly inverting everything to flat `slate-950` (`#020617`) so cards, sections, and footers bleed together; unreadable `slate-400` gray body text. | **4-Tier Luminance Hierarchy**: Deeper canvas (`#0B0F17`), brushed steel bands (`#111827`), anodized cards (`#182234`) with top-edge specular highlights, and crisp `slate-50`/`slate-200` text. |
| **Visual Assets & Logos** | Dumping uncropped PNGs of wildly different aspect ratios into a single fixed box; leaving opaque colored rectangles or invisible dark-ink logos on dark backgrounds. | **Optical Normalization**: Alpha-trimming transparent padding (`sharp`), scaling by aspect-ratio category (`square`, `standard`, `wide`, `ultrawide`), and framing logos on a studio-lit platinum stage (`#F1F5F9`). |
| **Code & Styling** | Copy-pasting 15-class Tailwind strings across 20 files; inventing random spacing/colors per component. | **Strict DRY Token System**: Reusing semantic utilities (`.surface-canvas`, `.surface-band-alt`, `.card-khm`, `.section-frame-*`, `.heading-*`, `.text-*`) defined once in `client/app/globals.css`. |
| **Domain Voice** | SaaS startup clichés (purple/neon glows, floating 3D blobs, fake user counters, generic stock avatars). | **Industrial Authority**: Brushed steel & molten weld-orange palette, real product/facility imagery, clear technical specs (SUS grades, CNC capabilities, CO/CQ), and instant B2B quotation access. |

---

## 2. Multi-Viewport & Proportional Framing System

Every page must be engineered mobile-first from `360px` up to `1920px+` ultra-wide monitors with zero horizontal scroll and intentional vertical rhythm.

### 2.1 Breakpoint Matrix

| Breakpoint | Viewport Range | Layout, Grid & Interaction Rules |
|---|---|---|
| **Base (Mobile)** | `360px – 639px` | Single-column flow (`grid-cols-1`), `px-4` container gutters, stacked full-width CTAs (`w-full sm:w-auto`), minimum `44×44px` touch targets, collapsible drawer menu. |
| **`sm` (Phablet)** | `640px – 767px` | 2-column card grids (`sm:grid-cols-2`), inline CTA button groups (`sm:flex-row`), `px-6` container gutters. |
| **`md` (Tablet)** | `768px – 1023px` | 2-column workspace splits (`md:grid-cols-2`), horizontal footer bar, scaled-up headings. |
| **`lg` (Laptop)** | `1024px – 1279px` | 12-column asymmetric splits (`lg:grid-cols-12` using `7/5` or `6/6` ratios), 3-to-4 column card grids (`lg:grid-cols-3` / `lg:grid-cols-4`), full desktop top bar + navigation (`px-8`). |
| **`xl` / `2xl` (Desktop)** | `1280px – 1920px+` | Content locked inside `.container-khm` (`max-w-7xl` / `1280px` centered) so body copy never exceeds 70–75 characters per line. |

### 2.2 Viewport Budget & Section Framing Utilities (`client/app/globals.css`)

Never use arbitrary vertical padding (`py-16`, `py-20`, `py-24`) on page sections. Always use the standardized viewport framing classes so sections fit proportionally within the user's screen:

1. **`.container-khm`** (`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl`): Mandatory horizontal container for all section content.
2. **`.section-hero-compact`** (`py-7 sm:py-9 lg:py-11`): Used for inner-page heroes (`PageHero`, `LegalPageHero`, ~18–22dvh) so the Hero + first content section appear together in the first viewport frame.
3. **`.section-frame-half`** (`py-8 sm:py-10 lg:py-12`): Used for standard content sections (`AboutSection`, `ProductsSection`, `FeaturesSection`, `ServicesGridSection`, `CoreValuesSection`) so **2 complementary sections fit in 1 desktop viewport** without dead space.
4. **`.section-frame-full`** (`py-9 sm:py-12 lg:py-14`): Used for full-page interactive workspaces (`ProductCatalogSection`, `Contact` 3-column workspace, `NewsGridSection`).

---

## 3. Color Palette & 4-Tier Dual-Theme Surface Architecture

Kha Hoàng Minh uses a dual-theme industrial palette:
- **Light Mode ("Warm Industrial Daylight")**: Crisp white canvas, warm shop-amber alternating bands, and high-visibility weld-orange accents.
- **Dark Mode ("Brushed Gunmetal & Weld-Orange")**: Layered metallic gunmetal surfaces where **higher elevation = lighter surface luminance + top specular edge highlight**.

### 3.1 Surface Hierarchy Tokens (`client/app/globals.css`)

| Tier | Token / Utility Class | Light Mode | Dark Mode (Brushed Gunmetal) | Mandatory Usage Rule |
|---|---|---|---|---|
| **Tier 0** | `.surface-canvas` | `#FFFFFF` (`bg-white`) + `border-slate-200/70` | `#0B0F17` (Deep Gunmetal) + `border-slate-800/90` | Primary page canvas & odd-numbered sections. |
| **Tier 1** | `.surface-band-alt` | `#FFF7ED` (`bg-orange-50/40`) + `border-orange-100/80` | `#111827` (Brushed Charcoal Steel) + `border-slate-800/90` | Even-numbered alternating sections. **Never place two Tier 0 or two Tier 1 sections back-to-back without a border or band shift.** |
| **Tier 2** | `.card-khm` | `#FFFFFF` + `border-slate-200/85` + `shadow-sm` | `#182234` (Anodized Steel) + `border-slate-700/80` + top specular edge `inset 0 1px 0 rgba(255,255,255,0.08)` | All interactive cards (`ProductCard`, `ServiceFeatureCard`, `ValueCard`, `ProjectCard`, `NewsCard`, `ContactFormSection`). |
| **Tier 3** | Nested Sub-Surfaces & Inputs | `bg-slate-50` / `bg-slate-100` | Inputs: `#0B0F17` (`border-slate-700`)<br>Callouts/Tabs: `#182234` or `#111827` | Form inputs inside `.card-khm` must be recessed (`#0B0F17`); callouts/tabs inside sections must be lifted. |
| **Tier 4** | `.surface-cta-industrial` & Footer | CTA: `from-orange-600 via-orange-500 to-amber-500`<br>Footer: `#070A10` | CTA: `from-[#26130A] via-[#161F30] to-[#0F172A]` + `border-t-orange-500/45` + radial copper glow<br>Footer: `#070A10` (Deep Obsidian) | CTA bands (`CtaSection`, `SimpleCtaSection`, `ContactBannerSection`) must use `.surface-cta-industrial` so they stand apart from the `#070A10` footer. |

### 3.2 Typography & Contrast Rules (WCAG 2.2 AA / AAA)

Vietnamese diacritics (`ặ`, `ữ`, `ỳ`, `ợ`, `ế`) require high luminance contrast and clean line-height (`1.5–1.65`) to remain effortless to read.

| Utility Class | Scale & Weight | Light Mode Color | Dark Mode Color | Contrast & Usage |
|---|---|---|---|---|
| `.heading-display` | `text-3xl` → `lg:text-6xl font-extrabold leading-[1.15]` | `text-slate-900` (`#0F172A`) | `dark:text-slate-50` (`#F8FAFC`) | Home page main hero `<h1>` only. |
| `.heading-hero` | `text-3xl` → `md:text-5xl font-bold leading-[1.2]` | `text-slate-900` (`#0F172A`) | `dark:text-slate-50` (`#F8FAFC`) | Inner page `PageHero` & `LegalPageHero` `<h1>`. |
| `.heading-section` | `text-2xl` → `md:text-4xl font-bold leading-tight` | `text-slate-900` (`#0F172A`) | `dark:text-slate-50` (`#F8FAFC`) | Primary section `<h2>` headings (18.2:1 contrast). |
| `.heading-card` | `text-lg sm:text-xl font-bold leading-snug` | `text-slate-900` (`#0F172A`) | `dark:text-slate-50` (`#F8FAFC`) | Card titles `<h3>`. |
| `.text-lead` | `text-base sm:text-lg leading-relaxed` | `text-slate-600` (`#475569`) | `dark:text-slate-200` (`#E2E8F0`) | Section subtitles (13.5:1 contrast). |
| `.text-body` | `text-sm sm:text-base leading-relaxed` | `text-slate-700` (`#334155`) | `dark:text-slate-200` (`#E2E8F0`) | All body paragraphs, card descriptions, and list items. |
| `.badge-khm` | `text-xs font-semibold uppercase tracking-wider` | `bg-orange-500/15 text-orange-700 border-orange-500/35` | `dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-400/45` | Section eyebrows and industrial spec tags. |

> [!CAUTION]
> **STRICT DARK MODE BAN**: Never use `dark:text-slate-400` or `dark:text-slate-500` for body copy, card descriptions, or list items. Always use `dark:text-slate-200` (`#E2E8F0`) or `dark:text-slate-100` (`#F1F5F9`) so dark mode is as crisp and readable as light mode.

---

## 4. UI Pattern & Atomic Design Architecture

All UI code inside `client/` must follow a strict 5-layer **Atomic Design Architecture** with unidirectional dependencies:

```
atoms/ ──► molecules/ ──► organisms/ ──► templates/ ──► app/[route]/page.tsx
```

### 4.1 Layer Responsibilities

1. **`client/components/atoms/` (Primitives)**:
   - Low-level building blocks (`Button`, `Card`, `Input`, `Textarea`, `Tabs`, `Badge`, `Dialog`, `Sheet`).
   - **Rule**: Zero business logic, zero hardcoded translations, zero page-specific layout margins.
2. **`client/components/molecules/` (Stateless Composites)**:
   - Grouped by domain role: `cards/`, `forms/`, `media/`, `navigation/` (e.g., `ProductCard`, `CatalogProductCard`, `ServiceFeatureCard`, `FeatureCard`, `ScopeCard`, `SearchBar`, `ActionButtonGroup`).
   - **Rule**: Combine 2–4 atoms into a single reusable unit. Accept clean TypeScript props. Use `.card-khm` for card elevation.
3. **`client/components/organisms/` (Domain Sections)**:
   - Grouped by feature/page: `home/`, `about/`, `products/`, `services/`, `projects/`, `careers/`, `contact/`, `news/`, `legal/`, `shared/` (e.g., `Header`, `Footer`, `PageHero`, `SimpleCtaSection`, `PremiumHero`, `LogoMarquee`, `ProductCatalogSection`).
   - **Rule**: Every section organism must use one framing class (`.section-frame-half`, `.section-frame-full`, or `.section-hero-compact`), one surface class (`.surface-canvas`, `.surface-band-alt`, or `.surface-cta-industrial`), and wrap content in `.container-khm`.
4. **`client/components/templates/` (Page Shells)**:
   - Structural wrappers (`MainLayout`, `BlogLayout`) managing persistent header/footer/sidebar placement.
5. **`client/app/[route]/page.tsx` (Thin Route Controllers)**:
   - **Rule**: Route files may only fetch/map translation data via `useLanguage()` / `t()` and compose Organisms. **Never write raw card grids or complex section markup directly inside `page.tsx`.**

### 4.2 Optical Asset & Partner Logo Engineering Standard

Whenever displaying brand/partner logos (such as in `LogoMarquee.tsx`) or technical product photography:
1. **Tight Alpha Bounding Box**: Every logo file in `client/public/img/partners/` must have a transparent background (`alpha = 0` at corners) and be tightly cropped to its non-transparent pixels (`alpha > 15` via `sharp`) so no file contains hidden whitespace padding.
2. **Optical Aspect-Ratio Normalization ($R = \text{Width} / \text{Height}$)**: Never render square emblems and ultra-wide wordmarks inside the same inner box. Map each logo to its optical category so visual ink area remains constant (~2,600–3,200 px²):
   - `square` ($R \le 1.25$): `w-[68px] h-[36px] sm:w-[76px] sm:h-[38px]`
   - `standard` ($1.25 < R \le 2.2$): `w-[92px] h-[32px] sm:w-[102px] sm:h-[34px]`
   - `wide` ($2.2 < R \le 3.5$): `w-[108px] h-[27px] sm:w-[118px] sm:h-[29px]`
   - `ultrawide` ($R > 3.5$): `w-[120px] h-[22px] sm:w-[130px] sm:h-[24px]`
3. **Studio-Lit Platinum Optical Stage**: Because industrial corporate logos use dark navy, black, red, and green ink, always mount logos on a studio-lit light/platinum stage (`bg-slate-50/85 dark:bg-[#F1F5F9]`) paired with a dark gunmetal metadata caption bar (`dark:bg-[#182234]`) rather than applying `grayscale` on a dark background.

---

## 5. Strict DRY (Don't Repeat Yourself) Principles

1. **CSS Utility DRY (`client/app/globals.css`)**:
   - Never copy-paste long strings of surface, border, shadow, or typography utilities across multiple components.
   - Always use `.container-khm`, `.section-frame-full`, `.section-frame-half`, `.section-hero-compact`, `.surface-canvas`, `.surface-band-alt`, `.card-khm`, `.surface-cta-industrial`, `.heading-display`, `.heading-hero`, `.heading-section`, `.heading-card`, `.text-lead`, `.text-body`, and `.badge-khm`.
   - If a new styling combination is needed in 3 or more places, define a semantic utility class in `@layer components` inside `client/app/globals.css`.
2. **Component DRY & Barrel Imports**:
   - Before creating any new component, search `client/components/molecules/` and `client/components/organisms/shared/`. Reuse or extend existing components (`PageHero`, `SimpleCtaSection`, `ActionButtonGroup`, `ScopeCard`, `ValueCard`) via props instead of creating near-duplicate files.
   - Always import through barrel files (`@/components/atoms`, `@/components/molecules`, `@/components/organisms`, `@/services`, `@/config`, `@/lib`, `@/hooks`), never deep relative paths (`../../../components/...`).
3. **Data & Localization DRY (`useLanguage()` / `t()`)**:
   - Zero hardcoded Vietnamese or English copy in UI components. All user-facing strings, product categories, and navigation items must come from `client/services/` (`useLanguage`) and `client/config/`.

---

## 6. Mandatory Pre-Delivery Senior UI/UX Verification Checklist

Before declaring any UI task complete, run through this checklist and verify every item:

- [ ] **1. Surface Hierarchy**: Do adjacent sections alternate cleanly between `.surface-canvas` (`#0B0F17` dark) and `.surface-band-alt` (`#111827` dark), and do all cards use `.card-khm` (`#182234` dark with top specular highlight)?
- [ ] **2. Dark Mode Readability**: Is all body and description text in dark mode using `dark:text-slate-200` / `dark:text-slate-50` (with zero unreadable `dark:text-slate-400`/`500` paragraphs)?
- [ ] **3. CTA Separation**: Do bottom CTA sections use `.surface-cta-industrial` so they stand apart visually from the `#070A10` footer in both Light and Dark Mode?
- [ ] **4. Multi-Viewport Framing**: Are sections using `.section-frame-half`, `.section-frame-full`, or `.section-hero-compact` inside `.container-khm`, and do layouts scale cleanly at `360px`, `768px`, `1024px`, `1280px`, and `1920px`?
- [ ] **5. Optical Asset Balance**: Are all images using `next/image` with explicit `sizes` and `alt` attributes, and are partner logos alpha-cropped and optically normalized by aspect ratio?
- [ ] **6. Atomic & DRY Compliance**: Are route `page.tsx` files thin controllers, are barrel imports used, and are zero hardcoded strings bypassing `useLanguage()` / `t()`?
- [ ] **7. Accessibility & Motion**: Do interactive controls have `≥ 44px` mobile tap targets, visible focus rings, and `prefers-reduced-motion: reduce` support for animations?
- [ ] **8. Production Build**: Does `npm run build` in `client/` pass with zero TypeScript, ESLint, or Tailwind CSS errors?
