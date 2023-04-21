import home from '@/views/home/index.vue'
import mine from '@/views/mine/index.vue'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            title: '',
            keepAlive: false
        }
    },
    {
        path: '/mine',
        name: 'mine',
        component: mine,
        meta: {
            title: '',
            keepAlive: false
        }
    },
]
const router = createRouter({
    history: createWebHistory(),
    // createWebHashHistory - 相当于mode:'hash'
    // createMemoryHistory - 处理SSR
    routes
})

export default router