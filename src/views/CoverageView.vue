<template>
  <div>
    <!-- Title -->
    <div class="mx-auto font-extrabold text-5xl py-5 my-2">AREAS WE COVER</div>
    <v-divider thickness="2" opacity="2" class="mx-28"></v-divider>

    <!-- Message -->
    <div class="py-5">
      <!-- <p class="text-xl font-semibold">fiber:</p> -->
      <!-- <p>For the fiber connection, we are deeply rooted in North Imenti, Meru County.</p> -->
      <p class="sm:text-md text-sm">
        We are the leading company offering  quality product in the market and a very convenient and customer-centric support always ready to tend to your queries.
      </p>
    </div>

    <!-- Search Area -->
    <div class="py-5">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Enter area name"
        class="border p-2 w-full sm:w-1/2"
      />
      <button @click="searchLocation" class="bg-blue-500 text-white p-2 mt-2">Enter your location</button>
      <p v-if="message" class="mt-2">
        <span v-if="message === 'PASS'">We cover your area 🥳, checkout our <button @click="purchase"  class="bg-blue-500 px-2 py-1  text-white font-mono rounded font-bold">PLANS 😁</button> </span>
        <span v-if="message ==='FAIL'">Ooop!We dont cover that area.For more <router-link to="/contacts" class="bg-blue-500 px-2 py-1 text-white font-mono  rounded font-bold">Reach out</router-link> </span>
      </p>
    </div>

    <div class="w-full py-5 h-[100vh] ">
      <!-- Locations -->
      <div class=" w-full sm:mx-5 mx-2">
        <div class="text-2xl font-bold">LOCATIONS</div>
        <div>
          <p class="text-sm">Our coverage</p> 
          <div class="flex flex-wrap sm:h-full h-[200px] overflow-y-auto  px-4">
            <v-chip @click="location(37.653903, 0.044560, 'Meru Town')">Meru Town</v-chip>
            <v-chip @click="location(37.639784,0.054461, 'Kinoru')">Kinoru</v-chip>
            <v-chip @click="location(37.642444,0.056895, 'Makutano')">Makutano</v-chip>
            <v-chip @click="location(37.64536,0.04397, 'Mwendatu')">Mwendatu</v-chip>
            <v-chip @click="location(37.64911, 0.07504, 'Kongoacheke')">Kongoacheke</v-chip>
            <v-chip @click="location(37.64418702505114, 0.06935654358706765, 'CCM')">CCM</v-chip>
            <v-chip @click="location(37.65125284713504, 0.05174638118569249, 'Brotherhood')">Brotherhood</v-chip>
            <v-chip @click="location(37.657343903899964, 0.07749101012804159, 'Mjini')">Mjini</v-chip>
            <v-chip @click="location(37.654502474534894, 0.05114340618807852, 'Meru General Area')">Meru General Area</v-chip>
            <v-chip @click="location( 37.661143379594606, 0.05059417031297015, 'Kooje')">Kooje</v-chip>
            <v-chip @click="location(37.652361606745366, 0.03791792391832968, 'Gitimbine')">Gitimbine</v-chip>
            <v-chip @click="location(37.65845071095882, 0.026274826945309138, 'Gikumene Bypass')">Gikumene Bypass</v-chip>
            <v-chip @click="location(37.64715538954481, 0.03329442791490069, 'Kathumbi')">Kathumbi</v-chip>
            <v-chip @click="location(37.65720034907254, 0.09249158320517943, 'Ruiri Junction')">Ruiri Junction</v-chip>
            <v-chip @click="location(37.642439, 0.046682, 'Milimani')">Milimani</v-chip>
            <v-chip @click="location(37.64227776441821, 0.04675023923592474, 'White Lotus')">White Lotus</v-chip>
            <v-chip @click="location(37.647304320236124, 0.039827081582576605, 'Irinda ')">Irinda</v-chip>
            <v-chip @click="location(37.65374203743669, 0.04013709691506824, 'Kwa Nthambi')">Kwa Nthambi</v-chip>
            <v-chip @click="location(37.65674074721487, 0.03471367155140713, 'Woodlands')">Woodlands</v-chip>
            <v-chip @click="location(37.65674074721487, 0.03964893500218091, 'Mwiteria')">Mwiteria</v-chip>
            <v-chip @click="location( 37.66792053743669, 0.03895288525141898, 'Ngamia')">Ngamia</v-chip>
            <v-chip @click="location( 37.66008312243502, 0.04893606406184273, 'Kiorone')">Kiorone</v-chip>
            <v-chip @click="location(37.65945307917725, 0.041951086342570935, 'Meru Diary')">Meru Diary</v-chip>
            <v-chip @click="location( 37.65000931053776, 0.07013693136047787, 'Mwithumwiru')">Mwithumwiru</v-chip>
            <v-chip @click="location(37.654778278324535, 0.06391957524235498, 'Kaaga')">Kaaga</v-chip>
            <v-chip @click="location(37.65985971627175, 0.06788069122698175, 'Mpakone')">Mpakone</v-chip>
            <v-chip @click="location(37.65379379325462, 0.05740652751650088, 'Nkoune')">Nkoune</v-chip>
            <v-chip @click="location(37.64749291188904, 0.08506920484543119, 'Kemu')">Kemu</v-chip>
            <v-chip @click="location(37.62996822597197, 0.06471230202639075, 'Gitoro')">Gitoro</v-chip>
            <v-chip @click="location(37.627968866273115, 0.051408083383665155, 'Kigure')">Kigure</v-chip>
            <v-chip @click="location(37.63282225590323, 0.07125223177087159, 'Kambakia')">Kambakia</v-chip>
            <v-chip @click="location(37.652426322091046, 0.07815122740871763, 'Runogone')">Runogone</v-chip>
            <v-chip @click="location( 37.655503079763875, 0.07294816799402155, 'Kanthiga')">Kanthiga</v-chip>
            <v-chip @click="location(37.66561092555042, 0.048460031407292145, 'Gakoromone')">Gakoromone</v-chip>
            <v-chip @click="location(37.67162875880659, 0.1101863245048477, 'Kiruai')">Kiruai</v-chip>
          </div>
          </div>
        
          <div class="w-full bg-opacity-50 bg-gradient-to-tr  from-cyan-100 to-cyan-200  sm:h-[500px] h-[300px] mx-2 my-auto  sm:py-2  flex sm:flex-row flex-col-reverse">
            <!-- Map -->
            <Map class=" h-full  overflow-hidden sm:mx-3 sm:px-4 sm:py-4  sm:mx-5 " :getLngLat="getLngLat" :getLocation="getLocation" :currentArea="currentArea" :selectedLocation="selectedLocation"></Map>

          </div>
      </div>
    </div>
    <div>
      <!-- inquiries -->
    </div>
  </div>
</template>

<script setup>
import { ref} from 'vue';
import Map from '../components/Map.vue';
import 'animate.css'
import router from '../router/index.js'

// Covered areas list with coordinates
const coveredAreas = [
  { name: "Meru Town", lng: 37.653903, lat: 0.044560 },
  { name: "Kinoru", lng: 37.639784, lat: 0.054461 },
  { name: "Makutano", lng: 37.642444, lat: 0.056895 },
  { name: "Mwendatu", lng: 37.64536, lat: 0.04397 },
  { name: "Kambakia", lng: 37.64536, lat: 0.06143 },
  { name: "Kongoacheke", lng: 37.64911, lat: 0.07504 },
  { name: "CCM", lng: 37.64418702505114, lat: 0.06935654358706765 },
  { name: "Brotherhood", lng: 37.65125284713504, lat: 0.05174638118569249 },
  { name: "Mjini", lng: 37.657343903899964, lat: 0.07749101012804159 },
  { name: "Meru General Area", lng: 37.654502474534894, lat: 0.05114340618807852 },
  { name: "Kooje", lng: 37.661143379594606, lat: 0.05059417031297015 },
  { name: "Gitimbine", lng: 37.652361606745366, lat: 0.03791792391832968 },
  { name: "Gikumene Bypass", lng: 37.65845071095882, lat: 0.026274826945309138 },
  { name: "Kathumbi", lng: 37.64715538954481, lat: 0.03329442791490069 },
  { name: "Ruiri Junction", lng: 37.65720034907254, lat: 0.09249158320517943 },
  { name: "Milimani", lng: 37.639741996714, lat: 0.05393539872902565 },
  { name: "White Lotus", lng: 37.64227776441821, lat: 0.04675023923592474 },
  { name: "Irinda", lng: 37.647304320236124, lat: 0.039827081582576605 },
  { name: "Kwa Nthambi", lng: 37.65374203743669, lat: 0.04013709691506824 },
  { name: "Woodlands", lng: 37.65674074721487, lat: 0.03471367155140713 },
  { name: "Mwiteria", lng: 37.65674074721487, lat: 0.03964893500218091 },
  { name: "Ngamia", lng: 37.66792053743669, lat: 0.03895288525141898 },
  { name: "Kiorone", lng: 37.66008312243502, lat: 0.04893606406184273 },
  { name: "Meru Diary", lng: 37.65945307917725, lat: 0.041951086342570935 },
  { name: "Mwithumwiru", lng: 37.65000931053776, lat: 0.07013693136047787 },
  { name: "Kaaga", lng: 37.654778278324535, lat: 0.06391957524235498 },
  { name: "Mpakone", lng: 37.65985971627175, lat: 0.06788069122698175 },
  { name: "Nkoune", lng: 37.65379379325462, lat: 0.05740652751650088 },
  { name: "Kemu", lng: 37.64749291188904, lat: 0.08506920484543119 },
  { name: "Gitoro", lng: 37.62996822597197, lat: 0.06471230202639075 },
  { name: "Kigure", lng: 37.627968866273115, lat: 0.051408083383665155 },
  { name: "Runogone", lng: 37.652426322091046, lat: 0.07815122740871763 },
  { name: "Kanthiga", lng: 37.655503079763875, lat: 0.07294816799402155 },
  { name: "Gakoromone", lng: 37.66561092555042, lat: 0.048460031407292145 },
  { name: "Kiruai", lng: 37.67162875880659, lat: 0.1101863245048477 }
];

const searchQuery = ref('');
const selectedLocation = ref('');
const message = ref('');
const lng = ref(0);
const lat = ref(0);
const currentArea = ref('');
let data  = ref({})

// Function to update location
function location(longitude, latitude, area) {
  lng.value = longitude;
  lat.value = latitude;
  currentArea.value = area;
  data.value = { lng: lng.value, lat: lat.value, area:currentArea.value }
}

// Function to get current longitude and latitude
function getLngLat() {
  return data;
}
function getLocation() {
  return selectedLocation;
}

// Function to search for location
function searchLocation() {
  const area = searchQuery.value.trim().toLowerCase();

  if (area === '') {
    message.value = 'Please enter an area name.';
    return;
  }

  const index = coveredAreas.findIndex(a => a.name.toLowerCase() === area);
  if (index !== -1) {
    message.value = 'PASS';
    const coordinates = {
      "Meru Town": { lng: 37.64397203980247, lat: 0.060811031349528574 },
      "Kinoru": { lng: 37.639968, lat: 0.054526 },
      "Makutano": { lng: 37.641417, lat: 0.058606 },
      "Mwendatu": { lng: 37.64536, lat: 0.04397 },
      // Add other areas' coordinates here
    };
    selectedLocation.value = searchQuery.value
    const coord = coordinates[coveredAreas[index]];
    if (coord) {
      location(coord.lng, coord.lat, coveredAreas[index]);
    }
  } else {
    // message.value = `Sorry, we do not cover ${searchQuery.value}.<h1>one</h1>`;
    message.value = 'FAIL';
  }
}
function purchase(){
  router.push('/purchase')
}
</script>

<style>
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

.map-container {
  width: 100%;
  height: 100%;
}
</style>
