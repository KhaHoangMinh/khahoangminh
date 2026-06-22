# Architecture Overview

## Architecture Pattern: Next.js App Router + Atomic Design

This project follows a modern hybrid architecture using **Next.js** combined with **Atomic Design** principles for component organization. This approach ensures maximum commercial scalability, SEO optimization, and exceptional performance through Server-Side Rendering (SSR) and React Server Components (RSC).

## Design Philosophy

### The Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript for end-to-end type safety
- **Styling**: Tailwind CSS with Radix UI primitives
- **Rendering**: React Server Components (default) with strategically placed Client Components for dynamic interactions.

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
4. **Templates** - Structural layouts wrapping organisms.
5. **Pages (App Router)** - File-system-based route segments (`page.tsx`) acting as data providers.

## Project Structure

```text
src/
├── app/                  # Next.js App Router directory
│   ├── layout.tsx        # Root layout (replaces main.jsx/App.jsx/Layout.jsx)
│   ├── page.tsx          # Home page
│   ├── providers.tsx     # Client-side context providers
│   ├── globals.css       # Global styles (formerly index.css)
│   └── (routes)/         # Organized route groups
├── components/           # Atomic Design components
│   ├── atoms/            
│   ├── molecules/        
│   ├── organisms/        
│   ├── templates/        
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── services/             # API and third-party services
├── lib/                  # Utilities (Tailwind merge, formatting)
├── types/                # TypeScript interface definitions
└── config/               # App configuration files
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
- **Next.js Image Optimization**: Built-in `<Image>` component automatically serves modern formats (WebP/AVIF) and prevents Cumulative Layout Shift (CLS).

- **React Server Components (RSC)**: Reduces client-side JavaScript bundle size by rendering non-interactive UI on the server.

- **Route Prefetching**: Next.js `<Link>` automatically prefetches routes in the background for near-instant navigations.

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