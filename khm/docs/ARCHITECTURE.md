# Architecture Overview

## Architecture Pattern: Jamstack + Atomic Design

This project follows a modern **Jamstack** (JavaScript, APIs, Markup) architecture combined with **Atomic Design** principles for component organization. This hybrid approach ensures scalability, maintainability, and optimal performance.

## Design Philosophy

### Jamstack Stack
- **JavaScript**: React 19.2.4 for dynamic interactions
- **APIs**: External services via EmailJS, Recharts for data visualization
- **Markup**: Static page generation with route-based code splitting
- **Pre-rendering**: Build-time optimization with Vite

### Atomic Design Methodology
Components are organized into five atomic levels, creating a scalable and intuitive component hierarchy:

1. **Atoms** - Basic, indivisible UI elements (buttons, inputs, labels)
2. **Molecules** - Simple component combinations (form groups, search bars)
3. **Organisms** - Complex component groups (headers, footers, forms)
4. **Templates** - Page-level layouts without specific content
5. **Pages** - Complete, content-filled views

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
│ │ │ │ ├── Label.jsx 
│ │ │ │ ├── Icon.jsx 
│ │ │ │ ├── Badge.jsx 
│ │ │ │ ├── Avatar.jsx 
│ │ │ │ └── index.js 
│ │ │ ├── molecules/ # Simple component groups 
│ │ │ │ ├── ButtonGroup.jsx 
│ │ │ │ ├── FormField.jsx # Label + Input 
│ │ │ │ ├── Card.jsx 
│ │ │ │ ├── Hero.jsx 
│ │ │ │ ├── Footer.jsx 
│ │ │ │ ├── Navigation.jsx 
│ │ │ │ ├── Sidebar.jsx 
│ │ │ │ └── index.js 
│ │ │ ├── organisms/ # Complex component groups 
│ │ │ │ ├── Header.jsx # Full header with nav and logo 
│ │ │ │ ├── ContactForm.jsx # Complex form with multiple fields 
│ │ │ │ ├── ProductList.jsx 
│ │ │ │ ├── ProjectCarousel.jsx 
│ │ │ │ ├── TeamSection.jsx 
│ │ │ │ └── index.js 
│ │ │ ├── templates/
│ │ │ │ └── index.js 
│ │ │ └── index.js # Central export file 
│ │ ├── pages/ # Page components (JAMstack pages) 
│ │ │ ├── Home.jsx # Composed of organisms + molecules 
│ │ │ ├── About.jsx 
│ │ │ ├── Products.jsx 
│ │ │ ├── Services.jsx 
│ │ │ ├── Projects.jsx 
│ │ │ ├── Videos.jsx 
│ │ │ ├── Careers.jsx 
│ │ │ ├── News.jsx 
│ │ │ ├── Contact.jsx 
│ │ │ ├── PersonalDataProtection.jsx 
│ │ │ ├── PrivacyPolicy.jsx 
│ │ │ ├── TermsOfService.jsx 
│ │ │ ├── PageNotFound.jsx # 404 error page 
│ │ │ └── index.js # Page exports 
│ │ ├── hooks/ # Custom React hooks 
│ │ │ ├── useTheme.js 
│ │ │ ├── useLanguage.js 
│ │ │ ├── useScrollToTop.js 
│ │ │ ├── useResponsive.js 
│ │ │ └── index.js 
│ │ ├── services/ # Service providers & API utilities 
│ │ │ ├── ThemeProvider.jsx 
│ │ │ ├── LanguageProvider.jsx 
│ │ │ ├── api/ # API service functions 
│ │ │ │ ├── contact.js # Contact form submission 
│ │ │ │ ├── products.js # Product data fetching 
│ │ │ │ └── index.js 
│ │ │ └── index.js 
│ │ ├── utils/ # Utility functions 
│ │ │ ├── cn.js # Classname utilities 
│ │ │ ├── constants.js # Application constants 
│ │ │ ├── formatters.js # Data formatting utilities 
│ │ │ ├── validators.js # Form validation utilities 
│ │ │ └── index.js 
│ │ ├── styles/ # Global & theme styles 
│ │ │ ├── index.css # Global styles 
│ │ │ ├── theme.css # Theme variables 
│ │ │ └── animations.css # Animation definitions 
│ │ ├── context/ # React Context 
│ │ │ ├── ThemeContext.js 
│ │ │ └── LanguageContext.js 
│ │ ├── config/ # Configuration files 
│ │ │ ├── pages.config.js # Pages configuration 
│ │ │ ├── navigation.config.js # Navigation structure 
│ │ │ └── seo.config.js # SEO metadata 
│ │ ├── App.jsx # Main application component 
│ │ ├── Layout.jsx # Global layout wrapper 
│ │ ├── main.jsx # Application entry point 
│ │ └── index.css # Legacy - consolidate to styles/ 
│ ├── public/ # Static assets (JAMstack) 
│ │ ├── images/ 
│ │ ├── icons/ 
│ │ └── fonts/ │ 
├── package.json # Project dependencies 
│ └── vite.config.js # Vite configuration 
├── docs/ # Documentation 
│ ├── ARCHITECTURE.md 
│ ├── PAGES.md # Pages documentation 
│ ├── COMPONENTS.md # Component documentation 
│ ├── MIGRATION_GUIDE.md # Migration guide 
│ └── DEVELOPMENT.md # Development guidelines 
└── README.md # Project readme
```


## Atomic Design Levels

### 1. **Atoms**
Smallest, most basic building blocks. Cannot be broken down further without losing meaning.

**Examples:**
- Button
- Input field
- Label
- Icon
- Badge
- Avatar

**Characteristics:**
- No dependencies on other components
- Pure, functional components
- Accept props for customization
- Fully styled and self-contained

### 2. **Molecules**
Groups of 2-3 atoms bonded together. Simple functional units.

**Examples:**
- FormField (Label + Input + validation message)
- Card (Avatar + Name + Description)
- Navigation (Logo + Menu items)
- Hero section (Image + Title + Subtitle + CTA button)

**Characteristics:**
- Composed of atoms
- Single responsibility principle
- Reusable across pages
- Handle basic logic/interaction

### 3. **Organisms**
Complex UI sections composed of multiple molecules and/or atoms. Complex functional units.

**Examples:**
- Header (Logo + Navigation + Theme toggle)
- ContactForm (Multiple form fields + submit button)
- ProductList (Multiple product cards + filters + pagination)
- ProjectCarousel (Multiple project cards + carousel controls)

**Characteristics:**
- Composed of molecules and atoms
- Handle complex interactions
- Manage form state, API calls
- Reusable across pages
- Can contain business logic

### 4. **Templates**
Page-level layouts that structure organisms and molecules. Define layout structure without content.

**Implementation:** Implemented as Layout wrappers and page templates.

### 5. **Pages**
Full page implementations. Instances of templates filled with real content.

**Examples:**
- Home page
- About page
- Contact page

**Characteristics:**
- Composed of organisms and molecules
- Route-specific
- Lazy-loaded for performance
- Connected to services/APIs

## JAMstack Architecture

### JavaScript
- React handles dynamic interactions
- Vite builds optimized JavaScript bundles
- Service providers manage state (Theme, Language)
- Custom hooks encapsulate reusable logic

### APIs
- **Static content**: Pre-generated pages (markup)
- **Dynamic content**: Fetched via service functions
- **External APIs**: EmailJS for contact forms, third-party integrations
- **Service layer**: `services/api/` contains all API calls

### Markup
- Pre-rendered page structure with Vite
- Static HTML generated at build time
- Server-side or static site generation compatible
- SEO-friendly structure

## Architecture Patterns

### 1. **Component Composition**
Components follow the Atomic Design pattern:
- Each level builds upon the previous
- Clear separation of concerns
- Reusable and testable
- Single responsibility principle

**Example Flow:**
```text
Button (atom) → FormField (molecule: Label + Input + Button) → ContactForm (organism: Multiple FormFields + API integration) → Contact Page (page: ContactForm + Hero + Footer)
```

### 2. **Route-Based Code Splitting**
- Routes configured in `config/pages.config.js`
- Automatically mapped in `App.jsx`
- Each page lazy-loaded using React's `lazy()` + `Suspense`
- Optimal performance with route-level code splitting

### 3. **Service Layer**
**Context Providers:**
- ThemeProvider: Light/dark mode management
- LanguageProvider: Internationalization support

**API Services:**
- Located in `services/api/`
- Handle external API calls (EmailJS, content APIs)
- Centralized data fetching and error handling

### 4. **Layout System**
- Global `Layout.jsx` wraps all pages
- Consistent header, footer, and navigation
- Responsive design with Tailwind CSS
- Theme-aware styling

### 5. **Styling Strategy**
- **Tailwind CSS**: Utility-first approach
- **CVA (Class Variance Authority)**: Component variant management
- **Theme variables**: CSS custom properties for theming
- **Global styles**: Base styles in `styles/index.css`

### 6. **Hook-Based State Management**
Custom hooks encapsulate reusable logic:
- `useTheme()`: Theme switching
- `useLanguage()`: Language management
- `useScrollToTop()`: Auto-scroll behavior
- `useResponsive()`: Responsive design helpers

### 7. **Performance Optimization**
- **Code Splitting**: Route and component-level splitting
- **Lazy Loading**: Images and components loaded on demand
- **Suspense**: Graceful loading states
- **Tree Shaking**: ES modules eliminate unused code
- **Build Optimization**: Vite minification and bundling

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
- [React Best Practices](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)