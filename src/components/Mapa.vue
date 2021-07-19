<template>
<div class="container contenedor">
  <div class="mapa shadow p-3 mb-5 bg-white rounded">
  <GoogleMap
  api-key="AIzaSyAnxDREVtMdfLBg8IsexD8E6y0t3iW6Ku0"
  style="width: 100%; height: 500px" 
  :center="center"
  :zoom="12"
  >
    <Marker :options="{ position: { lat: getLat(), lng: getLong()} }" />
  </GoogleMap>
  </div>
  <div class="carta shadow p-3 mb-5 bg-white rounded">
    <div class="card">
  <img class="card-img-top img rounded" :src="this.eventos.photo" :alt="this.eventos.name">
  <div class="card-body">
    <h5 class="card-title">{{ this.eventos.name +" "+ this.eventos.last_name +" "+ this.eventos.surname }}</h5>
    <ul class="card-text">
      <li>Codigo:  {{ this.eventos.code }}</li>
      <li>Fecha: {{ this.eventos.datetime }}</li>
      <li>Hora: {{ this.eventos.time }}</li>
    </ul>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
  </div>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 25.680378244350234, lng: -100.31808139505094 }
    // const mark = ref({lat: this.eventos.lat_long.value , lng: this.eventos.lat_long.value})
    let eventos = ref([])
    return { center, eventos }
  },
  created: function() {
    this.listaEvento();
  },

  methods: {
    listaEvento(){
      fetch("http://192.168.15.30/eventos/?mapa="+this.$route.params.id)
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta)=> {
        this.eventos = datosRespuesta[0]
        console.table(this.eventos)
      })
      .catch(console.log)
    },

    getLat(){
      let lat = parseFloat((this.eventos.lat_long || "").split(",")[0])
      return lat
    },
    getLong(){
        let long = parseFloat((this.eventos.lat_long || "").split(",")[1])
        return long
    }
  }
})
</script>

<style>
  .contenedor {
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
    /* outline: 1px solid teal; */
    padding: 20px;
  } 
  .mapa {
    width: 100%;
    height: 100%; 
    /* outline: 1px solid purple; */
    margin-right: 25px;
  }
  .carta {
    width: 50%;
    height: 50%; 
    /* outline: 1px solid tomato; */
  }
  .img {
    height: 350px;
  }
</style>
