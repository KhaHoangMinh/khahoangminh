---
name: i18n-barrel-validator
description: Verify compile-time translation key parity between Vietnamese (vi) and English (en) dictionaries and ensure correct root barrel component exports.
---

# KHM i18n & Barrel Export Validator Skill

Execute this validation workflow when modifying components or translations:

### 1. Translation Parity Check (`client/services/LanguageProvider.tsx`)
- Ensure both `vi` and `en` dictionaries share an identical structural type schema[cite: 2, 4].
- Verify that every newly introduced UI label, error notice, button text, or section title has an exact matching key in both languages[cite: 2, 4].

### 2. Root Barrel Export Check (`client/components/`)
- When creating an atom, verify export in `client/components/atoms/index.tsx`[cite: 2].
- When creating a molecule, verify export in `client/components/molecules/index.tsx`[cite: 2].
- When creating an organism, verify export in `client/components/organisms/index.tsx`[cite: 2].
- Disallow deep relative import paths (`../../../../components/...`) across all code files; strictly enforce root barrel paths (`@/components/atoms`, `@/components/molecules`, `@/components/organisms`, `@/services`, `@/lib`, `@/config`)[cite: 2].