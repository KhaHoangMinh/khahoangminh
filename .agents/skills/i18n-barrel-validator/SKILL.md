---
name: i18n-barrel-validator
description: Validate vi/en translation parity, root barrel exports, and GitHub Pages basePath/trailingSlash compatibility.
---

# KHM i18n, Barrel & Static Export Validator Skill

1. **Translation Parity (`client/services/LanguageProvider.tsx`)**:
   - Confirm 100% key parity between `vi` and `en` dictionaries.
2. **Root Barrel Imports (`client/components/`)**:
   - Enforce exports in `atoms/index.tsx`, `molecules/index.tsx`, and `organisms/index.tsx`.
   - Ban relative path traversal (`../../`).
3. **GitHub Pages Static Export Check**:
   - Verify all internal links use `createPageUrl()` or Next.js `<Link>` so `/khahoangminh/` basePath and trailing slashes (`/about/`, `/products/`, `/contact/`) resolve without 404s.
   - Verify zero `http://khahoangminh.com.vn` mixed-content image URLs remain in JSX or translation data.