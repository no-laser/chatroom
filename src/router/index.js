import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomePage/homepage.vue'),
            children: [
                {
                    path: '/usermessage',
                    name: '用户消息',
                    component: () => import('@/views/UserMessage/index.vue')
                },
                {
                    path: '/userlist',
                    name: '联系人',
                    component: () => import('@/views/UserList/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/login.vue')
        },
        
    ]
})


export default router