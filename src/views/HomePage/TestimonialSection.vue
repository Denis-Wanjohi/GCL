<template>
    <div class="py-5">
        <div class="text-center font-bold text-5xl shadow-sm py-3">
            Our clients say
        </div>
        <div  class="flex flex-wrap justify-around">

            <v-card
            v-for="testimony,i in testimonials" :key="i"
            class="mx-auto text-white my-3"
            color="#eb983f"
            max-width="400"
            style="border-top-left-radius: 50px;box-shadow: #4e27a3 1px 1px;"
        >
            <!-- <template v-slot:prepend>
            <v-icon size="x-large"></v-icon>
            </template> -->

            <v-card-text class="text-h5 py-2">
                {{ testimony.testimony }}
            </v-card-text>

            <v-card-actions>
            <v-list-item class="w-100">
                <template v-slot:prepend>
                <v-avatar
                    color="grey-darken-3"
                    :icon=testimony.icon
                ></v-avatar>
                </template>

                <v-list-item-title>{{testimony.name}}</v-list-item-title>

                <v-list-item-subtitle>{{testimony.profession}}</v-list-item-subtitle>

                <!-- <template v-slot:append>
                <div class="justify-self-end">
                    <v-icon class="me-1" icon="mdi-heart"></v-icon>
                    <span class="subheading me-2">256</span>
                    <span class="me-1">·</span>
                    <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                    <span class="subheading">45</span>
                </div>
                </template> -->
            </v-list-item>
            </v-card-actions>
        </v-card>
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
]
</script>

<style>

</style>