// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
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
  css: [],
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@vueuse/nuxt", "@pinia/nuxt", "nuxt-svgo"],
  tailwindcss: {
    cssPath: ["./assets/css/tailwind.css", { injectPosition: "first" }],
    viewer: true,
    exposeConfig: true,
    editorSupport: true,
  },
  svgo: {
    autoImportPath: "./assets/icons",
    componentPrefix: "icon",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
