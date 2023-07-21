import { createRouter, createWebHistory } from 'vue-router'
import ConsultView from '../views/ConsultView.vue'
import AlertView from '../views/AlertView.vue'
import ModelsView from "../views/ModelsView.vue"

const routes = [
  {
    path: '/consulta',
    name: 'consulta',
    component: ConsultView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'AlertView',
    component: AlertView
  },
  {
    path: '/modelos',
    name: 'ModelsView',
    component: ModelsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
