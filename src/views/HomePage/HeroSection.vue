<template>
    <!-- OVERLAY AT THE HERO SECTIONS -->
    <div class="fixed top-0 left-0 w-full h-full z-10 bg-green-500 bg-opacity-40 " v-if="overlay">
      <div class="absolute top-1/2 left-1/2 lg:w-1/2 sm:w-3/4 w-full h-fit mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded">
            <!-- LARGE SCREENS -->
            <div class="shadow  sm:block hidden animate__animated animate__rubberBand" >
                <div class="w-full flex justify-center py-5">
                    <div class="w-3/4 font-bold text-2xl">{{ selectedPackage.package_name.toUpperCase() }} PACKAGE</div>
                    <div @click="overlay = false" class="px-4  cursor-pointer py-2 text-xs font-mono w-fit bg-blue rounded-xl ">CLOSE</div>
                </div>
                <div class="flex justify-around w-3/4  mx-auto">
                  
                    <div class="rounded w-1/2  bg-gradient-to-l from-[#f15a22]  to-orange-500 flex">
                        <p class="text-7xl mx-auto font-bold font-mono">{{ selectedPackage.bandwidth }}<span class="text-3xl">Mbps</span>
                        </p>
                    </div>
                    
                    <div class="rounded min:w-1/2 bg-gradient-to-r px-2 from-[#f15a22] to-orange-500 flex align-baseline justify-between">
                        <p class="text-7xl font-bold font-mono">{{selectedPackage.fee}}<span class="text-sm">
                            <span v-if="selectedPackage.package_name.toUpperCase() === 'METERED HOME FIBER 20'">/hour</span>
                            <span v-else>/month</span>
                        </span>
                        </p>
                    </div>
                    
                </div>
                <!-- <div class="py-3 " >
                    <p class="text-grey font-">*With an exclusive Ksh.4000 refundable deposit</p>
                </div> -->
                <!-- <div class="w-3/4 my-5 mx-auto">
                    <div>
                        <p class="font-semibold text-start">Add-ons</p>
                        <div class="pl-5 text-start">
                            <li class="list-none">FREE INSTALLATION</li>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="my-5">
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
                </div> -->
                <div @click="getPlan(selectedPackage)" class="w-1/2 cursor-pointer py-2 rounded-xl my-2 mx-auto font-mono font-bold  bg-gradient-to-r from-[#f15a22] to-orange-500">GET PACKAGE</div>
            </div>    

            <!-- MOBILE VIEW -->
            <div class="shadow sm:hidden animate__animated animate__rubberBand ">
                <div class="w-full flex justify-center py-5">
                    <div class="w-full  font-bold text-xl">{{ selectedPackage.package_name.toUpperCase() }} PACKAGE</div>
                    <div @click="overlay = false" class="px-4 cursor-pointer py-1 text-xs font-mono w-fit bg-blue-500 rounded-xl ">CLOSE</div>
                </div>
                <div class="flex justify-around    mx-auto">
                  
                    <div class="rounded w-1/2  bg-gradient-to-l mx-1 from-[#f15a22]  to-orange-500 flex">
                        <p class="text-3xl mx-auto font-bold font-mono">{{ selectedPackage.bandwidth }}<span class="text-xl">Mbps</span>
                        </p>
                    </div>
                    <div class="rounded min:w-1/2 bg-gradient-to-r  px-2 from-[#f15a22] to-orange-500 flex align-baseline justify-between">
                        <p class="text-3xl font-bold font-mono">{{selectedPackage.fee}}<span class="text-sm">
                            <span v-if="selectedPackage.package_name.toUpperCase() === 'METERED HOME FIBER 20'">/hour</span>
                            <span v-else>/month</span>
                        </span>
                        </p>
                    </div>
                    
                </div>
                <div class="py-3 ">
                    <!-- <p class="text-grey font-">*With an exclusive Ksh.4000 refundable deposit</p> -->
                </div>
                <!-- <div class="w-3/4 my-5 mx-auto">
                    <div>
                        <p class="font-semibold text-start">Add-ons</p>
                        <div class="pl-5 text-start">
                            <li class="list-none">FREE INSTALLATION</li>
                        </div>
                    </div>
                </div> -->
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
                <div @click="getPlan(selectedPackage)" class="w-1/2 cursor-pointer py-2 rounded-xl my-2 mx-auto font-mono font-bold  bg-gradient-to-r from-[#f15a22] to-orange-500">GET PACKAGE</div>
            </div> 

      </div>
    </div>

  <!-- HERO SECTION IMAGES -->
   <div class="bg-[url('/Images/fav_G.png')] mb-5 " style="background-size: 50%;background-position: center">

        <div :style="`background-image: url(${plans[start].imagePath});`" class="w-screen bg-cover bg-center h-[80vh] aniate__animated animate__fadeIn"  v-if="packages">
            <!-- large screen -->
            <div class="sm:block hidden">
                <div class=" w-fit px-5  relative left-10 text-4xl py-5 font-extrabold text-white bg-gradient-to-b from-[#f15a22]  ">{{ plans[start].name }} </div>
                <div class="absolute lg:bottom-15 bottom-20 left-0 flex flex-wrap w-screen justify-evenly">
                    <div @click="clicked(pack)" class="lg:w-[180px] w-[50%]  lg:h-[180px] h-[50%] bg-gradient-to-l  rounded  from-[#f15a22] to-orange-600 m-2 cursor-pointer px-4 " v-for="(pack,i) in newPackages[plans[start].tag].packages" :key="i">
                        <div class="text-center text-white font-semibold hidden">{{ pack.feature }}</div>
                        <div class="lg:text-[80px] h-[65%] sm:text-3xl text-white text-center font-bold flex w-full align-center justify-center">
                        <span v-if="start === 0 || start === 1 || start === 4 ||start === 5" class="text-[65px]">{{ pack.bandwidth }} </span>
                        <span v-else>{{ pack.bandwidth }} </span>
                        
                        <span class="lg:text-2xl sm:text-[70%] text-end">Mbps</span>
                        </div>
                        <div class=" h-1/4 text-center font-mono  flex w-full align-center lg:text-2xl text-xl  justify-center text-nowrap">
                            {{ pack.fee }}
                            <span v-if="start === 3 || start === 7">/hour</span>
                            <span v-else>/month</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        <!-- small screen -->
            <div class="sm:hidden block  absolute w-screen top-[60%]">
                <div class="text-md p-2 font-extrabold text-white bg-gradient-to-r from-[#f15a22]">{{ plans[start].name }}</div>
                <div class="flex flex-wrap w-full justify-evenly ">
                    <div @click="clicked(pack)" class=" sm:w-[180px] m-1  text-white  w-fit px-1 sm:h-[180px] h-fit  bg-gradient-to-tr rounded from-orange-600  to-[#f15a22]   cursor-pointer " v-for="(pack,i) in newPackages[plans[start].tag].packages" :key="i">
                        <div class="sm:text-[100px] text-[20px] h-[65%]  text-center font-bold flex w-full align-center justify-center">
                        {{ pack.bandwidth }} 
                        <span class="sm:text-2xl text-sm text-end">Mbps</span>
                        </div>
                        <div class=" h-1/4 text-center font-mono   flex  align-center text-md  justify-center">
                            {{ pack.fee}}
                            <span v-if="start === 3 || start === 7" class="text-xs">/hour</span>
                            <span v-else class="text-xs">/month</span>
                        </div>
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
const newPackages = ref()
const start = ref(0)
const overlay = ref(false)
const selectedPackage = ref(null)
const plans = ref(
    [
        {
            name:'ELITE HOME PACKAGES',
            description: 'Dont miss a moment',
            imagePath:"/Images/gigabit-family.jpg",
            direction:"horizontal",
            tag:0,
        },
        {
            name:'STANDARD HOME PACKAGES',
            description: 'Keeping you up with no ease ',
            
            imagePath:"https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            direction:"horizontal",
            tag:1,
        },
        {
            name:'PRIORITY DATA PACKAGES',
            description: 'Improve Grade performance with ease',
            imagePath:"https://img.freepik.com/premium-photo/hispanic-latin-girl-college-student-using-laptop-computer-watching-distance-online-learning-seminar-class-remote-university-webinar-having-virtual-classroom-meeting-university-creative-space_265022-68286.jpg?w=826",
            direction:"horizontal",
            tag:2,
        },
        {
            name:'METRED HOME PACKAGES',
            description: 'Improve Grade performance with ease',
            imagePath:"https://img.freepik.com/free-photo/medium-shot-man-restaurant-with-smartphone_23-2150384767.jpg?semt=ais_hybrid",
            direction:"horizontal",
            tag:3,
        },
        {
            name:'ELITE HOME PACKAGES',
            description: 'Happy moments tailored for you',
            imagePath:"https://img.freepik.com/premium-photo/group-people-are-watching-soccer-game-tv_1262781-39800.jpg?w=900",
            direction:"horizontal",
            tag:0,
        },
        {
            name:'STANDARD HOME PACKAGES',
            description:'Focus on the profit we take care of the connectivity',
            imagePath:"https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            direction:"horizontal",
            tag:1,

        },
        {
            name:'PRIORITY DATA PACKAGES',
            description: 'When it comes to taking a break we got you!',
            imagePath:"/Images/african-student.jpg",
            direction:"horizontal",
            tag:2,
        },
        {
            name:'METRED HOME PACKAGES',
            description: 'When it comes to taking a break we got you!',
            imagePath:"https://img.freepik.com/free-photo/medium-shot-man-restaurant-with-smartphone_23-2150384767.jpg?semt=ais_hybrid",
            direction:"horizontal",
            tag:3,
        },
    ]
)
function clicked(pack){
    selectedPackage.value  = pack
    console.log(pack)
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
                        feature:"",
                        speed:7,
                        price:'2,199',
                        description:[
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
                        description:[
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
                        description:[
                            "Family connectivity",
                            "Multiple devices streaming",
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
                        description:[
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
                        description:[
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
                        feature:"",
                        speed:5,
                        price:'4,999',
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
                        feature:"",
                        speed:10,
                        price:'9,999',
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
                        feature:"",
                        speed:20,
                        price:'19,999',
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
                        feature:"",
                        speed:30,
                        price:'27,999',
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
                        feature:"",
                        immage:"/Image/student-lite.jpg",
                        speed:3,
                        price:'999',
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
                        immage:"/Image/student-pro.jpg",
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

    newPackages.value = [
        {
            name:'Elite Home Packages',
            packages:[
                {
                    package_name:'Elite Home Fiber 7',
                    bandwidth:'7',
                    fee:'2,199',
                    limit:'1600GB',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:'2'
                },
                {
                    package_name:'Elite Home Fiber 12',
                    bandwidth:'12',
                    fee:'2,599',
                    limit:'2000GB',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:'3'
                },
                {
                    package_name:'Elite Home Fiber 20',
                    bandwidth:'20',
                    fee:'3,799',
                    limit:'2500GB',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:'3'
                },
                {
                    package_name:'Elite Home Fiber 30',
                    bandwidth:'30',
                    fee:'5,399',
                    limit:'3000GB',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:'5'
                },
                {
                    package_name:'Elite Home Fiber 50',
                    bandwidth:'50',
                    fee:'6,599',
                    limit:'3500GB',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:'7'
                },
                {
                    package_name:'Elite Home Fiber 100',
                    bandwidth:'100',
                    fee:'11,999',
                    limit:'4000GB',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:'10'
                },
                {
                    package_name:'Elite Home Fiber 200',
                    bandwidth:'200',
                    fee:'19,999',
                    limit:'5000GB',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:'15'
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
                    bandwidth_after_limit:'1'
                },
                {
                    package_name:'Home Fiber Std 8',
                    bandwidth:'8',
                    fee:'1,699',
                    limit:'400GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'2'
                },
                {
                    package_name:'Home Fiber Std 12',
                    bandwidth:'12',
                    fee:'2,199',
                    limit:'600GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'3'
                },
                {
                    package_name:'Home Fiber Std 20',
                    bandwidth:'20',
                    fee:'2,999',
                    limit:'900GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'5'
                },
                {
                    package_name:'Home Fiber Std 30',
                    bandwidth:'30',
                    fee:'3,899',
                    limit:'1200GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'5'
                },
                {
                    package_name:'Home Fiber Std 50',
                    bandwidth:'50',
                    fee:'4,899',
                    limit:'1500GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'5'
                },
                {
                    package_name:'Home Fiber Std 75',
                    bandwidth:'75',
                    fee:'5,899',
                    limit:'1800GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'5'
                },
                {
                    package_name:'Home Fiber Std 100',
                    bandwidth:'100',
                    fee:'6,649',
                    limit:'2100GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'10'
                },
                {
                    package_name:'Home Fiber Std 150',
                    bandwidth:'150',
                    fee:'7,799',
                    limit:'2400GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'10'
                },
                {
                    package_name:'Home Fiber Std 220',
                    bandwidth:'220',
                    fee:'8,999',
                    limit:'2600GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'15'
                },
                {
                    package_name:'Home Fiber Std 300',
                    bandwidth:'300',
                    fee:'11,999',
                    limit:'3000GB',
                    connection_ratio:'1:6',
                    bandwidth_after_limit:'15'
                },
            ]
        },
        {
            name:'Priority Data Packages',
            packages:[
                {
                    package_name:'Priority Data 100',
                    bandwidth:'5',
                    fee:'999',
                    limit:'100GB',
                    connection_ratio:'1:8',
                    bandwidth_after_limit:'1'
                },
                {
                    package_name:'Priority Data 200',
                    bandwidth:'10',
                    fee:'1,499',
                    limit:'200GB',
                    connection_ratio:'1:8',
                    bandwidth_after_limit:'2'
                },
                {
                    package_name:'Priority Data 300',
                    bandwidth:'15',
                    fee:'1,750',
                    limit:'300GB',
                    connection_ratio:'1:8',
                    bandwidth_after_limit:'3'
                },
                {
                    package_name:'Priority Data 500',
                    bandwidth:'20',
                    fee:'2,199',
                    limit:'500GB',
                    connection_ratio:'1:8',
                    bandwidth_after_limit:'4'
                },
                {
                    package_name:'Priority Data 800',
                    bandwidth:'30',
                    fee:'3,199',
                    limit:'800GB',
                    connection_ratio:'1:8',
                    bandwidth_after_limit:'5'
                },
                {
                    package_name:'Priority Data 1200',
                    bandwidth:'50',
                    fee:'4,199',
                    limit:'1200GB',
                    connection_ratio:'1:8',
                    bandwidth_after_limit:'8'
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
                    bandwidth_after_limit:''
                },
                {
                    package_name:'Metered Home Fiber 20',
                    bandwidth:'20',
                    fee:'50',
                    limit:'_',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:''
                },
                {
                    package_name:'Metered Home Fiber 30',
                    bandwidth:'30',
                    fee:'90',
                    limit:'_',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:''
                },
                {
                    package_name:'Metered Home Fiber 50',
                    bandwidth:'50',
                    fee:'140',
                    limit:'_',
                    connection_ratio:'1:4',
                    bandwidth_after_limit:''
                },
            ]
        },
    ]
     
        
    
    setInterval(() => {
        if(start.value == 7 ){
            start.value = -1
        }
        start.value++
    }, 9000);
    })

</script>

<style>

</style>