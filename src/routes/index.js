import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
        path: '/todolist',
        component: () => import('../components/Tododlist.vue')
    },
    {
        path: '/add',
        component: () => import('../components/Add.vue')
    },

]
const router = createRouter({
    // 指定路由的工作模式
    history: createWebHashHistory(process.env.BASE_URL),
    // 自定义路由高亮的 class 类
    // 声明路由的匹配规则
    routes
})

export default router