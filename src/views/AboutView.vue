<template>
  <div>
    <!-- <img class="h-[60vh] sm:block hidden w-screen mx-auto" src="/Images/GCL_G_logo.png" alt=""> -->
  </div>
  <div class="space-y-4">
      <WhoWeAreSection></WhoWeAreSection>
      <WhyChooseUsSection></WhyChooseUsSection>
  </div>
  <CallToActionSectionVue/>

</template>

<script setup>
import WhoWeAreSection from "./HomePage/WhoWeAre.vue";
import WhyChooseUsSection from "./HomePage/WhyChooseUs.vue";
import CallToActionSectionVue from "./HomePage/CallToActionSection.vue";

</script>

<style>
/* Your styles here */
</style>
