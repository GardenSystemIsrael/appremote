<template>

<div class="container">
<router-link to="/eventos" class="btn btn-outline-primary">Regresar</router-link>
<div class="contenedor"> 
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
    <div class="carta shadow p-3 mb-5 bg-white rounded card-responsive">
      <div class="card">
        <img class="card-img-top img rounded" :src="this.eventos.photo" :alt="this.eventos.name">
          <div class="card-body">
            <h5 class="card-title">{{ this.eventos.name +" "+ this.eventos.last_name +" "+ this.eventos.surname }}</h5>
              <ul class="card-text datos">
                <li class="datos-li"><b>CODIGO: </b>  {{ this.eventos.code }}</li>
                <li><b>FECHA: </b> {{ this.eventos.datetime }}</li>
                <li><b>HORA: </b> {{ this.eventos.time }}</li>
                <li><b>GRUPO: </b>{{ this.eventos.gpo_dispositivos }}</li>
              </ul>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
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
  .container {
    margin-top: 45px;
  }
  .btn {
    margin-left: 20px;
  }
  .contenedor {
    display: flex;
    flex-direction: column-reverse;
    height: 50%;
    width: 100%;
    /* outline: 1px solid teal; */
    padding: 0px;
    margin: 0px;
  } 
  .mapa {
    width: 100%;
    height: 100%; 
    /* outline: 1px solid purple; */
    margin-right: 25px;
  }
  .carta {
     weight: 100%;
     height: 100%;
    /* outline: 1px solid tomato; */
  }
  .img {
    height: 350px;
  }
  .datos{
    list-style: none;
    padding: 0px;
  }
    .datos-li {
  }

  @media  screen and (min-width: 540px){
      .contenedor {
        flex-direction: row;
        padding: 20px;
      }
      .map{
        
      }
      .carta {
        width: 50%;
        height: 50%;
      }
  }
  /* @media screen and (max-width: 576px){
    .container {
      padding: 0px;
    }
    .contenedor{
      padding: 0px;
      margin: 0px;
    }
    
  } */
</style>
