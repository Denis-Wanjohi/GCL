<template>
  <div class="map-wrap h-full mx-auto rounded relative">
    <div class="w-full  h-full p-3 mx-3 sm:mx-auto" ref="mapContainer">
      <!-- Button Container inside the Map -->
      <div class="button-container">
        <button class="map-button " @click="setMapStyle('streets')">Standard View</button>
        <button class="map-button " @click="setMapStyle('satellite')">Satellite View</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { Map, MapStyle, Marker, config, Popup } from '@maptiler/sdk';
import { shallowRef, onMounted, ref, onUnmounted, markRaw, watch } from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const mapContainer = shallowRef(null);
const map = shallowRef(null);

const props = defineProps({ selectedLocation: String, getLocation: Function, getLngLat: Function });
const location = ref(props.selectedLocation);
const coord = ref();
const popupText = ref();
const currentStyle = ref(MapStyle.STREETS.LIGHT); // Add a ref to track the current style

let initialState = ref();

watch(props.getLocation(), (newLocation) => {
  location.value = newLocation;
  pinLocation();
});

watch(props.getLngLat(), (newLngLat) => {
  location.value = newLngLat.area;
  coord.value = newLngLat;
  pinLocation();
});

onMounted(() => {
  config.apiKey = 'q5axzpH4GF2bWCTUlCUX';

  initialState.value = {
    lng: 37.6525,
    lat: 0.0601,
    zoom: 11.6,
    markers: [
      // Your markers here
      { name: "Meru Town", lng: 37.653903, lat:  0.044560, color: 'Red' },
        { name: "Kinoru", lng: 37.639784, lat: 0.054461, color: 'green' },
        { name: "Makutano", lng: 37.642444, lat: 0.056895, color: 'green' },
        { name: "Mwendatu", lng: 37.64536, lat: 0.04397, color: 'green' },
        { name: "Kongoacheke", lng: 37.64911, lat: 0.07504, color: 'green' },
        { name: "CCM", lng: 37.64418702505114, lat: 0.06935654358706765, color: 'green' },
        { name: "Brotherhood", lng: 37.65125284713504, lat: 0.05174638118569249, color: 'green' },
        { name: "Mjini", lng: 37.657343903899964, lat: 0.07749101012804159, color: 'green' },
        { name: "Meru General Area", lng: 37.654502474534894, lat: 0.05114340618807852, color: 'green' },
        { name: "Kooje", lng: 37.661143379594606, lat: 0.05059417031297015, color: 'green' },
        { name: "Gitimbine", lng: 37.652361606745366, lat: 0.03791792391832968, color: 'green' },
        { name: "Gikumene Bypass", lng: 37.65845071095882, lat: 0.026274826945309138, color: 'green' },
        { name: "Kathumbi", lng: 37.64715538954481, lat: 0.03329442791490069, color: 'green' },
        { name: "Ruiri Junction", lng: 37.65720034907254, lat: 0.09249158320517943, color: 'green' },
        { name: "Milimani", lng: 37.640299, lat: 0.047916, color: 'green' },
        { name: "White Lotus", lng: 37.64227776441821, lat: 0.04675023923592474, color: 'green' },
        { name: "Irinda", lng: 37.647304320236124, lat: 0.039827081582576605, color: 'green' },
        { name: "Kwa Nthambi", lng: 37.65374203743669, lat: 0.04013709691506824, color: 'green' },
        { name: "Woodlands", lng: 37.65674074721487, lat: 0.03471367155140713, color: 'green' },
        { name: "Mwiteria", lng: 37.65674074721487, lat: 0.03964893500218091, color: 'green' },
        { name: "Ngamia", lng: 37.66792053743669, lat: 0.03895288525141898, color: 'green' },
        { name: "Kiorone", lng: 37.66008312243502, lat: 0.04893606406184273, color: 'green' },
        { name: "Meru Dairy", lng: 37.65945307917725, lat: 0.041951086342570935, color: 'green' },
        { name: "Mwithumwiru", lng: 37.65000931053776, lat: 0.07013693136047787, color: 'green' },
        { name: "Kaaga", lng: 37.654778278324535, lat: 0.06391957524235498, color: 'green' },
        { name: "Mpakone", lng: 37.65985971627175, lat: 0.06788069122698175, color: 'green' },
        { name: "Nkoune", lng: 37.65379379325462, lat: 0.05740652751650088, color: 'green' },
        { name: "Kemu", lng: 37.64749291188904, lat: 0.08506920484543119, color: 'green' },
        { name: "Gitoro", lng: 37.62996822597197, lat: 0.06471230202639075, color: 'green' },
        { name: "Kigure", lng: 37.627968866273115, lat: 0.051408083383665155, color: 'green' },
        { name: "Kambakia", lng: 37.63282225590323, lat: 0.07125223177087159, color: 'green' },
        { name: "Runogone", lng: 37.652426322091046, lat: 0.07815122740871763, color: 'green' },
        { name: "Kanthiga", lng: 37.655503079763875, lat: 0.07294816799402155, color: 'green' },
        { name: "Gakoromone", lng: 37.66561092555042, lat: 0.048460031407292145, color: 'green' },
        { name: "Kirua", lng: 37.67162875880659, lat: 0.1101863245048477, color: 'green' },
        // Add more markers here if needed
      ]
      };


  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: currentStyle.value,
    center: [initialState.value.lng, initialState.value.lat],
    zoom: initialState.value.zoom
  }));

  initialState.value.markers.forEach(marker => {
    popupText.value = markRaw(new Popup().setText(marker.name));
    new Marker({ color: marker.color })
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popupText.value)
      .addTo(map.value);
  });
});

onUnmounted(() => {
  map.value?.remove();
});

function setMapStyle(style) {
  switch (style) {
    case 'streets':
      currentStyle.value = MapStyle.STREETS.LIGHT;
      break;
    case 'satellite':
      currentStyle.value = MapStyle.SATELLITE;
      break;
  }
  map.value.setStyle(currentStyle.value); // Update the map style dynamically
}

function pinLocation() {
  map.value.setCenter([coord.value.lng, coord.value.lat]);
  map.value.setZoom(14);

  // Clear existing markers
  map.value.eachLayer(layer => {
    if (layer instanceof Marker) {
      map.value.removeLayer(layer);
    }
  });

  // Reformat to initial state
  initialState.value.markers.forEach(marker => {
    new Marker({ color: marker.color })
      .setLngLat([marker.lng, marker.lat])
      .addTo(map.value);
  });

  // Changes to red the selected location
  initialState.value.markers.forEach((value) => {
    if (value.name.toLowerCase() === location.value.toLowerCase()) {
      new Marker({ color: "blue" })
        .setLngLat([value.lng, value.lat])
        .addTo(map.value);
    }
  });
}
</script>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
   /* Adjust height based on your layout */
}



.button-container {
  position: absolute; /* Absolute positioning to place inside the map */
  bottom: 10px; /* Distance from the bottom */
  left: 10px; /* Distance from the left */
  display: flex;
  gap: 10px; /* Space between buttons */
  z-index: 10; /* Ensure buttons appear above map layers */
}

.map-button {
  background-color: #3b82f6; /* Tailwind Blue-500 */
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center; /* Center text vertically */
  justify-content: center; /* Center text horizontally */
}

.map-button:hover {
  background-color: #2563eb; /* Darker blue for hover effect */
}
</style>







