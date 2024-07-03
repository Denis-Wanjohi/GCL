<template>
    <div id="map"></div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Map, View } from 'ol';
  import { Tile as TileLayer } from 'ol/layer';
  import { OSM } from 'ol/source';
  import { Vector as VectorLayer } from 'ol/layer';
  import { Vector as VectorSource } from 'ol/source';
  import { GeoJSON } from 'ol/format';
  import { transform } from 'ol/proj';
  
  const map = ref(null);
  const data = {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'Polygon',
            coordinates: [
            [

                //top
                [37.700033, 0.093933],
                [37.600033, 0.093933],
                //bottom
                [37.600033, 0.003333],
                [37.700033, 0.003333],
                //top
                // [37.600033, 0.583333]
                
                
            ]
            ]
        }
    };
  onMounted(() => {
    const feature = new GeoJSON().readFeature(data, {
        featureProjection: 'EPSG:3857'
    });

    const vectorLayer = new VectorLayer({
        source: new VectorSource({
        features: [feature],
        }),
    });
  
    map.value = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: transform([37.653115, 0.045502], 'EPSG:4326', 'EPSG:3857'), // Center on Kenya
        zoom: 12 // Appropriate zoom level for Kenya
      }),
    });
  });
  </script>