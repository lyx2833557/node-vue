import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import TopicView from '../views/TopicView'
import TopicsView from "../views/TopicsView"

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path:'/',
    component:MainView,
    children:[
      {
        path:'',
        component:HomeView,
        children:[
          {
            path:'',
            name:'home',
            component:TopicsView
          },
          {
            path:':tab',
            name:'topics',
            props:true,
            component:TopicsView
          }
        ]
      },{
        path:'/topic/:id',
        props:true,
        name:'topic',
        component:TopicView
      }
    ]
  },


]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
