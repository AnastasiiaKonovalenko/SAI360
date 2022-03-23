import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/page_main/Page.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/movie',
    name: 'MoviePage',
    component: () => import('../views/page_movie/Page.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
