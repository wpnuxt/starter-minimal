import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-04-15',
  devtools: { enabled: true },
  modules: ['@wpnuxt/core', '@nuxt/eslint'],
  css: ['~/assets/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  wpNuxt: {
    cache: {
      enabled: true,
      maxAge: 300,
      swr: true
    }
  }
})
