import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-10-04",
  devtools: { enabled: true },
  // debug: true, // Uncomment this line to enable debug mode
  devServer: { https: true },
  // ssr: false, // Uncomment this line to disable server-side rendering
  app: { rootTag: "app" },
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
