module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'delway-frontend',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  css: [
    '@/theme/style.scss',
  ],

  modules: [
    'nuxt-svg-loader',
  ],

  plugins: [
    '@/plugins/Vuelidate',
    // {src: '@/plugins/vuikit', ssr: false},
  ],

  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)|(\.svg$)/ /* <--- here */
        })
      }
    }
  }
}

