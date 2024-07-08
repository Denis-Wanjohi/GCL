<template>
     <div class="space-y-4"> 
       <main>
    <HeroSection></HeroSection>
      </main>
        <header class="w-3/5 text-center text-5xl font-bold underline decoration solid">Gigabit Support</header>
        <p class=" w-1/2 Italic underline decoration dotted text-center text-3xl">
          Find the help you need!
        </p>
      <main>
    <FeaturesSecondSection></FeaturesSecondSection>
       
  </main>  
       <header class=" w-3/5 text-center text-5xl font-bold underline decoration solid"> We value your feedback! </header>
    <main >
      <FeedbackSection></FeedbackSection>
    </main>   
       <p class="text-center">  We respond within 72 hrs</p>
      </div>  
</template>
  <style>
    

</style>
<script setup>
  import HeroSection from "./HomePage/HeroSection.vue";
  import FeaturesSecondSection from "./HomePage/FeaturesSecondSection.vue";
  import FeedbackSection from "./HomePage/FeedbackSection.vue";
    import { ref } from 'vue'; 

  
</script>
