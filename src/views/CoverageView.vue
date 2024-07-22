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
      <Map class="sm:w-1/2 h-[70%] py-4 sm:mx-5 mx-2" :getLngLat="getLngLat"></Map>
      <!-- locations -->
       <div class="sm:w-1/2 w-full">
          <div class="text-2xl font-bold">LOCATIONS</div>
          <div>
            <p class="text-sm">Areas that we have reached...just next to you</p>
            <div class="flex flex-wrap sm:h-[300px] md:h-full h-[200px] hide-scrollbar overflow-y-auto">
              <v-chip @click="location(37.64397203980247, 0.060811031349528574)">Meru Town</v-chip>
              <v-chip @click="location(37.639968,0.054526)">Kinoru</v-chip>
              <v-chip @click="location(37.641417,0.058606)">Makutano</v-chip>
               <v-chip @click="location(37.64536,0.04397)">Mwendatu</v-chip>
               <v-chip @click="location(37.64536, 0.06143)">Kambakia</v-chip>
               <v-chip @click="location(37.64911, 0.07504)">Kongoacheke</v-chip>
               <v-chip @click="location(37.64418702505114, 0.06935654358706765)">CCM</v-chip>
               <v-chip @click="location( 37.65125284713504, 0.05174638118569249)">Brotherhood</v-chip>
               <v-chip @click="location( 37.657343903899964, 0.07749101012804159)">Mjini</v-chip>
               <v-chip @click="location(37.654502474534894, 0.05114340618807852)">Meru General Area</v-chip>
               <v-chip @click="location( 37.661143379594606, 0.05059417031297015)">Kooje</v-chip>
               <v-chip @click="location(37.652361606745366, 0.03791792391832968)">Gitimbine</v-chip>
               <v-chip @click="location(37.65845071095882, 0.026274826945309138)">Gikumene Bypass</v-chip>
               <v-chip @click="location(37.64715538954481, 0.03329442791490069)">Kathumbi</v-chip>
               <v-chip @click="location(37.65720034907254, 0.09249158320517943)">Ruiri Junction</v-chip>
               <v-chip @click="location(37.639741996714, 0.05393539872902565)">Total Milimani</v-chip>
               <v-chip @click="location(37.64227776441821, 0.04675023923592474)">White Lotus</v-chip>
               <v-chip @click="location(37.647304320236124, 0.039827081582576605)">Irinda Primary</v-chip>
               <v-chip @click="location(37.65374203743669, 0.04013709691506824)">Kwa Nthambi</v-chip>
               <v-chip @click="location(37.65674074721487, 0.03471367155140713)">Woodlands</v-chip>
               <v-chip @click="location(37.65674074721487, 0.03964893500218091)">Mwiteria</v-chip>
               <v-chip @click="location( 37.66792053743669, 0.03895288525141898)">Ngamia</v-chip>
               <v-chip @click="location( 37.66008312243502, 0.04893606406184273)">Kiorone</v-chip>
               <v-chip @click="location(37.65945307917725, 0.041951086342570935)">Meru Diary</v-chip>
               <v-chip @click="location( 37.65000931053776, 0.07013693136047787)">Mwithumwiru</v-chip>
               <v-chip @click="location(37.654778278324535, 0.06391957524235498)">Kaaga Boys</v-chip>
               <v-chip @click="location(37.65985971627175, 0.06788069122698175)">Mpakone</v-chip>
               <v-chip @click="location(37.65379379325462, 0.05740652751650088)">Nkoune</v-chip>
               <v-chip @click="location(37.64749291188904, 0.08506920484543119)">Kemu</v-chip>
               <v-chip @click="location(37.62996822597197, 0.06471230202639075)">Gitoro</v-chip>
               <v-chip @click="location(37.627968866273115, 0.051408083383665155)">Kigure</v-chip>
               <v-chip @click="location(37.63282225590323, 0.07125223177087159)">Kambakia</v-chip>
               <v-chip @click="location(37.652426322091046, 0.07815122740871763)">Runogone</v-chip>
               <v-chip @click="location( 37.655503079763875, 0.07294816799402155)">Kanthiga</v-chip>
               <v-chip @click="location(37.66561092555042, 0.048460031407292145)">Gakoromone</v-chip>
                <v-chip @click="location(37.67162875880659, 0.1101863245048477) ">Kiruai</v-chip>
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

