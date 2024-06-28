<template>
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
        fixed-tabs="true"
      >
        <v-tab :value="1">HOME</v-tab>
        <v-tab :value="2">BUSINESS</v-tab>
        <v-tab :value="3">STUDENT</v-tab>
      </v-tabs>
  
      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="n in 3"
          :key="n"
          :value="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 6"
                :key="i"
                cols="12"
                md="4"
              >
              <v-card
                class="mx-auto text-base"
                color="surface-variant"
                image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                max-width="340"
                height="200"
                subtitle="Take a walk down the beach"
                title="Evening sunset"
            >
                <!-- <template v-slot:actions>
                <v-btn
                    append-icon="mdi-chevron-right"
                    color="red-lighten-2"
                    text="Book Activity"
                    variant="outlined"
                    block
                ></v-btn>
                </template> -->
                
            </v-card>
            <div class="bg-slate-300 w-[80%] h-[200px] mx-auto">

            </div>
              
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </template>
  <script setup>
  import {ref} from 'vue'
  const tab = ref()

  const plans = [
    {
        plan:'HOME',
        packages:[
            {
                feature:"Essential",
                speed:7,
                price:2199,
                description:[
                    "Basic internet use",
                    "Browsing",
                    "Unlimited",
                    "social media",
                    "e-learning"
                ],
                users:"5-8"
            },
            {
                feature:"Streamer",
                speed:12,
                price:2599,
                description:[
                    "Smooth HD streaming",
                    "Online gaming",
                    "Unlimited",
                    "email",
                    "social media",
                    "e-learning"
                ],
                users:"9-12"
            },
            {
                feature:"Family",
                speed:20,
                price:2599,
                description:[
                    "Family connectivity",
                    "Multiple devices streaming",
                    "3D Conferencing",
                    "Unlimited",
                    "social media",
                    "e-learning"
                ],
                users:"13-15"
            },
            {
                feature:"Power User",
                speed:30,
                price:2599,
                description:[
                    "Heavy Internet user",
                    "Online gaming",
                    "Unlimited",
                    "Fast uploads/downloads",
                    "social media",
                    "e-learning"
                ],
                users:"15-20"
            },
            {
                feature:"Turboo",
                speed:50,
                price:2599,
                description:[
                    "Ultimate speed",
                    "Business use",
                    "Unlimited",
                    "Heavy online activity",
                    "Large Families",
                    "Heavy online users"
                ],
                users:"25-30"
            },
        ]
    },
    {
        plan:'BUSINESS',
        packages:[
            {
                feature:"Starter",
                speed:2,
                price:3480,
                description:[
                    "Basic online activities",
                    "Fast upload and downloads speeeds",
                    "Low latency",
                    "Reliable conectivity",
                ],
                users:"1-5"
            },
            {
                feature:"Growth",
                speed:5,
                price:5800,
                description:[
                    "Faster speeds for onine activities",
                    "Seamless connectivity",
                    "High-speed uploads and downoads",
                    "Low latency",
                    "Reliable connectivity",
                ],
                users:"5-10"
            },
            {
                feature:"Pro",
                speed:10,
                price:11600,
                description:[
                    "High-speed connectivity",
                    "Fast uploads and downoads",
                    "Low latency",
                    "Reliable connectivity",
                ],
                users:"10-20"
            },
            {
                feature:"Power User",
                speed:30,
                price:2599,
                description:[
                    "Lightening-fast connectivity",
                    "High-speed uploads and downoads",
                    "Low latency",
                    "Reliable connectivity",
                ],
                users:"20-50"
            },
        ]
    },
    {
        plan:'STUDENT',
        packages:[
            {
                feature:"Student Lite",
                speed:3,
                price:999,
                description:[
                    "2 GB daily data allocation",
                    "256 kbps bandwidth after exhausting the daily limit",
                    "Suitable for light online activities",
                ],
                users:"1-2"
            },
            {
                feature:"Student Pro",
                speed:5,
                price:1499,
                description:[
                    "3 GB daily data allocation",
                    "512 kbps bandwidth after exhausting the daily limit",
                    "Suitable for moderate to heavy activities",
                ],
                users:"2-3"
            },
        ]
    },
  ]
  </script>,