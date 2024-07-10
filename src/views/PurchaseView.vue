<template>

    <!-- FORM TO FILL WITH DATA -->
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
                    <v-col
                      v-for="(package_plan,i) in plan.packages"
                      :key="i"
                      cols="12"
                      md="4"
                    >
                    <div>
                      <v-card
                          style="color: red;background-color: green;"
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
                  </v-row>
                </v-container>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <v-divider class="my-10 mx-10" color="red" opacity="1" thickness="2px"></v-divider>
          <div class="w-full text-center">
            <v-text class="text-center font-bold">The following steps will help you in make a request for your plan:</v-text>
          </div>
          <v-stepper :items="['Step 1', 'Step 2', 'Step 3']" class="bg-cyan sm:w-1/2 w-[95%] mx-auto">
            <template v-slot:item.1>
              <v-card title="Choose a Plan" flat>
                <div  class="flex align-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16">
                    <g fill="white" stroke="blue" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                      <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                      <path d="m5.75 7.75l2.5 2.5l6-6.5" />
                    </g>
                  </svg>
                  <p class="px-2">Pick a plan that fits your options</p>
                </div>
                
              </v-card>
            </template>

            <template v-slot:item.2>
              <v-card title="Your Details" flat>
                <div  class="flex align-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16">
                    <g fill="white" stroke="blue" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                      <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                      <path d="m5.75 7.75l2.5 2.5l6-6.5" />
                    </g>
                  </svg>
                  <p class="px-2">Fill a form with the required details</p>
                </div>
              </v-card>
            </template>

            <template v-slot:item.3>
              <v-card title="All good" flat>
                <div  class="flex align-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16">
                    <g fill="white" stroke="blue" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                      <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                      <path d="m5.75 7.75l2.5 2.5l6-6.5" />
                    </g>
                  </svg>
                  <p class="px-2">Thats all! You  will be contacted in less than 24hrs</p>
                </div>
              </v-card>
            </template>
          </v-stepper>
      </div>








</template>

<script setup>
import   {ref} from 'vue';
import Form from '../components/PackageRequest.vue'
  const plans = [
    {
        plan:'HOME',
        value:'home',
        packages:[
            {
                feature:"Essential",
                speed:7,
                price:2199,
                description:[
                    "Basic internet use",
                    "Browsing",
                    "Unlimited",
                    "social media",
                    "e-learning",
                    ""
                ],
                users:"5-8"
            },
            {
                feature:"Streamer",
                speed:12,
                price:2599,
                description:[
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
                feature:"Family",
                speed:20,
                price:2599,
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
                feature:"Power User",
                speed:30,
                price:2599,
                description:[
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
                feature:"Turboo",
                speed:50,
                price:2599,
                description:[
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
                price:3480,
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
                price:5800,
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
                price:11600,
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
                price:2599,
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
let panel = ref([])
const packageSelected = ref(false)
const data = ref()
function all() {
  panel.value = ['home', 'business', 'student']
}

function none() {
  panel.value = []
}
function selectedPlan(plan,package_plan){
   data.value = [plan,package_plan]
   packageSelected.value = true
}
function close(){
  packageSelected.value = false
}
</script>