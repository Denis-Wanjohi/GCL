
<script setup>
import IconHome from "./components/icons/IconHome.vue"
import IconAboutUs from "./components/icons/IconAboutUs.vue"
import IconContact from "./components/icons/IconContact.vue"
import IconMap from "./components/icons/IconMap.vue"
import IconSupport from "./components/icons/IconSupport.vue"
import IconHomePlan from "./components/icons/IconHomePlan.vue"
import IconStudentPlan from "./components/icons/IconStudentPlan.vue"
import IconBusinessPlan from "./components/icons/IconBusinessPlan.vue"
import router from '@/router/index.js'
let  year = new Date().getFullYear()
const footer = [
      {
        title:"Company",
        items:[
          {
            value:"Home",
            link:"/",
            icon:IconHome
          },
          {
            value:"About us",
            link:"/about",
            icon:IconAboutUs
          },
          {
            value:"Contacts",
            link:"/contacts",
            icon:IconContact
          },
          {
            value:"Our Coverage",
            link:"/coverage",
            icon:IconMap
          },
          {
            value:"Support",
            link:"/support",
            icon:IconSupport
          },
        ]
      },
      {
        title:"Plans",
        items:[
          {
            value:"Home Plan",
            link:"/purchase/home",
            icon:IconHomePlan
          },
          {
            value:"Business Plan",
            link:"/purchase/business",
            icon:IconBusinessPlan
          },
          {
            value:"Student Plan",
            link:"/purchase/student",
            icon:IconStudentPlan
          },
        ]
      }
]
 function scrollToTop(){
  window.scrollTo(0, 0);
}
function supportReq(){
  router.push('/support_form')
  // window.scrollTo(0,window.innerHeight * 0.1)
  if(window.innerWidth <= 426){
    window.scrollTo(0,window.innerHeight * 1.85) 
  }else{
    window.scrollTo(0,window.innerHeight * 0.6)
  }
  console.log(window.innerWidth)
}
function one(item){
  scrollToTop()
  router.push(item.link)
}

</script>
<template>
  <div v-if="$route.name" class="font-sans">   
    <header class="w-screen bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-900">
      <!-- <header class="w-screen   sm:bg-red-700 md:bg-orange-400 bg-lime-600"> -->
      <div class="flex  w-full justify-between">
        <div class="sm:w-[30%]   w-3/4 flex justify-center  ">
          <router-link to="/">
            <img src="/Images/Gigabit_main_logo.png"  class=" my-auto h-[80px] w-full bg-fill" alt="LOGO PNG">
          </router-link>
        </div>
        <!-- LARGE  SCREEN -->
        <div  class=" w-[70%] my-auto lg:block hidden text-white ">
          <VTabs bg-color=""  class=" h-[200px] hidden font-bold text-xl ">
            <VTab  style="font-weight: 700;" to="/">HOME</VTab>
            <VTab  style="font-weight: 700;" to="/about">ABOUT US</VTab>
            <VTab  style="font-weight: 700;" to="/coverage"> COVERAGE</VTab>
            <VTab  style="font-weight: 700;" to="/purchase">PURCHASE</VTab>
            <VTab  style="font-weight: 700;" to="/contacts"> CONTACTS</VTab>
            <VTab  style="font-weight: 700;" to="/support"> SUPPORT</VTab>
          </VTabs>
        </div>
        <!-- TABLET VIEW -->
        <div  class=" w-[60%] my-auto lg:hidden  sm:block hidden text-white ">
          <VTabs bg-color="" fixedTabs class=" h-[200px] hidden font-bold text-xl ">
            <VTab  style="font-weight: 700;font-size:medium" to="/">HOME</VTab>
            <VTab  style="font-weight: 700;font-size: medium;" to="/purchase">PURCHASE</VTab>
            <VTab  style="font-weight: 700;font-size: medium;" to="/contacts"> CONTACTS</VTab>
          </VTabs>
          <VTab style="font-size: medium;" class="py-2">
            <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99"/></svg>
            Call us: 0712 999 333
          </VTab>
        </div>

        <div class="w-[20%]  lg:flex lg:justify-center hidden text-white ">
          <VTab style="font-size: small;" class="">
            <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="30px" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99"/></svg>
            Call us: 0712 999 333
          </VTab>
        </div>

        <!-- MOBILE VIEW MENU -->
        <div class="lg:hidden block  w-1/4 b pr-3 h-fit flex place-content-end  my-auto">
          <v-menu>
            <template v-slot:activator="{ props }">
              <div
                color="rgb(59 130 246 / 0.5)"
                v-bind="props"
                elevation="0"

              >
              <svg xmlns="http://www.w3.org/2000/svg"    class=" mx-auto mr-3"   width="50px" height="50px" viewBox="0 0 24 24">
                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12" />
              </svg>
              </div>
            </template>
            <v-list>
              <v-list-item
                        v-for="(item,i) in footer[0].items"
                        :key="i"
                        link=true
                        class=" my-1  h-[50px] "
                      >
                      <template v-slot:prepend>
                          <router-link :to=item.link   class="">
                            <v-icon :icon="item.icon"></v-icon>
                          </router-link>
                      </template>
                      <router-link :to=item.link class="px-3">
                        <v-list-item-title><span  class="font-semibold px-4">{{ item.value }}</span></v-list-item-title>
                      </router-link>
              </v-list-item>
              <v-list-item
                        v-for="(item,i) in footer[1].items"
                        :key="i"
                        link=true
                        class=" my-1  h-[50px] "
                      >
                      <template v-slot:prepend>
                          <router-link :to=item.link class="">
                            <v-icon :icon="item.icon"></v-icon>
                          </router-link>
                      </template>
                      <router-link :to=item.link class="px-3">
                        <v-list-item-title><span class="font-semibold px-4">{{ item.value }}</span></v-list-item-title>
                      </router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
          
      </div>

    </header>
    <div class=" px-2  inset-0 z-10 fixed top-3/4  text-center w-20 h-20">
      <!-- <v-fab extended prepend-icon="$vuetify" variant="tonal" class="text-blue-500" text="Reach out"></v-fab> -->
      <v-fab @click="supportReq" absolute location="center">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700 animate__animated animate__flash animate__slower animate__infinite" width="20px" height="20px" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path fill="currentColor" d="M64 64a48 48 0 0 1 96 0a8 8 0 0 1-16 0a32 32 0 0 0-64 0a8 8 0 0 1-16 0m143.23 56c-8.61.4-15.23 7.82-15.23 16.43v7.28a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-23.51c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 144 120v15.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V64.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 96 64v119.74a8.19 8.19 0 0 1-6.72 8.16h-.12a6.09 6.09 0 0 1-6-3.09l-21-36.44c-4.3-7.46-13.74-10.57-21.4-6.62A16 16 0 0 0 34.15 168l30.95 60.05A8 8 0 0 0 72 232h136a8 8 0 0 0 7.16-4.42c.36-.72 8.84-15.06 8.84-40.65V136a16 16 0 0 0-16.77-16" />
        </svg>
        
      </v-fab>
      <!-- <p class="absolute top-10 ">Talk to us!</p> -->
    </div>

    <div class=" px-2  inset-0 z-10 fixed top-[90%] md:left-[105px] sm:left-[105px] left-[105px] text-center w-20 h-20">
      
      <a href="tel:+254712999333">
        <v-fab  absolute location="center" color="green">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
          </svg>
          whatsapp us!
        </v-fab>
      </a>
      <!-- <p class="absolute top-10 ">Talk to us!</p> -->
    </div>
    
    <RouterView />

    <footer>
      <v-card
      color="surface-variant"
                      image="/Images/patch-panel.webp"
                      class="mt-1"           
    >
        <div class=" pt-[50px] pb-[50px]  bg-gradient-to-tl from-blue-800 via-blue-600 flex-col">

          <!-- top content -->
          <div class="flex flex-col md:flex-row  pb-0" >
            <!-- logo and details  -->
            <div class="md:w-1/2 px-10 ">
              <img src="/Images/Gigabit_logo.png"   class="  w-full  h-1/2  " alt="Gigabit Logo">
              <div class="px-3 shadow py-1 text-wrap text-white font-sans">
                Gigabit Connection Limited we  excel with FTTH(Fibre To The Home), FTTP(Fibre To The Premisis) and wireless services, offering lightning-fast speeds, reliability and customer-centric support, setting a new standard in the industry.
              </div>
            </div>

            <!-- links -->
            <div class="sm:w-3/4  flex sm:flex-row flex-col h-fit  shadow-lg  "> 
              <v-card
                  class="mx-auto w-3/4 my-2 sm:my-0 bg-transparent h-fit"
                  max-width="300"
                  elevation="0"
                  v-for="(foot, i) in footer"
                      :key="i"
                      :value="foot"
                >
                  <v-list density="compact"
                      elevation="0"
                      class="mt-5 mx-5 flex-col bg-transparent text-white"
                  >
                    <v-list-subheader style="font-size: 20px;"><span class="font-bold text-black">{{foot.title}} </span></v-list-subheader>
                      <v-list-item
                        v-for="(item,i) in foot.items"
                        :key="i"
                        @click="one(item)"
                        class=" my-1 text-start"
                      >
                        <template v-slot:prepend>
                            <v-icon  class="" :icon="item.icon"></v-icon>
                        </template>
                        <v-list-item-title><span class="font-bold text-start sm:text-sm md:text-lg ">{{ item.value }}</span></v-list-item-title>
                      </v-list-item>
                    
                  </v-list>
                </v-card>
            </div>
          </div>

          <!-- socials -->
          <!-- <div class="sm:w-1/2 w-full bg-green ">
            <div class="flex justify-between bg-blue   mx-auto px-5 py-2">
                <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                    <path fill="white" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" />
                  </svg>
                </a>
                <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20">
                    <path fill="white" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" />
                  </svg>
                </a>
                <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                    <g fill="white" stroke="#334155" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#3512b5">
                      <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109" />
                      <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193" />
                    </g>
                  </svg>
                </a>
                <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                    <path fill="white" d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709m-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246m4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078" />
                    <circle cx="11.994" cy="11.979" r="3.003" fill="#334155" />
                  </svg>
                </a>

                <a href="tel:+25471299933">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                    <path fill="white" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                  </svg>
                </a>
              </div>
          </div> -->
          <v-divider class="mx-10" thickness="2"></v-divider>
          <div class="text-grey text-center text-sm pt-2">
            <p>@{{year}} Gigabit Connection Limited</p>
          </div>
          
        </div>
      </v-card
      
      >
    </footer>

  </div>
</template>

