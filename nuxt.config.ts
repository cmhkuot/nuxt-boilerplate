import tailwindcss from "@tailwindcss/vite";

const siteMeta = {
  title: "Nuxt Boilerplate",
  description: "Nuxt Boilerplate - A starting point for Nuxt projects",
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-10-04",
  devtools: { enabled: true },
  // debug: true, // Uncomment this line to enable debug mode
  devServer: { https: true },
  // ssr: false, // Uncomment this line to disable server-side rendering
  app: {
    rootTag: "app",
    head: {
      title: siteMeta.title,
      meta: [
        { name: "description", content: siteMeta.description },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxt/eslint", "@vueuse/nuxt", "@pinia/nuxt", "nuxt-svgo"],
  vite: {
    plugins: [tailwindcss()],
  },
  svgo: {
    autoImportPath: "~/assets/icons",
    componentPrefix: "icon",
  },
  pinia: {
    storesDirs: ["~/stores/**"],
  },
});
