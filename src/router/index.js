import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const BoardVue = () => import(/* webpackChunkName: "board" */ '@/components/layout/section/board/BoardVue.vue')
const PostViewerVue = () => import(/* webpackChunkName: "post" */ '@/components/layout/section/post/PostViewerVue.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/board',
        name: 'board',
        component: BoardVue
      },
      {
        path: '/post/:postId',
        name: 'post',
        component: PostViewerVue
      }
    ]
  },
  {
    path: '/editor',
    name: 'editor',
    component: import(/* webpackChunkName: "editor" */ '@/components/layout/section/toastui/ToastEditor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
