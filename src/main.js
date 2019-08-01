import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'
import './assets/font/_flaticon.scss'

Vue.use(require('vue-moment'));
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
