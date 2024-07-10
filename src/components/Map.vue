<template>
    <div id="map"></div>
</template>
  
  <script setup>
  import { ref, watch,onMounted } from 'vue';
  import { Map, View } from 'ol';
  import { Tile as TileLayer } from 'ol/layer';
  import { OSM } from 'ol/source';
  import { Vector as VectorLayer } from 'ol/layer';
  import { Vector as VectorSource } from 'ol/source';
  import { GeoJSON } from 'ol/format';
  import { transform } from 'ol/proj';
  import { Point } from 'ol/geom';
  import { Feature } from 'ol';
  import { Icon, Style } from 'ol/style';
 

  const  props = defineProps({getLngLat:Function})
  const lng = ref(0)
  const lat = ref(0)

  watch(() => props.getLngLat(), (newVals) => {
    // const { lng: newLng, lat: newLat } = newVals()
    lng.value = newVals.lng;
    lat.value = newVals.lat;
  })

 


  const map = ref(null);
  const marker = ref()

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

     // Create the marker feature
    marker.value = new Feature({
      geometry: new Point(transform([lat.value, lng.value], 'EPSG:4326', 'EPSG:3857')),
    });
    marker.value.setId('my-marker');
    // Style the marker
    marker.value.setStyle(new Style({
      image: new Icon({
        //  src: IconWhatsappVue, 
        src: 'https://openlayers.org/en/latest/examples/data/icon.png', // Marker icon URL
        anchor: [0.5, 1], // Anchor the icon
        scale:0.5,
      }),
    }));

    vectorLayer.getSource().addFeature(marker.value);
  
    map.value = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        // 0.053921, 37.644769
        center: transform([37.653115, 0.045502], 'EPSG:4326', 'EPSG:3857'), // Center on Kenya
        zoom: 12 // Appropriate zoom level for Kenya
      }),
    });
    watch([lng, lat], ([newLng, newLat]) => {
      //update the center
      map.value.getView().setCenter(transform([newLng, newLat], 'EPSG:4326', 'EPSG:3857'));
      //update the marker
      marker.value.getGeometry().setCoordinates(transform([newLng, newLat], 'EPSG:4326', 'EPSG:3857'));
    });



  
  });


  </script>