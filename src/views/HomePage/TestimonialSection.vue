<template>
    <div class="py-5">
        <div class="text-center font-bold text-5xl shadow-sm py-3 mx-auto">
            Our clients say
        </div>


        <div class="overflow-x-auto hide-scrollbar">
            <div class="flex space-x-4">
                <div class="min-w-[400px] bg-white shadow-md rounded-lg p-6" data-aos="zoom-in"  v-for="testimony,i in testimonials" :key="i">
                    <v-banner  :text=testimony.testimony style="" class="h-[200px] rounded-xl border  overflow-y-auto hide-scrollbar">
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

const testimonials = [

    {
        "testimony": "Gigabit has been a game-changer for my business. Fast and stable internet has increased my productivity and allowed me to focus on growth. Their prices are unbeatable, and the service is always prompt and friendly. Five stars!",
        "name": "Tom Cat",
        "profession": "Joy Nkatha"
    },
    {
        "testimony": "I was skeptical about switching to Gigabit, but their service has exceeded my expectations. The installation process was seamless, and their tech support is always available to help. The speeds are incredible, and I've never experienced any downtime. Highly recommended!",
        "name": "Jerry Mouse",
        "profession": "Sarah Muthoni"
    },
    {
        "testimony": "I was blown away by the speed and reliability of Gigabit internet service. With unlimited data and no throttling, I can stream and game to my heart's content. Their customer support is top-notch too! 10/10 would recommend.",
        "name": "Tommy Boy",
        "profession": "Lynee Gatwiri"
    },
    {
        "testimony": "Switching to Gigabit was the best decision ever! The internet is super fast and reliable, which has made working from home a breeze. The customer service team is always friendly and ready to assist with any issues.",
        "name": "Alex Green",
        "profession": "Jane Smith"
    },
    {
        "testimony": "Gigabit's service is fantastic. I haven’t experienced any interruptions, and the speeds are consistently high. It’s perfect for my remote work and online gaming. The support team is always helpful and professional.",
        "name": "Ella Blue",
        "profession": "John Kimani"
    },
    {
        "testimony": "I’ve tried other internet providers, but Gigabit stands out for its reliability and speed. The installation was quick, and I’m impressed with the customer service. It’s been a great experience all around.",
        "name": "Max White",
        "profession": "Makena Lorna"
    }
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