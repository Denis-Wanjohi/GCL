<template>
    <div data-aos="fade-right">
        <div class="sm:flex  sm:py-20 py-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 sm:px-10 sm:mx-10 mx-2 rounded-xl" >
            <div class="text-wrap sm:w-1/2 md:3/4 text-start">
                <div class="pl-4 sm:pr-0">
                    <p class="text-5xl pb-5   font-bold">Gear up for the fastest internet experince</p>
                    <p>Unlock limitless possibilities with our lightning-fast speeds and reliable connections.</p>
                    <!-- <p>Stay ahead of the curve with our advanced internet technology and flexible plans designed to meet your evolving needs</p> -->
                </div>
            </div>
            <div class="sm:w-1/2  sm:3/4 grid place-content-center">
                <router-link to="/purchase/home" class="px-5 py-3 bg-amber-600 rounded-md font-bold  sm:bg-white" @click="gettingStarted">GET STARTED</router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
function gettingStarted(){
    window.scrollTo(0,0)
}
</script>