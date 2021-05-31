import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    // route level code-splitting
    // this generates a separate chunk (LifeCycle.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "LifeCycle" */ '@/components/LifeCycle.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
