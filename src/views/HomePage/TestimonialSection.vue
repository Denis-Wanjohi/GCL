<template>
    <div class="py-5">
        <div class="text-center font-bold text-5xl shadow-sm py-3 mx-auto">
            Our clients say
        </div>


        <div class="overflow-x-auto hide-scrollbar">
            <div class="flex space-x-4">
                <div class="min-w-[400px] bg-white shadow-md rounded-lg p-6" data-aos="flip-up" data-aos-duration="2000" v-for="testimony,i in testimonials" :key="i">
                    <v-banner :icon=testimony.icon :text=testimony.testimony style="background: #bfbcbb;" class="h-[300px] rounded-xl overflow-y-auto hide-scrollbar">
                    </v-banner>
                    <p class="text-xs italic text-end">~{{ testimony.profession }}</p>
                </div>
            </div>
        </div>


        <div class="">
            <div  class=" ">
                
            </div>

 
        </div>
    </div>
</template>

<script  setup>
import IconJerryVue from "@/components/icons/Avator/IconJerry.vue"
import IconTomVue from "@/components/icons/Avator/IconTom.vue"
import IconTommyVue from "@/components/icons/Avator/IconTommy.vue"
const testimonials = [

    {
        testimony:"Gigabit has been a game-changer for my business. Fast and stable internet has increased my productivity and allowed me to focus on growth. Their prices are unbeatable, and the service is always prompt and friendly. Five stars!",
        icon:IconJerryVue,
        name:"Tom Cat",
        profession:"CEO Mafuko bread"
    },
    {
        testimony:"I was skeptical about switching to Gigabit, but their service has exceeded my expectations. The installation process was seamless, and their tech support is always available to help. The speeds are incredible, and I've never experienced any downtime. Highly recommended!",
        icon:IconTommyVue,
        name:"Jerry Mouse",
        profession:"CEO Cheese Packs"
    },
    {
        testimony:"I was blown away by the speed and reliability of Gigabit internet service. With unlimited data and no throttling, I can stream and game to my heart's content. Their customer support is top-notch too! 10/10 would recommend.",
        icon:IconTomVue,
        name:"Tommy Boy",
        profession:"CEO Bone Tastes"
    },
    {
        testimony:"Gigabit has been a game-changer for my business. Fast and stable internet has increased my productivity and allowed me to focus on growth. Their prices are unbeatable, and the service is always prompt and friendly. Five stars!",
        icon:IconJerryVue,
        name:"Tom Cat",
        profession:"CEO Mafuko bread"
    },
    {
        testimony:"I was skeptical about switching to Gigabit, but their service has exceeded my expectations. The installation process was seamless, and their tech support is always available to help. The speeds are incredible, and I've never experienced any downtime. Highly recommended!",
        icon:IconTommyVue,
        name:"Jerry Mouse",
        profession:"CEO Cheese Packs"
    },
    {
        testimony:"I was blown away by the speed and reliability of Gigabit internet service. With unlimited data and no throttling, I can stream and game to my heart's content. Their customer support is top-notch too! 10/10 would recommend.",
        icon:IconTomVue,
        name:"Tommy Boy",
        profession:"CEO Bone Tastes"
    },
]
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

</style>