<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { VTabs } from "vuetify/lib/components/index.mjs";
import HeroSection from "./HomePage/HeroSection.vue";
import FeaturesSection from "./HomePage/FeaturesSection.vue";
import PlansSection from "./HomePage/PlansSection.vue";
import TestimonialSection from "./HomePage/TestimonialSection.vue";
import CallToActionSection from "./HomePage/CallToActionSection.vue";

const footer = [
      {
        title:"Company",
        items:[
          {
            value:"Home",
            link:"/"
          },
          {
            value:"About us",
            link:"/"
          },
          {
            value:"Contacts",
            link:"/"
          },
        ]
      },
      {
        title:"Plans",
        items:[
          {
            value:"Home Plan",
            link:"/"
          },
          {
            value:"Business Plan",
            link:"/"
          },
          {
            value:"Student Plan",
            link:"/"
          },
        ]
      }
]
</script>

<template>
  <header class="w-screen bg-blue-400 h-[80px]">
    <div class="flex h-full w-full">
      <div class="w-1/4  flex justify-center">
        <img src="/Images/gigabit-web-logo.png" class=" my-auto h-[80px]" alt="LOGO PNG">
      </div>
      <div  class=" w-3/4 my-auto ">
        <VTabs bg-color="" fixed-tabs="true" class=" h-[200px]  font-bold text-xl ">
          <VTab style="font-weight: 700;font-size:medium">HOME</VTab>
          <VTab  style="font-weight: 700;font-size: medium;">ABOUT US</VTab>
          <VTab  style="font-weight: 700;font-size: medium;"> COVERAGE</VTab>
          <VTab  style="font-weight: 700;font-size: medium;">PURCHASE</VTab>
          <VTab  style="font-weight: 700;font-size: medium;"> CONTACTS</VTab>
          <VTab  style="font-weight: 700;font-size: medium;"> SUPPORT</VTab>
        </VTabs>
      </div>
      <div class="w-1/4 flex justify-center">
        <VTab style="font-size: medium;">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99"/></svg>
          Call us: 0712 999 333
        </VTab>
      </div>
    </div>
  </header>
  <main>
    <hero-section></hero-section>
    <features-section></features-section>
    <plans-section></plans-section>
    <testimonial-section></testimonial-section>
    <call-to-action-section></call-to-action-section>
  </main>
  <footer>
    <div>
      <div>

        <!-- top content -->
        <div>


          <!-- logo and details  -->
          <div>
            <img src="../../public/Images/gigabit-web-logo.png" alt="Gigabit Logo">
            <div>
              Gigabit Connection Limited we  excel with FTTH(Fibre To The Home), FTTP(Fibre To The Premisis) and wireless services, offering lightning-fast speeds, reliability and customer-centric support, setting a new standard in the industry.
            </div>
          </div>

          <!-- links -->
          <div>
            <v-card
                class="mx-auto"
                max-width="300"
              >
                <v-list density="compact">
                  <v-list-subheader>REPORTS</v-list-subheader>

                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    color="primary"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
          </div>
        </div>

        <!-- socials -->
        <div></div>
      </div>
    </div>
  </footer>
</template>
