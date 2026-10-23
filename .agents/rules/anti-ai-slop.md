---
trigger: always_on
---

# Kha Hoàng Minh — Anti-"AI Slop" & Senior Craftsmanship Rules (MANDATORY)

> **Scope**: Elimination of generic AI-generated templates, SaaS clichés, lazy component shortcuts, blind dark-mode inversion, and placeholder copy. Enforcing authentic industrial identity and senior craftsmanship.

---

## 1. What is "AI Slop"?

"AI Slop" refers to the generic, uninspired, and functionally shallow output that AI coding assistants default to when unguided:
- Copying generic SaaS startup templates (purple gradients, floating glass bubbles, cartoonish iconography) for an industrial B2B stainless-steel factory.
- Performing "blind dark-mode inversion" (converting `#FFF` to `#020617` and `#000` to `#64748B`), resulting in unreadable muddy gray text and borders bleeding into backgrounds.
- Dumping 400-line monolithic JSX blobs into route controllers (`page.tsx`) without atomic structure.
- Leaving dummy placeholders (`onClick={() => {}}`, `href="#"`, missing loading spinners, silent form submission).
- Writing generic filler marketing fluff ("Empowering your future with cutting-edge solutions") instead of authentic technical and domain-specific terminology.

At Kha Hoàng Minh, **AI Slop is strictly rejected**. Every pixel and line of code must reflect senior engineering craftsmanship.

---

## 2. Visual "AI Slop" — Banned vs. Required

### 2.1 The Generic SaaS Aesthetic (STRICTLY BANNED)
- ❌ **Purple / Indigo / Violet Accents**: Do not apply startup tech palettes (`indigo-600`, `purple-500`, `violet-400`).
- ❌ **Floating Blurred Blobs**: Never insert `<div className="absolute rounded-full blur-3xl bg-purple-500/20" />`.
- ❌ **Glassmorphism Overuse**: Banned `backdrop-blur-md bg-white/10 border-white/20` across standard content sections.
- ❌ **Cartoonish Soft Drop Shadows**: Generic `shadow-2xl shadow-indigo-500/10`.

### 2.2 Authentic Industrial Stainless-Steel Aesthetic (REQUIRED)
- ✅ **Color Palette**: Brushed metallic gunmetal (`#0B0F17`, `#111827`, `#182234`) anchored by molten weld-orange (`#EA580C`) and shop-floor amber (`#F59E0B`).
- ✅ **Machined Specular Highlights**: Dark mode cards use top specular edge highlights (`dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]`), simulating beveled stainless-steel slabs under factory lighting.
- ✅ **Studio-Lit Platinum Stage for Logos**: Dark partner logos mounted on `bg-slate-50/85 dark:bg-[#F1F5F9]` with dark metallic captions (`dark:bg-[#182234]`). Never use `filter: invert(1)` or `filter: grayscale(1)`.

---

## 3. Dark Mode "AI Slop" — Contrast & Readability

Blind dark-mode inversion is the most common visual defect in AI-generated web apps.

| Common AI Slop Anti-Pattern | Why It Fails | Senior Craftsmanship Requirement |
|---|---|---|
| `<div className="bg-slate-50 dark:bg-slate-950">` | Flat `slate-950` causes cards, sections, and footers to bleed together into a single pitch-black blob. | Use Tier 0 Gunmetal `.surface-canvas` (`#0B0F17`) and Tier 1 Brushed Charcoal `.surface-band-alt` (`#111827`). |
| `<p className="text-slate-500 dark:text-slate-400">` | `slate-400` fails WCAG AA on dark backgrounds; Vietnamese diacritics (`ặ`, `ữ`, `ỳ`, `ợ`, `ế`) become unreadable smears. | Body copy must strictly use `dark:text-slate-200` (`#E2E8F0`) or `dark:text-slate-100` (`#F1F5F9`). |
| `<Card className="card-khm bg-orange-50/25">` | Light-mode tint overrides the dark background token, washing out the card in dark mode. | Explicitly scope light backgrounds: `bg-orange-50/25 dark:bg-[#182234]`. |

---

## 4. UX & Interaction "AI Slop" — Banned Shortcuts

### 4.1 Mock / Fake Interactivity
- ❌ **Dead Buttons**: Never render `<Button>` or `<a>` with empty click handlers or dead anchors (`href="#"`).
- ❌ **Silent Form Submissions**: Never write `onSubmit={(e) => { e.preventDefault(); console.log(data); }}` without full UI feedback.
- ✅ **Senior Standard**:
  - Full loading state with animated spinner (`Loader2 animate-spin`) and disabled inputs while pending.
  - Real-time error clearance on field change.
  - Actionable success confirmation and hotline fallback on error.

### 4.2 Empty State Neglect
- ❌ **Disappearing Grids**: When a catalog or news search returns 0 results, never render an empty blank white/black space.
- ✅ **Senior Standard**: Always render a dedicated `EmptyState` component with an icon, explanatory copy, and a 1-click filter reset button.

### 4.3 Mobile Viewport Laziness
- ❌ **Horizontal Scroll Spillover**: Hardcoding `w-[600px]` or ignoring 360px viewport testing.
- ❌ **Tiny Tap Targets**: `24×24px` icon buttons that mobile users cannot tap on touchscreens.
- ✅ **Senior Standard**: All interactive elements `≥ 44×44px` on mobile; buttons stack full-width (`w-full`) below `640px`.

---

## 5. Content "AI Slop" — Banned Filler vs. Domain Authority

AI models gravitate toward generic, corporate filler copy when they lack domain context.

### 5.1 Banned Generic Phrases
- ❌ "Leading the industry with next-generation cutting-edge innovation."
- ❌ "Transforming your business through sustainable excellence."
- ❌ "Your trusted partner for all modern solutions."
- ❌ "Lorem ipsum dolor sit amet..."
- ❌ **Never Hardcode Product Prices**: Inox prices fluctuate daily. Never invent static VND/USD prices; always display `"Liên hệ báo giá"` / `"Contact for Quote"`.

### 5.2 Required Industrial Domain Authority
- ✅ **Certified Inox Grades**: SUS 304, SUS 316, SUS 201, SUS 430.
- ✅ **Specific Product Profiles**: Cuộn (Coil), Tấm (Sheet/Plate), Ống công nghiệp (Industrial Pipe), Hộp (Box Tube), Phụ kiện van & co hàn (Valves & Weld Fittings).
- ✅ **Machining Capabilities**: Gia công CNC Plasma, cắt Laser fiber công suất cao, chấn gấp thủy lực, xả băng, chặt tấm.
- ✅ **Industrial Standards**: ASTM A240, JIS G4303, DIN, bề mặt 2B / No.1 / BA / HL / 8K.
- ✅ **Direct Sales Contacts**: Real hotline numbers (`0979.866.162` - Ms. Uyên, `0976.888.999` - Ms. Hải) and verified address (Đường ĐT 743, Bình Chuẩn, Thuận An, Bình Dương).

### 5.3 Strict Metallurgical & Corporate Fact Integrity (ZERO HALLUCINATION)
- ❌ **Never Hardcode Product Prices**: Stainless steel (Inox) raw material prices fluctuate daily. Never render static prices (e.g., `65.000đ/kg` or `$250`). Always render `"Liên hệ báo giá"` / `"Contact for Quote"` linked to `/contact` or direct hotlines.
- ❌ **Never Hallucinate Metallurgical Specs**:
  - Do not claim `SUS 304` or `SUS 316` are strongly magnetic (they are austenitic; `SUS 430` is ferritic/magnetic).
  - Use authentic thickness (`độ dày: 0.3mm – 60.0mm` / `ly`), standard widths (`khổ rộng: 1000mm, 1220mm, 1500mm, 1524mm`), lengths (`6000mm` / `6m` or `Cuộn`), and origins (`POSCO`, `Hyundai Steel`, `Nippon Steel`, `Super Inox`, `Vinraj`).
- ✅ **Official Corporate Identity Constants**:
  - **Legal Entity**: CÔNG TY TNHH MỘT THÀNH VIÊN KHA HOÀNG MINH (`KHA HOANG MINH CO., LTD`)
  - **Tax ID (MST)**: `0314059766`
  - **Distinguish Addresses Clearly**: Always label `93/16 Đường Nguyễn Thị Tú, P. Bình Hưng Hoà, Q. Bình Tân, TP. HCM` as Registered Office (`Văn phòng / Trụ sở`) and `Đường ĐT 743, Bình Chuẩn, Thuận An, Bình Dương` as Factory / Warehouse (`Nhà máy / Kho xưởng`).

---

## 6. Code "AI Slop" — Architectural Laziness

### 6.1 Monolithic Route Dumps
- ❌ **The 500-Line `page.tsx`**: Inlining section markup, SVG definitions, form handlers, state variables, and mock data into a single route file.
- ✅ **Thin Controller Rule**: `app/[route]/page.tsx` files must be under 50 lines. They only import organisms and bind translations.

### 6.2 Deep Relative Import Spaghetti
- ❌ `import { Button } from '../../../../components/atoms/button';`
- ✅ `import { Button } from '@/components/atoms';`

### 6.3 Hardcoded Strings & Missing Localization
- ❌ Hardcoding Vietnamese or English strings directly in JSX markup.
- ✅ Defining all strings in `LanguageProvider.tsx` (`vi` and `en`) and accessing via `t('namespace.key')`.