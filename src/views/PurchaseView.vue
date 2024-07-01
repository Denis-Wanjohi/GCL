<template>
    <div>
      <div class="text-center d-flex pb-4">
        <v-btn class="ma-2" @click="all">
          All
        </v-btn>
        <v-btn class="ma-2" @click="none">
          None
        </v-btn>
      </div>
  
      <div class="pb-4">v-model {{ panel }}</div>
  
      <v-expansion-panels
        v-model="panel"
        multiple
        v-for="(plan,i) in plans" :key="i"
      >
        <v-expansion-panel
          :title=plans[0].plan
          value="foo"
        
        >
        {{ plan }}
        <!-- {{ plans[0].packages[0] }} -->
        </v-expansion-panel>
  
        <!-- <v-expansion-panel
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="BUSINESS"
          value="bar"
        ></v-expansion-panel>
  
        <v-expansion-panel
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="STUDENT"
          value="baz"
        ></v-expansion-panel> -->
      </v-expansion-panels>
      <!-- <v-expansion-panels class="my-4" variant="inset">
      <v-expansion-panel
        v-for="i in 3"
        :key="i"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Item"
      ></v-expansion-panel>
    </v-expansion-panels> -->
    </div>
    <!-- <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
  <template v-slot:item.1>
    <v-card title="Step One" flat>...</v-card>
  </template>

  <template v-slot:item.2>
    <v-card title="Step Two" flat>...</v-card>
  </template>

  <template v-slot:item.3>
    <v-card title="Step Three" flat>...</v-card>
  </template>
</v-stepper> -->


    
</template>

<script setup>
import   {ref} from 'vue';
// import Plans from  './HomePage/PlansSection.vue'
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
                    "e-learning",
                    ""
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
                immage:"/Image/student-lite.jpg",
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
                immage:"/Image/student-pro.jpg",
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
let panel = ref([])

function all() {
  panel.value = ['foo', 'bar', 'baz']
}

function none() {
  panel.value = []
}
</script>