<template>
    <div>
      <!-- title-->
      <div class="mx-auto font-extrabold text-5xl py-5 my-2">AREAS WE COVER</div>
      <v-divider thickness="2"  opacity="2" class="mx-28"></v-divider>
      <!-- some message -->
          <!-- fibre -->
        <div class="py-5">
          <p class="text-xl font-semibold">Fibre:</p>
          <p>For the fibre connection, we are deeply rooted in North Imenti,Meru County.</p>
          <p class="sm:text-md text-sm">We are the leading  company offering the quality product in the market and a very 
convenient and  customer centric  support always ready to tend to your queries</p>
        </div>
          <!-- wireless -->
    </div>
    

    <div class="w-full bg-gradient-to-t from-orange-500  h-[70vh]  flex sm:flex-row flex-col-reverse ">
      <!-- map -->
      <Map class="sm:w-1/2 h-[70%] py-4 mx-5" :getLngLat="getLngLat"></Map>
      <!-- locations -->
       <div class="sm:w-1/2 w-full">
          <div class="text-2xl font-bold">LOCATIONS</div>
          <div>
            <p class="text-sm">Areas that we have reached...just next to you</p>
            <div class="flex flex-wrap">
              <v-chip @click="location(0.05694866265979159, 37.642335516833356)">Meru Town</v-chip>
              <v-chip @click="location(37.639968,0.054526)">Kinoru</v-chip>
              <v-chip @click="location(37.641417,0.058606)">Makutano</v-chip>
               <v-chip @click="location(0.04397,37.64536)">Mwendatu</v-chip>
               <v-chip @click="location(0.06143,37.64536)">Kambakia</v-chip>
               <v-chip @click="location(0.07504,37.64911)">Kongoacheke</v-chip>
               <v-chip @click="location(0.06935654358706765, 37.64418702505114)">CCM</v-chip>
               <v-chip @click="location(0.05174638118569249, 37.65125284713504)">Brotherhood</v-chip>
               <v-chip @click="location(0.07749101012804159, 37.657343903899964)">Mjini</v-chip>
               <v-chip @click="location(-0.17881783195745135, 37.83635348259383)">Maweni</v-chip>
               <v-chip @click="location(0.05059417031297015, 37.661143379594606)">Kooje</v-chip>
               <v-chip @click="location(0.03791792391832968, 37.652361606745366)">Gitimbine</v-chip>
               <v-chip @click="location(0.026274826945309138, 37.65845071095882)">Gikumene Bypass</v-chip>
               <v-chip @click="location(0.03329442791490069, 37.64715538954481)">Kathumbi</v-chip>
               <v-chip @click="location(0.09249158320517943, 37.65720034907254)">Ruiri Junction</v-chip>
               <v-chip @click="location(0.05393539872902565, 37.639741996714)">Total Milimani</v-chip>
               <v-chip @click="location(0.04675023923592474, 37.64227776441821)">White Lotus</v-chip>
               <v-chip @click="location(0.039827081582576605, 37.647304320236124)">Irinda Primary</v-chip>
               <v-chip @click="location(0.04013709691506824, 37.65374203743669)">Kwa Nthambi</v-chip>
               <v-chip @click="location(0.03471367155140713, 37.65674074721487)">Woodlands</v-chip>
               <v-chip @click="location(0.03964893500218091, 37.66343554113827)">Mwiteria</v-chip>
               <v-chip @click="location(0.03895288525141898, 37.66792053743669)">Ngamia</v-chip>
               <v-chip @click="location(0.04893606406184273, 37.66008312243502)">Kiorone</v-chip>
               <v-chip @click="location(0.041951086342570935, 37.65945307917725)">Meru Diary</v-chip>
               <v-chip @click="location(0.07013693136047787, 37.65000931053776)">Mwithumwiru</v-chip>
               <v-chip @click="location(0.06391957524235498, 37.654778278324535)">Kaaga Boys</v-chip>
               <v-chip @click="location(0.06788069122698175, 37.65985971627175)">Mpakone</v-chip>
               <v-chip @click="location(0.05740652751650088, 37.65379379325462)">Nkoune</v-chip>
               <v-chip @click="location(0.08506920484543119, 37.64749291188904)">Kemu</v-chip>
               <v-chip @click="location(0.06471230202639075, 37.62996822597197)">Gitoro</v-chip>
               <v-chip @click="location(0.051408083383665155, 37.627968866273115)">Kigure</v-chip>
               <v-chip @click="location(0.07125223177087159, 37.63282225590323)">Kambakia</v-chip>
               <v-chip @click="location(0.07815122740871763, 37.652426322091046)">Runogone</v-chip>
               <v-chip @click="location(0.07294816799402155, 37.655503079763875)">Kanthiga</v-chip>
               <v-chip @click="location(0.048460031407292145, 37.66561092555042)">Gakoromone</v-chip>
               <v-chip @click="location(-0.1424990026335755, 37.89822178390614)">Kiruai</v-chip>
            </div>
          </div>
       </div>
    </div>
    <div>
      <!-- inquiries -->
    </div>
  </template>
   
  <script  setup>
  import {ref} from 'vue'
  import Map from '../components/Map.vue'
  const lng = ref(0)
  const lat = ref(0)
  function location(longitude,latitude){
    lng.value = longitude
    lat.value = latitude
  }

  function getLngLat(){
    return {lng:lng.value, lat:lat.value}
  }
  </script>
   
  <style>
  /* @import url('../node_modules/ol/src/ol.css'); */
  @import url('../../node_modules/ol/ol.css');
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
   
  html, body, #map, #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  </style>
