<template>
  
  <div>
    <div class="text-[50px] py-4 font-semibold">Frequently Asked Questions</div>
    <div>
      We're revolutionizing the digital landscape by building a future-proof, fiber network that is fast and has uninterrupted connectivity  to your home and businesses.
    </div>
    <div class="py-6">
      <p class="text-2xl font-bold py-4">Discover How We're Making it Happen</p>
      <p>
          Explore our FAQs to learn more about our work in bringing lightning-fast internet to you.
      </p>
    </div>
  </div>
  <div class="sm:flex sm:mx-5 sm:px-3 border rounded">
    <div class="sm:w-1/4 w-screen bg-slate-200 h-fit">
      <!-- category -->
      <div class="w-full border rounded">
        <div class="w-full text-center font-bold py-1 border border-white rounded-md"><router-link to="/support/general">General</router-link> </div>
        <div class="w-full text-center font-bold py-1 border border-white rounded-md"><router-link to="/support/installations_and_setup"> Installations and setup</router-link></div>
        <div class="w-full text-center font-bold py-1 border border-white rounded-md"><router-link to="/support/technical_issues">Technical issues</router-link> </div>
        <div class="w-full text-center font-bold py-1 border border-white rounded-md"><router-link to="/support/security">Security</router-link> </div>
      </div>

      <!-- socials -->
      <div>
        <div class="">
          <div class="flex justify-around  sm:mx-auto md:px-5 py-2">
              <a href="https://www.facebook.com/GigabitConnections/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                  <path fill="slate" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" />
                </svg>
              </a>
              
              
              <a href="https://wa.me/+254712999333?text=Hello Gigabit">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                  <path fill="slate" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                </svg>
              </a>
            </div>
        </div>
      </div>
    </div>
    <!-- FAQS -->
    <div class="sm:w-3/4 w-screen">
      <GeneralFAQ v-if="$route.path === '/support'"/>
      <router-view  v-else></router-view>
    </div>

  </div>
</template>

<script setup>
import GeneralFAQ from '@/views/FAQS/GeneralFAQ.vue'
</script>
