<template>
  <!-- <div class="w-full h-[90vh] bg-slate-400 overflow-hidden">
    <img src="/Images/gigabit-happy-family.jpg" class="w-full" alt="">
  </div> -->

  <v-carousel  
    v-if="plans"
    
    height="600"
    style="width: 100vw;"
    class="border mx-auto"
    show-arrows="hover"
    cycle
    interval="5000"
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(plan, i) in plans.length-1"
      :key="i"
    >
      <v-sheet
        class=""
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center w-screen animate__animated animate__jackInTheBox">
            
            <!-- <div class="text-h2">
            {{ plan-1 }}
          </div> -->
          <img :src=plans[plan-1].imagePath class="w-full" alt="">
          <div class="w-[500px] bg-cyan-500 rounded absolute text-center  h-[200px] opacity-90  mt-[150px] -ml-[700px] ">
            <p class="text-5xl text-center py-5 font-bold text-white">{{plans[plan-1].name}}</p>
            <p>{{plans[plan-1].description}}</p>
            <p>Pocket friendly from as low as <span class="text-xl font-bold">KSH {{plans[plan-1].price}} bob</span> </p>
            <div>
                <div class="px-5 font-bold bg-orange-400 w-fit rounded-md py-3 text-xl mx-auto">GET THE PLAN</div>

            </div>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import 'animate.css'
import { VCarousel } from 'vuetify/lib/components/index.mjs'
const plans = [
    {
        name:'HOME FIBRE',
        description: 'Dont miss a moment',
        price:'2199',
        imagePath:"/Images/gigabit-happy-family.jpg",
        direction:"horizontal"
    },
    {
        name:'HOME FIBRE',
        description: 'Happy moments tailored for you',
        price:'2199',
        imagePath:"/Images/gigabit-happy-family.jpg",
        direction:"horizontal"

    },
    {
        name:'BUSINESS FIBRE',
        description: 'Keeping you up with no ease ',
        price:'2199',
        imagePath:"/public/Images/gigabit-bussiness-talks.jpg",
        direction:"horizontal"

    },
    {
        name:'BUSINESS FIBRE',
        description:'Focus on the profit we take care of the connectivity',

        price:'2199',
        imagePath:"/public/Images/gigabit-bussiness.jpeg",
        direction:"horizontal"

    },
    {
        name:'STUDENT PLANS',
        description: 'Improve Grade performance with ease',
        price:'999',
        imagePath:"/Images/gigabit-happy-family.jpg",
        direction:"horizontal"

    },
    {
        name:'STUDENT PLANS',
        description: 'When it comes to taking a break we got you!',
        price:'1500',
        imagePath:"/Images/gigabit-happy-family.jpg",
        direction:"horizontal"

    },
]
</script>

<style>

</style>