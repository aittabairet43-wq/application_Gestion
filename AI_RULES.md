# Kinetiq Retail - AI Development Rules

## Tech Stack

- **React 18** - Frontend framework with TypeScript support
- **React Router** - Client-side routing for SPA navigation
- **SQLite + IndexedDB** - Local database hybrid architecture for offline functionality
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Material Symbols** - Icon library from Google
- **Zustand** - Lightweight state management for authentication and app state
- **sql.js** - SQLite database engine running in browser
- **IndexedDB** - Browser-based persistent storage
- **shadcn/ui** - Pre-built UI components library (when needed)

## Library Usage Rules

### Database Layer
- **Always use `dbService`** for all database operations
- **SQLite** for in-memory processing and complex queries
- **IndexedDB** for persistence and data backup
- **Never access database directly** - always use the service layer
- **Always call `dbService.save()`** after write operations to persist to IndexedDB

### State Management
- **Zustand** for authentication state (`useAuthStore`)
- **Local state** for component-specific data (useState, useEffect)
- **No Redux** - keep state management simple with Zustand

### UI Components
- **Tailwind CSS** for all styling and layout
- **Material Symbols** for all icons
- **shadcn/ui components** only when complex components are needed
- **Custom components** for business logic (POS, Inventory, etc.)
- **No Bootstrap** - stick to Tailwind CSS

### Routing
- **React Router** for all navigation
- **Route guards** using `isAuthenticated` from auth store
- **MainLayout** wrapper for authenticated routes
- **No page refreshes** - single page application approach

### Data Flow
- **Components** → **Services** → **Database**
- **Services** handle all database operations
- **Components** handle UI and user interactions
- **No direct database calls** from components

### File Structure
- **src/pages/** - Page components (POS, Inventory, Dashboard, etc.)
- **src/layouts/** - Layout components (MainLayout)
- **src/services/** - Database and API services
- **src/store/** - State management (Zustand stores)
- **src/utils/** - Utility functions and helpers

### Code Style
- **TypeScript** for all components and services
- **Functional components** with hooks
- **Descriptive variable names** in Arabic and English
- **Consistent RTL layout for Arabic interface
- **Error handling** with try/catch blocks for database operations

### Performance
- **Lazy loading** for routes when needed
- **Memoization** for expensive computations
- **Debouncing** for search inputs
- **Virtual scrolling** for large data lists