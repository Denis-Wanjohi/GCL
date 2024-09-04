<template>
    
    <div class="border-b border-gray-900/10 pb-12 sm:w-1/2 sm:mx-auto sm:pt-10 mt-5 bg-slate-100" data-aos="fade-down">
      <div class="flex justify-start">
        <div class="ml-5 w-fit px-3 rounded-xl  bg-blue-600 text-white font-bold flex align-baseline justify-center cursor-pointer" @click="$emit('close')">
            <svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em" viewBox="0 0 24 24" class="pt-1">
                <path fill="black" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z" />
            </svg>
            <p span="font-bold top-5 absolute">To Plans</p>
        </div>
      </div>
      <h2 class="w-full   font-semibold leading-7 text-3xl py-3 text-gray-900">Personal Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-400">*please fill the form with correct details.</p>
      
      <div class="flex flex-wrap mx-auto justify-around pt-4">
            <p  class="bg-gradient-to-tr from-orange-500 text-white my-1  to-red-600 px-3 py-2 rounded-md">PLAN : <span class="text-md font-semibold ">{{props.data[0]}}</span></p>
            <p class="bg-gradient-to-tr from-orange-500 text-white  my-1 to-red-600 px-3 py-2 rounded-md">PACKAGE : <span class="text-md font-semibold">{{props.data[1].speed}} Mbps</span></p>
            <p class="bg-gradient-to-tr from-orange-500 text-white my-1  to-red-600 px-3 py-2 rounded-md">PRICE : <span class="text-md font-semibold">{{props.data[1].price}}/month </span></p>
      </div>

      <form v-if="!isFormFilled" class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" @submit.prevent="internet">
        <div class="sm:col-span-3 col-span-3 px-3 sm:px-0">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" v-model="details.firstName" name="first-name" id="first-name" autocomplete="given-name" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3 col-span-3 px-3 sm:px-0">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Middle name</label>
          <div class="mt-2">
            <input type="text" v-model="details.middleName" name="middle-name" id="middle-name" autocomplete="family-name" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
          <label for="nationalID" class="block text-sm font-medium leading-6 text-gray-900">National ID NO.</label>
          <div class="mt-2">
            <input id="nationalID"  v-model="details.nationalID" name="nationalID" type="number"  required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
                  <option>Milimani</option>
                  <option>White Lotus</option>
                  <option>Irinda</option>
                  <option>Kwa Nthambi</option>
                  <option>Woodlands</option>
                  <option>Mwiteria</option>
                  <option>Ngamia</option>
                  <option>Kiorone</option>
                  <option>Meru Diary</option>
                  <option>Mwithumwiru</option>
                  <option>Kaaga</option>
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
                  <option>Others (specify your location)</option>
            </select>
          </div>
        </div>

        <div class="sm:col-span-3" v-if="details.location === 'Others (specify your location)'">
          <label for="otherLocation" class="block text-sm font-semibold leading-6 text-gray-900">Your location <br> <span class="text-xs font-normal">
            please fill this if your location is not on the list*
          </span></label>
          <div class="mt-2">
            <input id="otherLocation" required   v-model="details.otherLocation" name="otherLocation" type="text" placeholder="specify your location..." class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3">
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
  
      </form>
      
      <!-- submitting -->
      <div v-if="submitting" class="bg-blue-30 my-2 mx-auto sm:w-full sm:h-fit rounded text-center">
          <div class="w-full ">
            <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 24 24">
            <rect width="10" height="10" x="1" y="1" fill="blue" rx="1">
                <animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.15s" values="1;13" />
                <animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.15s" values="1;13" />
                <animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.15s" values="13;1" />
                <animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.15s" values="13;1" />
            </rect>
            <rect width="10" height="10" x="1" y="13" fill="orange" rx="1">
                <animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.15s" values="13;1" />
                <animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.15s" values="1;13" />
                <animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.15s" values="1;13" />
                <animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.15s" values="13;1" />
            </rect>
            <rect width="10" height="10" x="13" y="13"  fill="brown" rx="1">
                <animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.15s" values="13;1" />
                <animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.15s" values="13;1" />
                <animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.15s" values="1;13" />
                <animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.15s" values="1;13" />
            </rect>
            </svg>
          </div>
          <div class="font-mono text-3xl text-center">Submitting ....</div>
      </div>
      <!-- email sent -->
      <div v-if="emailSent" class="bg-blue-30 my-2 mx-auto sm:full sm:h-fit rounded text-center">
          <div class="w-full ">
              <svg class="mx-auto"  xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 24 24">
              <g stroke="orange" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <circle cx="12" cy="12" r="9" fill="blue" fill-opacity="0.3" />
                  <path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="2s" values="14;0" />
                  </path>
              </g>
              </svg>
          </div>
          <div class="font-mono text-3xl">Submitted!</div>
      </div>
      <!-- failed -->
      <div v-if="failedSubmit" class="bg-blue-30 my-2  mx-auto sm:full sm:h-fit rounded text-center">
          <div class="w-full ">
              <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <g fill="none" stroke="#ff8000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3L21 20H3L12 3Z">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.5s" values="60;0" />
                  </path>
                  <path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10V14">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.6s" values="6;0" />
                  </path>
              </g>
              <circle cx="12" cy="17" r="1" fill="#ff8000" fill-opacity="0">
                  <animate fill="freeze" attributeName="fill-opacity" begin="2.4s" dur="1.2s" values="0;1" />
              </circle>
              </svg>
          </div>
          <div class="font-mono text-3xl">Failed to submit!</div>
      </div>
    </div>
</template>

<script setup>
import store from '@/store/index.js'
import {ref} from 'vue'
const props = defineProps({data:Array})
const submitting = ref(false)
const failedSubmit = ref(false)
const emailSent = ref(false)
const isFormFilled = ref(false)
const details = ref({
  firstName:'',
  middleName:'',
  lastName:'',
  nationalID:'',
  location:'',
  otherLocation:'',
  email:'',
  phoneNumber:'',
  whatsAppNumber:'',
  plan:props.data[0],
  package:`${props.data[1].speed} Mbps for ${props.data[1].price}/month`
  
})
function internet(){
  window.scrollTo(0,window.innerHeight * 0.1) 
  isFormFilled.value = true;
  submitting.value = true;
  if(details.value.location == 'Others (specify your location)'){
    details.value.location = details.value.otherLocation 
  }
  if(details.value.middleName == ''){
    details.value.middleName = ' '
  }
  store.dispatch('internet',details.value)
    .then((response)=>{
      console.log(response.data.message)
      submitting.value = false;
      emailSent.value = true
      setTimeout(()=>{
        details.value.firstName = ''
        details.value.middleName = ''
        details.value.lastName = ''
        details.value.nationalID = ''
        details.value.location = ''
        details.value.otherLocation = ''
        details.value.email = ''
        details.value.phoneNumber = ''
        details.value.whatsAppNumber = ''
        emailSent.value = false
        isFormFilled.value = false
        this.$emit('close')
      },5000)
    })
    .catch((err)=>{
      emailSent.value = false
      failedSubmit.value = true;
      submitting.value = false

      setTimeout(() => {
        failedSubmit.value =  false;
        isFormFilled.value = false;
      }, 5000);
      console.log(err)
    })
}
</script>
