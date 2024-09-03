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
      component: PurchaseView,
      children:[
        // {path:'/purchase/home',component:HomePlan,name:'homePlan'},
        // {path:'/purchase/business',component:BusinessPlan,name:'businessPlan'},
        // {path:'/purchase/student',component:StudentPlan,name:'studentPlan'},
      ]
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
      children:[
        {path:'/support/general',component:GeneralFAQ,name:'general'},
        {path:'/support/installations_and_setup',component:Installation_setup_FAQ,name:'installations_and_setup'},
        {path:'/support/technical_issues',component:TechnicalIssuesFAQ,name:'technical_issues'},
        {path:'/support/security',component:SecurityFAQ,name:'security'},
        {path:'/support/router',component:RouterFAQ,name:'router'},
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
    },
    {
      path: '/support_form',
      name: 'support_form',
      redirect:'/contacts'
    }
  ],
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // console.log(router.getRoutes())
  let arr_routes = []
  router.getRoutes().forEach((element)=>{
    arr_routes.push(element.path)
  })
  if(!arr_routes.includes(to.path)){
    next('/')
  }else{
    next()
  }

})

export default router

