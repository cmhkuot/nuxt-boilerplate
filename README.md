# Nuxt Boilerplate

A modern, feature-rich Nuxt 3 starter template with essential configurations and tools pre-installed for rapid development.

![Nuxt Version](https://img.shields.io/badge/Nuxt-latest-00DC82)
![Vue Version](https://img.shields.io/badge/Vue-latest-4FC08D)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.x-38B2AC)

## Features

- ⚡️ [Nuxt v4](https://nuxt.com/) - The Intuitive Vue Framework (latest major)
- 💨 [Tailwind CSS v4](https://tailwindcss.com/) with jit mode for rapid styling
- 🍍 [Pinia](https://pinia.vuejs.org/) - The intuitive store for Vue.js
- 🧩 [VueUse](https://vueuse.org/) - Collection of essential Vue Composition Utilities
- 📦 [SVGO](https://github.com/svg/svgo) integration via nuxt-svgo
- 🔍 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code linting and formatting

## Quick Start

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm, pnpm, or yarn

### Setup

1. Clone this repository

```bash
git clone https://github.com/yourusername/nuxt-boilerplate.git my-project
cd my-project
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file based on `.env.example` if needed

```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Your application will be available at `http://localhost:3000` (HTTPS may require additional setup).

## Project Structure

```
.
├── assets/             # Static assets like CSS and SVG icons
├── components/         # Vue components
├── pages/              # Application pages and routes
├── public/             # Public static assets
├── stores/             # Pinia stores
├── types/              # TypeScript type declarations
├── utils/              # Utility functions
├── app.vue             # Main application component
├── nuxt.config.ts      # Nuxt configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

## Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build locally
- `npm run postinstall` - Run Nuxt preparations after installing dependencies

## Main Dependencies

- **Nuxt**: Vue framework for server-side rendering, static site generation, and more
- **Vue**: Progressive JavaScript framework
- **Pinia**: State management solution
- **Tailwind CSS**: Utility-first CSS framework
- **VueUse**: Collection of Vue Composition API utilities
- **ESLint & Prettier**: Code linting and formatting
- **TypeScript**: Strongly typed programming language
- **SVGO**: SVG optimization tool

## License

This project is licensed under the terms found in the [LICENSE](./LICENSE) file.

## Author


Created by [cmhkuot](https://github.com/cmhkuot)
