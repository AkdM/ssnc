import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      bootstrap: false,
      config: {
        id: 'UA-53685161-3'
      }
    },
    app.router
  )
}
