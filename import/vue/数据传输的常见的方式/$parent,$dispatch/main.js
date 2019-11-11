import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$dispatch = function(eventName,value){
  let parent = this.$parent
    while(parent){
      parent.$emit(eventName,value)
      parent = parent.$parent
    }
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
