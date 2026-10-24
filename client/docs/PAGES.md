# Kha Hoàng Minh — Comprehensive Pages & Section Architecture

> **Source of Truth**: This document details every page, route, layout, and constituent section organism for the official Kha Hoàng Minh B2B web portal. All component compositions adhere to the 5-Tier Atomic Design standard (`atoms` → `molecules` → `organisms` → `templates` → `app/[route]/page.tsx`).

---

## 1. Master Page & Route Registry

| # | Route Path | Page Name | Primary Objective & B2B Persona | Tier & Status |
|---|---|---|---|---|
| 1 | `/` | **Home (Flagship)** | Corporate authority, inventory highlights, processing capabilities, and instant RFQ. | Active |
| 2 | `/products` | **Product Catalog** | Filterable & searchable stainless steel warehouse catalog (Coils, Sheets, Pipes, Box Tubes, Fittings). | Active |
| 3 | `/products/[slug]` | **Product Specification** | Deep-dive metallurgical spec sheet, dimensional tolerances, and dedicated RFQ modal. | Proposed Expansion |
| 4 | `/services` | **Services & CNC Processing** | Heavy machining capabilities (Fiber Laser 12kW-20kW, CNC Plasma 300A, 400T Press Brake, Slitting). | Active |
| 5 | `/services/[slug]` | **Service Detail** | Dedicated machine specs, cutting envelopes, CAD upload workflow (DWG/DXF/PDF). | Proposed Expansion |
| 6 | `/contact` | **Contact & RFQ Center** | Dual hotline dialer, interactive dual-facility location map (Bình Tân & Dĩ An), validated RFQ form. | Active |
| 7 | `/about` | **About Us** | Corporate identity (MST: 0314059766, Director Ngô Thị Phụng Uyên), 4 core values, 2 facilities. | Active |
| 8 | `/projects` | **Projects & Case Studies** | Industrial case studies (F&B, Petrochemical, Cleanrooms, Facades) and client proof. | Active |
| 9 | `/quality` | **Quality & Certifications** | Mill Test Reports (MTR / CO-CQ), ISO 9001 compliance, international ASTM/JIS standards. | Proposed Expansion |
| 10 | `/calculator` | **Inox Weight Calculator** | Interactive engineering tool to calculate theoretical weight of sheets, pipes, tubes, and bars. | Proposed Expansion |
| 11 | `/news` | **News & Insights** | Stainless steel market price trends, import-export tariff analysis, and technical guides. | Active |
| 12 | `/videos` | **Media & Factory Tour** | High-definition video showcase of CNC shop-floor operations and warehouse coil handling. | Active |
| 13 | `/careers` | **Careers & Culture** | Factory & office recruitment, employee benefits, safety culture, and job openings. | Active |
| 14 | `/protection` | **Personal Data Protection** | Compliance with Vietnamese Decree 13/2023/NĐ-CP on personal data protection. | Active |
| 15 | `/privacy` | **Privacy Policy** | Enterprise data handling policies and user privacy rights. | Active |
| 16 | `/terms` | **Terms of Service** | B2B sales terms, delivery specifications, commercial inspection, and dispute terms. | Active |

---

## 2. Section-by-Section Architecture Breakdown

### 2.1 Home Page (`/`) — Route Controller: `app/page.tsx`

```
┌─────────────────────────────────────────────────────────────┐
│ 1. PremiumHero (.section-frame-full, .surface-canvas)       │
│    - 12-col Asymmetric Split (7/5)                          │
│    - Value proposition + RFQ CTA + Direct hotline pills      │
├─────────────────────────────────────────────────────────────┤
│ 2. LogoMarquee (Full Bleed, Studio-Lit Platinum Stage)      │
│    - 24 Verified mill & enterprise client logos             │
├─────────────────────────────────────────────────────────────┤
│ 3. AboutSection (.section-frame-half, .surface-band-alt)    │
│    - Corporate heritage, founding year 2016, dual facilities│
├─────────────────────────────────────────────────────────────┤
│ 4. ProductsSection (.section-frame-half, .surface-canvas)   │
│    - 4-Category Bento preview: Cuộn, Tấm, Ống, Phụ kiện     │
├─────────────────────────────────────────────────────────────┤
│ 5. FeaturesSection (.section-frame-half, .surface-band-alt) │
│    - 6-Pillar competitive advantages with industrial badges │
├─────────────────────────────────────────────────────────────┤
│ 6. CtaSection (.surface-cta-industrial)                     │
│    - High-contrast molten weld gradient + Direct Hotline    │
└─────────────────────────────────────────────────────────────┘
```

#### Sections Detail:
1. **`PremiumHero`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-full` with `.container-khm`
   - **Structure**: 12-column asymmetric grid (`lg:grid-cols-12`). Left 7 cols: Eyebrow badge, `h1` industrial headline, dual CTA buttons (RFQ leading to `/contact` + Tel dialer). Right 5 cols: Optical bento grid highlighting 10,000+ tons stocked, ±0.1mm CNC accuracy, and 100% genuine CO-CQ guarantee.
2. **`LogoMarquee`**:
   - **Surface**: Studio-lit platinum stage (`bg-slate-50/85 dark:bg-[#F1F5F9]`) with dark metallic captions (`dark:bg-[#182234]`).
   - **Behavior**: Infinite CSS transform marquee with hardware acceleration (`will-change: transform`). Automatically pauses on hover and respects `prefers-reduced-motion`.
3. **`AboutSection`**:
   - **Surface**: `.surface-band-alt` (`#FFF7ED` light / `#111827` dark)
   - **Framing**: `.section-frame-half`
   - **Content**: Corporate entity highlights (Kha Hoang Minh Co., Ltd, MST: 0314059766), mission statement, and quote from Director Ngô Thị Phụng Uyên.
4. **`ProductsSection`**:
   - **Surface**: `.surface-canvas` (`#FFFFFF` light / `#0B0F17` dark)
   - **Framing**: `.section-frame-half`
   - **Components**: `ProductCard` molecules inside 4-column responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`). Direct RFQ prefill routing to `/contact?product={id}`.
5. **`FeaturesSection`**:
   - **Surface**: `.surface-band-alt`
   - **Framing**: `.section-frame-half`
   - **Components**: `ValueCard` molecules with industrial iconography: High-purity alloys, certified mill origin, 24/7 technical hotline, CNC precision.
6. **`CtaSection`**:
   - **Surface**: `.surface-cta-industrial` (Molten weld gradient)
   - **Framing**: Contained within `.container-khm`
   - **Visual Rationale**: Creates a decisive visual threshold before the deep obsidian footer (`#070A10`).

---

### 2.2 Product Catalog (`/products`) — Route Controller: `app/products/page.tsx`

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact` (~20dvh)
   - **Visual Rationale**: Sized compactly so that desktop users immediately see the catalog search bar and category tabs above the fold.
2. **`ProductCatalogSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-full`
   - **Controls**:
     - `TabsList`: Category selectors (Cuộn, Tấm, Ống, Hộp, Phụ kiện) with wrap support on mobile.
     - `SearchBar`: Live dual-scope search matching grade names and technical descriptions, complete with quick-clear (`X`) button.
   - **Grid**: Responsive 3-to-4 column product cards (`CatalogProductCard`) with optical image zoom and grade specification chips.
   - **Zero State**: `EmptyState` component with clear search button when no matches exist.
3. **`ContactBannerSection`**:
   - **Surface**: `.surface-cta-industrial`
   - **CTA**: Direct link to request tailored mill-order quotes.

---

### 2.3 Product Detail Route (`/products/[slug]`) — Proposed Extension

1. **`ProductDetailHero`**:
   - **Framing**: `.section-hero-compact`
   - **Elements**: Primary grade headline (e.g. `SUS 304 - Inox Tấm Bề Mặt 2B`), standard compliance badges (`ASTM A240`, `JIS G4303`), and instant RFQ trigger.
2. **`ProductSpecMatrixSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Content**: Detailed chemical composition table (Cr: 18.0–20.0%, Ni: 8.0–10.5%), mechanical properties (Tensile ≥ 520 MPa, Yield ≥ 205 MPa, Elongation ≥ 40%), and available stock dimensional ranges (Thickness 0.3mm–60mm; Width 1000, 1220, 1500, 1524mm).
3. **`SurfaceFinishGallerySection`**:
   - **Surface**: `.surface-band-alt`
   - **Framing**: `.section-frame-half`
   - **Content**: Macro side-by-side photographic visualizer comparing surface finishes (2B, BA, No.1, Hairline, 8K Mirror) with microscopic roughness ($Ra$) values.
4. **`RelatedProcessingSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Content**: Direct CNC services suitable for this stock: High-power laser cutting, hydraulic shearing, CNC press brake bending.
5. **`ProductRfqSection`**:
   - **Surface**: `.surface-cta-industrial`
   - **Form**: In-context RFQ submission with pre-selected material specifications.

---

### 2.4 Services & CNC Processing (`/services`) — Route Controller: `app/services/page.tsx`

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
   - **Focus**: High-capacity CNC Plasma & Fiber Laser cutting, slitting, and hydraulic press brake bending.
2. **`ServicesGridSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Grid**: 6 service cards (`ServiceFeatureCard`): Cắt Laser Fiber, Cắt CNC Plasma, Chấn Gấp Thủy Lực, Xả Băng & Chặt Tấm, Gia Công Ống Hộp, Đánh Bóng Bề Mặt.
3. **`FeaturedServiceSection`**:
   - **Surface**: `.surface-band-alt`
   - **Framing**: `.section-frame-half`
   - **Layout**: Asymmetric 7/5 split featuring real shop-floor photography of high-power CNC plasma operations, cutting tolerances (±0.1mm), and piercing limits up to 60mm.
4. **`ProcessSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Workflow**: 4-step procurement journey: Tiếp nhận bản vẽ (CAD/DWG) ➔ Bóc tách & Báo giá ➔ Gia công chính xác ➔ Kiểm định & Bàn giao.
5. **`SimpleCtaSection`**:
   - **Surface**: `.surface-cta-industrial`
   - **Action**: Submit CAD drawing for rapid turnaround quotation.

---

### 2.5 Contact & RFQ Center (`/contact`) — Route Controller: `app/contact/page.tsx`

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
2. **`ContactWorkspaceSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-full`
   - **Layout**: 12-column split (5 cols info / 7 cols form):
     - **Facility & Hotline Cards (Left)**:
       - Registered Office: `Số 93/16 Đường Nguyễn Thị Tú, KP. 3, P. Bình Hưng Hòa B, Q. Bình Tân, TP. HCM`.
       - Factory & Warehouse: `Ấp Chiêu Liêu, Đường ĐT 743, P. Tân Đông Hiệp, TP. Dĩ An, Tỉnh Bình Dương`.
       - Direct Hotlines: `0979.866.162` (Ms. Phụng Uyên) and `0976.888.999` (Ms. Minh Hải) with instant `tel:` and `zalo.me/` direct links.
     - **Quotation Form (Right - `ContactFormSection`)**:
       - Full validation (RFC email regex, VN phone regex, 2+ char name, 10+ char message).
       - Real-time error dismissal on keystroke.
       - Disabled state and `Loader2 animate-spin` indicator while dispatching.
       - URL query param prefill (`?product=...`) handling.

---

### 2.6 About Us (`/about`) — Route Controller: `app/about/page.tsx`

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
2. **`CompanyInfoSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Content**: Company legal name (`CÔNG TY TNHH MỘT THÀNH VIÊN KHA HOÀNG MINH`), Tax ID (`0314059766`), founder profile, and mission statement.
3. **`CoreValuesSection`**:
   - **Surface**: `.surface-band-alt`
   - **Framing**: `.section-frame-half`
   - **Values**: 4 core pillars: Reputation (Uy tín), Quality (Chất lượng), Team (Đội ngũ), Facilities (Cơ sở vật chất).
4. **`BusinessScopeSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Scope**: Comprehensive dual-column matrix of distributed profiles and machining capabilities.
5. **`SimpleCtaSection`**:
   - **Surface**: `.surface-cta-industrial`

---

### 2.7 Projects & Case Studies (`/projects`) — Route Controller: `app/projects/page.tsx`

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
2. **`ProjectsListSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Cards**: Industry-classified project execution cards (`ProjectCard`) with technical specs and materials used.
3. **`ImageGallerySection`**:
   - **Surface**: `.surface-band-alt`
   - **Framing**: `.section-frame-half`
   - **Gallery**: Responsive optical image grid (`GalleryImage`) displaying warehouse coil stacks, laser cut assemblies, and cleanroom fittings.
4. **`CapabilitiesSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Stats**: Total delivered volume, major industrial sectors, and typical enterprise client profiles.
5. **`SimpleCtaSection`**:
   - **Surface**: `.surface-cta-industrial`

---

### 2.8 Quality & Standards / CO-CQ (`/quality`) — Proposed Extension

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
   - **Pledge**: 100% Genuine Mill Origin & Mill Test Certificate (MTR) Guarantee.
2. **`StandardsMatrixSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Matrix**: International standards breakdown: ASTM A240 (Plate/Sheet), ASTM A312 (Industrial Welded/Seamless Pipe), JIS G4303 (Stainless Steel Bars), DIN 17440.
3. **`InspectionProtocolSection`**:
   - **Surface**: `.surface-band-alt`
   - **Framing**: `.section-frame-half`
   - **Lab Verification**: Spectrometric chemical analysis, PMI (Positive Material Identification), ultrasonic thickness verification, and mechanical tensile/elongation testing.
4. **`SampleMtrViewerSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Visualizer**: High-resolution interactive sample of an official Mill Test Certificate (POSCO / Hyundai Steel) annotating Heat Number, Chemical Composition, and Yield Strength verification points.
5. **`SimpleCtaSection`**:
   - **Surface**: `.surface-cta-industrial`

---

### 2.9 Inox Weight Calculator (`/calculator`) — Proposed Extension

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
   - **Tool Objective**: Rapid theoretical weight calculator for engineering estimates and B2B procurement.
2. **`InoxCalculatorWorkspace`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-full`
   - **Tabs & Shapes**:
     - Tấm / Cuộn (Sheet/Coil): $\text{Weight (kg)} = T \times W \times L \times \text{Density} / 1,000,000$
     - Ống tròn (Round Pipe): $\text{Weight (kg)} = (OD - T) \times T \times \pi \times \text{Density} \times L / 1,000,000$
     - Hộp vuông / Chữ nhật (Box Tube): $\text{Weight (kg)} = [2 \times (A + B) - 4 \times T] \times T \times \text{Density} \times L / 1,000,000$
     - Cây đặc tròn (Round Bar): $\text{Weight (kg)} = (D/2)^2 \times \pi \times \text{Density} \times L / 1,000,000$
   - **Alloy Density Selector**:
     - SUS 304, 304L, 316, 316L, 201: $7.93\text{ g/cm}^3$
     - SUS 430: $7.75\text{ g/cm}^3$
   - **Instant Action**: "Gửi yêu cầu báo giá theo thông số này" (Transfer calculated parameters into `/contact` RFQ form).
3. **`WeightFormulasReferenceSection`**:
   - **Surface**: `.surface-band-alt`
   - **Framing**: `.section-frame-half`
   - **Documentation**: Certified metallurgical engineering formulas and standard dimensional tolerances.
4. **`SimpleCtaSection`**:
   - **Surface**: `.surface-cta-industrial`

---

### 2.10 News & Technical Insights (`/news`) — Route Controller: `app/news/page.tsx`

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
2. **`NewsGridSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-full`
   - **Cards**: `NewsCard` molecules with reading time indicators, category tags (Thị trường Thép, Kỹ thuật Inox, Hoạt động Doanh nghiệp), and publication dates.
3. **`SimpleCtaSection`**:
   - **Surface**: `.surface-cta-industrial`

---

### 2.11 Media & Factory Tour (`/videos`) — Route Controller: `app/videos/page.tsx`

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
2. **`VideoShowcaseSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-full`
   - **Video Showcase**: High-definition video player cards demonstrating CNC Plasma cutting, 20kW fiber laser piercing, hydraulic bending, and automated coil slitting at the Dĩ An warehouse.
3. **`SimpleCtaSection`**:
   - **Surface**: `.surface-cta-industrial`

---

### 2.12 Careers & Workplace Culture (`/careers`) — Route Controller: `app/careers/page.tsx`

1. **`PageHero`**:
   - **Framing**: `.section-hero-compact`
2. **`BenefitsSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Benefits**: 4 pillars: Career growth, comprehensive healthcare & insurance, collaborative factory team, professional CNC technical training.
3. **`OpeningsSection`**:
   - **Surface**: `.surface-band-alt`
   - **Framing**: `.section-frame-half`
   - **List**: Active job cards (CNC Plasma Operator, Mechanical Drafter, B2B Sales Executive) with direct email application links.
4. **`CultureSection`**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-half`
   - **Culture**: Industrial safety standards (5S), shop-floor team culture, and employee welfare.

---

### 2.13 Legal Governance Pages (`/protection`, `/privacy`, `/terms`)

- **Route Controllers**: `app/protection/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`
1. **`LegalPageHero`**:
   - **Framing**: `.section-hero-compact`
   - **Details**: Full policy legal title, compliance reference (Decree 13/2023/NĐ-CP for data protection), and official revision date.
2. **`LegalWorkspace` (8/4 Asymmetric Layout)**:
   - **Surface**: `.surface-canvas`
   - **Framing**: `.section-frame-full`
   - **Left (4 cols - Desktop)**: Sticky `LegalSidebarNav` featuring dynamic active-state highlighting, smooth scroll tracking, and quick links to related policies.
   - **Right (8 cols)**: Structured legal cards (`LegalSectionCard`) with high-contrast text (`text-slate-700 dark:text-slate-200`) and distinct section IDs for direct deep-linking.