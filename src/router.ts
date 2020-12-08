import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/column/:id',
        name: 'column',
        component: Column
    },
    {
        path: '/create',
        name: 'create',
        component: CreatePost
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router