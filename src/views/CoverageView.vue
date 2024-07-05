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
              <v-chip @click="location(37.644744,0.053949)">Kinoru</v-chip>
              <v-chip @click="location(37.639968,0.054526)">Kinoru(meru care)</v-chip>
              <v-chip @click="location(37.638214,0.054451)">Kinoru(MCK)</v-chip>
              <v-chip @click="location(37.639979,0.051962)">Kinoru(Green Oak)</v-chip>
              <v-chip @click="location(37.641417,0.058606)">Makutano(Nevada)</v-chip>
              <v-chip @click="location(37.644030,0.059765)">Makutano(Equity Bank)</v-chip>
              <v-chip>Cathedral</v-chip>
              <v-chip>Central</v-chip>
              <v-chip>Commercial</v-chip>
              <v-chip>Gakoromone</v-chip>
              <v-chip>Hospital</v-chip>
              <v-chip>Milimani</v-chip>
              <v-chip>Mwendantu</v-chip>
              <v-chip>Kaaga</v-chip>
              <v-chip>Stadium</v-chip>
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