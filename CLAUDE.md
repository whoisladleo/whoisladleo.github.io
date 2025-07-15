# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based personal portfolio website built with Vite, TypeScript, and Tailwind CSS. The project uses shadcn/ui components and is designed to be deployed via Lovable.

## Key Technologies

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom color palette
- **UI Components**: shadcn/ui components (configured but not yet implemented)
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Package Manager**: pnpm (specified in package.json)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (port 3000)
pnpm dev

# Build for production
pnpm build

# Build for development
pnpm build:dev

# Lint code
pnpm lint

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── HowItWorksSection.tsx
│   ├── ServicesSection.tsx
│   └── WhyMeSection.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Main app component with routing
└── main.tsx            # Application entry point
```

## Architecture Notes

- **Single Page Application**: Uses React Router for client-side routing
- **Component Structure**: Main page (Index.tsx) imports section components for modularity
- **Styling Approach**: Uses Tailwind CSS with custom color variables defined in tailwind.config.ts
- **Custom Colors**: Uses a specific color palette (primary-blue, dark-slate, neutral-gray, etc.)
- **Path Aliases**: Uses "@" alias for src directory imports
- **Font**: Uses Afacad font family

## shadcn/ui Configuration

The project has shadcn/ui configured but no UI components are currently installed. Configuration is in `components.json` with:
- Components path: `@/components`
- Utils path: `@/lib/utils`
- UI components path: `@/components/ui`

## Development Notes

- The project uses Lovable for deployment and editing
- Custom domain can be connected via Lovable project settings
- Development server runs on port 3000 with host "::" for accessibility
- Uses SWC for faster React compilation
- No test framework is currently configured

## Custom Styling

The project uses a custom color palette defined in tailwind.config.ts:
- Primary blue: #3A6EA5
- Dark slate: #2C3E50
- Neutral gray: #6C7A89
- Light gray: #F5F7FA
- Soft blue: #E9EFF6