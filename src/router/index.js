import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Project from '../pages/Project.vue'
import Work from '../pages/Work.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project/:id', component: Project },
  { path: '/work/:id', component: Work }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
