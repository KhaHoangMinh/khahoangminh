# Kha Hoàng Minh — Frontend Engineering Architecture

> **Source of Truth**: Technical overview of the Next.js 15 App Router codebase, 5-Tier Atomic Design hierarchy, unidirectional dependency boundaries, barrel export standards, and localization DRY architecture.

---

## 1. Technology Stack

- **Framework**: Next.js 15+ (App Router architecture with React Server Components by default).
- **Language**: TypeScript with end-to-end static type safety (`strict: true`).
- **Styling**: Tailwind CSS v3.4+ configured with custom industrial metallic tokens and Radix UI headless primitives.
- **Typography**: Next.js Google Fonts (`Space Grotesk`, `Plus Jakarta Sans`, `JetBrains Mono`) with Vietnamese diacritic subsets.
- **Internationalization**: Context-driven `LanguageProvider` with 100% key parity between Vietnamese (`vi`) and English (`en`).

---

## 2. 5-Tier Atomic Design Architecture

All components adhere to a strict unidirectional dependency graph:

```
atoms/ ──► molecules/ ──► organisms/ ──► templates/ ──► app/[route]/page.tsx
```

Components may only import from layers strictly to their left.

```
client/
├── app/                  # Next.js App Router (Thin Route Controllers)
│   ├── layout.tsx        # Root layout (Metadata, Google Fonts, JSON-LD Schema)
│   ├── providers.tsx     # Client Context Providers (Theme + Language)
│   ├── globals.css       # Global industrial design system & surface classes
│   ├── page.tsx          # Home route controller (< 50 lines)
│   └── (routes)/         # Feature routes (about/, products/, services/, etc.)
├── components/           # 5-Tier Atomic UI Architecture
│   ├── atoms/            # UI Primitives (Button, Card, Input, Tabs, Badge, Dialog)
│   ├── molecules/        # Reusable domain composites (cards/, forms/, media/, nav/)
│   ├── organisms/        # Cohesive page sections (home/, about/, products/, etc.)
│   └── templates/        # Page shells (ClientLayoutWrapper)
├── config/               # App configs (navigation.config.ts)
├── lib/                  # Utilities (Tailwind merge, path helpers, URL builders)
├── services/             # Context Providers (LanguageProvider, ThemeProvider)
└── types/                # TypeScript interface definitions
```

---

## 3. Thin Route Controllers Rule

Route controllers (`app/[route]/page.tsx`) must strictly remain **thin orchestrators** under 50 lines:
1. Mark with `"use client";` when client-side language binding is required.
2. Resolve localized strings via `const { t } = useLanguage();`.
3. Compose 3 to 5 section organisms in chronological visual order.
4. **Zero inline grids, zero SVG definitions, and zero raw markup allowed in `page.tsx`.**

```tsx
// REQUIRED: Clean, thin page controller
"use client";

import React from 'react';
import { useLanguage } from '@/services';
import { PageHero, ContactWorkspaceSection } from '@/components/organisms';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="min-h-dvh bg-white dark:bg-[#0B0F17]">
            <PageHero 
                title={t('contactPage.heroTitle')}
                highlight={t('contactPage.heroSubtitle')}
                description={t('contactPage.heroDesc')}
                backgroundImage="/img/assets/home/khm-01.jpg"
            />
            <ContactWorkspaceSection />
        </div>
    );
}
```

---

## 4. Root Barrel Imports Requirement

Deep relative imports (e.g., `../../../../components/atoms/button`) are strictly forbidden. All modules must be imported through clean root alias barrels:

```tsx
// REQUIRED
import { Button, Card } from '@/components/atoms';
import { ProductCard, SearchBar } from '@/components/molecules';
import { PageHero, SimpleCtaSection } from '@/components/organisms';
import { useLanguage } from '@/services';
import { createPageUrl } from '@/lib';
```

Whenever adding a new molecule or organism, immediately add its named export to:
- `client/components/molecules/index.tsx`
- `client/components/organisms/index.tsx`

---

## 5. Dual-Theme 4-Tier Surface Tokens

Every organism MUST apply exactly one surface hierarchy class:
- **`.surface-canvas`**: `#FFFFFF` (light) / `#0B0F17` (dark) for base page and odd-numbered sections.
- **`.surface-band-alt`**: `#FFF7ED` (light) / `#111827` (dark) for alternating even-numbered sections.
- **`.card-khm`**: `#FFFFFF` (light) / `#182234` (dark) with top specular edge highlight `inset 0 1px 0 rgba(255,255,255,0.08)`.
- **`.surface-cta-industrial`**: Molten gradient band distinct from the deep obsidian footer (`#070A10`).

---

## 6. Compile-Time Localization Parity

- All user-facing copy resides in `client/services/LanguageProvider.tsx`.
- The `vi` (Vietnamese) and `en` (English) dictionary objects must maintain strict 100% key parity.
- Dynamic route URLs are resolved via `createPageUrl()` from `@/lib`.