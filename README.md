# Nuxt Boilerplate

![Nuxt](https://img.shields.io/badge/Nuxt-4%2B-00DC82?logo=nuxt.js&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3%2B-4FC08D?logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss&logoColor=white)

Personal Nuxt 4 boilerplate — batteries-included starting point for any project type.

## Features

- **Nuxt 4** + Vue 3.5 + TypeScript
- **Tailwind CSS v4** with Vite plugin + `clm()` class-merge utility
- **Pinia** state management (store auto-import)
- **VueUse** composition utilities
- **nuxt-svgo** — SVG auto-import from `app/assets/icons/` with `<Icon>` component
- **ESLint + Prettier** pre-configured
- **Husky + lint-staged** — pre-commit hook runs ESLint + Prettier on staged files only
- **Default layout** with header/footer skeleton
- **Error pages** — `error.vue` (404 & 500) + `[...slug].vue` catch-all
- **`useSeo()`** — per-page title, description, OG tags, Twitter card, canonical URL
- **`useApi()`** — `$fetch` wrapper with base URL + auth token injection
- **Auth middleware** example — route guard template using `definePageMeta`

## Start a New Project

**Option 1 — GitHub CLI** (creates a new repo from this template):

```bash
gh repo create my-project --template cmhkuot/nuxt-boilerplate --clone
cd my-project && npm install
```

**Option 2 — degit** (local only, no git history):

```bash
npx degit cmhkuot/nuxt-boilerplate my-project
cd my-project && npm install
```

**Option 3 — Nuxt CLI**:

```bash
npx nuxi init my-project --template gh:cmhkuot/nuxt-boilerplate
```

> To enable the "Use this template" button on GitHub, go to **Settings → Template repository**.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env

# 3. Start development server
npm run dev
```

Open [https://localhost:3000](https://localhost:3000) (HTTPS is enabled by default).

## Environment Variables

| Variable                   | Description                    | Default            |
| -------------------------- | ------------------------------ | ------------------ |
| `NUXT_PUBLIC_API_BASE_URL` | API server base URL            | `""`               |
| `NUXT_PUBLIC_SITE_URL`     | Site URL for canonical/OG tags | `""`               |
| `NUXT_PUBLIC_APP_NAME`     | App display name in layout     | `Nuxt Boilerplate` |

## Project Structure

```
app/
├── assets/
│   ├── css/tailwind.css       # Tailwind entry
│   └── icons/                 # SVG icons (auto-imported as <Icon name="...">)
├── components/
│   └── Icon.vue               # SVG icon wrapper
├── composables/
│   ├── useApi.ts              # $fetch wrapper with auth + error handling
│   └── useSeo.ts              # Per-page SEO (title, OG, Twitter card, canonical)
├── layouts/
│   └── default.vue            # Default layout (header + slot + footer)
├── middleware/
│   └── auth.ts                # Route guard example
├── pages/
│   ├── index.vue              # Home page
│   └── [...slug].vue          # 404 catch-all
├── stores/
│   └── app.ts                 # Global Pinia store
├── types/
│   └── svg.d.ts               # SVG type declarations
├── utils/
│   ├── clm.ts                 # clsx + tailwind-merge helper
│   └── index.ts               # Shared utilities
├── app.vue                    # App root
└── error.vue                  # Error boundary (404 / 500)
```

## Conventions

### Pages & Layouts

Pages use the `default` layout automatically. Override per-page:

```vue
<script setup>
definePageMeta({ layout: "custom" });
</script>
```

### SEO

```vue
<script setup>
useSeo({
  title: "My Page",
  description: "Page description",
  image: "https://example.com/og.png",
});
</script>
```

### API Calls

```vue
<script setup>
const { $api } = useApi()
const users = await $api<User[]>('/users')
</script>
```

### Protected Routes

```vue
<script setup>
definePageMeta({ middleware: "auth" });
</script>
```

### SVG Icons

Place `.svg` files in `app/assets/icons/` and use:

```vue
<Icon name="my-icon" />
```

### Class Merging

```ts
import { clm } from "~/utils/clm";
const cls = clm("px-4 py-2", isActive && "bg-blue-500", props.class);
```

## Scripts

| Command            | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `npm run dev`      | Start dev server (HTTPS)                                     |
| `npm run build`    | Build for production                                         |
| `npm run preview`  | Preview production build                                     |
| `npm run generate` | Static site generation                                       |
| `npm run prepare`  | Install Husky hooks (runs automatically after `npm install`) |

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
