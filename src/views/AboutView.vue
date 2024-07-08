<template>
  <div class="space-y-4">
    <v-card image="https://i.pinimg.com/736x/41/8e/bc/418ebcab739281b2410d28f2349ff554.jpg">
      <WhoWeAreSection></WhoWeAreSection>
    </v-card>

    <v-card image="https://i.pinimg.com/564x/72/2b/da/722bdace96d8290d7dd8c99a381adad6.jpg">
      <WhyChooseUsSection></WhyChooseUsSection>
      <WhyUsSection></WhyUsSection>
    </v-card>

    <MeetUsSection></MeetUsSection>
  </div>
</template>

<script setup>
import WhoWeAreSection from "./HomePage/WhoWeAre.vue";
import WhyChooseUsSection from "./HomePage/WhyChooseUs.vue";
import WhyUsSection from "./HomePage/WhyUs.vue";
import MeetUsSection from "./HomePage/MeetUs.vue"; // Corrected component name
</script>

<style>
/* Your styles here */
</style>
