import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { vsButton, vsInput } from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(vsButton)
Vue.use(vsInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
