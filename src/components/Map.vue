<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const mapContainer = shallowRef(null);
const map = shallowRef(null);

const initialState = {
  lng: 37.6525,
  lat: 0.0471,
  zoom: 14,
  markers: [
    { name: "Meru Town", lng: 37.6525, lat: 0.0471, color: 'red' },
    { name: "Kinoru", lng: 37.6542, lat: 0.0545, color: 'green' },
    { name: "Makutano", lng: 37.6506, lat: 0.0611, color: 'green' },
    { name: "Mwendatu", lng: 37.6434, lat: 0.0431, color: 'green' },
    { name: "Kambakia", lng: 37.6491, lat: 0.0614, color: 'green' },
    { name: "Kongoacheke", lng: 37.6549, lat: 0.0607, color: 'green' },
    { name: "CCM", lng: 37.6560, lat: 0.0622, color: 'green' },
    { name: "Brotherhood", lng: 37.6545, lat: 0.0640, color: 'green' },
    { name: "Mjini", lng: 37.6543, lat: 0.0485, color: 'green' },
    { name: "Meru General Area", lng: 37.6581, lat: 0.0462, color: 'green' },
    { name: "Kooje", lng: 37.6637, lat: 0.0439, color: 'green' },
    { name: "Gitimbine", lng: 37.6654, lat: 0.0531, color: 'green' },
    { name: "Gikumene Bypass", lng: 37.6743, lat: 0.0465, color: 'green' },
    { name: "Kathumbi", lng: 37.6670, lat: 0.0456, color: 'green' },
    { name: "Ruiri Junction", lng: 37.6719, lat: 0.0471, color: 'green' },
    { name: "Total Milimani", lng: 37.6745, lat: 0.0486, color: 'green' },
    { name: "White Lotus", lng: 37.6760, lat: 0.0498, color: 'green' },
    { name: "Irinda Primary", lng: 37.6780, lat: 0.0524, color: 'green' },
    { name: "Kwa Nthambi", lng: 37.6801, lat: 0.0542, color: 'green' },
    { name: "Woodlands", lng: 37.6812, lat: 0.0563, color: 'green' },
    { name: "Mwiteria", lng: 37.6832, lat: 0.0584, color: 'green' },
    { name: "Ngamia", lng: 37.6843, lat: 0.0605, color: 'green' },
    { name: "Kiorone", lng: 37.6854, lat: 0.0626, color: 'green' },
    { name: "Meru Dairy", lng: 37.6875, lat: 0.0647, color: 'green' },
    { name: "Mwithumwiru", lng: 37.6886, lat: 0.0668, color: 'green' },
    { name: "Kaaga Boys", lng: 37.6897, lat: 0.0689, color: 'green' },
    { name: "Mpakone", lng: 37.6918, lat: 0.0710, color: 'green' },
    { name: "Nkoune", lng: 37.6929, lat: 0.0731, color: 'green' },
    { name: "Kemu", lng: 37.6950, lat: 0.0752, color: 'green' },
    { name: "Gitoro", lng: 37.6961, lat: 0.0773, color: 'green' },
    { name: "Kigure", lng: 37.6972, lat: 0.0794, color: 'green' },
    { name: "Kambakia", lng: 37.6983, lat: 0.0815, color: 'green' },
    { name: "Runogone", lng: 37.7004, lat: 0.0836, color: 'green' },
    { name: "Kanthiga", lng: 37.7015, lat: 0.0857, color: 'green' },
    { name: "Gakoromone", lng: 37.7036, lat: 0.0878, color: 'green' },
    { name: "Kirua", lng: 37.7047, lat: 0.0899, color: 'green' },
    // Add more markers here if needed
  ]
};

const setMapView = (lng, lat, zoom = 14) => {
  if (map.value) {
    map.value.setCenter([lng, lat]);
    map.value.setZoom(zoom);
  }
};

onMounted(() => {
  config.apiKey = 'q5axzpH4GF2bWCTUlCUX';

  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }));

  initialState.markers.forEach(marker => {
    new Marker({ color: marker.color })
      .setLngLat([marker.lng, marker.lat])
      .addTo(map.value);
  });
});

onUnmounted(() => {
  map.value?.remove();
});

</script>


<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
