import { createRouter, createWebHistory } from "vue-router"

// import { BaseLayout } from '../layouts';

const routes = [
  { 
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/index.vue'),
  },
  { 
    path: "/serviceterms",
    name: "serviceterms",
    component: () => import(/* webpackChunkName: "Clause" */ '../views/Clause/index.vue'),
  },
  { 
    path: "/privacy",
    name: "privacy",
    component: () => import(/* webpackChunkName: "Privacy" */ '../views/Privacy/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
