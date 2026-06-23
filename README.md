<p align="center">
    <img src="khm/public/img/logo/logo.png" alt="Kha Hoang Minh" width="200"/>
</p>
<h1 align="center">Kha Hoang Minh - Corporate Website</h1>
A modern, high-performance corporate web application built with **Next.js (App Router)** and **TypeScript**. This project leverages React Server Components (RSC) combined with Atomic Design principles to deliver a highly scalable, maintainable, SEO-friendly, and commercially viable platform.

## 🌟 Key Features

* **Premium UI/UX Design:** A highly polished interface featuring deep dark mode integration, sophisticated glassmorphism effects (`backdrop-blur`), and layout structures engineered to accommodate advanced hover animations and stunning 2.5D isometric visualizations.
* **Next.js App Router Architecture:** Utilizes Server-Side Rendering (SSR) and React Server Components (RSC) to minimize client-side JavaScript, providing lightning-fast load times and superior SEO out of the box.
* **Atomic Design Methodology:** Strict separation of concerns using Atoms, Molecules, Organisms, and Templates to ensure maximum component reusability and scalability across the application.
* **Type-Safe Foundation:** End-to-end type safety using TypeScript, ensuring robust data handling for APIs, components, and form validations.
* **Internationalization (i18n):** Seamless, client-side toggling between Vietnamese and English via custom context providers.
* **Interactive Utilities:** Integrated Leaflet JS for responsive location mapping and EmailJS for secure, direct client communication without a dedicated backend.

## 🛠 Technology Stack

**Core**
* [Next.js](https://nextjs.org/) (App Router) - React Framework
* [TypeScript](https://www.typescriptlang.org/) - Static Typing
* [React 19](https://react.dev/) - UI Library

**Styling & UI**
* [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first styling engine
* [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible primitives
* [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) - Iconography

**State & Services**
* React Context API (Theme, Language)
* [EmailJS](https://www.emailjs.com/) - Serverless form handling

## 📂 Project Structure

The project strictly adheres to the Atomic Design methodology within the Next.js App Router ecosystem:

```text
src/
├── app/            # Next.js App Router (Pages, Layouts, Providers, routing)
│   ├── (routes)/   # Route segments (e.g., about, contact, products)
│   ├── layout.tsx  # Root server layout
│   ├── page.tsx    # Home page
│   └── globals.css # Global Tailwind v4 configuration
├── components/     # Atomic Design UI Components
│   ├── atoms/      # Indivisible UI elements (Buttons, Inputs)
│   ├── molecules/  # Simple combinations (Search bars, Feature Cards)
│   ├── organisms/  # Complex sections (Headers, Contact Forms, Heros)
│   └── templates/  # Page-level structural wrappers
├── config/         # Static data configurations (Navigation, Events, SEO)
├── hooks/          # Reusable custom React hooks
├── lib/            # Utility functions and form validators
└── services/       # Context providers (Theme, Language) & API clients
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

3. Set up Environment Variables:

Create a `.env` file in the root directory and add your EmailJS configuration:
```bash
NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 🚢 Building for Production
To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## 📄 License
© Kha Hoang Minh Co., Ltd. All rights reserved.