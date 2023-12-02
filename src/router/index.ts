import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import User from '@/views/User.vue'
import { computed } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/user',
    name:'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

export const currentRoute = computed(() => {
  return <string>router.currentRoute.value.name
})

