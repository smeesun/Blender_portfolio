import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Project from '../pages/Project.vue'
import Work from '../pages/Work.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project', component: Project },
  { path: '/work', component: Work }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
