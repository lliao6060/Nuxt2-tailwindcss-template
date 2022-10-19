import { i18nConfig } from './plugins/i18n';

export default {
  mode: 'universal',
  head: {
    title: 'Nuxt2 App',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'nuxt2 app description'
      },
    ],
    script: [
      {
        src: 'https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ],
  },
  loading: { color: '#fff' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/scss/app.scss'
  ],
  /**
   * Style resources(SCSS mixin)
   */
  styleResources: {
    scss: ['@/assets/scss/*.scss']
  },
  plugins: [
    { src: '~/plugins/i18n.js' }
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
    // Nuxt 2 only:
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/i18n',i18nConfig],
  ],
  axios: {
  },
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'tw',
    locales: [
      {
        code: 'en',
        iso: 'en_US',
        file: 'en_US',
      },
      {
        code: 'tw',
        iso: 'zh_TW',
        file: 'zh-TW',
      },
    ],
  },
  /*
   ** Build configuration
   */
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
}
