---
description: Scaffold a new KHM page or section organism following 5-tier atomic design, dual-theme gunmetal surfaces, and vi/en localization.
---

1. **Localization First**: Add all required `vi` and `en` translation keys to `client/services/LanguageProvider.tsx`. Verify zero missing keys between languages.
2. **Molecule Check**: If reusable cards or form units are needed, create them in `client/components/molecules/{cards|forms|media|navigation}/` and export them in `client/components/molecules/index.tsx`.
3. **Organism Construction**: Create the section inside `client/components/organisms/<domain>/`:
   - Apply `.section-frame-half`, `.section-frame-full`, or `.section-hero-compact`.
   - Alternate surface tier (`.surface-canvas` for odd sections, `.surface-band-alt` for even sections) so two identical tiers never touch.
   - Wrap inner layout in `.container-khm`.
   - Enforce `dark:text-slate-200` on body copy and `.card-khm` on cards.
   - Export the organism in `client/components/organisms/index.tsx`.
4. **Thin Route Controller**: Wire the organism into `client/app/[route]/page.tsx` using root barrel imports (`@/components/organisms`, `@/services`), keeping `page.tsx` under 50 lines.
5. **Verification**: Run `npm run build` in `client/` and confirm exit code `0`.