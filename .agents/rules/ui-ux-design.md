---
trigger: always_on
---

# Kha Hoàng Minh — Senior Engineering & Design System Index (MANDATORY)

> **Authority**: Every coding agent and developer MUST read and strictly follow the modular rules suite in this directory before creating or modifying any UI code (`client/app/`, `client/components/`, `client/app/globals.css`, `client/tailwind.config.ts`).

---

## 1. Modular Rules Architecture

To ensure precision, clarity, and maintainability, our standards are organized into dedicated, focused rule files. Consult each respective specification:

| Rule File | Primary Scope & Contents |
|---|---|
| **[`anti-ai-slop.md`](./anti-ai-slop.md)** | Elimination of generic AI slop: SaaS clichés (purple glows, floating blobs), blind dark inversion, placeholder interactions, and architectural laziness. |
| **[`ui.md`](./ui.md)** | Visual design system, 4-tier surface system, color tokens, typography scales, specular edge highlights, dark-mode gunmetal rules, and banned classes. |
| **[`ux.md`](./ux.md)** | B2B buyer workflows, RFQ (Request for Quote) flows, form validation feedback, touch targets, loading states, and search/filtering UX. |
| **[`architecture.md`](./architecture.md)** | 5-tier atomic design pattern (`atoms/` → `molecules/` → `organisms/` → `templates/` → thin route controllers), module boundaries, barrel exports, and localization DRY. |
| **[`responsiveness.md`](./responsiveness.md)** | Multi-viewport framing matrix (`360px` to `1920px+`), viewport budget, section framing utilities (`.section-frame-*`, `.container-khm`), and horizontal overflow prevention. |
| **[`performance-assets.md`](./performance-assets.md)** | Optical asset normalization ($R = W/H$), studio-lit platinum stage for partner logos, Next.js image optimization (`sizes`, `priority`), and motion accessibility. |
| **[`quality-checklist.md`](./quality-checklist.md)** | Pre-delivery 8-point verification checklist, automated build gates (`npm run build`), and zero regression protocols. |

---

## 2. Core Pillars of Kha Hoàng Minh Engineering

### Pillar 1: Senior UI/UX vs. "AI Slop"
- **Authentic B2B Industrial Stainless-Steel Identity**: High-contrast, brushed metallic gunmetal paired with molten weld-orange and shop-amber. Real facility imagery, certified SUS grades (SUS 304, 316, 201, 430), and immediate RFQ access.
- **Zero Blind Inversion**: Flat `slate-950` canvas and washed-out `slate-400` text are strictly banned.

### Pillar 2: 4-Tier Dual-Theme Surface Architecture
- **Tier 0 Canvas**: `#FFFFFF` (Light) / `#0B0F17` (Deep Gunmetal Dark) via `.surface-canvas`.
- **Tier 1 Alternating Band**: `#FFF7ED` (Light) / `#111827` (Brushed Charcoal Steel Dark) via `.surface-band-alt`.
- **Tier 2 Cards**: `#FFFFFF` (Light) / `#182234` (Anodized Steel Dark) via `.card-khm` with top specular edge highlight `inset 0 1px 0 rgba(255,255,255,0.08)`.
- **Tier 3 Inputs & Tabs**: Recessed inputs (`#0B0F17` dark) and elevated tabs (`#182234` dark).
- **Tier 4 Industrial CTA**: Molten gradient band via `.surface-cta-industrial` visually separated from the `#070A10` deep obsidian footer.

### Pillar 3: Multi-Viewport Framing System
- Mobile-first from `360px` up to `1920px+`.
- Lock content horizontally within `.container-khm` (`max-w-7xl` centered).
- Frame sections vertically using `.section-hero-compact`, `.section-frame-half`, or `.section-frame-full`.

### Pillar 4: Atomic Design & Thin Route Controllers
- `atoms/` (primitives) → `molecules/` (composites) → `organisms/` (sections) → `templates/` (shells) → `app/[route]/page.tsx` (thin controllers).
- Route files only bind `useLanguage()` and compose organisms. Never write raw card grids in `page.tsx`.

### Pillar 5: Pre-Delivery Gate
- Execute all 8 checks in [`quality-checklist.md`](./quality-checklist.md) and verify that `npm run build` succeeds with exit code `0`.
