<template>
    
    <!-- FORM TO FILL WITH DATA -->
    <Form  :data = data v-if="packageSelected" @close=close></Form>
  
    <!--PLANS AND PACKAGES  -->
      <div v-else class="mx-auto">
          <div>
            <p class="text-center font-bold text-5xl py-5 text-cyan ">QUALITY AT A CHEAPER PRICE</p>
            <p class="text-grey text-center">*click on an option to see more</p>
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
              
              v-for="(plan,i) in plans" :key="i"
            >
            
              <v-expansion-panel
                :title=plan.plan
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
                      md="2"
                    >
                     
                    <div>
                      <v-card
                          style=""
                          class="mx-auto h-[150px]"
                          color="surface-variant"
                          :image=package_plan.imagePath
                          max-width="300"
                          width="220"
                          height="170"
                      >
                        <p class="sm:text-[50px] text-[50px]  h-full  px-4 bg-gradient-to-r from-orange-500 ">
                          {{ package_plan.speed }}
                          <span  class="text-[30px] sm:text-[40px]">
                            Mbps 
                              <span class=" sm:block py-5  text-2xl  hidden  bg-gradient-to-t  from-orange-500">
                                  Ksh. {{ package_plan.price }}/month 
                              </span>
                          </span>
                      </p>
                        </v-card>
                      <v-card
                          class="mx-auto"
                          max-width="300"
                          width="220"
                      >
                        <v-list density="compact">
                          <v-list-item
                              v-for="(description, i) in package_plan.description"
                              :key="i"
                              :value="item"
                              color="primary"
                              style="background-color: beige;"
                          >
                              <template v-slot:prepend>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path  fill="currentColor" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"></path></svg>
                              </template>
                              <v-list-item-title class="text-xl text-wrap">{{ description }}</v-list-item-title>
                          </v-list-item>
                          </v-list>
                          <div @click=selectedPlan(plan.plan,package_plan) class="px-4 py-2 rounded-md text-center font-mono text-xl mx-auto w-1/2 my-2 bg-gradient-to-t from-blue-500 via-red to-blue-600 animate_animated animate-pulse cursor-pointer">SUBSCRIBE</div>
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
                                  <p class="sm:text-[70px] text-[50px]   px-4 bg-gradient-to-r from-orange-500 ">{{ package_plan.speed }}<span  class="text-[30px] sm:text-[40px]">Mbps <span class=" sm:block hidden text-base bg-gradient-to-r from-orange-500">Ksh. {{ package_plan.price }}/month </span></span></p>
                                  <p class="sm:hidden block pl-2 bg-gradient-to-r py-2  sm:text-xl text-md from-orange-500">Ksh. {{ package_plan.price }}/month </p>
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
                                          :value="item"
                                          color="primary"
                                          style="background-color: beige;"
                                      >
                                          <template v-slot:prepend>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path  fill="currentColor" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"></path></svg>
                                          </template>
                                          <v-list-item-title class="text-sm text-wrap">{{ description }} </v-list-item-title>
                                      </v-list-item>
                                  </v-list>
                                  <div @click=selectedPlan(plan.plan,package_plan) class="px-4 py-2 rounded-md text-center mx-auto w-1/2 my-2 bg-gradient-to-t from-blue-500 via-red to-blue-600 animate_animated animate-pulse cursor-pointer">GET PLAN</div>
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
  const plans = [
  {
            plan:'HOME',
            packages:[
                {
                    feature:"",
                    speed:7,
                    price:2199,
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
                    price:2599,
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
                    price:3799,
                    imagePath:'/Images/20mbps.jpg',
                    description:[
                        "Family connectivity",
                        "Multiple devices streaming",
                        "3D Conferencing",
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
                    price:5399,
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
                    price:6999,
                    imagePath:'/Images/50mbps.avif',
                    description:[
                        "Family connectivity",
                        "Ultimate speed",
                        "Business use",
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
            plan:'BUSINESS',
            packages:[
                {
                    feature:"Starter",
                    speed:2,
                    price:2999,
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
                    feature:"Growth",
                    speed:5,
                    price:4999,
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
                    feature:"Pro",
                    speed:10,
                    price:9999,
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
                    feature:"Faaasst",
                    speed:20,
                    price:19999,
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
                    feature:"Power User",
                    speed:30,
                    price:27999,
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
            plan:'STUDENT',
            packages:[
                {
                    feature:"Student Lite",
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
                    feature:"Student Pro",
                    imagePath:"/Images/student-pro.jpg",
                    speed:5,
                    price:1499,
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
let panel = ref([''])
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
    // console.log('no params')
  }else if(route.fullPath == '/purchase/home' ||route.fullPath == '/purchase/business' ||route.fullPath == '/purchase/student' ){
    router.replace('/purchase')
    console.log()
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
  if(currentPath.value == '/purchase/home'){
    panel.value = [],
    panel.value[0] = 'home'
    router.replace('/purchase')
  }else if(currentPath.value == '/purchase/student'){
    panel.value = [],
    panel.value[0] = 'student'
    router.replace('/purchase')
  }else if(currentPath.value == '/purchase/business'){
    panel.value = [],
    panel.value[0] = 'business'
    router.replace('/purchase')
  }
}
routePlan()
function planClick(){
  window.scrollTo(0,window.innerHeight * 0.2)
}
console.log(router.currentRoute.value.path)
function all() {
  panel.value = ['home', 'business', 'student']
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