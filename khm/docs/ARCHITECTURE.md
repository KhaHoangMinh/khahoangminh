# Architecture Overview

## Project Structure

This is a modern React-based web application built with Vite, featuring a component-driven architecture with Radix UI components and Tailwind CSS styling.

### Technology Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.0-beta.13
- **Routing**: React Router DOM 7.13.0
- **Component Library**: Radix UI (comprehensive set of unstyled, accessible components)
- **Styling**: Tailwind CSS 3.4.19 with Typography plugin
- **UI Utilities**: 
  - Lucide React (icons)
  - Class Variance Authority (component styling patterns)
  - CLSX (conditional classnames)
  - Tailwind Merge (class merging utilities)
- **Data Visualization**: Recharts 3.7.0
- **Carousel**: Embla Carousel React 8.6.0
- **Theme Management**: Next Themes 0.4.6
- **Panels/Layout**: React Resizable Panels 4.6.2
- **Command Palette**: CMDK 1.1.1
- **Notifications**: Vaul (toast notifications)
- **Email Service**: EmailJS 4.4.1
- **Date Picker**: React Day Picker 9.13.1

### Project Layout
# Architecture Overview

## Project Structure

This is a modern React-based web application built with Vite, featuring a component-driven architecture with Radix UI components and Tailwind CSS styling.

### Technology Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.0-beta.13
- **Routing**: React Router DOM 7.13.0
- **Component Library**: Radix UI (comprehensive set of unstyled, accessible components)
- **Styling**: Tailwind CSS 3.4.19 with Typography plugin
- **UI Utilities**: 
  - Lucide React (icons)
  - Class Variance Authority (component styling patterns)
  - CLSX (conditional classnames)
  - Tailwind Merge (class merging utilities)
- **Data Visualization**: Recharts 3.7.0
- **Carousel**: Embla Carousel React 8.6.0
- **Theme Management**: Next Themes 0.4.6
- **Panels/Layout**: React Resizable Panels 4.6.2
- **Command Palette**: CMDK 1.1.1
- **Notifications**: Vaul (toast notifications)
- **Email Service**: EmailJS 4.4.1
- **Date Picker**: React Day Picker 9.13.1

### Project Layout

```text
khahoangminh/ 
├── khm/ # Main application directory 
│ ├── src/ 
│ │ ├── pages/ # Page components (lazy-loaded) 
│ │ ├── components/ # Reusable UI components 
│ │ ├── hooks/ # Custom React hooks 
│ │ ├── lib/ # Library utilities and helpers 
│ │ ├── services/ # Service providers (Theme, Language) 
│ │ ├── utils/ # Utility functions 
│ │ ├── App.jsx # Main application component with routing 
│ │ ├── Layout.jsx # Layout wrapper component 
│ │ ├── pages.config.js # Pages configuration 
│ │ ├── main.jsx # Application entry point 
│ │ └── index.css # Global styles 
│ └── package.json # Project dependencies 
├── docs/ # Documentation 
└── README.md # Project readme
```

## Architecture Patterns

### 1. **Route-Based Code Splitting**
Routes are configured through `pages.config.js` and automatically mapped in `App.jsx`. Each page is lazy-loaded using React's `lazy()` and `Suspense` for optimal performance.

### 2. **Layout System**
A flexible layout wrapper supports the main page and other routes with conditional layout application. The `Layout` component wraps page content and receives the current page name for context-aware rendering.

### 3. **Service Layer**
- **ThemeProvider**: Manages application theme (light/dark mode)
- **LanguageProvider**: Handles internationalization

### 4. **Component Architecture**
- **Radix UI Integration**: Unstyled, accessible primitives with Tailwind CSS styling
- **CVA (Class Variance Authority)**: Used for managing component variants and states
- **Reusable Components**: Located in `components/` directory

### 5. **Styling Strategy**
- **Tailwind CSS**: Primary styling with custom configuration
- **Global Styles**: Defined in `index.css`
- **Component-Level**: Tailwind classes with CVA for complex variant management

### 6. **Hook-Based State Management**
Custom hooks in `hooks/` directory handle scroll behavior, theme switching, language management, etc.

### 7. **Performance Optimization**
- **Code Splitting**: Lazy loading of pages and components
- **Suspense Fallback**: Custom loading spinner shown during route transitions
- **Tree Shaking**: ES module support for unused code removal

## Key Features

- **Multi-language Support**: LanguageProvider enables i18n capabilities
- **Dark Mode**: Theme switching with next-themes
- **Responsive Design**: Tailwind CSS ensures mobile-first approach
- **Accessible Components**: Radix UI ensures WCAG compliance
- **Email Integration**: EmailJS for contact form functionality
- **Data Visualization**: Recharts for charts and graphs
- **Resizable Layouts**: React Resizable Panels for flexible UI layouts

## Configuration

### Pages Configuration (`pages.config.js`)
Central configuration file that:
- Defines all available pages
- Specifies the main page (default: "home")
- Configures the layout wrapper
- Uses lazy loading for each page

### Vite Configuration
Provides fast development experience with:
- Hot Module Replacement (HMR)
- Optimized build output
- React refresh support

## Entry Point Flow

1. **main.jsx** → Initializes React application
2. **App.jsx** → Sets up routing with Browser Router
3. **ThemeProvider & LanguageProvider** → Wraps application with context providers
4. **Layout Wrapper** → Applies layout to routes
5. **Pages** → Lazy-loaded and rendered based on route