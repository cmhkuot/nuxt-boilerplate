import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-10-04",
  devtools: { enabled: true },
  devServer: { https: true },
  ssr: false,
  app: {
    rootTag: "app",
    head: {
      title: "Nuxt Boilerplate",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "description", content: "Nuxt Boilerplate" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico",
        },
      ],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxt/eslint", "@vueuse/nuxt", "@pinia/nuxt", "nuxt-svgo"],
  vite: {
    plugins: [tailwindcss()],
  },
  svgo: {
    autoImportPath: "./app/assets/icons",
    componentPrefix: "icon",
  },
  pinia: {
    storesDirs: ["./app/stores/**"],
  },
});
