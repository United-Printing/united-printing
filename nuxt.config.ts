export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      Montserrat: [200, 300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'United Printing Company',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Charlotte\'s top commercial printer. Veteran-owned, sustainable, and dedicated to quality since 1996. Digital, offset, wide format printing and more.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=AW-10880773539', async: true },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtagRef=gtag;gtag('js',new Date());gtag('config','AW-10880773539');`,
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  routeRules: {
    '/about-us': { redirect: '/about' },
    '/request-quote': { redirect: '/quote' },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://united-printing-backend.vercel.app/api',
    },
  },

  image: {
    quality: 80,
    format: ['webp', 'png', 'jpg'],
  },
})
