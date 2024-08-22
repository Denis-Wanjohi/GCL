<template>
    <div>
        <v-card
            image="/Images/contact_us.jpg"
            class="w-full h-[50vh] bg-local"
        >
            <div class="grid bg-gradient-to-t from-orange-900 align-middle h-full text-center">
                <p class="my-auto text-white font-bold  text-5xl">Contact Us</p>
            </div>
        </v-card>


       
        <div class="mt-10">
            <!-- title -->
             <div class="w-full text-center my-auto font-bold text-3xl">
                Let's Start a Conversation
             </div>

            <!-- contents -->
             <div class="sm:flex pt-5 mt-5 sm:px-15">
                <!-- data -->
                 <div class="sm:w-1/2  sm:px-5">
                    <div class="py-5">
                        <p class="text-4xl font-extrabold ">Get in Touch</p>
                        <p class="text-xl">We're always happy to hear from you. Whether you have a question, comment, or just want to say hello, please don't hesitate to reach out.</p>
                    </div>


                    <div class="text-start text-balance" v-for="(contact,i) in contacts" :key="i">
                        <v-banner
                            color="deep-purple-accent-4"
                            lines="two"
                        >
                            <template v-slot:prepend>
                            <v-avatar
                                color=""
                                :icon=contact.icon
                            ></v-avatar>
                            </template>
                            <v-banner-text class=" h-[70px]">
                                <p class="text-xl font-semibold">{{contact.title}}</p>
                                <p classs="text-red">{{contact.description}}</p>
                            </v-banner-text>
                        </v-banner>
                    </div>
                   
                    
                 </div>
             
                 <!-- form -->
                 <div class="sm:w-1/2 w-full px-5  ">
                    <form  class="border-b  border-gray-900/10 pb-12" @submit.prevent="userDetails">
                        <h2 class=" text-2xl pt-5 font-semibold leading-7 text-gray-900">Inquery Information</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-400">Incase of any inquiry please reach out to us through this form.Thank you  :)</p>
                        <p class="mt-1 text-sm leading-6 text-gray-400">Please fill in correct details*</p>
                      
                        <div v-if="!isFormFilled" class="mt-10  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <!-- FIRST NAME -->
                            <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                            <div class="mt-2">
                                <input type="text"  required v-model="details.firstname" name="first-name" id="first-name" autocomplete="given-name" class="block w-full px-4    rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                            </div>

                            <!-- MIDDLE NAME -->
                            <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Middle name</label>
                            <div class="mt-2">
                                <input type="text"  v-model="details.middlename" name="first-name" id="first-name" autocomplete="given-name" class="block w-full px-4  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                            </div>

                            <!-- LAST NAME -->
                            <div class="sm:col-span-3">
                            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                            <div class="mt-2">
                                <input type="text" required v-model="details.lastname" name="last-name" id="last-name" autocomplete="family-name" class="block w-full  px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                            </div>
                            
                            <!-- EMAIL -->
                            <div class="sm:col-span-3">
                            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input id="email" required v-model="details.email" name="email" type="email" autocomplete="email" class="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                            </div>

                            <!-- PHONE NUMBER -->
                            <div class="sm:col-span-3">
                            <label for="phoneNumber" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                            <div class="mt-2">
                                <input id="phoneNumber" required   v-model="details.phoneNumber" name="phoneNumber" type="tel" v-maska  data-maska="+254#########" placeholder="+2547XXXXXXXX" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3">
                            </div>
                            </div>

                            <!-- WHATSAPP NUMBER -->
                            <div class="sm:col-span-3">
                            <label for="whatsAppNumber" class="block text-sm font-semibold leading-6 text-gray-900">WhatsApp number</label>
                            <div class="mt-2">
                                <input id="whatsAppNumber" required   v-model="details.whatsAppNumber" name="whatsAppNumber" type="tel" v-maska  data-maska="+254#########" placeholder="+2547XXXXXXXX" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3">
                            </div>
                            </div>
                        
                            <!-- LOCATION -->
                            <div class="sm:col-span-3">
                                <label for="location" class=" block text-sm font-semibold leading-6 text-gray-900">Location</label>
                                <div class="mt-2">
                                    <select id="location" required  v-model="details.location" name="location"  class="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
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
                                        <option>Others <span class="text-xs font-bold">(specify your location)</span> </option>
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

                            <div class="sm:col-span-3">
                                <label for="service" class=" block text-sm font-semibold leading-6 text-gray-900">Service</label>
                                <div class="mt-2">
                                    <select id="service" required  v-model="details.service" name="service"  class="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Request for internet</option>
                                        <option>Technical Support</option>
                                        <option>Comment</option>
                                        <!-- <option>Others</option> -->
                                    </select>
                                </div>
                            </div>

                            <!-- SERVICE -->
                            <div class="sm:col-span-6" v-if="details.service  !== 'Request for internet'">
                                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                <div class="mt-2.5">
                                <textarea name="message" placeholder="write some thing here..."  required v-model="details.message" id="message" rows="4" style="max-height: 100px;min-height: 50px;" class="block w-full   rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>

                            <!-- NATIONAL ID NUMBER -->
                            <div class="sm:col-span-3" v-if="details.service  == 'Request for internet'">
                                <label for="NationalIDnumber" class="block text-sm font-semibold leading-6 text-gray-900">National ID number</label>
                                <div class="mt-2">
                                    <input id="nationalIDnumber" required v-model="details.nationalID" name="national-id-number" type="Id-number"  class="block w-full  px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-3" v-if="details.service === 'Request for internet'">
                                <label for="plan" class=" block text-sm font-semibold leading-6 text-gray-900">Plan</label>
                                <div class="mt-2">
                                    <select id="plan" name="plan" v-model="details.plan"  class="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Home</option>
                                        <option>Business</option>
                                        <option>Student</option>
                                    </select>
                                </div>
                            </div>

                            <div class="sm:col-span-3" v-if="details.service === 'Request for internet'">
                                <label for="package" class=" block text-sm font-semibold leading-6 text-gray-900">Package</label>
                                <div class="mt-2">
                                    <select id="package" name="package" v-model="details.package"  class="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option v-if="details.plan === 'Home'">7Mbs for Ksh 2199/month </option>
                                        <option v-if="details.plan === 'Home'">12Mbps for Ksh 2599/month</option>
                                        <option v-if="details.plan === 'Home'">20Mbps for Ksh 3799/month</option>
                                        <option v-if="details.plan === 'Home'">30Mbps for Ksh 5399/month</option>
                                        <option v-if="details.plan === 'Home'">50Mbps for Ksh 6999/month</option>
                                        <option v-if="details.plan === 'Business'">2Mbps for Ksh 2999/month</option>
                                        <option v-if="details.plan === 'Business'">5Mbps for Ksh 4999/month</option>
                                        <option v-if="details.plan === 'Business'">10Mbps for Ksh 9999/month</option>
                                        <option v-if="details.plan === 'Business'">20Mbps for Ksh 19999/month</option>
                                        <option v-if="details.plan === 'Business'">30Mbps for Ksh 27999/month</option>
                                        <option v-if="details.plan === 'Student'">3Mbps for Ksh 999/month (2GB daily)</option>
                                        <option v-if="details.plan === 'Student'">5Mbps for   Ksh 1499/month  (3GB daily)</option>
                                    </select>
                                </div>
                            </div>
                            <button class="py-3 bg-blue rounded-md sm:col-span-6 w-3/4 font-semibold mx-auto" @click="submitted" >
                                <v-progress-circular indeterminate v-if="submittedForm"></v-progress-circular>
                                <span v-else>submit</span>
                            </button>
                            <div class="w-full mx-auto sm:col-span-6 " v-if="emailSent">
                                <v-alert
                                    text="submitted successfully!👍"
                                    type="success"
                                ></v-alert>
                            </div>
                        </div>

                        <!-- submitting -->
                        <div v-if="submitting" class="bg-blue-300  my-2 mx-auto sm:w-full sm:h-fit rounded text-center">
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
                        <div v-if="emailSent" class="bg-blue-300  my-2 mx-auto sm:full sm:h-fit rounded text-center">
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
                        <div v-if="failedSubmit" class="bg-blue-300  my-2  mx-auto sm:full sm:h-fit rounded text-center">
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
                    </form>
                 </div>
             </div>
        </div>
       
        

    </div>
</template>



<script setup>
import IconBuilding from "@/components/icons/IconBuilding.vue"
import IconEmail from "@/components/icons/IconEmail.vue"
import IconPhone from "@/components/icons/IconPhone.vue"
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue"
import {vMaska} from "maska/vue"
import {ref,onMounted} from 'vue'
import store from '@/store/index.js'
const contacts = ref()
const submitting = ref(false)
const failedSubmit = ref(false)
const emailSent = ref(false)
const isFormFilled = ref(false)

onMounted(()=>{
    contacts.value = [
        {
            title:'Our Offices',
            description:'Riverland Rafiki Building first floor, Meru Town',
            icon:IconBuilding
        },
        {
            title:'Hotline number',
            description:'+254712999333',
            icon:IconPhone
        },
        {
            title:'WhatsApp number',
            description:'+254712999333',
            icon:IconWhatsapp
        },
        {
            title:'Email us',
            description:'sales@gigabit.co.ke',
            icon:IconEmail
        },
    ]
})
const details = ref({
    firstname:'',
    middlename:'',
    lastname:'',
    email:'',
    nationalID:'',
    phoneNumber:'',
    whatsAppNumber:'',
    location:'',
    otherLocation:'',
    service:'',
    message:'',
    plan:'',
    package:''
})
const submittedForm = ref(false)

function userDetails(){ 
    if(window.innerWidth < 640){
        window.scrollTo(0,window.innerHeight * 1.5) 
    }else{
        window.scrollTo(0,window.innerHeight * 0.5)    
    }
    submitting.value = true
    isFormFilled.value =true
    if(details.value.service == 'Request for internet'){
        details.value.message == ''
    }else{
        details.value.plan == ''
        details.value.package == ''
    }
    if(details.value.location == 'Others (specify your location)'){
        details.value.location = details.value.otherLocation 
    }
    if(details.value.middlename == ''){
        details.value.middlename = ' '
    } 
    let  user  = {
            firstName: details.value.firstname,
            middlename: details.value.middlename,
            lastName: details.value.lastname,
            email: details.value.email,
            phoneNumber: details.value.phoneNumber,
            whatsAppNumber: details.value.whatsAppNumber,
            location: details.value.location,
            service: details.value.service,
    }

    let service = {}
    if(details.value.service == 'Request for internet'){
        service = {
            service:details.value.service,
            plan:details.value.plan,
            package:details.value.package
        },
        user.nationalID = details.value.nationalID

    }else{
        service = {
            service:details.value.service,
            message:details.value.message
        }
    }
    let data = {
        user:user,
        service:service
    }

    store.dispatch('contactForm',data)
        .then((response)=>{
            submittedForm.value = false
            submitting.value =false
            details.value.firstname = ''
            details.value.middlename = ''
            details.value.lastname =''
            details.value.email =''
            details.value.phoneNumber = ''
            details.value.nationalID = ''
            details.value.whatsAppNumber = ''
            details.value.location = ''
            details.value.otherLocation = ''
            details.value.service = ''
            details.value.message = ''
            details.value.plan = ''
            details.value.package = ''
            emailSent.value = true

            setTimeout(() => {
                isFormFilled.value  = false
                emailSent.value = false
            }, 5000);
        })
        .catch((error)=>{
            submittedForm.value = false
            emailSent.value = false
            failedSubmit.value = true;
            submitting.value = false
            setTimeout(() => {
                isFormFilled.value  = false
                failedSubmit.value =  false;
            }, 5000);
            console.log(error)
        }) 
}
</script>
