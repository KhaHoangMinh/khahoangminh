---
trigger: always_on
---

# Kha Hoàng Minh — UX Engineering & Interaction Rules (MANDATORY)

> **Scope**: B2B buyer journeys, RFQ (Request for Quote) flows, form validation, touch targets, state feedback, search/filtering UX, and accessibility.

---

## 1. Core B2B UX Philosophy: Speed, Accuracy & Zero Friction

Our users are enterprise buyers, M&E contractors, and technical workshop managers who visit the site to:
1. Identify stainless-steel specifications (SUS 304, 316, 201, 430 in coil, sheet, pipe, or fitting format).
2. Verify fabrication capability (CNC plasma/laser cutting, shearing, bending).
3. Request a formal quotation (RFQ) or call sales representatives immediately.

Every interaction must be optimized for **speed of procurement, zero friction, and instant contact accessibility**.

---

## 2. RFQ & Direct Contact Architecture

Industrial buyers frequently require urgent quotation turns. The UI must provide multi-channel contact at all critical touchpoints:

- **Primary Desktop Header**:
  - Always exposes two direct sales hotlines: `0979.866.162` (Ms. Uyên) and `0976.888.999` (Ms. Hải) with `tel:` URI schemes.
  - Exposes official email: `info@khahoangminh.com.vn` with `mailto:` URI scheme.
- **Product Catalog Quotation Links**:
  - Every product card in `ProductCatalogSection` must provide a direct quote CTA linking to `/contact` with pre-contextualized product interest.
- **Hero & Section CTAs**:
  - Primary button: "Liên Hệ Ngay" (Request Quote / Contact) leading to quotation form.
  - Secondary button: One-touch telephone dialer.

### 2.1 Zalo Direct Procurement & Pre-Filled RFQ Context
- **Zalo Quick-Chat Integration**: Alongside `tel:` (`0979.866.162` - Ms. Uyên, `0976.888.999` - Ms. Hải) and `mailto:` (`info@khahoangminh.com.vn`), all floating contact groups and `SocialContactButtonGroup` molecules must support direct `https://zalo.me/` deep links.
- **Query-Param RFQ Pre-Fill**: Clicking `"Báo giá"` on any `ProductCard` or `CatalogProductCard` must route to `/contact?product=<slug-or-name>` and automatically pre-populate the `message` or subject context in `ContactFormSection` (e.g., `"Yêu cầu báo giá: Tấm Inox SUS 304 - Bề mặt 2B"`).
- **Server-Side Validation & Anti-Spam**: Every form submission handler must re-validate inputs on the server, sanitize HTML/script tags, and enforce rate-limiting or honeypot verification before dispatching emails/notifications.

---

## 3. Form Validation, Input States & Error Recovery

Form submission is the primary conversion event on the site (`ContactFormSection`). The form must adhere to strict UX interaction rules:

### 3.1 Field-Level Requirements
- **Họ và tên (`name`)**: Required, minimum 2 characters.
- **Số điện thoại (`phone`)**: Optional, but if provided, must validate against VN mobile regex (`/^0\d{9,10}$/`) or international E.164 (`/^\+\d{8,15}$/`).
- **Email (`email`)**: Required, must validate against standard RFC email regex (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
- **Nội dung (`message`)**: Required, minimum 10 characters to prevent accidental empty submissions.

### 3.2 Real-time Error Clearance
- When a user begins typing in a field that previously showed a validation error, the error banner for that specific field must clear immediately on `onChange`.
- Required asterisks (`*`) must be highlighted in molten orange (`text-orange-600 dark:text-orange-400`).

### 3.3 Loading & Submit States
- Once the submit button is clicked, disable the button and show an animated spinner (`Loader2 animate-spin`) with "Đang gửi..." (`contactPage.sending`).
- Prevent double-submission by locking all input fields (`disabled={isSending}`).
- Upon success, clear form fields and display a green success banner with confirmation copy.
- Upon network error, keep form inputs intact so the user does not lose their typed message, and display an actionable error message with the hotline fallback.

---

## 4. Touch Targets & Mobile-First Usability

Mobile visitors often access the site directly on job sites and factory floors:

- **Minimum Touch Target**: Every interactive element (`<button>`, `<a>`, `<input>`, tabs) must have a minimum tap target of **`44 × 44px`** on mobile viewports (`< 768px`).
- **Stacked Buttons on Mobile**: All dual-CTA button groups (e.g., `ActionButtonGroup`, `SimpleCtaSection`) must stack full-width (`w-full`) on mobile (`< 640px`) and switch to inline (`sm:w-auto sm:flex-row`) at `≥ 640px`.
- **Drawer Menu Ergonomics**:
  - Mobile menu overlay must lock within `max-h-[calc(100dvh-4rem)]` with smooth internal scrolling (`overflow-y-auto`).
  - Active page must display a distinct solid weld-orange pill background with a white indicator dot.
  - Clicking any navigation link must automatically dismiss the drawer menu.

---

## 5. Catalog Search & Filter Interaction UX

In `ProductCatalogSection`, buyers need to quickly find specific grades or profiles:

- **Dual Search Scope**: Search must match both the product `name` (e.g., "Inox 304") and the technical `description` (e.g., "cắt plasma", "bề mặt 2B").
- **Clear Button**: Whenever the search input is non-empty, render a quick-clear (`X`) button inside the input field that resets the query and restores full category results in 1 click.
- **Helpful Empty State**: If a query produces zero matches, never show a blank grid. Render `EmptyState` with:
  1. Pulsing search indicator.
  2. Clear message indicating no products were found.
  3. One-click "Xóa bộ lọc" (`clearText`) button to immediately restore the category list.

---

## 6. Table of Contents & Long Legal Page Wayfinding

On lengthy policy and compliance pages (`/privacy`, `/terms`, `/protection`):
- Desktop viewports (`≥ 1024px`) must render a sticky sidebar (`LegalSidebarNav`) with high-contrast section indicators.
- Smooth scrolling (`window.scrollTo({ top: offset, behavior: 'smooth' })`) must account for the sticky header offset (`-100px` to `-150px`) so section headings are never obscured.
- Active section state must update dynamically based on the scroll position.