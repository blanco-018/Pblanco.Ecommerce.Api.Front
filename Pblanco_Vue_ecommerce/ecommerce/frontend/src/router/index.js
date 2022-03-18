import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Cart from '../views/Cart.vue'
import Orders from '../views/Orders.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/order',
        name: 'Orders',
        component: Orders
    }
]

const router = new VueRouter({
    routes
})

export default router