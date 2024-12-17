// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  buildModules: ["@nuxtjs/axios", "@nuxt/typescript-build"],

  axios: {
    // Axios module configuration
    baseURL: "https://api.example.com", // Replace with your API base URL
  },

  modules: ["@pinia/nuxt"],
};
