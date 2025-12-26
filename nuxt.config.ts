// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui", // Handles Tailwind v4 automatically
    "@nuxt/fonts"
  ],
  css: ["~/assets/css/main.css"], //This is important
  ui: {
    prefix: "U",
  },
    fonts: {
    families: [
      {
        name: 'DM Sans',
        provider: 'google',
        weights: [400, 500, 600, 700]
      }
    ]
  }
});
