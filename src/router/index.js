import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () =>
            import ('views/home/home.vue')
    },
    {
        path: '/message',
        component: () =>
            import ('views/message/message.vue')
    },
    {
        path: '/selec',
        component: () =>
            import ('views/select/selec.vue')
    }, {
        path: '/user',
        component: () =>
            import ('views/user/user.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router