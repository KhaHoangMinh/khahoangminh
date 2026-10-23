<p align="center">
    <img src="client/public/img/logo/logo.png" alt="Kha Hoang Minh" width="160"/>
</p>
<h1 align="center">Kha Hoàng Minh — Official Corporate Portal</h1>

<p align="center">
    <strong>Premier Stainless Steel (Inox) Importer & CNC Mechanical Processing Center</strong><br />
    High-performance enterprise web portal built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Atomic Design.
</p>

<p align="center">
    <a href="https://khahoangminh.github.io/khahoangminh/"><img src="https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-2ea44f?style=flat-square&logo=github" alt="Live Demo" /></a>
    <a href="https://github.com/KhaHoangMinh/khahoangminh/actions"><img src="https://img.shields.io/badge/CI%2FCD-GitHub%20Pages-orange?style=flat-square&logo=githubactions" alt="GitHub Pages Deployment" /></a>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-24%20%2F%2020%2B-green?style=flat-square&logo=nodedotjs" alt="Node.js 24/20+" /></a>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16%20(Turbopack)-black?style=flat-square&logo=nextdotjs" alt="Next.js 16" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=flat-square&logo=tailwindcss" alt="Tailwind CSS v4" /></a>
</p>

---

## 🌟 Architectural & UI/UX Highlights

* **Authentic Industrial Identity (No "AI Slop"):** Custom B2B stainless-steel design language. Brushed metallic gunmetal (`#0B0F17`) paired with molten weld-orange (`#EA580C`) and shop-floor amber (`#F59E0B`). Top machined specular edge highlights (`inset 0 1px 0 rgba(255,255,255,0.12)`) simulating CNC-beveled steel slabs.
* **4-Tier Dual-Theme Surface Architecture:**
  - **Tier 0 Canvas (`.surface-canvas`):** `#FFFFFF` (Light) / `#0B0F17` (Deep Gunmetal Dark)
  - **Tier 1 Alternating Band (`.surface-band-alt`):** `#FFF7ED` (Light) / `#111827` (Charcoal Steel Dark)
  - **Tier 2 Interactive Cards (`.card-khm`):** Machined specular chamfer, hover sheen glide, and WCAG 2.2 AAA high-contrast copy
  - **Tier 3 Inputs & Tabs:** Recessed form inputs (`#0B0F17` Dark) and elevated tabs
  - **Tier 4 Industrial CTA (`.surface-cta-industrial`):** Molten gradient band visually separated from the `#070A10` deep obsidian footer
* **Next.js 16 App Router (Static Export):** Fully prerendered as static HTML via `output: 'export'` with `trailingSlash: true` and `images.unoptimized: true` for zero-latency GitHub Pages hosting.
* **5-Tier Atomic UI Architecture:** Strict unidirectional dependency flow (`atoms` → `molecules` → `organisms` → `templates` → thin route controllers `< 50 lines`).
* **Standalone Focused 404 Canvas:** Custom error page that eliminates heavy global header/footer navigation clutter, featuring direct sales hotlines, language/theme toggles, and a 6-card quick recovery grid.
* **Full Localization (i18n):** 100% DRY translation architecture via `useLanguage()` and `t()` supporting both Vietnamese (`vi`) and English (`en`).
* **Instant B2B Multi-Channel RFQ:** One-click telephone dialers for direct sales representatives (`0979.866.162` - Ms. Uyên & `0976.888.999` - Ms. Hải) and serverless email quotation forms via EmailJS.

---

## 🛠 Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Theme** | [Tailwind CSS v4](https://tailwindcss.com/), [next-themes](https://github.com/pacocoursey/next-themes), CSS Custom Variables |
| **Component Primitives** | [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Form & Communications** | [React Hook Form](https://react-hook-form.com/), [@emailjs/browser](https://www.emailjs.com/) |
| **Deployment & CI/CD** | GitHub Pages, GitHub Actions (Node.js 24), Multi-stage Docker |

---

## 📂 Project Structure

```text
khahoangminh/
├── .agents/
│   └── rules/                  # Senior Engineering & UI/UX Modular Design Rules
│       ├── ui-ux-design.md     # Master Index & executive architectural overview
│       ├── anti-ai-slop.md     # Bans generic SaaS tropes & blind dark inversion
│       ├── ui.md               # 4-tier surface tokens & typography contrast matrix
│       ├── ux.md               # B2B buyer journeys, hotlines & RFQ error recovery
│       ├── architecture.md     # 5-tier atomic design & thin route controllers
│       ├── responsiveness.md   # Viewport budget & section framing utilities
│       ├── performance-assets.md # Optical logo normalization & Next.js image optimization
│       └── quality-checklist.md  # 8-point mandatory pre-delivery verification
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # Automated GitHub Pages CI/CD workflow (Node 24)
├── client/
│   ├── app/                    # Next.js App Router entrypoints (thin controllers)
│   │   ├── (routes)/           # /about, /products, /services, /projects, /contact, etc.
│   │   ├── globals.css         # Design tokens, surface tiers, and typography scale
│   │   ├── layout.tsx          # Root HTML layout and metadata
│   │   ├── not-found.tsx       # Standalone branded 404 recovery canvas
│   │   └── ClientLayoutWrapper.tsx # Shell router managing header/footer bypass
│   ├── components/
│   │   ├── atoms/              # UI primitives (Button, Card, Badge, Input, Tabs)
│   │   ├── molecules/          # Domain composites (ProductCard, SearchBar, ActionButtonGroup)
│   │   ├── organisms/          # Full page sections (PremiumHero, AboutSection, Catalog)
│   │   └── templates/          # Page shells (MainLayout)
│   ├── config/                 # Navigation, SEO, and special event definitions
│   ├── hooks/                  # Custom React hooks (useEmailJS, useSpecialEvent)
│   ├── lib/                    # Utilities and form validators
│   ├── public/                 # Static assets, product imagery, and .nojekyll
│   └── services/               # LanguageProvider (i18n), ThemeProvider, and API services
├── AGENTS.md                   # AI Agent & Developer Guidelines Index
└── README.md                   # Project overview documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.0.0+` (`v24.x` recommended)
- **Package Manager**: `npm`

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KhaHoangMinh/khahoangminh.git
   cd khahoangminh/client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional):**
   Create a `.env` file in `client/` for EmailJS quote requests:
   ```env
   NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Building & Deployment

### 1. Static Production Export
To compile and generate static production assets:
```bash
npm run build
```
The optimized static HTML/CSS/JS output is exported directly to `client/out/`.

### 2. Git Branching Strategy & GitHub Pages CI/CD

This repository follows a structured branch workflow:

| Branch | Purpose | CI/CD Behavior |
|---|---|---|
| **`dev`** | Active feature development & refactoring | Commits pushed here. PRs opened from `dev` → `main`. |
| **`main`** | Production release & deployment | Protected branch. Automated deployment to GitHub Pages upon merge. |

The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) handles both verification and deployment:
* **Pull Requests (`dev` → `main`):** Automatically executes the `build` job on Node.js 24 to verify TypeScript, ESLint, and static export compilation without deploying.
* **Push to `main` (Merge):** Executes both `build` and `deploy` jobs to publish the live portal to GitHub Pages.

#### GitHub Repository Configuration Guide:
1. **GitHub Pages Activation:**
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
2. **Branch Protection (`main`):**
   - Navigate to **Settings** > **Branches** (or **Rules** > **Rulesets**).
   - Add a rule for branch name pattern `main`.
   - Enable **Require status checks to pass before merging** and select `build`.
   - *Note for solo developers:* Keep "Require a pull request before merging" enabled with status check `build`, but uncheck "Require approvals" (or allow bypass) so you can merge your own PRs once tests pass.
3. **EmailJS Secrets (Optional for Contact Form):**
   - Navigate to **Settings** > **Secrets and variables** > **Actions**.
   - Add `NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, and `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.

### 3. Alternative: Docker Deployment
A production-ready Docker Compose configuration is available for self-hosted servers:
```bash
# Build and run container
docker-compose up -d --build

# View real-time logs
docker-compose logs -f client

# Stop container
docker-compose down
```

---

## 📄 License & Intellectual Property
© 2026 CÔNG TY TNHH KHA HOÀNG MINH. All rights reserved.  
Official Domain: [khahoangminh.com.vn](http://khahoangminh.com.vn)