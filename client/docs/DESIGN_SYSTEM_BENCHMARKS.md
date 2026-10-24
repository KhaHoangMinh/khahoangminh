# Kha Hoàng Minh — Design System Benchmarks & Visual Craftsmanship

> **Scope**: Comparative design research, architectural patterns borrowed from global metallurgical leaders (Outokumpu, Aperam, Thyssenkrupp, POSCO), and award-winning B2B industrial design standards from Behance & Dribbble.

---

## 1. Industry Heavyweight Benchmark Analysis

### 1.1 Outokumpu (Finland) — Global Sustainable Stainless Steel Pioneer
- **Benchmark Patterns Borrowed**:
  - **Technical Specification Matrix**: Tabular chemical analysis (Cr, Ni, Mo, C, N) and Pitting Resistance Equivalent Number (PREN) scores that allow engineers to verify corrosion resistance before RFQ.
  - **Mill Test Report (MTR) Transparency**: Dedicated trust section demonstrating certified traceability from melting shop to delivered coil.
  - **Engineering Downloads**: Providing CAD dimensional references and technical data sheets directly on product listings.

### 1.2 Aperam (France / Luxembourg / Brazil) — Stainless & Specialty Alloys
- **Benchmark Patterns Borrowed**:
  - **Brushed Gunmetal Dark Mode**: Deep metallic dark surfaces (`#0B0F17`, `#111827`) evoking the weight and coolness of heavy stainless slabs.
  - **Macro Texture Photography**: Extreme close-up imagery of brushed hairline, 2B pickled, and mirror 8K finishes rather than generic flat renders.
  - **Industry-Specific Pathways**: Segmenting solutions by end-use sector: Food & Beverage, Petrochemical & Chemical, Architecture, and Industrial Machinery.

### 1.3 Thyssenkrupp Materials Services (Germany) — Premier Distribution & Processing
- **Benchmark Patterns Borrowed**:
  - **Calculators as Conversion Anchors**: Interactive theoretical weight and dimension calculators that instantly convert casual engineering lookups into formal RFQ requests.
  - **Processing Capability Envelopes**: Machine specification tables explicitly detailing max cutting thickness, bed size, and dimensional tolerance (±0.1mm).
  - **Multi-Channel Contact Integration**: Sticky hotlines, immediate quotation carts, and local branch address clarity.

### 1.4 POSCO Stainless (South Korea) — Direct Supply Partner
- **Benchmark Patterns Borrowed**:
  - **Grade Equivalency Standards**: Clear cross-referencing between SUS (JIS), AISI (ASTM), and EN/DIN standards.
  - **Surface Finish Optical Visualizer**: High-fidelity photographic comparison of cold-rolled 2B/BA vs hot-rolled No.1 surfaces.
  - **Coil Slitting & Shearing Transparency**: Detailing packaging tolerances, paper interleaving, and PVC protective film options.

---

## 2. Behance & Dribbble Industrial Design Patterns

Modern award-winning B2B industrial websites on Behance and Dribbble reject generic SaaS clichés (purple glows, floating pastel blobs) in favor of **precision, materiality, and structural authority**:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. 4-Tier Dual-Theme Gunmetal Surfaces                      │
│    - Tier 0: Deep Gunmetal Canvas (#0B0F17)                 │
│    - Tier 1: Brushed Charcoal Steel (#111827)               │
│    - Tier 2: Anodized Steel Cards (#182234)                 │
│    - Tier 3: Molten Weld Orange Gradient (CTA & Badges)     │
├─────────────────────────────────────────────────────────────┤
│ 2. Top Specular Edge Highlights                             │
│    - dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]  │
│    - Simulates machined chamfered steel edges under light   │
├─────────────────────────────────────────────────────────────┤
│ 3. Asymmetric 12-Column Technical Layouts                   │
│    - 7/5 Split: Proposition + Optical Specification Bento   │
│    - 8/4 Split: Content Stream + Sticky Navigation Sidebar  │
├─────────────────────────────────────────────────────────────┤
│ 4. Studio-Lit Platinum Optical Stage for Logos              │
│    - Neutral high-luminance stage (bg-slate-50/85 dark:#F1) │
│    - Preserves true brand ink without inversion or muddying │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Visual Surface & Component Tokens

### 3.1 Color Palette & Contrast Budget

| Token Name | Light Value | Dark Value | Psychological / Physical Reference |
|---|---|---|---|
| **Canvas** | `#FFFFFF` | `#0B0F17` | Daylight cleanroom / Deep gunmetal slab |
| **Band Alt** | `#FFF7ED` (Warm amber tint) | `#111827` | Brushed charcoal steel / Shop-floor contrast |
| **Card Surface** | `#FFFFFF` | `#182234` | Anodized machine housing |
| **Weld Orange** | `#EA580C` | `#FB923C` | Oxy-fuel / Laser cutting focal point |
| **Shop Amber** | `#F59E0B` | `#FCD34D` | Molten metal glow / Warning indicator |
| **Body Text** | `text-slate-700` | `dark:text-slate-200` | Minimum 13.5:1 contrast ratio (WCAG AAA) |
| **Headings** | `text-slate-900` | `dark:text-slate-50` | Maximum optical clarity for Vietnamese diacritics |

### 3.2 Machine Specular Highlight Utility
All interactive cards (`.card-khm`) incorporate a delicate top specular reflection in dark mode:
```css
.card-khm {
    /* Top specular highlight simulating chamfered metallic edge */
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
}
```

---

## 4. Typography Scale & Hierarchy

We deploy a tri-font pairing engineered for technical legibility and high optical density:
1. **Display Font (`--font-display`)**: `Space Grotesk` (Geometric, technical, industrial authority for hero headers and numbers).
2. **Body Font (`--font-sans`)**: `Plus Jakarta Sans` (Neutral, highly legible humanist sans-serif with complete Vietnamese diacritic glyph support).
3. **Data / Spec Font (`--font-mono`)**: `JetBrains Mono` (Monospaced alignment for tolerances, dimensions, chemical formulas, and weight calculations).

---

## 5. Micro-Interactions & Motion Accessibility

1. **Continuous Marquees**: Partner logos glide smoothly using hardware-accelerated transforms (`transform: translateX(...)`).
2. **Hover Invariants**: Continuous animations must pause on pointer hover (`hover:[animation-play-state:paused]`) so enterprise buyers can examine certifications without chasing icons.
3. **Reduced Motion**: All continuous movements respect `@media (prefers-reduced-motion: reduce)` by halting animations and rendering a static, accessible grid.
