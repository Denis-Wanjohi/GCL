<template>
    
    <!-- FORM TO FILL WITH DATA -->
    <!-- <Form  :data = data v-if="packageSelected" @close=close></Form> -->
    <Form  :data = data v-if="packageSelected" @close=close></Form>
  
    <!--PLANS AND PACKAGES  -->
      <div v-else class="mx-auto">
          <div>
            <p class="text-center font-bold text-5xl py-5 text-cyan ">QUALITY AT A CHEAPER PRICE</p>
            <p class="text-grey text-center">*click on an option to see more</p>
          </div>
          <div class=" pb-5 sm:w-10/12 mx-auto">
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
                style=""
                
              >
                <v-expansion-panel-text>
                  <v-container fluid>
                  <v-row>
                    <!-- LARGE SCREENS -->
                    <v-col
                      class="lg:block hidden"
                      v-for="(package_plan,i) in plan.packages"
                      :key="i"
                      cols="12"
                      md="4"
                    >
                     
                    <div >
                      <v-card
                          style=""
                          class="mx-auto text-start"
                          color="surface-variant"
                          image="/Images/student-pro.jpg"
                          max-width="350"
                          height="200"
                      >
                          <v-card-title class="bg-gradient-to-r from-orange-500 sm:py-7 py-4" >{{ package_plan.feature }}</v-card-title>
                          <p class="text-[70px] px-1 bg-gradient-to-r from-orange-500 ">{{ package_plan.speed }}<span  class="text-[30px]">Mbps <span class="sm:block hidden text-base bg-gradient-to-r from-orange-500">Ksh. {{ package_plan.price }}/month </span></span></p>
                          <span class="sm:hidden block bg-gradient-to-r text-xl from-orange-500">Ksh. {{ package_plan.price }}/month </span>
                          </v-card>
                      <v-card
                          class="mx-auto"
                          max-width="350"
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
                              <v-list-item-title class="text-xl">{{ description }}</v-list-item-title>
                          </v-list-item>
                          </v-list>
                          <div @click=selectedPlan(plan.plan,package_plan) class="px-4 py-2 rounded-md text-center mx-auto w-1/2 my-2 bg-gradient-to-t from-blue-500 via-red to-blue-600 animate_animated animate-pulse cursor-pointer">GET PLAN</div>
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
        value:'home',
        packages:[
            {
                feature:"",
                speed:7,
                price:2199,
                description:[
                    "Family connectivity",
                        "Basic internet use",
                        "Browsing",
                        "Unlimited",
                        "social media",
                        "e-learning",
                        
                ],
                users:"5-8"
            },
            {
                feature:"",
                speed:12,
                price:2599,
                description:[
                "Family connectivity",
                        "Smooth HD streaming",
                        "Online gaming",
                        "Unlimited",
                        "email",
                        "social media",
                        "e-learning"
                ],
                users:"9-12"
            },
            {
                feature:"",
                speed:20,
                price:3799,
                description:[
                    "Family connectivity",
                        "Multiple devices streaming",
                        "3D Conferencing",
                        "Unlimited",
                        "social media",
                        "e-learning"
                ],
                users:"13-15"
            },
            {
                feature:"",
                speed:30,
                price:5399,
                description:[
                   "Family connectivity",
                        "Heavy Internet user",
                        "Online gaming",
                        "Unlimited",
                        "Fast uploads/downloads",
                        "social media",
                        "e-learning"
                ],
                users:"15-20"
            },
            {
                feature:"",
                speed:50,
                price:6999,
                description:[
                    "Family connectivity",
                        "Ultimate speed",
                        "Business use",
                        "Unlimited",
                        "Heavy online activity",
                        "Large Families",
                        "Heavy online users"
                ],
                users:"25-30"
            },
        ]
    },
    {
        plan:'BUSINESS',
        value:'business',
        packages:[
            {
                feature:"Starter",
                speed:2,
                price:2999,
                description:[
                    "Basic online activities",
                    "Fast upload and downloads speeeds",
                    "Low latency",
                    "Reliable conectivity",
                ],
                users:"1-5"
            },
            {
                feature:"Growth",
                speed:5,
                price:4999,
                description:[
                    "Faster speeds for onine activities",
                    "Seamless connectivity",
                    "High-speed uploads and downoads",
                    "Low latency",
                    "Reliable connectivity",
                ],
                users:"5-10"
            },
            {
                feature:"Pro",
                speed:10,
                price:9999,
                description:[
                    "High-speed connectivity",
                    "Fast uploads and downoads",
                    "Low latency",
                    "Reliable connectivity",
                ],
                users:"10-20"
            },
            {
                feature:"Pro",
                speed:20,
                price:19999,
                description:[
                    "High-speed connectivity",
                    "Fast uploads and downoads",
                    "Low latency",
                    "Reliable connectivity",
                ],
                users:"10-20"
            },
            {
                feature:"Power User",
                speed:30,
                price:27999,
                description:[
                    "Lightening-fast connectivity",
                    "High-speed uploads and downoads",
                    "Low latency",
                    "Reliable connectivity",
                ],
                users:"20-50"
            },
        ]
    },
    {
        plan:'STUDENT',
        value:'student',
        packages:[
            {
                feature:"Student Lite",
                immage:"/Image/student-lite.jpg",
                speed:3,
                price:999,
                description:[
                    "2 GB daily data allocation",
                    "256 kbps bandwidth after exhausting the daily limit",
                    "Suitable for light online activities",
                ],
                users:"1-2"
            },
            {
                feature:"Student Pro",
                immage:"/Image/student-pro.jpg",
                speed:5,
                price:1499,
                description:[
                    "3 GB daily data allocation",
                    "512 kbps bandwidth after exhausting the daily limit",
                    "Suitable for moderate to heavy activities",
                ],
                users:"2-3"
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