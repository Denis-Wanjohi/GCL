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
          <p>We are the leading  company offering the quality product in the market and a very 
convenient customer support always ready to tend to your queries</p>
        </div>
          <!-- wireless -->
    </div>
    

    <div class="w-full h-[70vh] bg-red flex">
      <!-- map -->
      <Map class="w-1/2 h-[70%] py-4 mx-5"></Map>
      <!-- locations -->
       <div class="w-1/2">
          <div class="text-2xl font-bold">LOCATIONS</div>
          <div>
            <p>Areas that we have reached...just next to you</p>
            <div class="flex flex-wrap">
              <v-chip>Kinoru</v-chip>
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
   
  <script>
  import Map from '../components/Map.vue'
   
  export default {
    name: 'App',
    components: {
      Map
    }
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