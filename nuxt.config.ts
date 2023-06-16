export default defineNuxtConfig({
  modules: ['nuxt-icon', '@pinia/nuxt', '@vueuse/nuxt'],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  runtimeConfig: {
    public: {
      LOCALE: 'ar',
      FALLBACK_LOCALE: 'ar',
    }
  },

  css: ["~/assets/scss/main.scss",'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],

  app: {
    layoutTransition: { name: 'slide-left', mode: 'out-in' },
    pageTransition: { name: 'fadeIn', mode: 'out-in' }
  },

  components: [
    {  path: '~/components',
    pathPrefix: false, },
    
  ],

  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },
})
