<template>
    <v-card class="text-start" >
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
        fixed-tabs="true"
      >
        <v-tab value="HOME">HOME</v-tab>
        <v-tab value="BUSINESS">BUSINESS</v-tab>
        <v-tab value="STUDENT">STUDENT</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="tab" v-if="plans" >
        <v-tabs-window-item
          v-for="(plan,n) in plans.length"
          :key="n"
          :value=plans[n].plan
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(packages,i) in plans[n].packages"
                :key="i"
                cols="12"
                md="4"
              >
              <div >
                <v-card
                    style="color: red;background-color: green;"
                    class="mx-auto"
                    color="surface-variant"
                    image="/Images/student-pro.jpg"
                    max-width="350"
                    height="200"
                >
                    <v-card-title class="bg-gradient-to-r from-orange-500 py-3" >{{ packages.feature }}</v-card-title>
                    <p class="text-[70px]   px-4 bg-gradient-to-r from-orange-500 ">{{ packages.speed }}<span  class="text-[40px] sm:text-[40px]">Mbps <span class=" sm:block hidden text-base bg-gradient-to-r from-orange-500">Ksh. {{ packages.price }}/month </span></span></p>
                    <p class="sm:hidden block pl-2 bg-gradient-to-r py-2  text-xl from-orange-500">Ksh. {{ packages.price }}/month </p>
                </v-card>
                <v-card
                    class="mx-auto"
                    max-width="350"
                    style="background-color: greenyellow;"
                >
                    <v-list density="compact">

                    <v-list-item
                        v-for="(description, i) in packages.description"
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
                </v-card>

              </div>
                        
              
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
        <!-- <v-tabs-window-item  value="HOME">HOME</v-tabs-window-item> -->
        <!-- <v-tabs-window-item  value="BUSINESS">BUSINESS</v-tabs-window-item>
        <v-tabs-window-item  value="STUDENT">STUDENT</v-tabs-window-item> -->
      </v-tabs-window>
      </v-card-text>
    </v-card>
  </template>
  <script setup>
  import {onMounted, ref} from 'vue'
  const tab = ref()
  const plans = ref()
  onMounted(()=>{
     plans.value = [
        {
            plan:'HOME',
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
                    feature:"Power User",
                    speed:30,
                    price:5399,
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
                    price:6999,
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
  })

  </script>,