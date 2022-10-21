import { i18nConfig } from './src/plugins/i18n';
import envConfig from './webpack.env';

// 自動導入
const autoImportOpts = {
  imports: [
    'vue',
    'vue-router',
    'pinia',
    {},
  ],
  dts: './auto-imports.d.ts',
}

export default {
  srcDir: 'src',
  mode: 'universal',
  head: {
    title: envConfig.env.TITLE,
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
        content: envConfig.env.DESCRIPTION
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
  /**
   * Env Variables
   */
  env: envConfig.env,
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
    '~/plugins/axios.js',
    '~/plugins/i18n.js',
    { src: '~/plugins/remock.js', mode: 'client'},
  ],
  // auto import global component: https://github.com/nuxt/components
  components: true,
  // for dev
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
    // Nuxt 2 only:
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
    ['unplugin-auto-import/nuxt', autoImportOpts],
  ],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/i18n',i18nConfig],
  ],
  baseURL: `http://${process.env.HOST || "localhost"}:${
    process.env.PORT || 3000
  }`,
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:3000/api', // 目标服务器ip
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
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
    optimization: {
      splitChunks: { // 設定 Chunks 的最大和最小 size
        minSize: 10000,
        maxSize: 250000
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
}
