<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
                Eventos de empleado
            </div>
            <div class="card-body">
                 <table class="table table-hover">  <!--  table-responsive para tabla responsiva -->
                    <thead class="thead-inverse">
                        <tr>
                            <th>CODE</th>
                            <th>NOMBRE</th>
                            <th>APELLIDO P</th>
                            <th>APELLIDO M</th>
                            <th>FECHA</th>
                            <th>HORA</th>
                            <th>LAT - LONG</th>
                            <th>EVENTOS</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="evento in eventos" :key="evento.id">
                                <td>{{ evento.code }}</td>
                                <td>{{ evento.name }}</td>
                                <td>{{ evento.last_name }}</td>
                                <td>{{ evento.surname }}</td>
                                <td>{{ evento.datetime }}</td>
                                <td>{{ evento.time }}</td>
                                <td>{{ evento.lat_long }}</td>
                                <td>
                                    <router-link :to="{name:'Mapa', params:{code:evento.code}}"
                                        class="btn btn-outline-primary btn-sm">ver mapa</router-link>
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div>
            <div class="card-footer text-muted">
                pruebas en los eventos de asistencia remota
            </div>
        </div>

    </div>

    <!-- <div class="mapa">
        <Mapa class="mapa"></Mapa>
    </div> -->
</template>

<script>
    // import Mapa from "./components/Mapa";

export default {    
    // components: {
    //      Mapa
    // },

    data(){
        return{
            events: []
        }
    },
    //funcion que ejecutara los metos al crearse
    created:function(){
        this.listaEvents()
        this.eventos
    },
    //todos los metodos del componente
    methods: {
        listaEvents(){
            fetch('http://localhost/eventos/')
                .then(respuesta=>respuesta.json())
                .then((datos)=>{
                    console.table(datos)
                    this.evets=[]
                    if (typeof datos[0].success==='undefined') {
                        this.events=datos
                    }
                })
                .catch(console.log)
        }
    },
    computed: {
        eventos() {
           if(this.events.length > -1){
              return this.events 
           }
            return this.events
        }
    }

}
</script>

<style scoped>
  .mapa {
    height: 425px;
  }
</style>
