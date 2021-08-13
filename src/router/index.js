import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'
import Eventos from '../components/Eventos.vue'
import Mapa from '../components/Mapa.vue'
import Login from '../views/Login.vue'
// import store from '../store'
import NotFound from '../views/NotFound.vue'



const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear,
    meta: { requireAuth: true }
  },
  {
    //colocamos /:id para recibir el parametro
    path: '/editar/:id',
    name: 'Editar',
    component: Editar,
    meta: { requireAuth: true }
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar,
    meta: { requireAuth: true }
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: Eventos,
    meta: { requireAuth: true }
  },
  {
    path:'/mapa/:id',
    name: 'Mapa',
    component: Mapa,
    meta: { requireAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requireAuth)){
    if (!sessionStorage.getItem('token')){
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
