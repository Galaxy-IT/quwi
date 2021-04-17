export default {
  server: {
    host: '0.0.0.0',
    port: process.env.VUE_APP_BASE_PORT,
  },
  mode: 'universal',
  head: {
    title: 'Quwi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [

  ],

  plugins: [
    { src: '~/plugins/vuelidate' }
  ],

  components: true,

  buildModules: [

  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
  ],
  toast: {
    position: 'bottom-right',
    options: {
      type: 'show',
      duration: 400
    }
  },

  styleResources: {
    scss: [
      '~/assets/css/default/utils/vars.scss',
    ],
  },

  build: {
  },

}
