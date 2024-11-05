<template>
   <div data-aos="fade-down">
        <div class="font-semibold text-3xl  py-5">Technical FAQS</div>
        
        <div v-for="(faq,i) in data" :key="i" class="border-t shadow-lg mx-5  text-start">
            <v-card  class="border my-1">
                <v-card-title class="text-wrap" style="font-weight: 600">{{ faq.question }}</v-card-title>
                <v-card-text>{{ faq.answer }}</v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script setup>
const data = [

    {
        question:"Why is my internet connection slow?",
        answer:"Check your router's location, ensure it's not obstructed. If the issue persists, contact our support team to investigate further.",
    }, {
        question:"How do I troubleshoot my fiber connection?",
        answer:"Check the fiber optic cable for damage, ensure it's securely connected to the router. If the issue persists, contact our support team",
    },
    // {
    //     question:"Why can't I access certain websites or online services? ",
    //     answer:"Check your firewall settings, ensure they're not blocking the website, and try accessing the website from a different device. If the issue persists, contact our support team.",
    // },
    {
        question:"Why is my Wi-Fi network not showing up? ",
        answer:"Check your router's power cord, ensure it's securely plugged in. If the issue persists, contact our support team to investigate further.",
    },
]
</script>