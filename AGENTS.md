# Agent Instructions — Kha Hoàng Minh (MANDATORY)

Before writing, refactoring, or modifying **ANY code, translations, routes, configs, styles, or assets** in this repository (`client/`), you MUST read and strictly follow the modular rules in **[.agents/rules/](.agents/rules/)**.

---

## 1. Core Rule Modules (< 12,000 characters each)

Always read **[Master Index](.agents/rules/ui-ux-design.md)** and **[Pre-Delivery Quality Checklist](.agents/rules/quality-checklist.md)** plus the relevant domain module(s) before making edits:

1. **[Master Index](.agents/rules/ui-ux-design.md)**: Executive overview, 5 core engineering pillars, and rule map.
2. **[Anti-"AI Slop" & Senior Craftsmanship](.agents/rules/anti-ai-slop.md)**: Strict bans on SaaS clichés (purple glows, floating blobs), blind dark-mode inversion, dead placeholders, fake pricing, and monolithic controller files.
3. **[UI System & Surface Architecture](.agents/rules/ui.md)**: 4-tier dual-theme surface tokens, brushed gunmetal palette, typography contrast matrix, and banned Tailwind classes.
4. **[UX & B2B Buyer Workflows](.agents/rules/ux.md)**: Quotation/RFQ workflows, direct hotlines/Zalo, form validation, error states, and touch accessibility.
5. **[Code Architecture & Atomic Design](.agents/rules/architecture.md)**: 5-layer atomic pattern (`atoms` → `molecules` → `organisms` → `templates` → thin controllers), barrel imports, and localization DRY.
6. **[Responsiveness & Viewport Budget](.agents/rules/responsiveness.md)**: Mobile-first breakpoint matrix (`360px` to `1920px+`), framing utilities (`.section-frame-half`, `.section-frame-full`, `.section-hero-compact`), and asymmetric layouts.
7. **[Assets & Optical Performance](.agents/rules/performance-assets.md)**: Optical logo normalization, studio-lit platinum stage, Next.js image optimization, and motion reduction.
8. **[Pre-Delivery Quality Checklist](.agents/rules/quality-checklist.md)**: Mandatory 9-point verification checklist and zero-regression gate before finishing any task.

---

## 2. Non-Negotiable Quick Reference (Always Active)

Even on minor edits, you MUST never violate these baseline project laws:

### A. Architecture & Imports
- **5-Tier Unidirectional Flow**: `atoms/` ──► `molecules/` ──► `organisms/` ──► `templates/` ──► `app/[route]/page.tsx`. Never import rightward.
- **Thin Route Controllers**: `app/[route]/page.tsx` must be `< 50` lines, containing zero raw card grids or inline section markup.
- **Root Barrel Imports Only**: Always import from `@/components/atoms`, `@/components/molecules`, `@/components/organisms`, `@/services`, `@/lib`, or `@/config`. Deep relative imports (`../../../`) are strictly forbidden.
- **100% Localization Parity**: Zero hardcoded Vietnamese or English strings in JSX. Every user-facing string must live in `client/services/LanguageProvider.tsx` under both `vi` and `en` keys and be accessed via `t('namespace.key')`.

### B. Visual Surface & Dark Mode Rules
- **BANNED Classes**: Never use `dark:bg-slate-950`, `dark:text-slate-400`, `dark:text-slate-500`, `indigo-*`, `purple-*`, `violet-*`, floating blurred blobs, or `filter: invert(1)` / `grayscale(1)` on partner logos.
- **REQUIRED Surface Tokens**:
  - Odd sections / Canvas: `.surface-canvas` (`#FFFFFF` light / `#0B0F17` dark)
  - Even sections: `.surface-band-alt` (`#FFF7ED` light / `#111827` dark) — never place identical surface tiers back-to-back.
  - Interactive cards: `.card-khm` (`#FFFFFF` light / `#182234` dark with top specular highlight)
  - Bottom CTA sections: `.surface-cta-industrial` (distinct from `#070A10` footer)
  - Body copy contrast: `text-slate-700 dark:text-slate-200` (or `dark:text-slate-100`)
- **REQUIRED Section Framing**: Every section organism must wrap content in `.container-khm` and use exactly one vertical rhythm utility: `.section-hero-compact`, `.section-frame-half`, or `.section-frame-full`.

### C. Kha Hoàng Minh Corporate & Metallurgical Truth (Zero Hallucination)
- **Legal Entity**: CÔNG TY TNHH MỘT THÀNH VIÊN KHA HOÀNG MINH (`KHA HOANG MINH CO., LTD`) — Tax ID (MST): `0314059766` (Cấp ngày 12/10/2016 bởi Sở KH&ĐT TP.HCM).
- **Legal Representative / Director**: Bà Ngô Thị Phụng Uyên (`Giám đốc`).
- **Locations**:
  - Registered Office (`Trụ sở chính / Văn phòng`): `Số 93/16 Đường Nguyễn Thị Tú, KP. 3, Phường Bình Hưng Hòa B, Quận Bình Tân, TP. Hồ Chí Minh`.
  - Factory & Warehouse (`Nhà máy / Kho xưởng`): `Ấp Chiêu Liêu, Đường ĐT 743, Phường Tân Đông Hiệp, Thành phố Dĩ An, Tỉnh Bình Dương`.
- **Direct Sales Contacts**: `0979.866.162` (Ms. Phụng Uyên) | `0976.888.999` (Ms. Minh Hải) | Email: `info@khahoangminh.com.vn`.
- **Zero Static Pricing**: Never invent or hardcode VND/USD prices per kg/sheet. Always use `"Liên hệ báo giá"` / `"Contact for Quote"` routed to `/contact`.
- **Authentic Specs Only**: Certified grades (`SUS 304`, `SUS 316`, `SUS 201`, `SUS 430`), finishes (`2B`, `BA`, `No.1`, `HL`, `8K`), standards (`ASTM A240`, `JIS G4303`, `DIN`), and CNC capabilities (Laser fiber, CNC Plasma, chấn gấp thủy lực, xả băng, chặt tấm).

### D. Mandatory Build & Quality Gate
- Never mark a task complete without running `npm run build` inside `client/` and confirming exit code `0` with zero TypeScript, ESLint, or hydration errors.

### Available Skills & Workflows
- **Skills (`.agents/skills/`)**: Load `optical-asset-compute` when sizing partner logos, `inox-domain-spec` when writing stainless-steel/CNC technical copy, and `i18n-barrel-validator` when modifying translations or component exports.
- **Workflows (`.agents/workflows/`)**: Follow `scaffold-section.md` when creating new pages/sections, `add-inox-product.md` when updating the catalog, and always execute `audit-khm.md` before completing a task.