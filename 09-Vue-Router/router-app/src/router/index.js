import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Students from '../views/Students.vue'
import StudentsLesson from '../views/StudentLesson.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('../views/Students.vue')
  },
  {
    path: '/studentlesson',
    name: 'studentlesson',
    component: () => import('../views/StudentLesson.vue')
  },
  {
    path: '/students/:id',
    name: 'studentInfo',
    component: () => import('../views/StudentInfo.vue'),
    props: true
  },
  {
    path: '/lesson',
    name: 'lessonInfo',
    component: () => import('../views/LessonInfo.vue'),
    props: true
  },
  {
    path: '/student',
    redirect: '/students'
    // ? harf yanlışı olan bir path gelirse istediğimiz yere yönlendirmek için redirect kullanırız.
  },
  {
    path: '/:catchAll(.*)',
    // ? 404 sayfasını dinamik olarak göstermek için kullanıldı.
    name: 'notFound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
