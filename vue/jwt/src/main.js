import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(iView)

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  let needLogin = to.matched.some(item => item.meta.needLogin)
  let isLogin = await store.dispatch("validate")
  if (needLogin) {
    if (isLogin) {
      next()
    } else {
      next("/login")
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')