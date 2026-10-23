# Pages Documentation

Complete list of all pages in the application with their routes and purposes.

## Pages Table

| Page Name | Route Path | Component | Purpose | Type |
|-----------|-----------|-----------|---------|------|
| Home | `/` or `/home` | `Home.jsx` | Landing page displaying main website content, hero section, and featured information | Main Content |
| About | `/about` | `About.jsx` | Company/project information page with details about the organization, mission, and team | Main Content |
| Products | `/products` | `Products.jsx` | Showcase of available products with descriptions, features, and specifications | Main Content |
| Services | `/services` | `Services.jsx` | Display of offered services with pricing, descriptions, and service details | Main Content |
| Projects | `/projects` | `Projects.jsx` | Portfolio or case studies showcasing completed projects with results and testimonials | Main Content |
| Videos | `/videos` | `Videos.jsx` | Video gallery or media center for promotional and educational video content | Main Content |
| Careers | `/careers` | `Careers.jsx` | Job listings, company culture information, and employment opportunities | Main Content |
| News | `/news` | `News.jsx` | Blog, news articles, or press releases about company updates and industry news | Main Content |
| Contact | `/contact` | `Contact.jsx` | Contact form for user inquiries, with email integration via EmailJS | Main Content |
| Personal Data Protection | `/protection` | `PersonalDataProtection.jsx` | Legal documentation regarding data protection policies and compliance | Legal/Policy |
| Privacy Policy | `/privacy` | `PrivacyPolicy.jsx` | Privacy policy explaining data collection, usage, and user privacy rights | Legal/Policy |
| Terms of Service | `/terms` | `TermsOfService.jsx` | Terms and conditions for using the website and services | Legal/Policy |

## Navigation Hierarchy

### Primary Content Pages
These are main navigation pages typically linked in the header/navigation menu:
- **Home** - Main entry point
- **About** - Company information
- **Products** - Product catalog
- **Services** - Service offerings
- **Projects** - Portfolio
- **Videos** - Media gallery
- **Careers** - Job opportunities
- **News** - Updates and articles
- **Contact** - Contact form

### Legal/Policy Pages
These are typically linked in the footer or secondary navigation:
- **Personal Data Protection** - Data protection details
- **Privacy Policy** - Privacy terms
- **Terms of Service** - Usage terms

## Routing Configuration

All routes are configured in `pages.config.js` and mapped dynamically in `App.jsx`:

### Main Page (Home)
- **Path**: `/` (root)
- **Config Key**: `home`
- **Default**: Yes, configured as `mainPage: "home"`

### Secondary Pages
- **Path Pattern**: `/{pageKey}` (e.g., `/about`, `/products`)
- **Config Key**: Lowercase page identifier
- **Navigation**: Accessible via route or navigation menu

### 404 Page
- **Path**: `*` (all unmapped routes)
- **Component**: `PageNotFound.jsx` (from `@/lib/`)
- **Purpose**: Handles undefined routes

## Key Features by Page

### Contact Page
- **Features**: Form submission, email integration (EmailJS)
- **User Action**: Send inquiries/messages

### Career Page
- **Features**: Job listings, application information
- **User Action**: View opportunities, apply for positions

### News Page
- **Features**: Article/blog listing, possibly with filtering
- **User Action**: Read updates, view recent news

### Product/Services Pages
- **Features**: Detailed listings, potentially with filtering/search
- **User Action**: Browse offerings, view details

### Projects Page
- **Features**: Portfolio showcase, case studies
- **User Action**: View completed work, results

### Videos Page
- **Features**: Media gallery, video player
- **User Action**: Watch promotional/educational content

### Legal Pages (Protection, Privacy, Terms)
- **Features**: Static content, legal documentation
- **User Action**: Read and review policies

## Layout System

All pages (except PageNotFound) are wrapped with the `Layout` component which:
- Provides consistent header/footer across pages
- Displays navigation relevant to current page
- Receives `currentPageName` prop for context-aware rendering
- Maintains site-wide UI consistency

## Performance Considerations

- All page components use **lazy loading** with React's `lazy()` function
- **Suspense** boundary displays a loading spinner during route transitions
- Route-based code splitting ensures optimal bundle size
- Each page component is loaded only when accessed