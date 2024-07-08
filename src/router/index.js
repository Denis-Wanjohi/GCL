import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PurchaseView from '../views/PurchaseView.vue'
import SupportView from '../views/SupportView.vue'
import axios from 'axios';
import AboutView from '@/views/AboutView.vue';
import ContactsView from '../views/ContactsView.vue'
import CoverageView from '../views/CoverageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'Aboutus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: PurchaseView
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/coverage',
      name: 'coverage',
      component: CoverageView
    }
  ]
})

export default router

