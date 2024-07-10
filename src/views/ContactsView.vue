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
                 <div class="sm:w-1/2 w-full px-5">
                    <form class="border-b border-gray-900/10 pb-12" @submit.prevent="userDetails">
                        <h2 class=" text-2xl pt-5 font-semibold leading-7 text-gray-900">Inquery Information</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-400">Incase of any inquiry please reach out to us through this form.Thank you  :)</p>
                        <p class="mt-1 text-sm leading-6 text-gray-400">Please fill in correct details*</p>
                      
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                            <div class="mt-2">
                                <input type="text" required v-model="details.firstname" name="first-name" id="first-name" autocomplete="given-name" class="block w-full px-4  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                            </div>

                            <div class="sm:col-span-3">
                            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                            <div class="mt-2">
                                <input type="text" required v-model="details.lastname" name="last-name" id="last-name" autocomplete="family-name" class="block w-full  px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                            </div>

                            <div class="sm:col-span-3">
                            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input id="email" required v-model="details.email" name="email" type="email" autocomplete="email" class="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                            </div>

                            <div class="sm:col-span-3">
                            <label for="phoneNumber" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                            <div class="mt-2">
                                <input id="phoneNumber" required   v-model="details.phoneNumber" name="phoneNumber" type="tel" v-maska  data-maska="+254#########" placeholder="+2547XXXXXXXX" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3">
                            </div>
                            </div>

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


                            <div class="sm:col-span-6" v-if="details.service  !== 'Request for internet'">
                                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                <div class="mt-2.5">
                                <textarea name="message" placeholder="write some thing here..."  required v-model="details.message" id="message" rows="4" style="max-height: 100px;min-height: 50px;" class="block w-full   rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
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

onMounted(()=>{
    contacts.value = [
        {
            title:'Our Offices',
            description:'Union Square,Adjacent to Meru Prison, Meru County',
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
    lastname:'',
    email:'',
    phoneNumber:'',
    location:'',
    service:'',
    message:'',
    plan:'',
    package:''
})
const submittedForm = ref(false)
const emailSent = ref(false)
// function submitted(){
//     if(details.value.firstname != '' || details.value.lastname != '' || details.value.firstname != '')
//     submittedForm.value = true
// }
function userDetails(){
    if(details.value.service == 'Request for internet'){
        details.value.message == ''
    }else{
        details.value.plan == ''
        details.value.package == ''
    }

    let  user  = {
            firstName: details.value.firstname,
            lastName: details.value.lastname,
            email: details.value.email,
            phoneNumber: details.value.phoneNumber,
            location: details.value.location,
            service: details.value.service,
    }

    let service = {}
    if(details.value.service == 'Request for internet'){
        service = {
            service:details.value.service,
            plan:details.value.plan,
            package:details.value.package
        }
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
            details.value.firstname = ''
            details.value.lastname =''
            details.value.email =''
            details.value.phoneNumber = ''
            details.value.location = ''
            details.value.service = ''
            details.value.message = ''
            details.value.plan = ''
            details.value.package = ''
            console.log(response.data.message)
            console.log(response.status)
            emailSent.value = true
            setTimeout(() => {
                emailSent.value = false
            }, 5000);
        })
        .catch((error)=>{
            submittedForm.value = false
            console.log(error)
        })
    
}
</script>
