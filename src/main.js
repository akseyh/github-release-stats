import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faTag,
  faInfo,
  faUser,
  faCalendar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTag)
library.add(faInfo)
library.add(faUser)
library.add(faCalendar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import { 
  vsButton, 
  vsInput, 
  vsCard,
  vsList,
  vsAvatar
} from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(vsButton)
Vue.use(vsInput)
Vue.use(vsCard)
Vue.use(vsList)
Vue.use(vsAvatar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
