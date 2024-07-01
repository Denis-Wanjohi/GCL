<script setup>
import IconHome from "./components/icons/IconHome.vue"
import IconAboutUs from "./components/icons/IconAboutUs.vue"
import IconContact from "./components/icons/IconContact.vue"
import IconHomePlan from "./components/icons/IconHomePlan.vue"
import IconStudentPlan from "./components/icons/IconStudentPlan.vue"
import IconBusinessPlan from "./components/icons/IconBusinessPlan.vue"
const footer = [
      {
        title:"Company",
        items:[
          {
            value:"Home",
            link:"/home",
            icon:IconHome
          },
          {
            value:"About us",
            link:"/about",
            icon:IconAboutUs
          },
          {
            value:"Contacts",
            link:"/contacts",
            icon:IconContact
          },
        ]
      },
      {
        title:"Plans",
        items:[
          {
            value:"Home Plan",
            link:"/homePlan",
            icon:IconHomePlan
          },
          {
            value:"Business Plan",
            link:"/businessPlan",
            icon:IconBusinessPlan
          },
          {
            value:"Student Plan",
            link:"/studentPlan",
            icon:IconStudentPlan
          },
        ]
      }
]
</script>

<template>
    <header class="w-screen bg-blue-400 h-[80px]">
    <div class="flex h-full w-full">
      <div class="w-1/4  flex justify-center">
        <img src="/Images/gigabit-web-logo.png" class=" my-auto h-[80px]" alt="LOGO PNG">
      </div>
      <div  class=" w-3/4 my-auto ">
        <VTabs bg-color="" fixed-tabs="true" class=" h-[200px]  font-bold text-xl ">
          <VTab style="font-weight: 700;font-size:medium" to="/">HOME</VTab>
          <VTab  style="font-weight: 700;font-size: medium;" to="/about">ABOUT US</VTab>
          <VTab  style="font-weight: 700;font-size: medium;" to="/coverage"> COVERAGE</VTab>
          <VTab  style="font-weight: 700;font-size: medium;" to="/purchase">PURCHASE</VTab>
          <VTab  style="font-weight: 700;font-size: medium;" to="/contacts"> CONTACTS</VTab>
          <VTab  style="font-weight: 700;font-size: medium;" to="/support"> SUPPORT</VTab>
        </VTabs>
      </div>
      <div class="w-1/4 flex justify-center">
        <VTab style="font-size: medium;">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99"/></svg>
          Call us: 0712 999 333
        </VTab>
      </div>
    </div>
  </header>

  <RouterView />

  <footer>
    <div>
      <div>

        <!-- top content -->
        <div class="flex pt-[100px] pb-[50px] mt-5 bg-slate-700 " >

          <!-- logo and details  -->
          <div class="w-1/2 px-10 ">
            <img src="../../public/Images/gigabit-web-logo.png"  class="w-1/2 h-1/2  " alt="Gigabit Logo">
            <div class="px-3 shadow py-2 text-wrap text-white">
              Gigabit Connection Limited we  excel with FTTH(Fibre To The Home), FTTP(Fibre To The Premisis) and wireless services, offering lightning-fast speeds, reliability and customer-centric support, setting a new standard in the industry.
            </div>
          </div>

          <!-- links -->
          <div class="w-1/2 flex"> 
            <v-card
                class="mx-auto"
                color="rgb(51, 65 ,85)"
                max-width="300"
                elevation="0"
                v-for="(foot, i) in footer"
                    :key="i"
                    :value="foot"
              >
                <v-list density="compact"
                    style="background-color: rgb(51, 65 ,85);"
                    class="my-5 mx-5 flex-col text-white"
                >
                  <v-list-subheader style="font-size: 20px;color: white;">{{foot.title}}</v-list-subheader>
                  <router-link to="home">
                    <v-list-item
                      v-for="(item,i) in foot.items"
                      :key="i"
                      link="true"
                      class=" my-1  h-[50px]"
                    >
                    <template v-slot:prepend>
                        <router-link :to=item.link class="px-2">
                          <v-icon :icon="item.icon"></v-icon>
                        </router-link>
                      </template>
                    <router-link :to=item.link class="px-2">
                      <v-list-item-title>{{ item.value }}</v-list-item-title>
                    </router-link>
                    </v-list-item>
                  </router-link>
                </v-list>
              </v-card>
          </div>
        </div>

        <!-- socials -->
        <div></div>
      </div>
    </div>
  </footer>

</template>

