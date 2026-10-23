# Agent Instructions — Kha Hoàng Minh

Before writing or modifying ANY UI code (pages, components, CSS, Tailwind/theme config, or assets), you MUST read and strictly follow:

**[.agents/rules/ui-ux-design.md](.agents/rules/ui-ux-design.md)**

### Mandatory Core Pillars
1. **Senior UI/UX Engineering (No "AI Slop")**: Intentional hierarchy, optical asset normalization, authentic B2B industrial stainless-steel identity, and zero blind dark-mode inversion.
2. **Multi-Viewport & Proportional Framing**: Mobile-first (`360px` → `1920px+`) using `.container-khm`, `.section-hero-compact`, `.section-frame-half`, and `.section-frame-full`.
3. **4-Tier Dual-Theme Surface & Contrast System**: Warm Industrial Daylight (Light) and Brushed Gunmetal & Weld-Orange (Dark: `#0B0F17` canvas → `#111827` band → `#182234` `.card-khm` → `.surface-cta-industrial` → `#070A10` footer) with high-contrast `dark:text-slate-50` / `dark:text-slate-200` typography.
4. **Atomic UI Pattern Architecture**: Strict `atoms/` → `molecules/` → `organisms/` → `templates/` → thin `app/[route]/page.tsx` controllers.
5. **Strict DRY Principle**: Reuse `@layer components` tokens in `client/app/globals.css`, barrel exports (`@/components/*`), and `useLanguage()` / `t()` localization.
6. **Pre-Delivery Gate**: Run the 8-point Senior UI/UX Verification Checklist and `npm run build` before finishing.
