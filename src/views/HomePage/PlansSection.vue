<template>

    <!-- FORM TO FILL WITH DATA -->
    <div v-if="packageSelected" class="fixed top-0 left-0 w-full h-full z-10 bg-orange-500 bg-opacity-40 overflow-scroll hide-scrollbar">
        <Form  :data = data v-if="packageSelected" @close=close></Form>
        
    </div>

    <!-- TITLE -->
    <div class="sm:text-[40px] text-2xl flex justify-around align-center font-bold py-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 512 512">
            <rect width="512" height="512" fill="none" />
            <path fill="#2a81bf" d="M293.5 298a7.7 7.7 0 0 0-5.3 2L256 330.9L223.8 300a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0">
                <animateTransform attributeName="transform" begin="-0.975s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30" />
                <animate attributeName="opacity" begin="-0.975s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0" />
            </path>
            <path fill="#2a81bf" d="M293.5 253a7.7 7.7 0 0 0-5.3 2L256 285.9L223.8 255a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0">
                <animateTransform attributeName="transform" begin="-0.9s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30" />
                <animate attributeName="opacity" begin="-0.9s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0" />
            </path>
            <path fill="#2a81bf" d="M293.5 208a7.7 7.7 0 0 0-5.3 2L256 240.9L223.8 210a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0">
                <animateTransform attributeName="transform" begin="-0.825s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30" />
                <animate attributeName="opacity" begin="-0.825s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0" />
            </path>
            <path fill="#2a81bf" d="M293.5 163a7.7 7.7 0 0 0-5.3 2L256 195.9L223.8 165a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0">
                <animateTransform attributeName="transform" begin="-0.75s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30" />
                <animate attributeName="opacity" begin="-0.75s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0" />
            </path>
        </svg>
        OUR PACKAGES
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 512 512">
            <rect width="512" height="512" fill="none" />
            <path fill="#2a81bf" d="M293.5 298a7.7 7.7 0 0 0-5.3 2L256 330.9L223.8 300a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0">
                <animateTransform attributeName="transform" begin="-0.975s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30" />
                <animate attributeName="opacity" begin="-0.975s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0" />
            </path>
            <path fill="#2a81bf" d="M293.5 253a7.7 7.7 0 0 0-5.3 2L256 285.9L223.8 255a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0">
                <animateTransform attributeName="transform" begin="-0.9s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30" />
                <animate attributeName="opacity" begin="-0.9s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0" />
            </path>
            <path fill="#2a81bf" d="M293.5 208a7.7 7.7 0 0 0-5.3 2L256 240.9L223.8 210a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0">
                <animateTransform attributeName="transform" begin="-0.825s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30" />
                <animate attributeName="opacity" begin="-0.825s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0" />
            </path>
            <path fill="#2a81bf" d="M293.5 163a7.7 7.7 0 0 0-5.3 2L256 195.9L223.8 165a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0">
                <animateTransform attributeName="transform" begin="-0.75s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30" />
                <animate attributeName="opacity" begin="-0.75s" calcMode="spline" dur="2.25s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0" />
            </path>
        </svg>

    </div>
    <!-- <p class="text-sm animate__animated animate__zoomIn   animate__slower animate__delay-2s sm:w-1/2 mx-auto bg-gradient-to-b  from-blue-300 text-stone-500  text-wrap"> *With a deposit of only KSH 4000 fully refundable for each plan! </p> -->
    
    <!-- PLANS -->
    <v-card class="text-start" >
      <v-tabs
        center-active
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
        fixed-tabs="true"
      >
      <v-tab value="Priority Data Packages" base-color="black"  border="md"  color="white" hide-slider rounded="xl" class="bg-green ">
            <v-icon :icon=IconStudentPlanVue></v-icon>
            Priority Data</v-tab>
        <v-tab  value="Elite Home Packages" base-color="black" hide-slider border="md" rounded="xl" color="white" class="bg-blue" theme="green">
            <v-icon :icon=IconHomeVue></v-icon>
            Elite Home
        </v-tab>
        <v-tab value="Standard Home Packages" base-color="black" hide-slider rounded="xl" border="md" color="white"  style="background-color: #f15a22" >
            <v-icon :icon=IconBusinessPlan></v-icon>
            Standard Home</v-tab>
        
        <v-tab value="Metred Home Packages" base-color="black"  border="md"  color="white" hide-slider rounded="xl" style="background-color: #3fbec4">
            <v-icon :icon=IconMeter></v-icon>
            Metred Home </v-tab>
        
      </v-tabs>
      <!-- TABS -->
      <v-card-text>
        <v-tabs-window v-model="tab" v-if="plans" >
        <v-tabs-window-item
          v-for="(plan,n) in newPlans"
          :key="n"
          :value=plan.name
        >
          <v-container fluid>
            <v-row justify="space-around" >
                <!-- LARGE SCREENS -->
              <v-col
                class="lg:block hidden"
                v-for="(packages,i) in plan.packages"
                :key="i"
                cols="12"
                md="3"
                @click.prevent="clicked(packages)"
              >
              <div  class=" cursor-pointer" >
                <v-card
                    style=""
                    class="mx-auto h-[150px]"
                    color="surface-variant"
                    :image=packages.imagePath
                    max-width="350"
                    min-width="250"
                    height="170"
                >
                    <p class="sm:text-[70px] text-[50px]  h-full  px-4 bg-gradient-to-r from-orange-500 ">
                        {{ packages.bandwidth }}
                        <span  class="text-[30px] sm:text-[40px]">
                            Mbps 
                            <span class=" sm:block py-5  text-2xl  hidden  bg-gradient-to-t  from-orange-500">
                                Ksh. {{ packages.fee }}
                                <span v-if="plan.name == 'Metred Home Packages'">/hour</span>
                                <span v-else>/month</span>
                            </span>
                        </span>
                    </p>
                </v-card>
                <v-card
                    class="mx-auto"
                    max-width="350"
                    min-width="250"
                    style="background-color: green;"
                >
                    <v-list density="compact">
                        <v-list-item
                            v-for="(description, i) in packages.description"
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
                </v-card>

              </div>
              </v-col>


              <!-- MOBILE VIEW -->
              <div class="flex overflow-x-auto lg:hidden hide-scrollbar">
                <div class="flex" v-for="(packages,i) in plan.packages" :key="i">
                    <div class=" sm:h-[460px] w-[300px] cursor-pointer" @click.prevent="clicked(packages)" >
                        <v-card
                            class="mx-auto h-[150px]"
                            color="surface-variant"
                            :image=packages.imagePath
                            max-width="250"
                            height=""
                        >
                            <!-- <v-card-title class="bg-gradient-to-r from-orange-500 sm:py-3" >{{ packages.feature }}</v-card-title> -->
                            <p class="sm:text-[70px] text-[50px]   px-4 bg-gradient-to-r from-orange-500 ">
                                {{ packages.bandwidth }}
                                <span  class="text-[30px] sm:text-[40px]">
                                    Mbps 
                                    <span class=" sm:block hidden text-base bg-gradient-to-r from-orange-500">
                                        Ksh. {{ packages.fee }}<span v-if="plan.name == 'Metred Home Packages'">/hour</span> <span v-else>/month</span>
                                    </span>
                                </span>
                            </p>
                            <p class="sm:hidden block pl-2 bg-gradient-to-r py-2  sm:text-xl text-md from-orange-500">Ksh. {{ packages.fee }}
                                <span v-if="plan.name == 'Metred Home Packages'">/hour</span>
                                <span v-else>/month</span>
                            </p>
                        </v-card>
                        <v-card
                            class="mx-auto"
                            max-width="250"
                            style="background-color: greenyellow;"
                        >
                            <v-list density="compact">
                                <v-list-item
                                    v-for="(description, i) in packages.description"
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
                        </v-card>
                    </div>
                </div>
              </div>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
      </v-card-text>
    </v-card>

    <!-- OVERLAYS -->
    <div class="fixed top-0 left-0 w-full h-full z-10 bg-green-500 bg-opacity-40 " v-if="overlay">
      <div class="absolute top-1/2 left-1/2 lg:w-1/2 sm:w-3/4 w-full h-fit mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded">
            <!-- LARGE SCREENS -->
            <div class="shadow  sm:block hidden animate__animated animate__zoomInDown" >
                <div class="w-full flex justify-center py-5">
                    <div class="w-3/4 font-bold text-2xl">{{ selectedPackage.package_name.toUpperCase() }} PACKAGE</div>
                    <div @click="overlay = false" class="px-4 w-1/4 cursor-pointer py-2 text-xs font-mono w-fit bg-green rounded-xl  h-fit">CLOSE</div>
                </div>
                <div class="flex justify-around w-3/4  mx-auto">
                  
                    <div class="rounded w-1/2  bg-gradient-to-l from-red-500  to-orange-500 flex">
                        <p class="text-7xl mx-auto font-bold font-mono">{{ selectedPackage.bandwidth }}<span class="text-3xl">Mbps</span>
                        </p>
                    </div>
                    <div class="rounded min:w-1/2 bg-gradient-to-r px-2 from-red-500 to-orange-500 flex align-baseline justify-between">
                        <div class="text-7xl text-nowrap font-bold font-mono flex flex-nowrap items-baseline"><p class="text-sm">Ksh.</p>{{selectedPackage.fee}}<p class="text-sm">
                            <span v-if="selectedPackage.limit == '_'">/hour</span>
                            <span v-else>/month</span>
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div class="py-3 " >
                    <!-- <p class="text-grey font-">*With an exclusive Ksh.4000 refundable deposit</p> -->
                </div>
                <div class="my-5">
                    <div class="font-bold text-start w-3/4 mx-auto">Descriptions</div>
                    <div class="pl-5 w-3/4 mx-auto" v-for="(description, i ) in selectedPackage.description" :key="i">
                        <li class="text-start list-none font-sans">- {{ description }}</li>
                    </div>
                </div>
                <div class="my-5" v-if="selectedPackage.limit != '_'">
                    <div class="font-bold text-start py-2 w-3/4 mx-auto">FUP Limit: <span class="font-normal">{{ selectedPackage.limit }}</span></div>
                    <div class="font-bold text-start  py-2 w-3/4 mx-auto">Bandwidth after FUP limit: <span class="font-normal">{{ selectedPackage.bandwidth_after_limit }}Mbps</span></div>
                </div>
                <div @click="selectedPlan(selectedPackage)" class="w-1/2 cursor-pointer py-2 rounded-xl my-2 mx-auto font-mono font-bold  bg-gradient-to-r from-red-500 to-orange-500">GET PACKAGE</div>
            </div>    

            <!-- MOBILE VIEW -->
            <div class="shadow sm:hidden animate__animated  animate__zoomInDown ">
                <!-- {{selectedPackage}} -->
                <div class="w-full flex justify-center py-5">
                    <div class="w-3/4 font-bold text-2xl">{{ selectedPackage.package_name.toUpperCase() }} PACKAGE</div>
                    <div @click="overlay = false" class="px-4 cursor-pointer py-2 text-xs font-mono w-fit h-fit bg-blue-500 rounded-xl ">CLOSE</div>
                </div>
                <div class="flex justify-around w-3/4  mx-auto">
                  
                    <div class="rounded w-1/2  bg-gradient-to-l mx-1 from-red-500  to-orange-500 flex">
                        <p class="text-3xl mx-auto font-bold font-mono">{{ selectedPackage.bandwidth }}<span class="text-xl">Mbps</span>
                        </p>
                    </div>
                    <div class="rounded min:w-1/2 bg-gradient-to-r  px-2 from-red-500 to-orange-500 flex align-baseline justify-between">
                        <div class="text-3xl text-nowrap font-bold font-mono flex flex-nowrap items-baseline"> <p class="text-sm">Ksh.</p>{{selectedPackage.fee}}<p class="text-sm">
                            <span v-if="selectedPackage.limit == '_'">/hour</span>
                            <span v-else>/month</span>
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div class="my-5">
                    <div class="font-bold text-start w-3/4 mx-auto">Descriptions</div>
                    <div class="pl-5 w-3/4 mx-auto" v-for="(description, i ) in selectedPackage.description" :key="i">
                        <li class="text-start list-none font-sans">- {{ description }}</li>
                    </div>
                </div>
                <div class="my-5" v-if="selectedPackage.limit != '_'">
                    <div class="font-bold text-start py-2 w-3/4 mx-auto">FUP Limit: <span class="font-normal">{{ selectedPackage.limit }}</span></div>
                    <div class="font-bold text-start  py-2 w-3/4 mx-auto">Bandwidth after FUP limit: <span class="font-normal">{{ selectedPackage.bandwidth_after_limit }}Mbps</span></div>
                </div>
                <div @click="selectedPlan(selectedPackage)" class="w-1/2 cursor-pointer py-2 rounded-xl my-2 mx-auto font-mono font-bold  bg-gradient-to-r from-red-500 to-orange-500">GET PACKAGE</div>
            </div> 

      </div>
    </div>
  </template>
  <script setup>
  import IconHomeVue from '@/components/icons/IconHome.vue'
  import Form from '@/components/PackageRequest.vue'
  import 'animate.css'
  import router from '@/router/index.js'
  import {onMounted, ref} from 'vue'
  import IconBusinessPlan from '@/components/icons/IconBusinessPlan.vue';
  import IconStudentPlanVue from '@/components/icons/IconStudentPlan.vue';
  import IconMeter from '@/components/icons/IconMeter.vue';
  const tab = ref()
  const plans = ref()
  const data = ref()
  const packageSelected = ref(false)
  const newPlans = ref()
  const overlay = ref(false)
  const selectedPackage = ref()
  onMounted(()=>{
     plans.value = [
        {
            plan:'HOME',
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
            plan:'BUSINESS',
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
            plan:'STUDENT',
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

  newPlans.value = [
        {
            name:'Priority Data Packages',
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
  })
function clicked(pack){
    selectedPackage.value  = pack
    overlay.value = true
}
function getPlan(pack){
    overlay.value = false
    router.push({name:'purchase',query:{plan:pack.tag,speed:pack.speed}})
}
function selectedPlan(package_plan){
   window.scrollTo(0, 0);
   data.value = [0,package_plan]
   packageSelected.value = true
   overlay.value = false
}
function close(){
  packageSelected.value = false
}
  </script>,
