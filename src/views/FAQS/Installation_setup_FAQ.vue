<template>
     <div class="font-semibold text-3xl  py-5">Installation  FAQS</div>
        
        <div v-for="(faq,i) in data" :key="i" class="border-t shadow-lg mx-5  text-start">
            <v-card  class="border my-1">
                <v-card-title class="text-wrap" style="font-weight: 600">{{ faq.question }}</v-card-title>
                <v-card-text>{{ faq.answer }}</v-card-text>
            </v-card>
        </div>
</template>
<script setup>
const data =[
    {
        question:"How long does the installation process take?",
        answer:"Our standard installation time is 2-4 hours, but we offer same-day installation for fibre connections",
    },
    {
        question:"Do I need to be present during the installation?",
        answer:"Yes, please ensure someone is present to grant our technician access to your premises and to answer any questions they may have.Yes, please ensure someone is present to grant our technician access to your premises and to answer any questions they may have.",
    },
    {
        question:"What equipment do I need to provide for installation? ",
        answer:"We provide all necessary equipment, including a route. You don't need to provide anything.",
    },
    {
        question:"Can I schedule a specific installation time? ",
        answer:"Yes, we offer flexible scheduling to accommodate your needs. Contact us to schedule a time that works for you.",
    },
    {
        question:"How do I prepare for my installation appointment?",
        answer:"Please ensure a clear path for our technician to access your premises, and have a power outlet available for the equipment.",
    },
    {
        question:"What if I need to reschedule my installation appointment?",
        answer:" Contact us at least 24 hours in advance to reschedule your appointment. We understand that unexpected circumstances can arise.",
    },
    {
        question:"Will the installation technician configure my devices?",
        answer:" Our technician will configure your router and modem, but you may need to configure your devices (e.g., computers, smartphones) to connect to the internet. We can provide guidance on how to do this.",
    },

]
</script>