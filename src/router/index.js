import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Orders from '../views/Orders.vue'
import Contact from '../views/Contact.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import UpdateAddress from '../views/UpdateAddress.vue'
import Register from '../views/Register.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/update_profile',
    name: 'UpdateProfile',
    component: UpdateProfile
  },
  {
    path: '/update_address',
    name: 'UpdateAddress',
    component: UpdateAddress
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/add_to_cart',
    name: 'AddToCar',
    component: Checkout
  },
  {
    path: '/quick_view',
    name: 'QuickView',
    component: Checkout
  },
  {
    path: '/category',
    name: 'Category',
    component: Checkout
  },
]

const history = createWebHistory();

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history,
  routes
})

export default router
