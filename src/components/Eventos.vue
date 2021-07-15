<template>
    <div class="container">

        <div class="card  shadow p-3 mb-5 bg-white rounded">
            <div class="card-header">
                Eventos de empleado
            </div>
            <div class="card-body">
                 <table class="table table-hover">  <!--  table-responsive para tabla responsiva -->
                    <thead class="thead-inverse ">
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
                            <tr v-for="event in events" :key="event.id">
                                <td>{{ event.code }}</td>
                                <td>{{ event.name }}</td>
                                <td>{{ event.last_name }}</td>
                                <td>{{ event.surname }}</td>
                                <td>{{ event.datetime.substring(0,10) }}</td>
                                <td>{{ event.time }}</td>
                                <td>{{ event.lat_long }}</td>
                                <td>
                                    <router-link :to="{name:'Mapa', params:{ubi:event.lat_long}}"
                                        class="btn btn-outline-success btn-sm margen-derecho">
                                        Ver Mapa
                                     </router-link>
                                     <!-- <div>
                                        <Mapa :latitude= 13.7013266 :longitude= -89.226622 :title="'Titulo Marcador'" />
                                     </div> -->
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
    <Mapa :latitude= 13.7013266 :longitude= -89.226622 :title="'prueba test'" />
    
</template>

<script>
import Mapa from './Mapa.vue'
export default {    
    components: {
        Mapa,
    },
    data(){
        return{
            events: []
        }
    },
    //funcion que ejecutara los metos al crearse
    created:function(){
        this.listaEvents()
        
    },
    //todos los metodos del componente
    methods: {
        listaEvents(){
            fetch('http://192.168.15.30/eventos/')
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
        
    }

}
</script>


