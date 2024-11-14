# 🚀 SHR Technology AI Platform

A modern React-based platform offering specialized AI solutions for businesses, containerized with Docker for consistent development and deployment. 🌟

## 🐳 Docker Setup

### 🛠️ Development Environment
The application runs in a Docker container with hot-reload capabilities:
```bash
# Build and start the container 🏗️
docker-compose up --build

# Stop the container 🛑
docker-compose down

# View logs 📋
docker-compose logs -f
```

### ⚙️ Container Configuration
- Base image: Node 18 Alpine 🏔️
- Exposed port: 3000 (mapped to host port 3000) 🔌
- Working directory: /app 📁
- Development server: http://localhost:3000 🌐

### 📦 Volume Mappings
Development volumes for hot-reload:
```yaml
- ./src:/app/src
- ./public:/app/public
- ./package.json:/app/package.json
- ./tsconfig.json:/app/tsconfig.json
- ./tailwind.config.js:/app/tailwind.config.js
- node_modules:/app/node_modules
```

### 🔐 Environment Variables
```yaml
NODE_ENV=development
CHOKIDAR_USEPOLLING=true
```

## 🤖 AI Solutions

### 1. ✍️ Daria (Copywriting)
AI-powered content creation with multi-language support and performance tracking.

### 2. 📊 Arlo (Analytics)
Data analytics specialist providing ROI assessments and financial insights.

### 3. 🛍️ Nova (eCommerce)
eCommerce optimization through product descriptions and conversion enhancement.

### 4. 👥 Recruiting
Intelligent job posting assistance and candidate matching.

### 5. 🎨 Dizzy (Creative)
Visual storytelling and multimedia content creation specialist.

## 💻 Tech Stack
- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🔄 React Router
- 🐳 Docker + Docker Compose
- 🔄 GitHub Actions

## 📁 Project Structure
```
src/
├── components/
│   ├── solutions/           # 🤖 AI Solutions
│   │   ├── Arlo.tsx        # 📊 Analytics
│   │   ├── Daria.tsx        # ✍️ Copywriting
│   │   ├── Nova.tsx        # 🛍️ eCommerce
│   │   ├── Dizzy.tsx       # 🎨 Creative
│   │   └── Recruiting.tsx  # 👥 Recruiting
│   └── [other components]  # 🏗️ Core pages
```

## 🎯 Design System

### 🎨 Colors
The platform uses a consistent color scheme defined in Tailwind:
- Primary: shr-primary (brand primary color) 🔷
- Accent: shr-accent1 (complementary accent) 💫
- Text: shr-800 (headings), shr-700/80 (body), shr-700/70 (secondary) ✨
- Background gradients: from-white via-shr-50/30 to-shr-100/20 🌈

### 🧩 Component Patterns
Each solution follows a consistent structure:
- Hero section with gradient text and description 🦸‍♂️
- Statistics display in a 4-column grid 📊
- Feature showcase with icons and descriptions ✨
- Task examples in card format 📝
- Trust indicators and testimonials 🤝
- Call-to-action with gradient button 🎯

### 🔄 Shared Components
Common UI elements across solutions:
- Navigation bar with transparent/blur states 🧭
- Footer with solution links and company info 📚
- Card components with hover effects 🃏
- Gradient buttons with scale animations 🎨
- Icon containers with primary background 🎯

## 🧭 Navigation Structure
The platform uses a hierarchical navigation:
1. Main navigation (top bar) 🔝
   - Solutions
   - Pricing
   - About
   - Contact
2. Solutions grid (on Solutions page) 📱
   - Each AI solution with icon and description
3. Footer navigation 👣
   - Grouped by Solutions, Support, Company, Legal

## 👩‍💻 Development

### 🚀 Local Development with Docker
1. Clone the repository 📦
2. Ensure Docker and Docker Compose are installed 🐳
3. Run `docker-compose up --build` 🏗️
4. Access the application at http://localhost:3000 🌐
5. Changes to source files will trigger hot-reload 🔄

### 🎨 Styling Guidelines
- Use Tailwind utility classes 🎯
- Follow BEM-like naming for custom classes 📝
- Maintain consistent spacing with margin/padding scale 📏
- Use provided color variables for brand consistency 🎨
- Implement responsive design with Tailwind breakpoints 📱
- Apply hover/focus states for interactive elements ✨

### 🛣️ Routes
- `/`: Homepage 🏠
- `/solutions`: Solutions overview 🤖
- `/solutions/Daria`: Copywriting AI ✍️
- `/solutions/arlo`: Analytics AI 📊
- `/solutions/nova`: eCommerce AI 🛍️
- `/solutions/recruiting`: Recruiting AI 👥
- `/solutions/dizzy`: Creative AI 🎨
- `/pricing`: Pricing plans 💰
- `/about`: Company information ℹ️
- `/contact`: Contact form 📧

### 🏗️ Component Creation Guidelines
When creating new solution pages:
1. Follow the established component structure 📝
2. Use the shared color scheme and gradients 🎨
3. Maintain consistent spacing and grid layouts 📏
4. Include all standard sections (hero, stats, features, etc.) 📑
5. Add route to App.tsx and navigation links 🔗
6. Update Solutions.tsx grid and footer 🔄
7. Test changes in Docker development environment 🧪

## 🗺️ Implementation Roadmap

### 🔒 Phase 1: Security Enhancements
- [ ] Implement Helmet for security headers
- [ ] Add CAPTCHA to contact forms
- [ ] Set up Content Security Policy
- [ ] Create privacy policy page
- [ ] Implement secure form handling

### ♿ Phase 2: Accessibility Improvements
- [ ] Add ARIA labels to all interactive elements
- [ ] Implement keyboard navigation
- [ ] Fix color contrast issues
- [ ] Add alt text to all images
- [ ] Implement skip-to-main navigation

### ⚡ Phase 3: Performance Optimization
- [ ] Implement code splitting
- [ ] Add lazy loading for images
- [ ] Optimize component rendering
- [ ] Set up service worker for caching
- [ ] Implement progressive image loading

### 📝 Phase 4: Form Enhancement
- [ ] Add Formik validation
- [ ] Implement form submission feedback
- [ ] Add loading states
- [ ] Create error handling system
- [ ] Add form analytics

### 🛠️ Phase 5: Development Tools
- [ ] Set up ESLint configuration
- [ ] Implement Prettier
- [ ] Add Jest testing framework
- [ ] Set up Cypress for E2E testing
- [ ] Create CI/CD pipeline

### 🧪 Phase 6: Testing Implementation
- [ ] Create unit tests for components
- [ ] Implement integration tests
- [ ] Add accessibility testing
- [ ] Set up performance testing
- [ ] Create visual regression tests

### 📚 Phase 7: Documentation
- [ ] Update component documentation
- [ ] Create API documentation
- [ ] Add testing documentation
- [ ] Create deployment guides
- [ ] Document security practices

## 📄 License
Copyright © 2024 SHR Technology 🏢
