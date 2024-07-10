<template>
    
    <div class="border-b border-gray-900/10 pb-12 sm:w-1/2 sm:mx-auto sm:pt-10">
      <div class="flex justify-start">
        <div class="flex align-baseline justify-center cursor-pointer" @click="$emit('close')">
            <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="black" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z" />
            </svg>
            <p span="font-bold top-5 absolute">Back</p>
        </div>
       <h2 class="w-full text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      </div>
      <p class="mt-1 text-sm leading-6 text-gray-400">*please fill the form with correct details.</p>
      
      <div class="flex flex-wrap mx-auto justify-around pt-4">
            <p>PLAN : <span class="text-md font-semibold">{{props.data[0]}}</span></p>
            <p>PACKAGE : <span class="text-md font-semibold">{{props.data[1].speed}} Mbps</span></p>
            <p>PRICE : <span class="text-md font-semibold">{{props.data[1].price}}/month </span></p>
      </div>

      <form class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" @submit.prevent="internet">
        <div class="sm:col-span-3 col-span-3 px-3 sm:px-0">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" v-model="details.firstName" name="first-name" id="first-name" autocomplete="given-name" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3 col-span-3 px-3 sm:px-0">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" v-model="details.lastName" name="last-name" id="last-name" autocomplete="family-name" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3 col-span-3 px-3 sm:px-0">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email"  v-model="details.email" name="email" type="email" autocomplete="email" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3 col-span-3 px-3 sm:px-0">
          <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location</label>
          <div class="mt-2">
            <select id="location" v-model="details.location" name="location" autocomplete="location-name" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>MeruTown</option>
                  <option>Kinoru</option>
                  <option>Makutano</option>
                   <option>Mwendatu</option>
                   <option>Kambakia</option>
                   <option>Kongoacheke</option>
                   <option>CCM</option>
                   <option>Brotherhood</option>
                    <option>Mjini</option>
                   <option>Meru General Area</option>
                    <option>Kooje</option>
                   <option>Gitimbine</option>
                 <option>Gikumene</option>
                  <option>Bypass</option>
                  <option>Kathumbi</option>
                  <option>Ruiri Junction</option>
                <option>Total Milimani</option>
                  <option>White Lotus</option>
               <option>Irinda Primary</option>
              <option>Kwa Nthambi</option>
                  <option>Woodlands</option>
               <option>Mwiteria</option>
                <option>Ngamia</option>
                <option>Kiorone</option>
                <option>Meru Diary</option>
                <option>Mwithumwiru</option>
                <option>KaagaBoys</option>
                <option>Mpakone</option>
               <option>Nkoune</option>
               <option>Kemu</option>
                <option>Gitoro</option>
                <option>Kigure</option>
               <option>Kambakia</option>
               <option>Runogone</option>
                <option>Kanthiga</option>
               <option>Gakoromone</option>
                <option>Kiruai</option>
                   <option>Others</option>
            </select>
          </div>
        </div>

        <div class="col-span-3  px-3 sm:px-0">
          <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
          <div class="mt-2">
            <input type="tel" v-model="details.phoneNumber" name="phone-number" id="phone-number" autocomplete="" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-3  px-3 sm:px-0">
          <label for="whatsapp-number" class="block text-sm font-medium leading-6 text-gray-900">Whatsapp Number</label>
          <div class="mt-2">
            <input type="tel" v-model="details.whatsAppNumber" name="whatsapp-number" id="whatsapp-number" autocomplete="" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <button class="py-3 bg-blue rounded-md sm:col-span-6 col-span-3 w-3/4 font-semibold mx-auto" >submit</button>
        <div class="w-full sm:mx-auto sm:col-span-6  col-span-3 " v-if="emailSent">
          <v-alert
                text="submitted successfully!👍"
                type="success"
            ></v-alert>
        </div>

      </form>
    </div>
</template>

<script setup>
import store from '@/store/index.js'
import {ref} from 'vue'
const props = defineProps({data:Array})
const emailSent = ref(false)
const details = ref({
  firstName:'',
  lastName:'',
  location:'',
  email:'',
  phoneNumber:'',
  whatsAppNumber:'',
  plan:props.data[0],
  package:`${props.data[1].speed} Mbps for ${props.data[1].price}/month`
  
})
function internet(){
  store.dispatch('internet',details.value)
    .then((response)=>{
      console.log(response.data.message)
      emailSent.value = true
      setTimeout(()=>{
        emailSent.value = false
      },5000)
    })
    .catch((err)=>{
      console.log(err)
    })
}
</script>
