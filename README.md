

# Nuxt Boilerplate

![Nuxt](https://img.shields.io/badge/Nuxt-4%2B-00DC82?logo=nuxt.js&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3%2B-4FC08D?logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss&logoColor=white)

Personal Nuxt boilerplate for rapid project setup and best practices.

## Features

- Nuxt v4 (latest major)
- Vue 3
- TypeScript
- Tailwind CSS v4 (JIT mode)
- Pinia (state management)
- VueUse (composition utilities)
- SVGO integration
- Pre-configured ESLint & Prettier
- Example components, stores, and utilities

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **(Optional) Create a .env file:**
   ```bash
   cp .env.example .env
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your app.

## Usage

- Edit `app/app.vue` or add pages in `app/pages/` to start building your app.
- Add components in `app/components/`.
- Update global styles in `app/assets/css/tailwind.css`.
- Use Pinia stores in `app/stores/` and utilities in `app/utils/`.
- Add or update types in `app/types/`.

## Customization

- Update `nuxt.config.ts` and `tsconfig.json` as needed.
- Add environment variables in `.env` (see `.env.example` if available).
- Replace or extend the example components, stores, and utilities.

## Deployment

Deploy easily to [Vercel](https://vercel.com/) or your preferred platform.

## Project Structure

```
nuxt-boilerplate/
├── app/
│   ├── app.vue
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css
│   ├── components/
│   ├── pages/
│   ├── stores/
│   ├── types/
│   └── utils/
├── public/
├── nuxt.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Main Dependencies

- **Nuxt**: Vue framework for server-side rendering, static site generation, and more
- **Vue**: JavaScript framework
- **Pinia**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **VueUse**: Vue composition utilities
- **ESLint & Prettier**: Code linting and formatting
- **TypeScript**: Strongly typed language
- **SVGO**: SVG optimization

## License

This project is licensed under the terms found in the [LICENSE](./LICENSE) file.

## Author

Created by [Son H.Do](https://github.com/cmhkuot)
