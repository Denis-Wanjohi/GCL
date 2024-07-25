<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import { VTabs } from "vuetify/lib/components/index.mjs";
import HeroSection from "./HomePage/HeroSection.vue";
import FeaturesSection from "./HomePage/FeaturesSection.vue";
import PlansSection from "./HomePage/PlansSection.vue";
import TestimonialSection from "./HomePage/TestimonialSection.vue";
import CallToActionSection from "./HomePage/CallToActionSection.vue";
  import { ref, onMounted } from 'vue';

  const message = ref('With a deposit of only KSH 4000 fully refundable for each plan! INSTALLATION IS FREE!!!');
  onMounted(() => {
    setInterval(() => {
      
      const messages = [
        'With a deposit of only KSH 4000 fully refundable for each plan!INSTALLATION IS FREE!!!',
        'With a deposit of only KSH 4000 fully refundable for each plan!INSTALLATION IS FREE!!!',
        'With a deposit of only KSH 4000 fully refundable for each plan!INSTALLATION IS FREE!!!',
      ];
      const newIndex = Math.floor(Math.random() * messages.length);
      message.value = messages[newIndex];
    }, 3000);
    });
</script>

<template>

  <main>
    <hero-section></hero-section>
    <features-section></features-section>
    <!-- <v-tab>
     <div id="continous-slider" class="slider">
       <transition name="slide">
         <p class="text-xl font-bold animate__slideInLeft bg-gradient-to-r from-blue-500 via-transparent to-orange-500">{{message}} </p>//

       </transition>
     </div>
       
    </v-tab> -->
    <plans-section ></plans-section>
    <testimonial-section></testimonial-section>
    <call-to-action-section></call-to-action-section>
  </main>

</template>
<style>
  #continuous-slider {
    overflow: hidden;
    text-align: center;
    margin-top: 20px;
  }

  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }
</style>
