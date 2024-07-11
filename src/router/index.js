import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomePage/homepage.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/login.vue')
        }
    ]
})


export default router