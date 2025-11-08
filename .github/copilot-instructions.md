# Copilot Instructions for Rovers Work Web

## Project Overview
**rovers.work** is a Next.js 16.0.1 application serving as an in-universe "remote operations portal" for Universal Opportunities, a megacorporation that contracts humans on Earth to control mining rovers on distant planets. The app uses App Router architecture with React 19, TypeScript, and React Compiler for optimal performance in this corporate dashboard environment.

## Business Context & Theme
- **In-Universe Company**: Universal Opportunities (megacorporation)
- **Purpose**: Remote operations portal for controlling mining rovers on distant planets
- **UI Theme**: Corporate dashboard with friendly/polished surface hiding dystopian undertones
- **Domain**: https://rovers.work (reinforces "remote work" theme)

## Architecture & Structure
- **Framework**: Next.js with App Router (`src/app/` directory)
- **Real-time Graphics**: PixiJS for satellite map rendering with pan/zoom/tiles
- **Real-time Data**: WebSockets for rover status, market updates, fabrication progress
- **Styling**: CSS Modules with CSS custom properties for corporate theming
- **Fonts**: Geist Sans and Geist Mono from `next/font/google`
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **React Compiler**: Enabled in `next.config.ts` for optimal dashboard performance

## Key Development Patterns

### Component Structure
- Use CSS Modules (`.module.css`) for component-specific styling
- Follow the pattern in `src/app/page.tsx` and `src/app/page.module.css`
- Implement responsive design with mobile-first approach (see media queries in `page.module.css`)

### Theming System
- CSS custom properties defined in `globals.css` with automatic dark mode support
- Use `prefers-color-scheme: dark` media queries for theme switching
- Component-level custom properties in CSS Modules for local theming

### Font Loading
- Use `next/font/google` for web fonts with `variable` property for CSS custom properties
- Apply font variables to body element in `layout.tsx`: `${geistSans.variable} ${geistMono.variable}`
- Reference fonts in CSS with `font-family: var(--font-geist-sans)`

## Development Workflow

### Commands
```bash
npm run dev      # Start development server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint with Next.js configuration
```

### ESLint Configuration
- Uses modern `eslint.config.mjs` with flat config
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Custom global ignores for build directories

## File Organization
- All source code in `src/` directory
- App Router pages/layouts in `src/app/`
- Static assets in `public/` (SVG icons included)
- TypeScript strict mode with bundler module resolution
- React JSX transform enabled

## Performance Considerations
- React Compiler enabled for automatic optimizations
- Next.js Image component used for optimized images
- Font optimization with `next/font/google`
- CSS custom properties for efficient theming

## Core Application Features
- **Rovers**: Fleet management, individual rover HUD, real-time satellite maps (PixiJS)
- **Planets**: Planet overview, sector maps, inter-planetary travel system
- **Market**: Dynamic pricing system, resource trading
- **Fabrication**: Production queues, crafting recipes at outposts
- **Company Board**: Daily/weekly contracts and tasks from Universal Opportunities
- **Profile**: Operator certifications, statistics, performance metrics

## UI/UX Guidelines
- **Corporate Dashboard Aesthetic**: Clean, professional, slightly sterile
- **Friendly Dystopia**: Warm branding hiding exploitative undertones
- **Real-time Updates**: Live rover status, market fluctuations, production progress
- **Multi-rover Management**: Operators can control multiple rovers across planets
- **Mobile-responsive**: Operators need access from various devices

## When Adding New Features
- Create new routes as directories under `src/app/`
- Use CSS Modules for component styling with corporate color schemes
- Implement real-time data flows with WebSockets where appropriate
- Consider PixiJS integration for map-based features
- Maintain the "friendly corporate" tone in all UI text
- Ensure responsive design for mobile rover management
- Leverage React Compiler optimizations (avoid manual memoization unless necessary)