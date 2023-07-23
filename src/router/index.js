import { createRouter, createWebHistory } from 'vue-router'
import ConsultView from '../views/ConsultView.vue'
import AlertView from '../views/AlertView.vue'
import ModelsView from "../views/ModelsView.vue"
import ModelFormView from "../views/ModelFormView.vue"
import LoginView from "../views/LoginView.vue"
import UserFormView from "../views/UserFormView.vue"


const routes = [
  {
    path: '/consulta',
    name: 'consulta',
    component: ConsultView
  },
  {
    path: '/',
    name: 'AlertView',
    component: AlertView
  },
  {
    path: '/usuario/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/usuario/cadastro',
    name: 'UserFormView',
    component: UserFormView
  },
  {
    path: '/modelos',
    name: 'ModelsView',
    component: ModelsView
  },
  {
    path: '/modelos/cadastro',
    name: 'ModelFormView',
    component: ModelFormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
