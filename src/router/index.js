import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import HistoryView from '@/views/HistoryView.vue';
import ClientView from '@/views/ClientView.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView,
    props:{
      backStyle: false,
    }
  },
  {
    path: '/client/:nombre',
    name: 'client',
    component: ClientView,
    props:(route)=>({
      client:`${route.params.nombre} s.a`,
      otra: '',
    }),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
