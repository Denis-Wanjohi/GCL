import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PurchaseView from '../views/PurchaseView.vue'
import SupportView from '../views/SupportView.vue'
import AboutView from '@/views/AboutView.vue';
import ContactsView from '../views/ContactsView.vue'
import CoverageView from '../views/CoverageView.vue'
import GeneralFAQ from '@/views/FAQS/GeneralFAQ.vue';
import SecurityFAQ from '@/views/FAQS/SecurityFAQ.vue';
import TechnicalIssuesFAQ from '@/views/FAQS/TechnicalIssuesFAQ.vue';
import Installation_setup_FAQ from '@/views/FAQS/Installation_setup_FAQ.vue';
import RouterFAQ from '@/views/FAQS/RouterFAQ.vue';

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
      component: SupportView,
      children:[
        {path:'/support',component:GeneralFAQ,name:'general'},
        {path:'/general',component:GeneralFAQ,name:'general'},
        {path:'/installations_and_setup',component:Installation_setup_FAQ,name:'installations_and_setup'},
        {path:'/technical_issues',component:TechnicalIssuesFAQ,name:'technical_issues'},
        {path:'/security',component:SecurityFAQ,name:'security'},
        {path:'/router',component:RouterFAQ,name:'router'},
      ]
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
  ],
})

export default router

