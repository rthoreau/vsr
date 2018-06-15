import Vue from 'vue'
import App from './App.vue'
import VueSessionStorage from 'vue-sessionstorage'
import router from './router'

Vue.use(VueSessionStorage)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
