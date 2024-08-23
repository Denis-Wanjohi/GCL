<template>
    <div class="fixed top-0 left-0 w-full h-full z-10 bg-green-500 bg-opacity-40 " v-if="overlay">
      <div class="absolute top-1/2 left-1/2 lg:w-1/2 sm:w-3/4 w-full h-fit mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded">
            <!-- LARGE SCREENS -->
            <div class="shadow  sm:block hidden animate__animated animate__rubberBand" >
                <div class="w-full flex justify-center py-5">
                    <div class="w-3/4 font-bold text-2xl">{{ selectedPackage.tag.toUpperCase() }} PLAN</div>
                    <div @click="overlay = false" class="px-4 w-1/4 cursor-pointer py-2 text-xs font-mono w-fit bg-blue rounded-xl ">CLOSE</div>
                </div>
                <div class="flex justify-around w-3/4  mx-auto">
                  
                    <div class="rounded w-1/2  bg-gradient-to-l from-[#f15a22]  to-orange-500 flex">
                        <p class="text-7xl mx-auto font-bold font-mono">{{ selectedPackage.speed }}<span class="text-3xl">Mbps</span>
                        </p>
                    </div>
                    <div class="rounded min:w-1/2 bg-gradient-to-r px-2 from-[#f15a22] to-orange-500 flex align-baseline justify-between">
                        <p class="text-7xl font-bold font-mono">{{selectedPackage.price}}<span class="text-sm">/month</span>
                        </p>
                    </div>
                    
                </div>
                <div class="py-3 " >
                    <p class="text-grey font-">*With an exclusive Ksh.4000 refundable deposit</p>
                </div>
                <div class="w-3/4 my-5 mx-auto">
                    <div>
                        <p class="font-semibold text-start">Add-ons</p>
                        <div class="pl-5 text-start">
                            <li class="list-none">FREE INSTALLATION</li>
                        </div>
                    </div>
                </div>
                <div class="my-5">
                    <div class="font-bold text-start w-3/4 mx-auto">Descriptions</div>
                    <div class="pl-5 w-3/4 mx-auto" v-for="(description, i ) in selectedPackage.description" :key="i">
                        <li class="text-start list-none font-sans">- {{ description }}</li>
                    </div>
                </div>
                <div class="my-5">
                    <div class="font-bold text-start w-3/4 mx-auto">Users</div>
                    <div class="pl-5 w-3/4 mx-auto">
                        <li class="text-start list-none font-sans">{{selectedPackage.users}} users with stable connectivity</li>
                    </div>
                </div>
                <div @click="getPlan(selectedPackage)" class="w-1/2 cursor-pointer py-2 rounded-xl my-2 mx-auto font-mono font-bold  bg-gradient-to-r from-[#f15a22] to-orange-500">GET PLAN</div>
            </div>    

            <!-- MOBILE VIEW -->
            <div class="shadow sm:hidden animate__animated animate__rubberBand ">
                <div class="w-full flex justify-center py-5">
                    <div class="w-3/4 font-bold text-2xl">{{ selectedPackage.tag.toUpperCase() }} PLAN</div>
                    <div @click="overlay = false" class="px-4 w-1/4 cursor-pointer py-2 text-xs font-mono w-fit bg-blue-500 rounded-xl ">CLOSE</div>
                </div>
                <div class="flex justify-around w-3/4  mx-auto">
                  
                    <div class="rounded w-1/2  bg-gradient-to-l mx-1 from-[#f15a22]  to-orange-500 flex">
                        <p class="text-7xl mx-auto font-bold font-mono">{{ selectedPackage.speed }}<span class="text-3xl">Mbps</span>
                        </p>
                    </div>
                    <div class="rounded min:w-1/2 bg-gradient-to-r  px-2 from-[#f15a22] to-orange-500 flex align-baseline justify-between">
                        <p class="text-7xl font-bold font-mono">{{selectedPackage.price}}<span class="text-sm">/month</span>
                        </p>
                    </div>
                    
                </div>
                <div class="py-3 ">
                    <p class="text-grey font-">*With an exclusive Ksh.4000 refundable deposit</p>
                </div>
                <div class="w-3/4 my-5 mx-auto">
                    <div>
                        <p class="font-semibold text-start">Add-ons</p>
                        <div class="pl-5 text-start">
                            <li class="list-none">FREE INSTALLATION</li>
                        </div>
                    </div>
                </div>
                <div class="my-5">
                    <div class="font-bold text-start w-3/4 mx-auto">Descriptions</div>
                    <div class="pl-5 w-3/4 mx-auto" v-for="(description, i ) in selectedPackage.description" :key="i">
                        <li class="text-start list-none font-sans">- {{ description }}</li>
                    </div>
                </div>
                <div class="my-5">
                    <div class="font-bold text-start w-3/4 mx-auto">Users</div>
                    <div class="pl-5 w-3/4 mx-auto">
                        <li class="text-start list-none font-sans">{{selectedPackage.users}} users with stable connectivity</li>
                    </div>
                </div>
                <div @click="getPlan(selectedPackage)" class="w-1/2 cursor-pointer py-2 rounded-xl my-2 mx-auto font-mono font-bold  bg-gradient-to-r from-[#f15a22] to-orange-500">GET PLAN</div>
            </div> 

      </div>
    </div>
  <!-- <v-carousel  
    v-if="plans"
    height=""
    style="width: 100vw;
            height:90vh;
            background-color: white;
            
            background-size: cover; /* Ensure the image covers the entire div */
            background-repeat: no-repeat; /* Prevent repetition */
            background-position: center;
            "
     :style="`background-image: url(${plans[start].imagePath});`"
    class="border mx-auto bg-gradient-to-tr bg-cover from-orange-500 to-pink-600 "
    :show-arrows="false"
    cycle
    interval="2000"
    hide-delimiters="true"
  >
    <v-carousel-item
    style=""
      class=" rounded-3xl bg-cover bg-center"
      v-for="(plan, i) in plans.length"
      height=""
      :key="i"
      data-aos="fade-up" -->
    <!-- > -->
    
      <!-- LARGE SCREENS -->
      <!-- <div class="relative lg:h-[90vh] sm:block hidden animate__animated animate__faster animate__bounceIn " > -->
        <!-- <v-parallax :src=plans[plan-1].imagePath> -->
            
            <!-- <v-parallax>
          <div class="absolute top-0 left-[10%] text-4xl py-5 font-extrabold text-white bg-gradient-to-b from-[#f15a22]  ">{{ plans[plan-1].name }}</div>
          <div class="absolute lg:bottom-10 bottom-20 left-0  flex w-full justify-evenly">
            <div @click="clicked(pack)" class="lg:w-[180px] w-[50%]  lg:h-[180px] h-[50%] bg-gradient-to-l  rounded px-3 from-[#f15a22] to-orange-600 m-2 cursor-pointer " v-for="(pack,i) in packages[plans[plan-1].tag].packages" :key="i">
                <div class="text-center text-white font-semibold hidden">{{ pack.feature }}</div>
                <div class="lg:text-[100px] h-[65%] sm:text-3xl text-white text-center font-bold flex w-full align-center justify-center">
                  {{ pack.speed }} 
                  <span class="lg:text-2xl sm:text-[70%] text-end">Mbps</span>
                </div>
                <div class=" h-1/4 text-center font-mono  flex w-full align-center lg:text-2xl text-xl  justify-center">{{ pack.price }}/month</div>
            </div>
          </div>
        </v-parallax> -->
      <!-- </div> -->
     
      <!-- MOBILE VIEW -->
      <!-- <div class="relative sm:h-[90vh] sm:hidden block text-white">
        <v-parallax :src=plans[plan-1].imagePath style="height:400px;">
          <div class="absolute bottom-5 left-0  flex flex-wrap w-full justify-start">
          <div class="text-md p-2 font-extrabold text-white bg-gradient-to-r from-[#f15a22]">{{ plans[plan-1].name }}</div>
          <div class="flex flex-wrap w-full justify-evenly">
            <div @click="clicked(pack)" class=" sm:w-[180px] m-1   w-1/4 sm:h-[180px] h-fit  bg-gradient-to-tr rounded from-orange-600  to-[#f15a22]   cursor-pointer " v-for="(pack,i) in packages[plans[plan-1].tag].packages" :key="i">
                <div class="sm:text-[100px] text-[20px] h-[65%]  text-center font-bold flex w-full align-center justify-center">
                  {{ pack.speed }} 
                  <span class="sm:text-2xl text-sm text-end">Mbps</span>
                </div>
                <div class=" h-1/4 text-center font-mono  flex w-full align-center text-sm  justify-center">{{ pack.price }}/month</div>
            </div>
          </div>
          </div>
        </v-parallax>
      </div> -->
    <!-- </v-carousel-item> -->
  <!-- </v-carousel> -->



  <!-- image test -->
   <div>
        <div :style="`background-image: url(${plans[start].imagePath});`" class="w-screen bg-cover bg-center h-[80vh]"  v-if="packages">
            <div class="sm:block hidden">
                <div class=" w-fit px-5  relative left-10 text-4xl py-5 font-extrabold text-white bg-gradient-to-b from-[#f15a22]  ">{{ plans[start].name }}</div>
                <div class="absolute lg:bottom-15 bottom-20 left-0  flex w-full justify-evenly">
                    <div @click="clicked(pack)" class="lg:w-[180px] w-[50%]  lg:h-[180px] h-[50%] bg-gradient-to-l  rounded px-3 from-[#f15a22] to-orange-600 m-2 cursor-pointer " v-for="(pack,i) in packages[plans[start].tag].packages" :key="i">
                        <div class="text-center text-white font-semibold hidden">{{ pack.feature }}</div>
                        <div class="lg:text-[100px] h-[65%] sm:text-3xl text-white text-center font-bold flex w-full align-center justify-center">
                        {{ pack.speed }} 
                        <span class="lg:text-2xl sm:text-[70%] text-end">Mbps</span>
                        </div>
                        <div class=" h-1/4 text-center font-mono  flex w-full align-center lg:text-2xl text-xl  justify-center">{{ pack.price }}/month</div>
                    </div>
                </div>
            </div>
            <div class="sm:hidden block  absolute w-screen top-[60%]">
                <div class="text-md p-2 font-extrabold text-white bg-gradient-to-r from-[#f15a22]">{{ plans[start].name }}</div>
                <div class="flex flex-wrap w-full justify-evenly">
                    <div @click="clicked(pack)" class=" sm:w-[180px] m-1  text-white  w-1/4 sm:h-[180px] h-fit  bg-gradient-to-tr rounded from-orange-600  to-[#f15a22]   cursor-pointer " v-for="(pack,i) in packages[plans[start].tag].packages" :key="i">
                        <div class="sm:text-[100px] text-[20px] h-[65%]  text-center font-bold flex w-full align-center justify-center">
                        {{ pack.speed }} 
                        <span class="sm:text-2xl text-sm text-end">Mbps</span>
                        </div>
                        <div class=" h-1/4 text-center font-mono  flex w-full align-center text-sm  justify-center">{{ pack.price }}/month</div>
                    </div>
                </div>
            </div>
       </div>
   </div>

</template>

<script setup>

import 'animate.css'
import { onMounted, ref } from 'vue'
import router from '@/router/index.js'
const packages = ref()
const start = ref(0)
const overlay = ref(false)
const selectedPackage = ref(null)
const plans = ref(
    [
        {
            name:'HOME PLANS',
            description: 'Dont miss a moment',
            price:'2199',
            imagePath:"/Images/gigabit-family.jpg",
            direction:"horizontal",
            tag:0,
            preloadedImage:''
        },
        {
            name:'BUSINESS PLANS',
            description: 'Keeping you up with no ease ',
            price:'2199',
            imagePath:"/Images/business.jpg",
            direction:"horizontal",
            tag:1,
            preloadedImage:''
        },
        {
            name:'STUDENT PLANS',
            description: 'Improve Grade performance with ease',
            price:'999',
            imagePath:"/Images/soundtrap.jpg",
            direction:"horizontal",
            tag:2,
            preloadedImage:''
        },
        {
            name:'HOME PLANS',
            description: 'Happy moments tailored for you',
            price:'2199',
            imagePath:"/Images/netflix.jpg",
            direction:"horizontal",
            tag:0,
            preloadedImage:''
        },
        {
            name:'BUSINESS PLANS',
            description:'Focus on the profit we take care of the connectivity',
            price:'2199',
            imagePath:"/Images/business_2.jpg",
            direction:"horizontal",
            tag:1,
            preloadedImage:''

        },
        {
            name:'STUDENT PLANS',
            description: 'When it comes to taking a break we got you!',
            price:'999',
            imagePath:"/Images/african-student.jpg",
            direction:"horizontal",
            tag:2,
            preloadedImage:''
        },
    ]
)
function clicked(pack){
    selectedPackage.value  = pack
    overlay.value = true
}
function getPlan(pack){
    overlay.value = false
    router.push({name:'purchase',query:{plan:pack.tag,speed:pack.speed}})
}

const preloadImage = (src,callback)=>{
        const image = new Image()
        image.src = src;
        image.onload = ()=>{
            if(callback) callback(image);
        }
    }
const preloadPlanImages =  ()=>{
    plans.value.forEach(plan =>{
        preloadImage(plan.imagePath,(image)=>{
            plan.preloadImage  = image.src;
        })
    })
}
onMounted(()=>{

    preloadPlanImages();

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
                        users:"5-8",
                        tag:'home'
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
                        users:"9-12",
                        tag:'home'
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
                        users:"13-15",
                        tag:'home'
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
                        users:"15-20",
                        tag:'home'
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
                        description:[
                            "Basic online activities",
                            "Fast upload and downloads speeeds",
                            "Low latency",
                            "Reliable conectivity",
                        ],
                        users:"1-5",
                        tag:'business'
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
                        users:"5-10",
                        tag:'business'

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
                        users:"10-20",
                        tag:'business'

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
                        users:"20-50",
                        tag:'business'

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
                        immage:"/Image/student-lite.jpg",
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
                        immage:"/Image/student-pro.jpg",
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
        
    
    setInterval(() => {
        if(start.value == plans.value.length){
            start.value = -1
        }
        start.value++
    }, 6000);
    })

</script>

<style>

</style>