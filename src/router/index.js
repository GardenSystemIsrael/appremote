import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'
import Eventos from '../components/Eventos.vue'
import Mapa from '../components/Mapa.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    //colocamos /:id para recibir el parametro
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: Eventos
  },
  {
    path:'/mapa',
    name: 'Mapa',
    component: Mapa
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
