<template>
    <div class="py-3 font-extrabold text-xl ">WHY US ...</div>
    <!-- LARGE SCREEN -->
 
        <div class="sm:px-4 my-2 py-2 flex flex-wrap  justify-around  lg:flex hidden lg:overflow-none">
            <div v-for="(feature,i) in features" :key="i"
                class="text-center lg:w-[250px] py-2 px-2  my-3    rounded-xl"
                :class="{ 'bg-gradient-to-b from-blue-500 to-orange-600 ': i % 2 === 0, 'bg-gradient-to-b from-orange-600 to-blue-500': i % 2!== 0 }"
                    
            >
                <div class="lg:block hidden">
                 <v-icon  :icon=feature.icon size="100" class=""></v-icon>   
                </div>
                <div class="lg:hidden block">
                 <v-icon  :icon=feature.icon size="70" class=""></v-icon>   
                </div>
                
                
                <p class="text-xl font-semibold">{{ feature.title }}</p>
                <p>{{ feature.text }}</p>
                <p class="text-3xl font-extrabold">{{ feature.headline }}</p>
            </div>
        </div>

    <!-- MOBILE VIEW -->
    <div class="flex w-screen py-3 overflow-x-auto lg:hidden  hide-scrollbar shadow-sm">
        <div class="flex">
            <div v-for="(feature,i) in features" :key="i"
                class="text-center w-[250px]   pt-2 px-2  mx-2 rounded-sm shadow-xl "
                :class="{ 'bg-gradient-to-b from-blue-500 to-orange-600 ': i % 2 === 0, 'bg-gradient-to-b from-orange-600 to-blue-500': i % 2!== 0 }"
            >
                <v-icon  :icon=feature.icon size="50" class=""></v-icon>
                <p class="text-xl font-semibold">{{ feature.title }}</p>
                <p>{{ feature.text }}</p>
                <p class="text-3xl font-extrabold">{{ feature.headline }}</p>
            </div>
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