import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const BoardVue = () => import(/* webpackChunkName: "board" */ '@/components/section/board/BoardVue.vue')
const PostViewerVue = () => import(/* webpackChunkName: "post" */ '@/components/section/post/PostViewerVue.vue')

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
    component: import(/* webpackChunkName: "editor" */ '@/components/section/toastui/ToastEditor.vue')
  },
  {
    path: '/viewer',
    name: 'viewer',
    component: import(/* webpackChunkName: "editor" */ '@/components/section/toastui/ToastViewer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
