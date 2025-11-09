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

## Contribution Workflow

### Before Making Changes
1. Install dependencies: `npm install`
2. Verify the build works: `npm run build`
3. Check code formatting: `npm run format:check`
4. Note: ESLint configuration may have issues - focus on TypeScript compiler errors

### During Development
1. Start dev server: `npm run dev` (http://localhost:3000)
2. Make small, incremental changes
3. Test changes manually in the browser
4. Verify responsive design (mobile, tablet, desktop)
5. Check both light and dark themes

### Before Committing
1. Format code: `npm run format`
2. Build the application: `npm run build` (fixes TypeScript errors)
3. Verify no build errors or warnings
4. Test critical user paths manually

## Testing Expectations

### Manual Testing Required
Since this project doesn't have automated tests yet, manual testing is critical:
- Test all modified pages and components
- Verify responsive design at different breakpoints (mobile: 375px, tablet: 768px, desktop: 1024px+)
- Test both light and dark themes
- Verify navigation and user flows work correctly
- Check console for errors or warnings
- Test on at least two different browsers (Chrome, Firefox, or Safari)

### Future Testing Goals
- Add Jest for unit tests
- Add React Testing Library for component tests
- Add Playwright or Cypress for E2E tests

## Code Quality Standards

### TypeScript
- Use strict TypeScript - no `any` types unless absolutely necessary
- Define proper interfaces and types for all props and data structures
- Use type inference where possible to reduce verbosity
- Prefer `interface` over `type` for object shapes

### React Patterns
- Use functional components with hooks (no class components)
- Follow React 19 best practices
- Leverage React Compiler optimizations (no manual `useMemo`/`useCallback` unless necessary)
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

### Styling
- Use CSS Modules for component-specific styles
- Follow existing naming conventions (camelCase for CSS class names)
- Use Material-UI components and theme system
- Leverage CSS custom properties for theming
- Ensure all styles work in both light and dark modes

### File Organization
- Place components in `src/components/`
- Place routes in `src/app/(dashboard)/` or appropriate route group
- Co-locate component styles (`.module.css`) with components
- Use absolute imports with `@/` prefix for cleaner imports

## Security Best Practices

### Code Security
- Never commit sensitive data, API keys, or credentials
- Use environment variables for configuration
- Validate and sanitize user input
- Follow OWASP security guidelines for web applications
- Be cautious with dynamic imports and external dependencies

### Dependencies
- Keep dependencies up to date
- Review security advisories regularly
- Use `npm audit` to check for vulnerabilities
- Only add dependencies when necessary

## Expected Pull Request Quality

### PR Description Should Include
- Clear description of what changed and why
- List of files modified and purpose of changes
- Screenshots for UI changes (light and dark themes)
- Testing steps performed
- Any breaking changes or migration notes

### Code Review Checklist
- Code follows established patterns and conventions
- TypeScript compiles without errors
- Code is formatted with Prettier
- No console errors or warnings
- Responsive design works correctly
- Both themes (light/dark) work properly
- Changes are minimal and focused
- Code is readable and maintainable

## Common Issues and Solutions

### Build Issues
- **TypeScript errors**: Run `npm run build` to see all errors
- **Module not found**: Verify import paths use `@/` prefix correctly
- **CSS Module types**: TypeScript automatically generates types for CSS Modules

### Development Server Issues
- **Port 3000 in use**: Kill the process or use a different port
- **Hot reload not working**: Restart the dev server
- **Changes not appearing**: Clear `.next` directory and rebuild

### Styling Issues
- **Theme not applying**: Ensure ThemeProvider wraps your component
- **Dark mode not working**: Check `prefers-color-scheme` media queries
- **CSS Module classes not found**: Verify import and class name match

## Project Priorities

### High Priority
1. Maintain existing functionality - don't break what works
2. Follow established code patterns and conventions
3. Ensure responsive design and theme compatibility
4. Keep the "Universal Opportunities" brand aesthetic

### Medium Priority
1. Improve code organization and maintainability
2. Add comments for complex logic
3. Optimize performance where possible
4. Enhance accessibility

### Low Priority (Don't focus on these unless specifically asked)
1. Refactoring working code for minor improvements
2. Adding new tooling or build processes
3. Changing established patterns without good reason