# Nuxt Starter Template

A modern, feature-rich starter template for Nuxt applications, designed with best practices and developer experience in mind.

## Features

- 🚀 Nuxt 3/4 with Vue 3 Composition API
- 🎨 Nuxt UI & Nuxt UI Pro components
- 💅 Tailwind CSS v4 for styling
- 🔤 Nuxt Fonts for typography
- 🖼️ Nuxt Image for optimized images
- 🔍 TypeScript for type safety
- 📊 Directus integration for headless CMS

## Quick Start

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

Your application will be available at http://localhost:3000.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Run linting
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run tests

## Project Structure

```
starter-template/
├── app/                    # Application source code
│   ├── app.config.ts       # App configuration
│   ├── app.vue             # Main Vue component
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── components/         # Vue components
│   ├── composables/        # Composable functions
│   ├── layouts/            # Layout components
│   ├── pages/              # Page components (auto-routed)
│   └── plugins/            # Vue plugins
├── modules/                # Custom Nuxt modules
├── public/                 # Public assets (served at root path)
├── server/                 # Server-side code
├── types/                  # TypeScript type definitions
├── .env                    # Environment variables
├── .nuxt/                  # Nuxt build directory (generated)
├── .output/                # Nuxt output directory (generated)
├── eslint.config.mjs       # ESLint configuration
├── nuxt.config.ts          # Nuxt configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## Development Guidelines
- Use Vue 3 Composition API with TypeScript
- Follow Nuxt 4 directory structure
- Use Nuxt UI and Nuxt UI Pro components
- Use Tailwind utility classes for styling
- Follow naming conventions (PascalCase for components, camelCase for functions/variables, kebab-case for props)
- Write accessible components
- Use async/await with proper error handling
- Leverage auto-imports provided by Nuxt

## License

[MIT](LICENSE)

---

Built with ❤️ using Nuxt
# buechl
