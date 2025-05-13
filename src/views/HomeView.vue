<script setup>
import HeroSection from "./HomePage/HeroSection.vue";
import FeaturesSection from "./HomePage/FeaturesSection.vue";
import PlansSection from "./HomePage/PlansSection.vue";
import TestimonialSection from "./HomePage/TestimonialSection.vue";
import CallToActionSection from "./HomePage/CallToActionSection.vue";
import { ref, onMounted } from 'vue';

</script>

<template>

  <main>
    <hero-section></hero-section>
    <features-section></features-section>
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
