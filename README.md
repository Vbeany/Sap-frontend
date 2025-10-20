# README.md

## Development Commands

- `npm run dev` - Start development server with Vite and hot module replacement
- `npm run build` - Build for production using Vite
- `npm run lint` - Run ESLint to check code quality and style
- `npm run preview` - Preview the production build locally

## Live Server: https://student-analytics-platform.vercel.app/

## Architecture Overview

This is a React-based Student Analytics Platform (SAP) built with Vite, Tailwind CSS, and React 19. The application follows a simple client-side routing pattern without external routing libraries.

### Application Structure

- **App.jsx**: Main application component that handles page routing via local state (`currentPage`)
- **HomePage.jsx**: Dashboard showing daily insights, tier statistics, and navigation to intervention tracking
- **InterventionTracking.jsx**: Table-based interface for managing student interventions with search and filtering

### Key Technical Details

- **Routing**: Custom state-based routing using `currentPage` state in App.jsx - no external router
- **Styling**: Tailwind CSS with custom tier-based color coding (Tier 3: red, Tier 2: yellow, Tier 1: green)
- **Icons**: Lucide React for consistent iconography throughout the application
- **Data**: Currently uses hardcoded sample data - real data integration pending

### Component Patterns

- Navigation handled via `onNavigate` prop passed down from App.jsx
- Consistent Tailwind styling with hover states and transitions
- Tier-based color coding system implemented in utility functions
- Responsive design with grid layouts and mobile-friendly navigation

### Development Notes

- ESLint configured with React hooks and refresh plugins
- Uses ES modules (`"type": "module"` in package.json)
- Tailwind configured to scan all JSX/TSX files in src directory
- No TypeScript - uses JavaScript with JSX throughout
