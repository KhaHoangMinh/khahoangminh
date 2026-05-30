# Architecture Overview

## Architecture Pattern: Jamstack + Atomic Design

This project follows a modern **Jamstack** (JavaScript, APIs, Markup) architecture combined with **Atomic Design** principles for component organization. This hybrid approach ensures scalability, maintainability, and optimal performance.

## Design Philosophy

### Jamstack Stack
- **JavaScript**: React 19.2.4 for dynamic interactions
- **APIs**: External services via EmailJS, Recharts for data visualization
- **Markup**: Static page generation with route-based code splitting
- **Pre-rendering**: Build-time optimization with Vite

### Visual & UX Standards
The application enforces a premium, commercial-grade user interface:
- **Glassmorphism & Depth**: Extensive use of frosted glass effects (`backdrop-blur`), semi-transparent borders, and layered shadows to create a sophisticated, high-end aesthetic.
- **Dark Mode Optimization**: Deeply integrated dark mode configurations ensuring consistent contrast and visual hierarchy across all theme switches.
- **Dimensionality**: Layouts and organisms are structurally engineered to accommodate advanced multi-layered hover animations and stunning 2.5D isometric visualizations.

### Atomic Design Methodology
Components are organized into five atomic levels, creating a scalable and intuitive component hierarchy. Pages act purely as layout orchestrators, delegating all structure and logic to underlying Organisms and Molecules.

1. **Atoms** - Basic, indivisible UI elements (buttons, inputs, labels).
2. **Molecules** - Simple component combinations (form groups, search bars, feature cards).
3. **Organisms** - Complex component groups (headers, footers, contact forms, hero sections).
4. **Templates** - Page-level layouts without specific content.
5. **Pages** - Complete, content-filled views acting as data providers and orchestrators.

## Project Structure

This is a modern React-based web application built with Vite, featuring a modular component-driven architecture with Radix UI components and Tailwind CSS styling.

## Technology Stack

### Core Framework
- **React 19.2.4** - UI library with hooks and concurrent features
- **Vite 8.0.0-beta.13** - Fast build tool with HMR
- **React Router DOM 7.13.0** - Client-side routing

### UI & Styling
- **Radix UI** - Unstyled, accessible component primitives
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **Class Variance Authority (CVA)** - Component variant management
- **CLSX & Tailwind Merge** - Dynamic class utilities

### Component Libraries
- **Lucide React** - Icon library (scalable SVGs)
- **Embla Carousel** - Carousel/slider component
- **React Resizable Panels** - Flexible panel layouts
- **CMDK** - Command palette
- **React Day Picker** - Date picker component

### Features & Integrations
- **Next Themes** - Dark mode & theme management
- **EmailJS 4.4.1** - Email service integration
- **Recharts 3.7.0** - Data visualization charts
- **Vaul** - Toast notifications

### Project Layout (Atomic Design Structure)

```text
khahoangminh/ 
├── khm/ # Main application directory 
│ ├── src/ 
│ │ ├── components/ # Atomic Design components 
│ │ │ ├── atoms/ # Basic, indivisible components 
│ │ │ │ ├── Button.jsx 
│ │ │ │ ├── Input.jsx 
│ │ │ │ └── index.js # Barrel export
│ │ │ ├── molecules/ # Simple component groups 
│ │ │ │ ├── ActionButtonGroup.jsx 
│ │ │ │ ├── FeatureCard.jsx 
│ │ │ │ └── index.js # Barrel export
│ │ │ ├── organisms/ # Complex component groups 
│ │ │ │ ├── PremiumHero.jsx 
│ │ │ │ ├── ContactFormSection.jsx 
│ │ │ │ └── index.js # Barrel export
│ │ │ ├── templates/
│ │ │ │ └── index.js 
│ │ │ └── index.js # Central export file for all components
│ │ ├── pages/ # Page components (JAMstack pages) 
│ │ │ ├── Home.jsx # Orchestrator mapping data to organisms 
│ │ │ ├── About.jsx 
│ │ │ ├── Contact.jsx 
│ │ │ └── index.js # Barrel export (Avoid using in React.lazy)
│ │ ├── hooks/ # Custom React hooks 
│ │ │ ├── emailJS.js 
│ │ │ └── index.js # Barrel export
│ │ ├── services/ # Service providers & API utilities 
│ │ │ ├── ThemeProvider.jsx 
│ │ │ ├── LanguageProvider.jsx 
│ │ │ ├── api/ # API service functions 
│ │ │ └── index.js 
│ │ ├── utils/ # Utility functions 
│ │ │ ├── cn.js 
│ │ │ ├── formatters.js 
│ │ │ └── index.js 
│ │ ├── styles/ # Global & theme styles 
│ │ │ ├── index.css 
│ │ │ └── theme.css 
│ │ ├── context/ # React Context 
│ │ ├── config/ # Configuration files 
│ │ │ ├── pages.config.js # Route definitions (Direct imports required)
│ │ │ └── seo.config.js 
│ │ ├── App.jsx # Main application component 
│ │ ├── Layout.jsx # Global layout wrapper 
│ │ └── main.jsx # Application entry point 
│ ├── public/ # Static assets 
├── package.json # Project dependencies 
├── vite.config.js # Vite configuration 
└── docs/ # Documentation
```

## Architecture Patterns
1. *Component Composition & Orchestration*
Components strictly follow the Atomic Design pattern:

- **Pages as Orchestrators**: Pages contain minimal to no UI markup. They fetch/define data and pass it as props to Organisms.

- **Clear Separation of Concerns**: Organisms manage complex layouts and local state (e.g., forms), Molecules handle reusable visual blocks, and Atoms provide the base primitives.

2. *Module Management (Barrel Files)*
- `index.js` files are used extensively within /components, /hooks, and /utils to cleanly export modules.

- **Exception Rule**: Barrel files in /pages must never be used for route configurations in pages.config.js. Direct file paths are strictly required to preserve Vite's route-based code splitting.

3. *Route-Based Code Splitting*
- Routes configured in `config/pages.config.js`.

- Automatically mapped in `App.jsx`.

- Each page is lazy-loaded using React's `lazy()` + `Suspense` pointing directly to the file path.

4. *Service Layer*
**Context Providers**:

- ThemeProvider: Light/dark mode management.

- LanguageProvider: Internationalization support.

**API Services**:

- Located in `services/api/`.

- Centralized data fetching and error handling.

## Performance Optimization
- **Largest Contentful Paint (LCP) Optimization**: Hero sections and primary above-the-fold imagery utilize semantic `<img>` tags with the `fetchpriority="high"` attribute, allowing the browser's preload scanner to fetch assets immediately, significantly outperforming CSS background images.
- **Code Splitting**: Route and component-level splitting via dynamic imports.
- **Tree Shaking**: ES modules eliminate unused code.

## Naming Convention
- **Components**: PascalCase (Button.jsx, ContactForm.jsx)
- **Hooks**: camelCase with 'use' prefix (useTheme.js)
- **Utils**: camelCase (formatters.js, validators.js)
- **Constants**: UPPER_SNAKE_CASE (API_ENDPOINT, DEFAULT_THEME)

## Data Flow

```text
User Interaction
      ↓
Page Component
      ↓
Organisms (Form, List, etc.)
      ↓
Molecules (Card, FormField)
      ↓
Atoms (Button, Input)
      ↓
Services/Hooks (API calls, state management)
      ↓
External APIs (EmailJS, Backend)
```

## Entry Point Flow
1. `main.jsx` → Initializes React application
2. `App.jsx` → Sets up routing with BrowserRouter
3. `ThemeProvider & LanguageProvider` → Context providers
4. `Layout` → Global layout wrapper
5. `Pages` → Lazy-loaded route components
6. `Organisms` → Complex feature sections
7. `Molecules` → Simple component groups
8. `Atoms` → Basic building blocks

## References

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [JAMstack Overview](https://jamstack.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)