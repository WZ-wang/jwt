import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home"
import Profile from "../views/profile"
import Movie from "../views/movie"
import Login from "../views/login"
import watchRouter from "./hook"
Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    name:"home",
    component:Home,
    meta:{index:0,isSession:true}
  },
  {
    path:"/",
    redirect:"/home",
  },
  {
    path:"/profile",
    name:"profile",
    component:Profile,
    meta:{index:1,isSession:true}
  },
  {
    path:"/movie",
    name:"movie",
    component:Movie,
    meta:{index:2,isSession:true,needLogin:true}
  },
  {
    path:"/login",
    name:"login",
    component:Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.values(watchRouter).forEach(item=>router.beforeEach(item))

export default router
