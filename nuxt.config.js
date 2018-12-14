const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'SSNC',
    titleTemplate: '%s - SSNC',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#000'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/serial-checker'],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
   ** Generate configuration
   */
  generate: {
    dir: 'docs'
  },

  /*
   ** Router configuration
   */
  router: {
    base: '/ssnc/',
    routes: [
      {
        name: 'checker',
        path: `/`,
        component: 'pages/index.vue'
      },
      {
        name: 'checker',
        path: `/checker`,
        component: 'pages/index.vue'
      },
      {
        name: 'scanner',
        path: `/scanner`,
        component: 'pages/scanner.vue'
      }
    ]
  }
}
