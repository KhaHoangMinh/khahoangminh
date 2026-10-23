---
trigger: always_on
---

# Kha Hoàng Minh — Pre-Delivery Quality Gate & Verification Checklist (MANDATORY)

> **Scope**: Pre-delivery verification checklist, production build gates, zero regression protocol, and code hygiene standards.

---

## 1. Mandatory 8-Point Senior Verification Gate

Before marking ANY UI or code task complete, you MUST execute and pass every item in this 8-point checklist:

- [ ] **1. Surface Hierarchy Validation**:
  - Do odd-numbered sections use `.surface-canvas` (`#FFFFFF` light / `#0B0F17` dark)?
  - Do even-numbered sections use `.surface-band-alt` (`#FFF7ED` light / `#111827` dark)?
  - Are two identical surface tiers never placed back-to-back without a visual separator?
  - Do all interactive cards use `.card-khm` with the dark top specular highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`)?

- [ ] **2. Dark Mode Readability & Contrast**:
  - Is body copy and description text strictly using `dark:text-slate-200` (`#E2E8F0`) or `dark:text-slate-100` (`#F1F5F9`)?
  - Are there zero occurrences of low-contrast `dark:text-slate-400` or `dark:text-slate-500` in paragraphs, descriptions, or list items?
  - Are there zero occurrences of flat `dark:bg-slate-950` across pages, layouts, and modals?

- [ ] **3. CTA Separation & Footer Differentiation**:
  - Do bottom CTA sections (`CtaSection`, `SimpleCtaSection`, `ContactBannerSection`) use `.surface-cta-industrial`?
  - Does the CTA band contrast distinctly against the `#070A10` deep obsidian footer in both Light Mode and Dark Mode?

- [ ] **4. Multi-Viewport Framing & Zero Overflow**:
  - Does every section organism wrap its contents inside `.container-khm`?
  - Does every section use one standard framing utility: `.section-hero-compact`, `.section-frame-half`, or `.section-frame-full`?
  - Has horizontal overflow been verified at `360px`, `640px`, `768px`, `1024px`, and `1440px` (zero horizontal scroll bar)?

- [ ] **5. Optical Asset Normalization & Images**:
  - Are all images using Next.js `Image` with explicit `sizes` and `alt` attributes?
  - Is `priority` set on above-the-fold hero images and header logos?
  - Are partner logos categorized into optical categories (`square`, `standard`, `wide`, `ultrawide`) on a studio-lit platinum stage?

- [ ] **6. Atomic Design & Thin Controllers**:
  - Are route `page.tsx` files strictly thin controllers that only bind `useLanguage()` and render organisms?
  - Are there zero raw card grids or complex section layouts directly inside `page.tsx`?
  - Are all imports utilizing root barrel paths (`@/components/atoms`, `@/components/molecules`, `@/components/organisms`, `@/services`, `@/lib`, `@/config`)?

- [ ] **7. Localization & Zero Hardcoded Strings**:
  - Are all user-facing strings (labels, button text, error notices, status feedback) resolved via `t()`?
  - Are both Vietnamese (`vi`) and English (`en`) keys present in `client/services/LanguageProvider.tsx`?

- [ ] **8. Clean Production Build Gate**:
  - Does `npm run build` inside `client/` pass with exit code `0`?
  - Do all static pages prerender cleanly without hydration mismatch warnings?

- [ ] **9. Type Safety, SEO & Zero Console Leakage**:
  - Are there zero usages of `any`, `@ts-ignore`, or `@ts-expect-error` across modified files?
  - Are all debug `console.log()` statements removed before completion?
  - Do `vi` and `en` dictionaries in `LanguageProvider.tsx` have 100% key parity?
  - Are all external URLs strictly `https://` with valid SEO metadata on every public route?

---

## 2. Zero Regression Protocol for Interactive Features

When touching layout or navigation code, always verify these high-risk areas:

1. **Navigation Active State**: Ensure the Home navigation link (`href="/"`) highlights correctly when on `/`, and each respective route highlights on its path.
2. **Page URL Generation**: Verify that `createPageUrl('home')`, `createPageUrl('')`, and `createPageUrl('/')` all return `/` rather than `/home`.
3. **Form Error Recovery**: Submit the contact form with empty fields, verify that inline error messages appear in red, and verify that typing in any field immediately dismisses that field's error.
4. **Theme Persistence**: Switch between Light Mode and Dark Mode, refresh the page, and confirm that the theme does not flash or reset to default.