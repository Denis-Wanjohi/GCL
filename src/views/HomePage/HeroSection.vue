<template>
  <v-carousel  
    v-if="plans"
    height=""
    style="width: 100vw;"
    class="border mx-auto bg-gradient-to-tr from-orange-500 to-pink-600"
    :show-arrows="false"
    cycle
    interval="5000"
    hide-delimiters="true"
  >
    <v-carousel-item
      class="bg-orange rounded-3xl"
      v-for="(plan, i) in plans.length"
      height=""
      :key="i"
    >
      <v-sheet
        class="bg-blue"
        height=""
      >
        <div class="d-flex sm:h-[90vh] h-[300px] bg-[url('/Images/GCL_G_logo.png')] justify-center align-center w-screen">
          <img :src=plans[plan-1].imagePath class="w-full   " alt="">
          <!-- <img v-lazy="{ src: plans[plan-1].imagePath, loading: 'loading.gif', error: 'error.gif' }" class="w-full" alt=""> -->
          <!-- FOR PC SCREENS -->
          <div class="sm:w-[500px] w-3/4  sm:block hidden bg-cyan-800 rounded absolute text-center  sm:h-[200px] sm:opacity-90 opacity-100  sm:mt-[150px] mt-[100px] sm:-ml-[700px] ">
            <p class="sm:text-5xl text-2xl text-center py-5 font-bold text-white">{{plans[plan-1].name}}</p>
            <p>{{plans[plan-1].description}}</p>
            <p>Pocket friendly from as low as <span class="text-xl font-bold">KSH {{plans[plan-1].price}} bob</span> </p>
            <div class="py-4  sm:block hidden">
                <router-link to="/purchase" class="px-5  font-bold bg-orange-400 w-fit rounded-md py-3 text-xl mx-auto">GET THE PLAN</router-link>
            </div>
          </div>


          <!-- FOR MOBILE -->
          <div class="inset-0 flex justify-between flex-col absolute sm:hidden w-full  h-full">
              <p class="text-start px-5 font-semibold text-2xl bg-gradient-to-b from-blue-600">{{plans[plan-1].name}}</p>
              <div class=" text-start bg-gradient-to-t from-orange-300 ">
                <p class="bg-gradient-to-r from-orange-400 ">{{plans[plan-1].description}}</p>
                <div class="flex flex-wrap ">
                  <p class="bg-gradient-to-r from-orange-400">Starting from <span class="text-xl font-bold">KSH {{plans[plan-1].price}} bob</span> </p>
                  <div class="py-2 mx-auto">
                    <router-link to="/purchase" class="px-2  font-bold bg-orange-400 w-fit rounded-md py-1 text-lg mx-auto">GET THE PLAN</router-link>
                  </div>
                </div>
                
              </div>
              
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import 'animate.css'
import { onMounted, ref } from 'vue'
const plans = ref()
onMounted(()=>{
   plans.value = [
    {
        name:'HOME FIBRE',
        description: 'Dont miss a moment',
        price:'2199',
        imagePath:"/Images/gigabit-happy-family.jpg",
        direction:"horizontal"
    },
    {
        name:'BUSINESS FIBRE',
        description: 'Keeping you up with no ease ',
        price:'2199',
        imagePath:"/Images/business.jpg",
        direction:"horizontal"

    },
    {
        name:'STUDENT PLANS',
        description: 'Improve Grade performance with ease',
        price:'999',
        imagePath:"/Images/soundtrap.jpg",
        direction:"horizontal"

    },
    {
        name:'HOME FIBRE',
        description: 'Happy moments tailored for you',
        price:'2199',
        imagePath:"/Images/netflix.jpg",
        direction:"horizontal"

    },
    {
        name:'BUSINESS FIBRE',
        description:'Focus on the profit we take care of the connectivity',

        price:'2199',
        imagePath:"/Images/business_2.jpg",
        direction:"horizontal"

    },
    {
        name:'STUDENT PLANS',
        description: 'When it comes to taking a break we got you!',
        price:'999',
        imagePath:"/Images/african-student.jpg",
        direction:"horizontal"
    },
 ]
})

</script>

<style>

</style>