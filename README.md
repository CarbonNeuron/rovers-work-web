# 🚀 rovers.work - Universal Opportunities Remote Operations Portal

A Next.js web application serving as an in-universe "remote operations portal" for **Universal Opportunities**, a fictional megacorporation that contracts humans on Earth to control mining rovers on distant planets.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![React](https://img.shields.io/badge/React-19-blue)
![Material-UI](https://img.shields.io/badge/Material--UI-7-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🌌 Concept & Theme

**rovers.work** presents a corporate dashboard with friendly/polished surface hiding dystopian undertones. The application simulates a remote work environment where Earth-based operators control mining rovers across the galaxy through Universal Opportunities' proprietary systems.

### Key Features

- 🛰️ **Fleet Management**: Real-time rover status monitoring and control
- 🗺️ **Interactive Maps**: PixiJS-powered satellite maps with pan/zoom/tiles
- 📊 **Market System**: Dynamic pricing and resource trading
- 🏭 **Fabrication Control**: Production queues and crafting management
- 📋 **Company Board**: Daily/weekly contracts and corporate tasks
- 👤 **Operator Profiles**: Certifications, statistics, and performance metrics
- 🌍 **Multi-Planetary**: Operations across different planetary sectors

## 🛠️ Technology Stack

- **Framework**: Next.js 16.0.1 with App Router
- **UI Library**: Material-UI v7 with custom theming
- **Styling**: CSS Modules + MUI sx props
- **Graphics**: PixiJS for real-time map rendering
- **Real-time**: WebSockets for live data updates
- **Language**: TypeScript with strict mode
- **Fonts**: Geist Sans and Geist Mono
- **Performance**: React Compiler enabled
- **Deployment**: Docker + GitHub Actions CI/CD

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Docker (optional, for containerized deployment)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/CarbonNeuron/rovers-work-web.git
cd rovers-work-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the Universal Opportunities portal.

### Available Scripts

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint with Next.js configuration
npm run format       # Format code with Prettier
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
```

## 🏗️ Architecture

### Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── (routes)/          # Application routes
│   │   ├── portal/        # Operations dashboard
│   │   ├── rovers/        # Fleet management
│   │   ├── planets/       # Planetary operations
│   │   ├── market/        # Trading interface  
│   │   ├── fabrication/   # Production control
│   │   └── profile/       # Operator management
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── not-found.tsx      # Custom 404 page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Sidebar navigation
│   ├── DashboardLayout.tsx# Layout wrapper
│   ├── MUISetup.tsx      # Theme configuration
│   └── ThemeSwitcher.tsx # Dark/light mode toggle
├── theme/                # Material-UI theming
│   └── theme.ts          # Custom theme configuration
└── types/                # TypeScript type definitions
```

### Key Components

- **Navigation**: Responsive sidebar with corporate branding and gradient effects
- **DashboardLayout**: Main layout wrapper with proper spacing and mobile support
- **ThemeSwitcher**: Seamless light/dark mode transitions
- **MUISetup**: Theme provider with SSR support and color scheme management

## 🎨 Design System

### Brand Colors

- **Primary**: Blue gradient (`#2563eb` to `#10b981`)
- **Corporate**: Dark slate backgrounds (`#1e293b`, `#0f172a`)
- **Accents**: Professional greys and subtle blue highlights

### Typography

- **Primary Font**: Geist Sans (modern, clean)
- **Monospace**: Geist Mono (technical interfaces)
- **Gradient Text**: Applied to "Universal Opportunities" branding

### Theme Features

- Automatic dark/light mode detection
- CSS custom properties for consistent theming
- SSR-compatible styling patterns
- Mobile-first responsive design

## 🐳 Docker Deployment

### Local Docker

```bash
# Build and run locally
npm run docker:build
npm run docker:run
```

### Production Deployment

The application includes a complete CI/CD pipeline with GitHub Actions:

- **Automated builds** on push to main
- **Docker image creation** with multi-stage optimization
- **Security scanning** and dependency auditing
- **Artifact attestation** for supply chain security

## 🔧 Configuration

### Environment Variables

Create `.env.local` for development:

```bash
# Add any required environment variables here
NEXT_PUBLIC_API_BASE_URL=https://api.rovers.work
```

### Theme Customization

Modify `src/theme/theme.ts` to customize:
- Color schemes
- Typography scales
- Component overrides
- Dark/light mode behaviors

## 📱 Features in Detail

### Responsive Design

- **Desktop**: Full sidebar navigation with detailed information
- **Mobile**: Collapsible drawer with touch-friendly interfaces  
- **Tablet**: Adaptive layouts that work across screen sizes

### Real-time Updates

- WebSocket integration for live rover status
- Dynamic market price updates
- Production queue monitoring
- System status indicators

### Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

## 🤝 Contributing

**Contributions are welcome and encouraged!** Help improve the Universal Opportunities remote operations experience while maintaining the corporate aesthetic and fictional universe integrity.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

- **Theme Consistency**: Maintain the "Universal Opportunities" corporate aesthetic
- **Code Quality**: Follow established TypeScript and React patterns
- **UI Standards**: Use Material-UI components with existing theme system
- **Compatibility**: Ensure SSR compatibility and cross-browser support
- **Testing**: Test functionality across light/dark themes and mobile devices
- **Documentation**: Update relevant documentation for new features

### Types of Contributions Welcome

- 🐛 **Bug Fixes**: Improve functionality and user experience
- ✨ **New Features**: Add to the rover operations ecosystem
- 🎨 **UI Improvements**: Enhance the corporate dashboard aesthetic  
- 📱 **Mobile Enhancements**: Improve responsive design
- 🔧 **Performance**: Optimize loading times and animations
- 📚 **Documentation**: Improve setup guides and code documentation
- 🧪 **Testing**: Add test coverage and quality assurance

### Fictional Universe Guidelines

When contributing, please respect the established lore:
- Maintain the "friendly dystopia" corporate tone
- Keep the space mining and remote operations theme
- Preserve the Universal Opportunities branding consistency
- Add features that fit the in-universe technology level

## 📄 License

This project is licensed under a **Custom Source-Available License with Commercial Protection** - see the [LICENSE](LICENSE) file for full details.

### License Summary

✅ **Allowed**:
- Personal and educational use
- Learning from and studying the code  
- Contributing improvements via pull requests
- Modifying for personal/educational purposes
- Redistributing under the same license

❌ **Restricted**:
- Commercial use without permission
- Creating competing commercial services
- Using Universal Opportunities branding commercially

**For Commercial Use**: Contact [@CarbonNeuron](https://github.com/CarbonNeuron) for licensing options.

## 🎯 Roadmap

- [ ] **PixiJS Integration**: Interactive planetary maps
- [ ] **WebSocket Backend**: Real-time data streaming
- [ ] **Authentication System**: Operator login and permissions
- [ ] **Mobile App**: React Native companion application
- [ ] **VR Interface**: Immersive rover control experience

## 📞 Support

For questions about this fictional universe or technical implementation:

- Create an issue in this repository
- Reference the in-universe documentation
- Follow Universal Opportunities corporate guidelines

---

*"Pioneering the future of deep space mining operations" - Universal Opportunities Remote Operations Division*
