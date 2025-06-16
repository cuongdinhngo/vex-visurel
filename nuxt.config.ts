// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    'vuetify-nuxt-module',
    '@vueuse/nuxt'
  ],
  app: {
    baseURL: '/vex-visurel',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        }
      ]
    }
  },
  css: [
    '@/assets/styles/main.scss',
    'vuetify/lib/styles/main.sass'
  ],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: './vuetify.config.ts'
  }
})