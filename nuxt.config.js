export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // css files
    '@/assets/less/antd.less',
    '@/assets/css/tailwind.css',
    '@/assets/css/animate.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /(^|\.)fa-/, /-fa($|\.)/, /(^|\.)ant-/],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '@/plugins/_',
    '@/plugins/antd-ui',
    '@/plugins/vue-rx',
    '@/plugins/fa-icon',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  styleResources: {
    // :warning: You cannot use path aliases here (~ and @)
    scss: ['./assets/scss/*.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    // improve build speed (beta)
    // parallel: true,
    cache: true,
    // hardSource: true,
    // // //

    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
    loaders: {
      less: {
        lessOptions:{
          javascriptEnabled: true,
        }
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      //
    },
  },
}
