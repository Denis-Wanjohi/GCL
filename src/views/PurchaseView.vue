<template>
    <!-- FORM TO FILL WITH DATA -->
    <Form  :data = data v-if="packageSelected" @close=close></Form>
  
    <!--PLANS AND PACKAGES  -->
      <div v-else class="mx-auto">
          <div>
            <p class="text-center font-bold text-5xl py-5 text-cyan ">QUALITY AT A MORE AFFORDABLE PRICE</p>
          </div>
          <div class=" pb-5 sm:w-11/12 mx-auto">
            <div class="text-center d-flex pb-4">
              <v-btn class="ma-2 bg-blue shadow" @click="all">
                All
              </v-btn>
              <v-btn class="ma-2 bg-blue shadow" @click="none">
                None
              </v-btn>
            </div>
            <v-expansion-panels
              @click="planClick"
              color="blue bg-blue shadow w-1/2"
              v-model="panel"
              multiple
              
              v-for="(plan,i) in newPlans" :key="i"
            >
            
              <v-expansion-panel
                :title=plan.name
                :value=plan.value
              >
                <v-expansion-panel-text style="padding: 0px; ">
                  
                  <v-container fluid >
                  <v-row  justify="space-around">
                    <!-- LARGE SCREENS -->
                    <v-col
                      class="lg:block hidden"
                      v-for="(package_plan,i) in plan.packages"
                      :key="i"
                      cols="12"
                      md="3"
                    >
                     
                    <div class="shadow">
                      <v-card
                          style=""
                          class="mx-auto h-[150px]"
                          color="surface-variant"
                          :image=package_plan.imagePath
                          max-width="300"
                          width="270"
                          height="170"
                      >
                        <p class="sm:text-[50px] text-[50px]  h-full  px-4 bg-gradient-to-r from-orange-500 ">
                          {{ package_plan.bandwidth }}
                          <span  class="text-[30px] sm:text-[40px]">
                            Mbps 
                              <span class=" sm:block py-5  text-2xl  hidden  bg-gradient-to-t  from-orange-500">
                                  Ksh. {{ package_plan.fee }}
                                  <span v-if="plan.name === 'Metred Home Packages' ">/hour</span>
                                  <span v-else>/month</span> 
                              </span>
                          </span>
                      </p>
                        </v-card>
                      <v-card
                          class="mx-auto"
                          max-width="300"
                          width="270"
                      >
                        <v-list density="compact">
                          <v-list-item
                              v-for="(description, i) in package_plan.description"
                              :key="i"
                              
                              color="primary"
                              class="text-start"
                              style="background-color: beige;"
                          >
                              <template v-slot:prepend>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path  fill="currentColor" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"></path></svg>
                              </template>
                              <v-list-item-title class="text-xl  text-start text-wrap">{{ description }}</v-list-item-title>
                          </v-list-item>
                          </v-list>
                          <div @click=selectedPlan(plan.name,package_plan) class="px-4 py-1 rounded-md text-center font-mono text-md mx-auto w-fit my-2 bg-gradient-to-t from-blue-500 via-red to-blue-600 animate_animated animate-pulse cursor-pointer">SUBSCRIBE</div>
                      </v-card>
                    </div>
                    </v-col>

                    <!-- SMALL SCREENS -->
                    <div class="flex overflow-x-auto lg:hidden hide-scrollbar">
                      <div class="flex" v-for="(package_plan,i) in plan.packages" :key="i">
                          <div class=" sm:h-[460px] w-[300px]" >
                              <v-card
                                  class="mx-auto h-[150px]"
                                  color="surface-variant"
                                  image="/Images/student-pro.jpg"
                                  max-width="250"
                                  height=""
                              >
                                  <v-card-title class="bg-gradient-to-r from-orange-500 sm:py-3" >{{ package_plan.feature }}</v-card-title>
                                  <p class="sm:text-[70px] text-[50px]   px-4 bg-gradient-to-r from-orange-500 ">{{ package_plan.bandwidth }}<span  class="text-[30px] sm:text-[40px]">Mbps <span class=" sm:block hidden text-base bg-gradient-to-r from-orange-500">Ksh. {{ package_plan.fee }}
                                    <span v-if="plan.name === 'Metred Home Packages' ">/hour</span>
                                    <span v-else>/month</span>
                                  </span></span></p>
                                  <p class="sm:hidden block pl-2 bg-gradient-to-r py-2  sm:text-xl text-md from-orange-500">Ksh. {{ package_plan.fee }}
                                    <span v-if="plan.name === 'Metred Home Packages' ">/hour</span>
                                    <span v-else>/month</span>
                                  </p>
                              </v-card>
                              <v-card
                                  class="mx-auto"
                                  max-width="250"
                                  style=""
                              >
                                  <v-list density="compact">
                                      <v-list-item
                                          v-for="(description, i) in package_plan.description"
                                          :key="i"
                                        
                                          color="primary"
                                          style="background-color: beige;"
                                      >
                                          <template v-slot:prepend>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path  fill="currentColor" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"></path></svg>
                                          </template>
                                          <v-list-item-title class="text-sm text-wrap">{{ description }} </v-list-item-title>
                                      </v-list-item>
                                  </v-list>
                                  <div @click=selectedPlan(plan.name,package_plan) class="px-4 py-2 rounded-md text-center mx-auto w-1/2 my-2 bg-gradient-to-t from-blue-500 via-red to-blue-600 animate_animated animate-pulse cursor-pointer">SUBSCRIBE</div>
                              </v-card>
                          </div>
                      </div>
                    </div>

                  </v-row>
                </v-container>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
      
      </div>

    <router-view></router-view>

</template>

<script setup>
import router from '@/router';
import {useRoute} from 'vue-router';
import   {onMounted, ref,watch} from 'vue';
import Form from '../components/PackageRequest.vue'
import { use } from 'chai';
const plans = [
      {
          plan:'HOME PACKAGES',
          value:'home',
          packages:[
              {
                  feature:"",
                  speed:7,
                  price:'2,199',
                  imagePath:'/Images/5mbps.avif',
                  description:[
                      "Family connectivity",
                      "Basic internet use",
                      "Browsing",
                      "Unlimited",
                      "social media",
                      "e-learning",
                    
                      
                  ],
                  users:"5-8",
                  tag:'home'
              },
              {
                  feature:"",
                  speed:12,
                  price:'2,599',
                  imagePath:'/Images/12mbps.jpg',
                  description:[
                      "Family connectivity",
                      "Smooth HD streaming",
                      "Online gaming",
                      "Unlimited",
                      "social media",
                      "e-learning"
                  ],
                  users:"9-12",
                  tag:'home'
              },
              {
                  feature:"",
                  speed:20,
                  price:'3,799',
                  imagePath:'/Images/20mbps.jpg',
                  description:[
                      "Family connectivity",
                      "Multiple devices streaming",
                      "Online gaming",
                      "Unlimited",
                      "social media",
                      "e-learning"
                  ],
                  users:"13-15",
                  tag:'home'
              },
              {
                  feature:"",
                  speed:30,
                  price:'5,399',
                  imagePath:'/Images/30mbps.jpg',
                  description:[
                      "Family connectivity",
                      "Heavy Internet user",
                      "Online gaming",
                      "Unlimited",
                      
                      "social media",
                      "e-learning"
                  ],
                  users:"15-20",
                  tag:'home'
              },
              {
                  feature:"",
                  speed:50,
                  price:'6,999',
                  imagePath:'/Images/50mbps.avif',
                  description:[
                      "Family connectivity",
                      "Ultimate speed",
                      "Unlimited",
                      "Heavy online activity",
                      "Large Families",
                      "Heavy online users"
                  ],
                  users:"25-30",
                  tag:'home'
              },
          ]
      },
      {
          plan:'BUSINESS PACKAGES',
          value:'business',
          packages:[
              {
                  feature:"",
                  speed:2,
                  price:'2,999',
                  imagePath:'/Images/2mbps.avif',
                  description:[
                      "Fast Reliable Internet Access",
                      "Perfect For Small Teams",
                      "Basic Online Tasks Only",
                      "Limited User Capacity Available",
                      "Entry Level Plan Ideal"
                  ],
                  users:"1-5",
                  tag:'business'
              },
              {
                  feature:"",
                  speed:5,
                  price:'4,999',
                  imagePath:'/Images/5_mbps.avif',
                  description:[
                      "Faster Speeds For Growth",
                      "Multiple Device Support Available",
                      "Medium User Capacity Ideal",
                      "Online Collaboration Made Easy",
                      "Boost Productivity With Ease"
                  ],
                  users:"5-10",
                  tag:'business'
              },
              {
                  feature:"",
                  speed:10,
                  price:'9,999',
                  imagePath:'/Images/10mbps.avif',
                  description:[
                      "High Performance Internet Access",
                      "Priority Customer Support Available",
                      "Large User Capacity Ideal",
                      "Demanding Apps Run Smoothly",
                      "Fast And Reliable Network"
                  ],
                  users:"10-20",
                  tag:'business'
              },
              {
                  feature:"",
                  speed:20,
                  price:'19,999',
                  imagePath:'/Images/20_mbps.jpg',
                  description:[
                      "Lightning Fast Internet Speeds",
                      "Heavy User Capacity Ideal",
                      "Fast Online Backup Available",
                      "Secure And Reliable Network",
                      "Ultimate Performance Guaranteed Always"
                  ],
                  users:"20-40",
                  tag:'business'
              },
              {
                  feature:"",
                  speed:30,
                  price:'27,999',
                  imagePath:'/Images/30_mbps.avif',
                  description:[
                      "Ultimate Internet Experience Guaranteed",
                      "Priority Support Always Available",
                      "Large User Capacity Ideal",
                      "Fast And Secure Network",
                      "Dedicated Account Management"
                  ],
                  users:"20-50",
                  tag:'business'
              },
          ]
      },
      {
          plan:'STUDENT PACKAGES',
          value:'student',
          packages:[
              {
                  feature:"",
                  imagePath:"/Images/soundtrap.jpg",
                  speed:3,
                  price:999,
                  description:[
                      "2 GB daily data allocation",
                      "256 kbps bandwidth after exhausting the daily limit",
                      "Suitable for light online activities",
                  ],
                  users:"1-2",
                  tag:'student'
              },
              {
                  feature:"",
                  imagePath:"/Images/student-pro.jpg",
                  speed:5,
                  price:'1,499',
                  description:[
                      "3 GB daily data allocation",
                      "512 kbps bandwidth after exhausting the daily limit",
                      "Suitable for moderate to heavy activities",
                  ],
                  users:"2-3",
                  tag:'student'
              },
          ]
      },
]
const newPlans = [
    {
        name:'Priority Data Packages',
        value:'Priority Data',
        packages:[
            {
                package_name:'Priority Data 100GB',
                bandwidth:'5',
                fee:'999',
                limit:'100GB',
                connection_ratio:'1:8',
                bandwidth_after_limit:'1',
                imagePath:'https://img.freepik.com/free-photo/medium-shot-friends-looking-laptop_23-2149033806.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Entry-Level Data Plan", "Light Usage Recommended", "Affordable Pricing Available", "Basic Browsing Only" ]
            },
            {
                package_name:'Priority Data 200GB',
                bandwidth:'10',
                fee:'1,499',
                limit:'200GB',
                connection_ratio:'1:8',
                bandwidth_after_limit:'2',
                imagePath:'https://img.freepik.com/premium-photo/side-view-friends-working-restaurant_1048944-12219374.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Moderate Data Allowance", "Casual Streaming Supported", "Good Travel Option", "Budget-Friendly Choice" ]
            },
            {
                package_name:'Priority Data 300GB',
                bandwidth:'15',
                fee:'1,750',
                limit:'300GB',
                connection_ratio:'1:8',
                bandwidth_after_limit:'3',
                imagePath:'https://img.freepik.com/premium-photo/diversity-people-talk-international-conference-partnership_53876-53629.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Balanced Family Option", "Regular Usage Supported", "Social Media Friendly", "Moderate Streaming Capacity" ]
            },
            {
                package_name:'Priority Data 500GB',
                bandwidth:'20',
                fee:'2,199',
                limit:'500GB',
                connection_ratio:'1:8',
                bandwidth_after_limit:'4',
                imagePath:'https://img.freepik.com/premium-photo/business-presentation-meeting_236854-36722.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Reliable Moderate User Plan", "Supports Gaming Activities", "Good Value Package", "Family-Friendly Option" ]
            },
            {
                package_name:'Priority Data 800GB',
                bandwidth:'30',
                fee:'3,199',
                limit:'800GB',
                connection_ratio:'1:8',
                bandwidth_after_limit:'5',
                imagePath:'https://img.freepik.com/premium-photo/multiethnic-startup-business-team-discussing-new-business-plan-working-laptop-tablet-computer-while-learning-about-drone-technology-future-business-ventures-top-view_530697-17474.jpg?ga=GA1.1.813785655.1730982360',
                description: [ "High Data Cap Option", "Frequent Streaming Supported", "Excellent Download Speeds", "Great Flexibility Offered" ]
            },
            {
                package_name:'Priority Data 1200GB',
                bandwidth:'50',
                fee:'4,199',
                limit:'1200GB',
                connection_ratio:'1:8',
                bandwidth_after_limit:'8',
                imagePath:'https://img.freepik.com/premium-photo/multi-ethnic-diversity-business-people-modern-business-project-habiliment_31965-301259.jpg?ga=GA1.1.813785655.1730982360',
                description: [ "Ample Data Allowance", "Perfect for Power Users", "Extensive Online Activities", "High-Speed Access Provided" ]
            },
        ]
    },
    {
        name:'Elite Home Packages',
        value:'Elite Home',
        packages:[
            {
                package_name:'Elite Home Fiber 7',
                bandwidth:'7',
                fee:'2,199',
                limit:'1600GB',
                connection_ratio:'1:4',
                bandwidth_after_limit:'2',
                imagePath:'/Images/5mbps.avif',
                description:[
                    "Family connectivity",
                    "Basic internet use",
                    "Browsing",
                    "Unlimited",
                    "social media",
                    "e-learning",
                    
                ],
            },
            {
                package_name:'Elite Home Fiber 12',
                bandwidth:'12',
                fee:'2,599',
                limit:'2000GB',
                connection_ratio:'1:4',
                bandwidth_after_limit:'3',
                imagePath:'/Images/12mbps.jpg',
                description:[
                    "Family connectivity",
                    "Smooth HD streaming",
                    "Online gaming",
                    "Unlimited",
                    "social media",
                    "e-learning"
                ],
            },
            {
                package_name:'Elite Home Fiber 20',
                bandwidth:'20',
                fee:'3,799',
                limit:'2500GB',
                connection_ratio:'1:4',
                bandwidth_after_limit:'3',
                imagePath:'/Images/20mbps.jpg',
                description:[
                    "Family connectivity",
                    "Multiple devices streaming",
                    "Online gaming",
                    "Unlimited",
                    "social media",
                    "e-learning"
                ],
            },
            {
                package_name:'Elite Home Fiber 30',
                bandwidth:'30',
                fee:'5,399',
                limit:'3000GB',
                connection_ratio:'1:4',
                bandwidth_after_limit:'5',
                imagePath:'/Images/30mbps.jpg',
                description:[
                    "Family connectivity",
                    "Heavy Internet user",
                    "Online gaming",
                    "Unlimited",
                    "social media",
                    "e-learning"
                ],
            },
            {
                package_name:'Elite Home Fiber 50',
                bandwidth:'50',
                fee:'6,599',
                limit:'3500GB',
                connection_ratio:'1:4',
                bandwidth_after_limit:'7',
                imagePath:'https://img.freepik.com/premium-photo/happy-friends-football-fans-watching-soccer-tv-celebrating-victory-home-friendship-spor_721440-9407.jpg?ga=GA1.1.813785655.1730982360',
                description:[
                    "Family connectivity",
                    "Ultimate speed",
                    "Unlimited",
                    "Heavy online activity",
                    "Large Families",
                    "Heavy online users"
                ],
            },
            {
                package_name:'Elite Home Fiber 100',
                bandwidth:'100',
                fee:'11,999',
                limit:'4000GB',
                connection_ratio:'1:4',
                bandwidth_after_limit:'10',
                imagePath:'/Images/50mbps.avif',
                description:[
                    "Family connectivity",
                    "Ultra-Fast Internet Speeds",
                    "Unlimited",
                    "Premium User Experience",
                    "Smart Home Ready",
                    "Multiple Users Supported" 
                ],
            },
            {
                package_name:'Elite Home Fiber 200',
                bandwidth:'200',
                fee:'19,999',
                limit:'5000GB',
                connection_ratio:'1:4',
                bandwidth_after_limit:'15',
                imagePath:'https://img.freepik.com/premium-photo/happy-friends-football-fans-watching-soccer-tv-celebrating-victory-home-friendship-spor_721440-9390.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description:[
                    "Family connectivity",
                    "Top-Tier Performance Package",
                    "Ideal for Power Users",
                    "Extensive Usage Capacity",
                    "Seamless Connectivity Offered",
                    "Heavy online users"
                ],
            },
        ]
    },
    {
        name:'Standard Home Packages',
        value:'Standard Home',
        packages:[
            {
                package_name:'Home Fiber Std 5',
                bandwidth:'5',
                fee:'1,349',
                limit:'300GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'1',
                imagePath:'/Images/2mbps.avif',
                description: [ "Basic Package Available", "Light Browsing Only", "Cost-Effective Solution Offered", "Minimal Usage Plan" ]
            },
            {
                package_name:'Home Fiber Std 8',
                bandwidth:'8',
                fee:'1,699',
                limit:'400GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'2',
                imagePath:'/Images/5_mbps.avif',
                description: [ "Good for Small Households", "Casual Streaming Supported", "Reliable Internet Connection Available", "Affordable Monthly Fee" ]
            },
            {
                package_name:'Home Fiber Std 14',
                bandwidth:'14',
                fee:'2,299',
                limit:'680GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'3',
                imagePath:'/Images/10mbps.avif',
                description: [ "Moderate Speed Option", "Suitable for Social Media", "Balanced Usage Experience", "Family-Friendly Package" ]
            },
            {
                package_name:'Home Fiber Std 20',
                bandwidth:'20',
                fee:'2,999',
                limit:'900GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'5',
                imagePath:'/Images/20_mbps.jpg',
                description: [ "Ideal for Families", "Supports HD Video Streaming", "Multiple Devices Connected Easily", "Good Value Option" ]
            },
            {
                package_name:'Home Fiber Std 30',
                bandwidth:'30',
                fee:'3,899',
                limit:'1200GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'5',
                imagePath:'/Images/30_mbps.avif',
                description: [ "Enhanced Speed Availability", "Handles Simultaneous Use Well", "Reliable Performance Guaranteed", "Great for Busy Households" ]
            },
            {
                package_name:'Home Fiber Std 50',
                bandwidth:'50',
                fee:'4,899',
                limit:'1500GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'5',
                imagePath:'https://img.freepik.com/premium-photo/executives-talking-headset-office_13339-347579.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Great for Heavy Users", "Video Conferencing Support Available", "Fast Download Speeds Offered", "Efficient Browsing Experience" ]
            },
            {
                package_name:'Home Fiber Std 75',
                bandwidth:'75',
                fee:'5,899',
                limit:'1800GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'5',
                imagePath:'https://img.freepik.com/premium-photo/people-looking-computer-screens-while-sitting-around-them-coffee-shop_1139303-2317.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "High-Speed Internet Access", "Supports Smart Devices Well", "Excellent for Streaming Activities", "Gaming Friendly Package" ]
            },
            {
                package_name:'Home Fiber Std 100',
                bandwidth:'100',
                fee:'6,649',
                limit:'2100GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'10',
                imagePath:'https://img.freepik.com/premium-photo/multi-ethnic-colleagues-working-together-data-center_274679-22736.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Premium Speed Package Offered", "Ideal for Large Families", "Multiple High-Demand Activities Supported", "Reliable Internet Connection" ]
            },
            {
                package_name:'Home Fiber Std 150',
                bandwidth:'150',
                fee:'7,799',
                limit:'2400GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'10',
                imagePath:'https://img.freepik.com/free-photo/paralyzed-wheelchair-user-working-call-center-helpline-reception-with-physical-impairment-male-operator-living-with-disability-chronic-pain-helping-clients-customer-service-support_482257-46322.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Exceptional Performance Guaranteed", "Seamless Connectivity Available", "Perfect for Power Users", "Multiple Devices Supported"]
            },
            {
                package_name:'Home Fiber Std 220',
                bandwidth:'220',
                fee:'8,999',
                limit:'2600GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'15',
                imagePath:'https://img.freepik.com/free-photo/group-multinational-busy-people-working-office_146671-15660.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Ultra-Fast Internet Speeds", "Perfect for Tech-Savvy Homes", "Extensive Usage Capacity", "Ideal for Heavy Use"]
            },
            {
                package_name:'Home Fiber Std 300',
                bandwidth:'300',
                fee:'11,999',
                limit:'3000GB',
                connection_ratio:'1:6',
                bandwidth_after_limit:'15',
                imagePath:'https://img.freepik.com/premium-photo/room-with-round-table-with-people-sitting-it_1190297-21272.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Top-Tier Package Available", "Unmatched Reliability Offered", "Ideal for Businesses", "Heavy Internet Users Supported"]
            },
        ]
    },
    {
        name:'Metred Home Packages',
        value:'Metred Home',
        packages:[
            {
                package_name:'Metered Home Fiber 8',
                bandwidth:'8',
                fee:'30',
                limit:'_',
                connection_ratio:'1:4',
                bandwidth_after_limit:'',
                imagePath:'https://img.freepik.com/free-photo/couple-watching-streaming-service-home_23-2148977246.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Flexible Payment Model", "Short-Term Access Available", "Basic Internet Needs Met", "Pay-Per-Use Convenience" ]
            },
            {
                package_name:'Metered Home Fiber 20',
                bandwidth:'20',
                fee:'50',
                limit:'_',
                connection_ratio:'1:4',
                bandwidth_after_limit:'',
                imagePath:'https://img.freepik.com/premium-photo/african-family-having-great-time-together_53876-56835.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Affordable Metered Option", "Moderate Usage Supported", "Pay-Per-Use Model", "Occasional Use Ideal" ]
            },
            {
                package_name:'Metered Home Fiber 30',
                bandwidth:'30',
                fee:'90',
                limit:'_',
                connection_ratio:'1:4',
                bandwidth_after_limit:'',
                imagePath:'https://img.freepik.com/free-photo/excited-group-people-watching-american-football-sport-match-home_155003-41874.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "Higher Speeds Available", "Short-Term Intensive Use", "Flexible Pricing Model", "Great for Events" ]
            },
            {
                package_name:'Metered Home Fiber 50',
                bandwidth:'50',
                fee:'140',
                limit:'_',
                connection_ratio:'1:4',
                bandwidth_after_limit:'',
                imagePath:'https://img.freepik.com/free-photo/portrait-african-american-grandmother-mother-children-watching-movie-eating-popcorn-while-sitting-sofa-home-family-lifestyle-concept_58466-12025.jpg?ga=GA1.1.813785655.1730982360&semt=ais_hybrid',
                description: [ "High-Speed Metered Package", "Intensive Usage Supported", "Ideal for Gaming Events", "Streaming Activities Allowed" ]
            },
        ]
    },
]
let panel = ref([0])
const route = useRoute()
const packageSelected = ref(false)
const data = ref()
const currentPath = ref(router.currentRoute.value.path)
watch(
  ()=>route.path,
  (newPath)=>{
    if(newPath != '/purchase'){
      currentPath.value = newPath
      routePlan()
    }
  
  }
)
onMounted(()=>{
  if(route.fullPath == '/purchase'){
  }else if(route.fullPath == '/purchase?p=priority-data' ||route.fullPath == '/purchase?p=elite-home' ||route.fullPath == '/purchase?p=metred-home' || route.fullPath == '/purchas?p=standard-home' ){
    panel.value = [] 
    if(useRoute().query.p == 'priority-data'){
      panel.value[0] = 'Priority Data'
    }else if(useRoute().query.p == 'elite-home'){
      panel.value[0] = 'Elite Home'  
    }else if(useRoute().query.p == 'metred-home'){
      panel.value[0] = 'Metred Home'
    }else if(useRoute().query.p == 'standard-home'){
      panel.value[0] = 'Standard Home'
    }
    router.replace('/purchase')
  }else{
    plans.forEach((plan)=>{
      if(plan.plan.toLowerCase() == route.query.plan.toLowerCase()){
        plan.packages.forEach((pack)=>{
          if(pack.speed == route.query.speed){
            selectedPlan(plan.plan,pack)
          }
        })
      }
    })
     router.replace('/purchase')
  }
 
})

function routePlan(){
  if(currentPath.value == '/purchase?p=priority-data'){
    panel.value = [],
    panel.value[0] = 'Priority Data'
    router.replace('/purchase')
  }else if(currentPath.value == '/purchase?p=elite-home'){
    panel.value = [],
    panel.value[0] = 'Elite Home'
    router.replace('/purchase')
  }else if(currentPath.value == '/purchase?p=standard-home'){
    panel.value = [],
    panel.value[0] = 'Standard Home'
    router.replace('/purchase')
  }else if(currentPath.value == '/purchase?p=metred-home'){
    panel.value = [],
    panel.value[0] = 'Metred Home'
    router.replace('/purchase')
  }
}
routePlan()
function planClick(){
  window.scrollTo(0,window.innerHeight * 0.2)
}
function all() {
  panel.value = ['Priority Data','Elite Home', 'Standard Home','Metred Home']
}
function none() {
  panel.value = []
}
function selectedPlan(plan,package_plan){
   window.scrollTo(0, 0);
   data.value = [plan,package_plan]
   packageSelected.value = true
}
function close(){
  packageSelected.value = false
}

</script>