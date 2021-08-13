import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
// import * as VueGoogleMaps from "vue2-google-maps";

// createApp(App).use(router, VueGoogleMaps,{
//     load: {
//         key: "AIzaSyAnxDREVtMdfLBg8IsexD8E6y0t3iW6Ku0",
//       },
// }).mount('#app')


createApp(App).use(router, VueAxios, axios, Vuex).mount('#app')
