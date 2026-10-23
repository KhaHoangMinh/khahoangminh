---
trigger: always_on
---

# Kha Hoàng Minh — UI Design System & Visual Style Rules (MANDATORY)

> **Scope**: Visual aesthetics, color tokens, 4-tier dual-theme surface hierarchy, typography scale, specular highlights, and dark mode contrast standards.

---

## 1. Domain Visual Identity: Industrial Stainless Steel Authority

The Kha Hoàng Minh (KHM) design language communicates the precision, durability, and heavy-duty authority of a premier stainless-steel (*Inox*) importer and CNC processing center.

- **Target Audience**: B2B procurement managers, mechanical engineers, construction contractors, factory operators.
- **Core Aesthetic**: Clean industrial daylight contrasted against brushed metallic gunmetal, accented by molten weld-orange and molten amber.
- **Zero "AI Slop" Policy**: Strictly forbidden to use generic SaaS startup clichés: purple or neon glows, floating amorphous blobs, pastel rainbow gradients, or ungrounded card elevations.

---

## 2. 4-Tier Dual-Theme Surface Hierarchy

KHM uses an intentional dual-theme surface luminance model. Elevation in dark mode is communicated via **higher surface luminance + top specular edge highlights**, never via drop shadows alone.

| Tier | Semantic Token | Light Mode ("Warm Daylight") | Dark Mode ("Brushed Gunmetal") | Mandatory Usage Rules |
|---|---|---|---|---|
| **Tier 0** | `.surface-canvas` | `#FFFFFF` (`bg-white`) + `border-slate-200/70` | `#0B0F17` (Deep Gunmetal) + `border-slate-800/90` | Base page background and odd-numbered standard content sections. |
| **Tier 1** | `.surface-band-alt` | `#FFF7ED` (`bg-orange-50/40`) + `border-orange-100/80` | `#111827` (Brushed Charcoal Steel) + `border-slate-800/90` | Alternating even-numbered sections. **Never place two Tier 0 or two Tier 1 sections back-to-back without a visual separator.** |
| **Tier 2** | `.card-khm` | `#FFFFFF` + `border-slate-200/85` + `shadow-sm` | `#182234` (Anodized Steel) + `border-slate-700/80` + specular highlight `inset 0 1px 0 rgba(255,255,255,0.08)` | All interactive cards (`ProductCard`, `ServiceFeatureCard`, `ValueCard`, `ProjectCard`, `NewsCard`, `ContactFormSection`). |
| **Tier 3** | Nested Controls & Inputs | `bg-slate-50` / `bg-slate-100` | Inputs: `#0B0F17` (`border-slate-700`)<br>Badges/Tabs: `#182234` or `#111827` | Form inputs inside `.card-khm` must be recessed (`#0B0F17`); tab containers inside sections must be elevated (`#182234`). |
| **Tier 4** | `.surface-cta-industrial` & Footer | CTA: `from-orange-600 via-orange-500 to-amber-500`<br>Footer: `#070A10` | CTA: `from-[#26130A] via-[#161F30] to-[#0F172A]` + `border-t-orange-500/45`<br>Footer: `#070A10` (Deep Obsidian) | Bottom CTA sections must always use `.surface-cta-industrial` so they distinctly separate from the `#070A10` dark footer. |

---

## 3. Strict Dark Mode Rules & Banned Classes

Blind dark-mode inversion causes unreadable gray text and muddy surfaces where cards bleed into section backgrounds.

### 3.1 Banned Dark Mode Patterns

```tsx
// ❌ BANNED: Flat slate-950 canvas causes cards and background to bleed together
<div className="bg-slate-50 dark:bg-slate-950">

// ❌ BANNED: Low-contrast slate-400/500 text causes eye strain on diacritics
<p className="text-slate-500 dark:text-slate-400">

// ❌ BANNED: Overriding card background without dark scoping
<Card className="card-khm bg-orange-50/25">
```

### 3.2 Required Dark Mode Patterns

```tsx
// ✅ REQUIRED: Tier 0 Gunmetal canvas
<div className="bg-white dark:bg-[#0B0F17]">

// ✅ REQUIRED: High-contrast body copy (13.5:1+ contrast)
<p className="text-slate-700 dark:text-slate-200">

// ✅ REQUIRED: Dark-scoped background override preserving anodized steel
<Card className="card-khm bg-orange-50/25 dark:bg-[#182234]">
```

---

## 4. Typography Scale & Contrast System (WCAG 2.2 AA / AAA)

Vietnamese diacritical marks (`ặ`, `ữ`, `ỳ`, `ợ`, `ế`) demand high luminance contrast and ample line-height (`1.5–1.65`) to maintain optical legibility across high-DPI displays.

| Utility Class | Font Size & Weight | Line Height | Light Color | Dark Color | Primary Purpose |
|---|---|---|---|---|---|
| `.heading-display` | `text-3xl sm:text-5xl lg:text-6xl font-extrabold` | `1.15` | `text-slate-900` | `dark:text-slate-50` | Primary home page hero `<h1>` only. |
| `.heading-hero` | `text-3xl sm:text-4xl md:text-5xl font-bold` | `1.2` | `text-slate-900` | `dark:text-slate-50` | Inner page `PageHero` and `LegalPageHero` `<h1>`. |
| `.heading-section` | `text-2xl sm:text-3xl md:text-4xl font-bold` | `tight` | `text-slate-900` | `dark:text-slate-50` | Section title `<h2>` (minimum 18:1 contrast). |
| `.heading-card` | `text-lg sm:text-xl font-bold` | `snug` | `text-slate-900` | `dark:text-slate-50` | Card headers `<h3>`. |
| `.text-lead` | `text-base sm:text-lg` | `relaxed` | `text-slate-600` | `dark:text-slate-200` | Section subtitle / intro lead paragraph. |
| `.text-body` | `text-sm sm:text-base` | `relaxed` | `text-slate-700` | `dark:text-slate-200` | Standard body copy, descriptions, list items. |
| `.badge-khm` | `text-xs font-semibold uppercase` | `normal` | `text-orange-700 bg-orange-500/15 border-orange-500/35` | `dark:text-orange-300 dark:bg-orange-500/20 dark:border-orange-400/45` | Industrial specification tags and section eyebrows. |

---

## 5. Industrial Accent Colors & Gradients

- **Weld Orange (Primary)**:
  - Base: `#EA580C` (`orange-600`) / Dark accent: `#FB923C` (`orange-400`)
  - Usage: Primary CTAs, active navigation indicators, key highlights.
- **Molten Amber (Secondary)**:
  - Base: `#F59E0B` (`amber-500`) / Dark accent: `#FCD34D` (`amber-300`)
  - Usage: Secondary tags, dual-tone gradient accents, status badges.
- **Brand Hero Gradient**:
  - Light: `bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500`
  - Dark: `bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400`
- **Surface Specular Highlight**:
  - `dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]` simulates the top beveled edge of a machined stainless-steel slab under factory lighting.

---

## 6. Form Inputs & Control Surfaces

1. **Recessed Inputs**: Form controls (`input`, `textarea`, `select`) inside `.card-khm` must be visually recessed:
   - Light: `bg-slate-50 border-slate-200/80 focus:bg-white`
   - Dark: `dark:bg-[#0B0F17] dark:border-slate-700 focus:dark:bg-[#111827]`
2. **Elevated Navigation Controls**:
   - Toggles (`ThemeToggle`, `LanguageToggle`): `dark:bg-[#182234]/90 dark:border-slate-700/80 hover:dark:bg-orange-500/15`
   - Tab Containers: `bg-slate-100 dark:bg-[#182234] border border-slate-200/80 dark:border-slate-700/80`
   - Active Tab: `data-[state=active]:bg-orange-600 data-[state=active]:text-white`
