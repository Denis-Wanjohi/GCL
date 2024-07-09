<template>
    <div>
        <div class="font-semibold text-3xl  py-5">Security FAQS</div>
        
        <div v-for="(faq,i) in data" :key="i" class="border shadow-lg mx-5  text-start">
            <v-card  class="border my-1">
                <v-card-title class="text-wrap " style="font-weight: 600">{{ faq.question }}</v-card-title>
                <v-card-text>{{ faq.answer }}</v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        question:"What is a strong password?",
        answer:"A strong password is at least 12 characters long, includes a mix of uppercase and lowercase letters, numbers, and special characters. Avoid using personal information or common words.",
    },
    {
        question:"How do I secure my Wi-Fi network? ",
        answer:"Set a strong password. You can also change the default network name (SSID)",
    },
]
</script>