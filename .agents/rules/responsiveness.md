---
trigger: always_on
---

# Kha Hoàng Minh — Multi-Viewport & Responsiveness Rules (MANDATORY)

> **Scope**: Mobile-first breakpoint matrix (`360px` to `1920px+`), viewport budget, section framing utilities, grid scaling, horizontal overflow prevention, and responsive touch layout.

---

## 1. Multi-Viewport & Proportional Framing Philosophy

The Kha Hoàng Minh website is engineered mobile-first to ensure flawless usability on smart phones (`360px`), phablets (`640px`), tablets (`768px`), standard laptops (`1024px`), full HD monitors (`1280px–1440px`), and ultra-wide displays (`1920px+`).

- **Zero Arbitrary Padding**: Never apply random vertical padding classes (`py-16`, `py-20`, `py-24`) to page sections.
- **Intentional Viewport Rhythm**: Sections are sized proportionally using standardized framing utilities so that the user's viewport is never cluttered with vast dead space or cramped content.

---

## 2. Standardized Section Framing Utilities (`client/app/globals.css`)

Every page section organism MUST use exactly one of the following framing utilities:

| Framing Token | Vertical Padding Budget | Viewport Intent & Target Usage |
|---|---|---|
| **`.container-khm`** | `px-4 sm:px-6 lg:px-8 max-w-7xl` | Mandatory horizontal container wrapping all section content, centered with `container mx-auto`. |
| **`.section-hero-compact`** | `py-7 sm:py-9 lg:py-11` | Used on inner-page heroes (`PageHero`, `LegalPageHero`, ~18–22dvh) so that the **Hero and the first content section fit together** in the user's first desktop viewport without scrolling. |
| **`.section-frame-half`** | `py-8 sm:py-10 lg:py-12` | Used for standard content sections (`AboutSection`, `ProductsSection`, `FeaturesSection`, `ServicesGridSection`, `CoreValuesSection`). Proportional spacing ensures **2 complementary sections fit in 1 desktop viewport**. |
| **`.section-frame-full`** | `py-9 sm:py-12 lg:py-14` | Used for full-page interactive workspaces requiring higher vertical breathing room (`ProductCatalogSection`, `ContactWorkspaceSection`, `NewsGridSection`). |

---

## 3. Breakpoint Matrix & Column Allocation

| Breakpoint | Viewport Range | Grid & Layout Rules | Interaction & Navigation Rules |
|---|---|---|---|
| **Base (Mobile)** | `360px – 639px` | Single-column flow (`grid-cols-1`). Full-width buttons (`w-full`). | Tap targets `≥ 44×44px`. Collapsible slide-down drawer menu. Top contact bar hidden. |
| **`sm` (Phablet)** | `640px – 767px` | 2-column card grids (`sm:grid-cols-2`). Inline action button groups (`sm:flex-row`). | Bottom CTA button groups align horizontally. |
| **`md` (Tablet)** | `768px – 1023px` | 2-column workspace splits (`md:grid-cols-2`). Extended card grids. | Horizontal tablet footer. Map and form stack side-by-side. |
| **`lg` (Laptop)** | `1024px – 1279px` | 12-column asymmetric splits (`lg:grid-cols-12` using `7/5` or `8/4`). 3-to-4 column product grids. | Full desktop top bar with hotlines. Horizontal navigation pills visible. Sticky legal sidebar active. |
| **`xl` / `2xl` (Desktop)** | `1280px – 1920px+` | Content locked inside `.container-khm` (`max-w-7xl` / `1280px` max). | Line length locked to 70–75 characters max per paragraph for effortless readability. |

---

## 4. Asymmetric 12-Column Grids

For hero sections, feature intros, and interactive workspaces, always use intentional 12-column asymmetric splits rather than generic 50/50 blocks on laptop/desktop viewports:

```tsx
// ✅ 7-to-5 ratio: Emphasizes text proposition while giving images prominent visual weight
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
    <div className="lg:col-span-7 space-y-4">
        {/* Value Proposition & Action Buttons */}
    </div>
    <div className="lg:col-span-5 relative">
        {/* Optical Imagery / Highlights Bento Grid */}
    </div>
</div>
```

```tsx
// ✅ 8-to-4 ratio: Ideal for content-heavy legal policies and catalog layouts
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
    <div className="lg:col-span-8 space-y-8">
        {/* Main Content Sections */}
    </div>
    <div className="lg:col-span-4 space-y-6">
        {/* Sticky Sidebar & Action Cards */}
    </div>
</div>
```

---

## 5. Horizontal Overflow Prevention Rules

Horizontal scroll on mobile devices (`360px–420px`) destroys user trust and search rankings:

1. **No Fixed Widths**: Never use fixed pixel widths on layout containers (e.g., `w-[500px]` is banned; use `w-full max-w-lg` instead).
2. **Text Wrapping**: Add `break-words` or `break-all` to user-generated copy or long email addresses (e.g., `info@khahoangminh.com.vn` in footers).
3. **Marquee & Slider Isolation**: Full-bleed marquees (`LogoMarquee.tsx`) must set `overflow-hidden relative` on the enclosing `<section>` and use pointer-events-none fade masks at left and right edges.
4. **Interactive Tab Bars**: On viewports `< 640px`, `TabsList` must use `flex-wrap justify-start gap-1.5` so category tabs stack cleanly without overflowing the container.
