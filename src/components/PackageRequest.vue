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


      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Kinoru</option>
              <option>Kaithe</option>
              <option>Kigure</option>
              <option>Three steers</option>
              <option>Meru Poly</option>
              <option>Kambakia</option>
              <option>Makutano</option>
              <option>Magunus</option>
              <option>Citam</option>
              <option>Mafuko</option>
              <option>Kaaga</option>
              <option>Mpakone</option>
              <option>Kaaga Chief camp</option>
              <option>Gatimene</option>
              <option>Mathare</option>
              <option>KeMu</option>
              <option>Desert  Dew</option>
              <option>SOS</option>
              <option>Freds</option>
              <option>Meru prison</option>
              <option>Sayen</option>
              <option>Milimani</option>
              <option>White Lotus</option>
              <option>Mjini</option>
              <option>Kooje</option>
              <option>Town</option>
              <option>Mwendantu</option>
              <option>Majengo</option>
              <option>Kwa Nthambi</option>
              <option>Gatimbi</option>
              <option>Meru Dairy</option>
              <option>Mweteria</option>
              <option>Ngamia one</option>
              <option>H Young</option>
            </select>
          </div>
        </div>

        <div class="col-span-3">
          <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
          <div class="mt-2">
            <input type="tel" name="phone-number" id="phone-number" autocomplete="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-3">
          <label for="whatsapp-number" class="block text-sm font-medium leading-6 text-gray-900">Whatsapp Number</label>
          <div class="mt-2">
            <input type="tel" name="whatsapp-number" id="whatsapp-number" autocomplete="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <button class="py-3 bg-blue rounded-md sm:col-span-6 w-3/4 font-semibold mx-auto">submit</button>

      </div>
    </div>
</template>

<script setup>

const props = defineProps({data:Array})

console.log(props.data[0])
// const emit = defineEmits(['close'])
</script>