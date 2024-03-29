import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import scrollAnimate from "./directives/scrollAnimate";
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.directive('scrollAnimate', scrollAnimate)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
