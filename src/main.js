import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";



createApp(App).use(router, VueGoogleMaps,{
    load: {
        // key: "AIzaSyAUu0B8KF5ahfEAKo-tukzsAlewMM_jL6k",
        key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
      },
}).mount('#app')
// createApp(App).use(router).mount('#app')
