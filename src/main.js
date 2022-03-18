import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
Vue.config.productionTip = false
Vue.filter("Ucase",function(val){
  return val.toUpperCase();
})
Vue.filter("currencyConverter",function(val){
  return val*180;
})
new Vue({
  render: h => h(App),
}).$mount('#app')