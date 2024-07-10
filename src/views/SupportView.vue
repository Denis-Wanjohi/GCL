<template>
     <!-- <div class="space-y-4"> 
    
        <header class="w-3/5 text-center text-5xl font-bold underline decoration solid">Gigabit Support</header>
        <p class=" w-1/2 Italic underline decoration dotted text-center text-3xl">
          Find the help you need!
        </p>
      <main>
    <FeaturesSecondSection></FeaturesSecondSection>
       
  </main>  
       <header class=" w-3/5 text-center text-5xl font-bold underline decoration solid"> We value your feedback! </header>
    <main >
      <FeedbackSection></FeedbackSection>
    </main>   
       <p class="text-center">  We respond within 72 hrs</p>
      </div>   -->

  <div>
    <div class="text-[50px] py-4 font-semibold">Frequently Asked Questions</div>
    <div>
      We're revolutionizing the digital landscape by building a future-proof, fibre network that is fast and has uninterrupted connectivity  to your home and businesses.
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
          <div class="flex justify-around  sm:mx-auto px-5 py-2">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                  <path fill="slate" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" />
                </svg>
              </a>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20">
                  <path fill="slate" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" />
                </svg>
              </a>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                  <g fill="slate" stroke="#334155" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#3512b5">
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109" />
                    <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193" />
                  </g>
                </svg>
              </a>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                  <path fill="slate" d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709m-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246m4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078" />
                  <circle cx="11.994" cy="11.979" r="3.003" fill="#334155" />
                </svg>
              </a>

              <a href="/">
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
