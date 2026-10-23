---
trigger: always_on
---

# Kha Hoàng Minh — Asset Engineering & Performance Rules (MANDATORY)

> **Scope**: Optical asset normalization, partner logo engineering, Next.js image optimization, hardware acceleration, and motion accessibility.

---

## 1. Optical Asset Normalization Standard

Generic web templates dump partner logos and product photos into uniform bounding boxes, resulting in square emblems appearing massive and wide wordmarks appearing microscopic.

KHM enforces **Optical Area Normalization**: every logo's visual ink area is mathematically calibrated so all logos appear equally prominent (~2,600 to 3,200 px²).

### 1.1 Tight Alpha Bounding Box Requirement
- All brand logo assets in `client/public/img/partners/` must have transparent backgrounds (`alpha = 0` at outer boundaries).
- Logos must be tightly alpha-cropped to their non-transparent pixels (`alpha > 15`) so no hidden whitespace skews the visual bounding box.

### 1.2 Aspect-Ratio Scaling Categories ($R = \text{Width} / \text{Height}$)

Every partner logo is classified into one of four optical categories:

| Category | Aspect Ratio Range | Pod Dimensions (Mobile) | Pod Dimensions (Desktop) | Sample Partner |
|---|---|---|---|---|
| **`square`** | $R \le 1.25$ | `w-[68px] h-[36px]` | `w-[76px] h-[38px]` | PetroVietnam, Nestlé, Sabeco |
| **`standard`** | $1.25 < R \le 2.2$ | `w-[92px] h-[32px]` | `w-[102px] h-[34px]` | Vietsovpetro, REE Corp, Vingroup |
| **`wide`** | $2.2 < R \le 3.5$ | `w-[108px] h-[27px]` | `w-[118px] h-[29px]` | Masan, Vinamilk, Coca-Cola |
| **`ultrawide`** | $R > 3.5$ | `w-[120px] h-[22px]` | `w-[130px] h-[24px]` | POSCO, Hyundai Steel, Coteccons, Heineken |

```tsx
const OPTICAL_SIZE_CLASSES: Record<AspectCategory, string> = {
    square: "w-[68px] h-[36px] sm:w-[76px] sm:h-[38px]",
    standard: "w-[92px] h-[32px] sm:w-[102px] sm:h-[34px]",
    wide: "w-[108px] h-[27px] sm:w-[118px] sm:h-[29px]",
    ultrawide: "w-[120px] h-[22px] sm:w-[130px] sm:h-[24px]",
};
```

---

## 2. Studio-Lit Platinum Optical Stage

- **Banned Filters**: Never apply `filter: grayscale(1)` or `filter: invert(1)`.
- **The Standard**: Mount brand logos on a studio-lit light stage (`bg-slate-50/85 dark:bg-[#F1F5F9]`) paired with a dark metallic caption bar (`dark:bg-[#182234]`) displaying the partner name and industry badge (e.g., `POSCO • THÉP`, `PETROVIETNAM • DẦU KHÍ`).
- **Result**: Guarantees 100% color fidelity and contrast for all brand partners in both Light Mode and Dark Mode.

---

## 3. Next.js Image Optimization Standards

Always use `next/image` with explicit performance attributes:

1. **Above-the-Fold Images**:
   - Must specify `priority` (e.g., hero background in `PremiumHero`, `PageHero`, `LegalPageHero`, and header logo).
   - Never lazy-load the primary LCP (Largest Contentful Paint) image.
2. **Below-the-Fold Images**:
   - Must explicitly specify `loading="lazy"`.
3. **Explicit Responsive `sizes`**:
   - Never omit the `sizes` attribute on fill images:
   ```tsx
   // ✅ 3-column desktop card grid
   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

   // ✅ Full-width background
   sizes="100vw"
   ```
4. **Descriptive Alt Text**:
   - Every product and project photo must include descriptive, localized alt text for SEO and accessibility (e.g., `alt={product.name}`).

---

## 4. Animation Performance & Accessibility

1. **Hardware Acceleration**: Continuous animations (marquees, pulse indicators) must animate only `transform` and `opacity` to avoid triggering browser layout repaints. Use `will-change: transform;`.
2. **Reduced Motion Support**: All continuous animations must pause when the user has enabled reduced motion:
   ```css
   @media (prefers-reduced-motion: reduce) {
       .animate-marquee,
       .animate-marquee-reverse,
       .animate-marquee-ltr {
           animation-play-state: paused !important;
       }
   }
   ```
3. **Hover Pausing**: Marquees must pause automatically on pointer hover (`hover:[animation-play-state:paused]`) so users can inspect partner credentials without chase.