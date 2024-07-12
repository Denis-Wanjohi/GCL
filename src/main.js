import './style.css'

import { createApp } from 'vue'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'
// import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';
const vuetify = createVuetify({
    components,
    directives,
})
const app = createApp(App)
// app.use(TawkMessengerVue, {

//     propertyId : '6690192cc3fb85929e3e3280',
  
//     widgetId : '1i2he4mi8'
  
//   });
app.use(router)
app.use(vuetify)
app.mount('#app')
