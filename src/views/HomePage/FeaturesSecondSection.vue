<template>
  <v-card>
    <div class="text-center mb-4">
      <v-btn @click="showSubTabs = !showSubTabs">FAQs</v-btn>
    </div>

    <v-card-text>
      <v-tabs-items v-model="tab">
        <v-tab-item value="one">
          <div v-if="showSubTabs">
            <v-tabs v-model="subTab" bg-color="secondary">
              <v-tab value="networkStatus">
                <v-btn @click="subTabContent = 'networkStatus'; toggleNetworkStatusTab()">Wifi Network Status</v-btn>
              </v-tab>
              <v-tab value="wifiAnalytics">
                <v-btn @click="subTabContent = 'wifiAnalytics'; toggleAnalyticsTab()">Wifi Analytics</v-btn>
              </v-tab>
            </v-tabs>

            <div v-if="subTabContent === 'networkStatus'">
              <h3>Wifi Network Status</h3>
              <ul>
                <li v-for="(qa, index) in networkStatusQA" :key="index">
                  <v-btn class="question-btn" @click="toggleNetworkStatusAnswer(index)">{{ qa.question }}</v-btn>
                  <div v-if="qa.showAnswer">
                    <p v-html="qa.answer"></p>
                  </div>
                </li>
              </ul>
            </div>

            <div v-if="subTabContent === 'wifiAnalytics'">
              <h3>Wifi Analytics</h3>
              <ul>
                <li v-for="(qa, index) in wifiAnalytics" :key="index">
                  <v-btn class="question-btn" @click="toggleAnswer(index)">{{ qa.question }}</v-btn>
                  <div v-if="qa.showAnswer">
                    <p v-html="qa.answer"></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div v-else class="px-4 flex justify-around">
            <div v-for="(feature, i) in features" :key="i"
              class="h-[500px] w-1/4 rounded-[70px] py-5 px-2 animate__animated animate__rubberBand">
              <VEmptyState class="hover:animate-pulse focus:animate-spin rounded-2xl font-bold" style="font-size: 40px;"
                size="90" height="90" :class="{
                  'bg-gradient-to-b from-blue-500 to-orange-600': i % 2 === 0,
                  'bg-gradient-to-b from-orange-600 to-blue-500': i % 2 !== 0
                }" :title="feature.title" :icon="feature.icon" :text="feature.text">{{ feature.headline }}
              </VEmptyState>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>

<script setup>
import 'animate.css';
import IconQuestionVue from "@/components/icons/IconQuestion.vue";
import IconWifiVue from "@/components/icons/IconWifi.vue";
import IconStatusVue from "@/components/icons/IconStatus.vue";
import { VEmptyState } from "vuetify/lib/components/index.mjs";
import { ref } from 'vue';

const features = [
  {
    icon: IconQuestionVue,
    title: "To check Wifi connection Status",
    text: "Click the network icon in the taskbar and ensure Wi-Fi is turned on. If disconnected, select “Manage Wi-Fi connections” and reconnect to a trusted network. Restart Modem and Router: Unplug both devices, wait 30 seconds, and plug them back in. This can resolve connection problems and refresh the connection to the ISP. Diagnose Network Problems: Right-click the network icon and select “Diagnose network problems.” Windows will attempt to identify and fix common issues.",
  },
  {
    icon: IconWifiVue,
    title: "Network Status",
    text: "click FAQ button again for more details."
  },
];

const networkStatusQA = ref([
  {
    question: "Speed and Performance?",
    answer: "Our customers are assured of fast and seamless network. Browse without worries!",
    showAnswer: false,
  },
  {
    question: "Security Measures?",
    answer: "Above all, security is our top priority! Our customers are assured that their data is absolutely secure.",
    showAnswer: false,
  },
  {
    question: "Service Outages?",
    answer: "It can be annoying to have a sudden power outage. Don't worry, we make sure to warn our customers prior in case of any maintenance issues!",
    showAnswer: false,
  },
  {
    question: "WiFi Password and Network Name (SSID)?",
    answer: "Yes! We have this feature tailored uniquely for you! Our customers are valuable to us.",
    showAnswer: false,
  },
]);

const wifiAnalytics = ref([
  {
    question: "How does fiber internet work?",
    answer: "Fiber internet uses thin strands of glass or plastic to transmit data using light signals. It’s faster and more reliable than traditional copper-based connections.",
    showAnswer: false,
  },
  {
    question: "What is Gigabit internet?",
    answer: "Gigabit internet provides speeds up to 1,000 Mbps (megabits per second). It’s ideal for heavy streaming, gaming, and multiple devices.",
    showAnswer: false,
  },
  {
    question: "What’s the benefit of dedicated fiber internet?",
    answer: "Dedicated fiber means your connection isn’t shared with others, ensuring consistent speeds even during peak usage.",
    showAnswer: false,
  },
  {
    question: "Is fiber internet reliable?",
    answer: "Yes! Fiber is highly reliable due to its resistance to interference and weather conditions.",
    showAnswer: false,
  },
  {
    question: "What’s symmetrical internet speed?",
    answer: "Symmetrical speeds mean your upload and download speeds are the same. Great for video calls and cloud backups.",
    showAnswer: false,
  },
  {
    question: "What’s latency?",
    answer: "Latency is the delay between sending and receiving data. Lower latency is better for real-time applications.",
    showAnswer: false,
  },
  {
    question: "What’s the difference between a modem, router, gateway, and WiFi extender?",
    answer: "A modem connects to your ISP, a router distributes WiFi, a gateway combines both, and an extender boosts WiFi range.",
    showAnswer: false,
  },
  {
    question: "What’s mesh WiFi?",
    answer: "Mesh WiFi uses multiple access points to create a seamless network across your home.",
    showAnswer: false,
  },
  {
    question: "How can I improve my internet connection speeds?",
    answer: "Position your router centrally, avoid interference, and consider a mesh system.",
    showAnswer: false,
  },
  {
    question: "How do I check my internet speeds?",
    answer: "Use online speed tests to measure your download and upload speeds.",
    showAnswer: false,
  },
]);

const tab = ref('one');
const subTab = ref('wifiStatus');
const subTabContent = ref('');
const showSubTabs = ref(false);

const toggleAnswer = (index) => {
  wifiAnalytics.value[index].showAnswer = !wifiAnalytics.value[index].showAnswer;
};

const toggleNetworkStatusAnswer = (index) => {
  networkStatusQA.value[index].showAnswer = !networkStatusQA.value[index].showAnswer;
};

const toggleNetworkStatusTab = () => {
  // Reset all other tabs and initialize networkStatusQA if needed
  subTabContent.value = 'networkStatus';
};

const toggleAnalyticsTab = () => {
  // Reset all other tabs and initialize wifiAnalytics if needed
  subTabContent.value = 'wifiAnalytics';
};
</script>

<style>
.question-btn {
  color: cornflowerblue;
}
</style>
