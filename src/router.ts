import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import store from './store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            redirectAlreadyLogin: true
        }
    },
    {
        path: '/column/:id',
        name: 'column',
        component: Column
    },
    {
        path: '/create',
        name: 'create',
        component: CreatePost,
        meta: {
            requiredLogin: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiredLogin && !store.state.user.isLogin) {
        next({ name: 'login' })
    } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
        next('/')
    } else {
        next()
    }
})

export default router