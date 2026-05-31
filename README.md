<p align="center">
    <img src="khm/public/img/logo/logo.png" alt="Kha Hoang Minh" width="200"/>
</p>
<h1 align="center">Kha Hoang Minh - Corporate Website</h1>
A modern, high-performance corporate web application built with React and Vite. This project leverages a Jamstack architecture combined with Atomic Design principles to deliver a highly scalable, maintainable, and SEO-friendly platform.

## 🌟 Key Features

*   **Premium UI/UX Design:** A highly polished interface featuring deep dark mode integration, sophisticated glassmorphism effects, and layout structures engineered to accommodate stunning 2.5D isometric visualizations.
*   **Atomic Design Architecture:** Strict separation of concerns using Atoms, Molecules, Organisms, Templates, and Pages to ensure maximum component reusability.
*   **LCP Optimized:** Critical above-the-fold assets are prioritized using semantic HTML attributes (`fetchpriority="high"`) to drastically reduce Largest Contentful Paint times.
*   **Route-Based Code Splitting:** Pages are dynamically loaded using React `lazy` and `Suspense` for optimal JavaScript bundle sizes.
*   **Internationalization (i18n):** Built-in seamless toggling between Vietnamese and English via a custom Context provider[cite: 39].
*   **Interactive Maps & Forms:** Integrated Leaflet JS for location mapping and EmailJS for direct client communication.

## 🛠 Technology Stack

**Core**
*   [React 19](https://react.dev/) - UI Library
*   [Vite](https://vitejs.dev/) - Build Tool & Bundler
*   [React Router DOM](https://reactrouter.com/) - Client-side Routing

**Styling & UI**
*   [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
*   [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible primitives
*   [Lucide React](https://lucide.dev/) - Iconography

**State & Services**
*   React Context API (Theme, Language)
*   EmailJS - Form handling

## 📂 Project Structure

The project strictly adheres to the Atomic Design methodology:

```text
src/
├── components/
│   ├── atoms/      # Indivisible UI elements (Buttons, Inputs)
│   ├── molecules/  # Simple combinations (Search bars, Feature Cards)
│   ├── organisms/  # Complex sections (Headers, Contact Forms, Heros)
│   └── templates/  # Page-level layouts
├── pages/          # Content-filled orchestrator views
├── config/         
├── hooks/          # Reusable custom React hooks
├── lib/          
├── services/       # Context providers (Theme, Language) & APIs
├── styles/          
├── utils/          # Helper functions and validators
└── styles/         # Global Tailwind and Theme CSS
```

For an in-depth breakdown of the architecture, please refer to `docs/ARCHITECTURE.md`.

## 🚀 Getting Started
### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/KhaHoangMinh/khahoangminh.git
cd khahoangminh/khm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 📄 License
© Kha Hoang Minh Co., Ltd. All rights reserved.