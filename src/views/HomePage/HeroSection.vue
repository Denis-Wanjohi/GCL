<template>
  <v-carousel  
    v-if="plans"
    height=""
    style="width: 100vw;background-color: black; background-image: url('/public/Images/Gigabit_logo.png');"
    class="border mx-auto bg-gradient-to-tr bg-cover from-orange-500 to-pink-600"
    :show-arrows="false"
    cycle
    interval="10000"
    hide-delimiters="true"
  >
    <v-carousel-item
    style=""
      class=" rounded-3xl bg-cover bg-center"
      v-for="(plan, i) in plans.length"
      height=""
      :key="i"
      data-aos="fade-up"
      
    >
    
      <!-- LARGE SCREENS -->
      <div class="relative lg:h-[90vh] sm:block hidden" >
        <v-parallax :src=plans[plan-1].imagePath>
          <div class="absolute top-0 left-[10%] text-4xl py-5 font-extrabold text-white bg-gradient-to-b from-orange-800  ">{{ plans[plan-1].name }}</div>
          <div class="absolute bottom-10 left-0  flex w-full justify-evenly">
            <!-- <div class="w-[180px]   h-[180px]  bg-gradient-to-l from-blue-500 to-green-600 m-2 cursor-pointer " v-for="(pack,i) in packages[plans[plan-1].tag].packages" :key="i"> -->
            <div class="lg:w-[180px]  lg:h-[180px] h-[50%] bg-gradient-to-l  rounded px-1 from-blue-500 to-orange-600 m-2 cursor-pointer " v-for="(pack,i) in packages[plans[plan-1].tag].packages" :key="i">
                <div class="text-center text-white font-semibold hidden">{{ pack.feature }}</div>
                <div class="lg:text-[100px] h-[65%] sm:text-3xl text-white text-center font-bold flex w-full align-center justify-center">
                  {{ pack.speed }} 
                  <span class="lg:text-2xl sm:text-[70%] text-end">Mbps</span>
                </div>
                <div class=" h-1/4 text-center font-mono  flex w-full align-center lg:text-2xl  justify-center">{{ pack.price }}/month</div>
            </div>
          </div>
        </v-parallax>
      </div>
     
      <!-- MOBILE VIEW -->
      <div class="relative sm:h-[90vh] sm:hidden block text-white">
        <v-parallax :src=plans[plan-1].imagePath style="height:400px;">
          <div class="absolute bottom-5 left-0  flex flex-wrap w-full justify-start">
          <div class="text-md p-2 font-extrabold text-white bg-gradient-to-r from-orange-800">{{ plans[plan-1].name }}</div>
          <div class="flex flex-wrap w-full justify-evenly">
            <div @click="package_selected()" class=" sm:w-[180px] m-1   w-1/4 sm:h-[180px] h-fit  bg-gradient-to-b from-blue-700 via-orange-400 to-blue-600   cursor-pointer " v-for="(pack,i) in packages[plans[plan-1].tag].packages" :key="i">
                <div class="sm:text-[100px] text-[20px] h-[65%]  text-center font-bold flex w-full align-center justify-center">
                  {{ pack.speed }} 
                  <span class="sm:text-2xl text-sm text-end">Mbps</span>
                </div>
                <div class=" h-1/4 text-center font-mono  flex w-full align-center text-sm  justify-center">{{ pack.price }}/month</div>
            </div>
          </div>
          </div>
        </v-parallax>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import 'animate.css'
import { onMounted, ref } from 'vue'
const current = ref()
const plans = ref()
const packages = ref()
onMounted(()=>{
   plans.value = [
    {
        name:'HOME PLANS',
        description: 'Dont miss a moment',
        price:'2199',
        imagePath:"/Images/gigabit-family.jpg",
        direction:"horizontal",
        tag:0
    },
    {
        name:'BUSINESS PLANS',
        description: 'Keeping you up with no ease ',
        price:'2199',
        imagePath:"/Images/business.jpg",
        direction:"horizontal",
        tag:1

    },
    {
        name:'STUDENT PLANS',
        description: 'Improve Grade performance with ease',
        price:'999',
        imagePath:"/Images/soundtrap.jpg",
        direction:"horizontal",
        tag:2

    },
    {
        name:'HOME PLANS',
        description: 'Happy moments tailored for you',
        price:'2199',
        imagePath:"/Images/netflix.jpg",
        direction:"horizontal",
        tag:0

    },
    {
        name:'BUSINESS PLANS',
        description:'Focus on the profit we take care of the connectivity',

        price:'2199',
        imagePath:"/Images/business_2.jpg",
        direction:"horizontal",
        tag:1

    },
    {
        name:'STUDENT PLANS',
        description: 'When it comes to taking a break we got you!',
        price:'999',
        imagePath:"/Images/african-student.jpg",
        direction:"horizontal",
        tag:2
    },
 ]
 packages.value = [
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
                    feature:"Power User",
                    speed:20,
                    price:19999,
                    description:[
                        "Lightening-fast connectivity",
                        "High-speed uploads and downoads",
                        "Low latency",
                        "Reliable connectivity",
                    ],
                    users:"20-50"
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

</script>

<style>

</style>