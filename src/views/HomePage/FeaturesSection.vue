<template>
  <div class="px-4 flex justify-around">
    <div  v-for="(feature,i) in features" :key="i"  class=" 
     h-[400px] w-1/4 rounded-[50px]   py-5 px-2 animate__animated animate__rubberBand">
        <VEmptyState class="hover:animate-pulse focus:animate-spin   rounded-2xl  font-bold " style="font-size: 40px;"
            size="100"
            height="100"
            :class="{ 'bg-gradient-to-b from-blue-500 to-orange-600': i % 2 === 0, 'bg-gradient-to-b from-orange-600 to-blue-500': i % 2!== 0 }"
            :title=feature.title
            :icon=feature.icon
            :text=feature.text
        >{{ feature.headline  }}</VEmptyState>
    </div>
  </div>
</template>

<script setup>
import 'animate.css';
// import IconCommunityVue from "@/components/icons/IconFast.vue";
import IconFastVue from "@/components/icons/IconFast.vue";
import IconReliable from "@/components/icons/IconReliable.vue";
import IconPrice from "@/components/icons/IconPrice.vue";
import IconSupport from "@/components/icons/IconSupport.vue";
import { VEmptyState} from "vuetify/lib/components/index.mjs";

const features = [
    {
        icon: IconFastVue,
        headline:"FAST",
        title:"Best in town",
        text:"Constant connectivty flow at any time. Forget about downtimes!!",
    },
    {
        icon: IconReliable,
        headline:"RELIABLE",
        title:"We got this handled",
        text:"We let you worry on key parts of your productivity.We handle the rest.",
    },
    {
        icon: IconPrice,
        headline:"AFFORDABLE",
        title:"Plans that fit you",
        text:"Talking about quality at a cheap price...we are at the forefront.",
    },
    {
        icon: IconSupport,
        headline:"SUPPORT",
        title:"Around the clock support",
        text:"Support team ready and available always to cater for your need as a client.",
    },
]

</script>

<style>

</style>