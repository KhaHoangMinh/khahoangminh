---
trigger: always_on
---

# Kha Hoàng Minh — Frontend Architecture & Code Organization Rules (MANDATORY)

> **Scope**: 5-Tier Atomic Design Architecture, component boundaries, thin route controllers, barrel imports, localization architecture, and state separation.

---

## 1. 5-Tier Atomic UI Pattern Architecture

All UI components inside `client/` must adhere to a strict 5-layer hierarchy with strictly **unidirectional dependencies**:

```
atoms/ ──► molecules/ ──► organisms/ ──► templates/ ──► app/[route]/page.tsx
```

Components may only import from layers to their left. It is strictly forbidden for an atom to import a molecule, or for a molecule to import an organism.

```
client/components/
├── atoms/        # Primitives (Button, Card, Input, Tabs, Badge, Dialog)
├── molecules/    # Stateless Domain Composites (cards/, forms/, media/, navigation/)
├── organisms/    # Page Section Organisms (home/, about/, products/, services/, etc.)
└── templates/    # Structural Page Shells (MainLayout, BlogLayout)
```

---

## 2. Layer Responsibilities & Boundaries

### 2.1 Layer 1: Atoms (`client/components/atoms/`)
- **Role**: Base UI primitives and headless wrappers (`Button`, `Card`, `Input`, `Textarea`, `Tabs`, `Badge`, `Dialog`, `Sheet`).
- **Strict Rule**:
  - Zero business logic.
  - Zero hardcoded translations or domain strings.
  - Zero page-specific layout margins (e.g., never put `my-10` on an atom).

### 2.2 Layer 2: Molecules (`client/components/molecules/`)
- **Role**: Stateless composites combining 2–4 atoms into a reusable domain unit.
- **Directory Structure**:
  - `cards/`: `ProductCard`, `CatalogProductCard`, `ServiceFeatureCard`, `ValueCard`, `ScopeCard`, `ProjectCard`, `NewsCard`, `LegalSectionCard`, `PrincipleCard`, `ContactDarkCard`.
  - `forms/`: `SearchBar`, `EmptyState`, `CultureListItem`, `FormGroup`, `ButtonGroup`.
  - `media/`: `GalleryImage`, `CultureImageGrid`.
  - `navigation/`: `ActionButtonGroup`, `LegalSidebarItem`, `SocialContactButtonGroup`.
- **Strict Rule**: Accept clean TypeScript props. Never perform direct network fetch calls inside molecules.

### 2.3 Layer 3: Organisms (`client/components/organisms/`)
- **Role**: Cohesive, self-contained page sections composed of molecules and atoms.
- **Directory Structure by Domain**:
  - `home/`: `PremiumHero`, `LogoMarquee`, `AboutSection`, `ProductsSection`, `FeaturesSection`, `CtaSection`.
  - `about/`: `CompanyInfoSection`, `CoreValuesSection`, `BusinessScopeSection`.
  - `products/`: `ProductCatalogSection`, `ContactBannerSection`.
  - `services/`: `ServicesGridSection`, `FeaturedServiceSection`, `ProcessSection`.
  - `projects/`: `ProjectsListSection`, `CapabilitiesSection`, `ImageGallerySection`.
  - `careers/`: `BenefitsSection`, `CultureSection`, `OpeningsSection`.
  - `contact/`: `ContactWorkspaceSection`, `ContactFormSection`, `ContactInfoSection`, `LocationMap`.
  - `news/`: `NewsGridSection`.
  - `videos/`: `VideoPlaceholderSection`.
  - `legal/`: `LegalPageHero`, `LegalSidebarNav`, `PrivacyContent`, `TermsContent`, `ProtectionContent`.
  - `shared/`: `Header`, `Footer`, `PageHero`, `SimpleCtaSection`, `SpecialEventModal`.
- **Strict Rule**: Every section organism must:
  1. Use one standardized framing class (`.section-frame-half`, `.section-frame-full`, or `.section-hero-compact`).
  2. Use one surface utility (`.surface-canvas`, `.surface-band-alt`, or `.surface-cta-industrial`).
  3. Wrap its inner layout within `.container-khm`.

### 2.4 Layer 4: Templates (`client/components/templates/`)
- **Role**: Structural page shells managing persistent headers, footers, and modal injectors (`MainLayout`, `BlogLayout`).

### 2.5 Layer 5: Thin Route Controllers (`client/app/[route]/page.tsx`)
- **Role**: Next.js route entry points.
- **Strict Rule**: Route controllers must remain **thin controllers**. They only:
  1. Initialize `useLanguage()` and resolve translations with `t()`.
  2. Compose 3–5 Organisms in order.
  3. **Zero raw card grids, zero complex section markup, and zero direct inline styles allowed directly in `page.tsx`.**

```tsx
// ✅ REQUIRED: Clean, thin page controller
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
                backgroundImage="http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg"
            />
            <ContactWorkspaceSection />
        </div>
    );
}
```

---

## 3. Strict Module Import & Barrel Export Rules

1. **Mandatory Barrel Imports**: Always import components and services through root module barrels:
   ```tsx
   // ✅ REQUIRED
   import { Button, Card } from '@/components/atoms';
   import { ProductCard, SearchBar } from '@/components/molecules';
   import { PageHero, SimpleCtaSection } from '@/components/organisms';
   import { useLanguage } from '@/services';
   import { createPageUrl } from '@/lib';

   // ❌ FORBIDDEN: Deep relative paths
   import { Button } from '../../../components/atoms/button';
   import { ProductCard } from '../../molecules/cards/ProductCard';
   ```
2. **Barrel File Maintenance**: Whenever creating a new molecule or organism, immediately add its named export to `client/components/molecules/index.tsx` or `client/components/organisms/index.tsx`.

---

## 4. Localization & Data DRY Architecture

- **Zero Hardcoded Copy**: All user-facing strings (labels, placeholders, buttons, titles, descriptions, error messages) must be defined in `client/services/LanguageProvider.tsx` under both `vi` and `en` keys.
- **Access Pattern**: Components access copy exclusively via `const { t } = useLanguage();` and `t('namespace.key')`.
- **Navigation Source of Truth**: All page keys, paths, and navigation metadata are centralized in `client/config/navigation.config.ts`.
