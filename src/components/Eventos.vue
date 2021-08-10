<template>

<div id="nav">
    
    <nav class="navbar navbar-expand navbar-light bg-dark">
        <div class="nav navbar-nav">  
          <router-link to="/crear" class="nav-link derecha">Dar de alta empleado</router-link> 
          <router-link to="/listar" class="nav-link derecha">Consultar empleados</router-link>
          <router-link to="/eventos" class="nav-link" >Ver eventos</router-link>
        </div>
    </nav>

  </div>
    <div class="container">

        <div class="card  shadow p-3 mb-5 bg-white rounded">
            <div class="card-header">
                <div class="buscador">
                    Eventos de empleado
                    <input type="date" class="form-control" v-model="fecha"/>
                    <button type="submit" class="btn btn-outline-dark btn-sm" @click="enviaFecha">Buscar</button>
                </div>
            </div>
            <div class="card-body">
                 <table class="table table-hover table-responsive">  <!--  table-responsive para tabla responsiva -->
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
                                    <router-link :to="{name:'Mapa', params:{id:event.id}}"
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
    
</template>

<script>

export default {    
    data(){
        return{
            fecha: '',
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
                    // console.table(datos)
                    this.evets=[]
                    if (typeof datos[0].success==='undefined') {
                        this.events=datos
                    }
                })
                .catch(console.log)
        },
        //trae eventos por fecha seleccionada
        enviaFecha(){
            fetch('http://192.168.15.30/eventos/?date='+this.fecha.toString())
            .then(result => result.json())
            .then((datos) => this.events=datos)
            console.log(this.events)  
        }


    },
    computed: {
        
    }

}
</script>

<style scoped>
    .container {
        margin-top: 10px;
    }
    #nav {
        padding: 0px;
        margin-bottom: 0px;
    }

    #nav a {
        font-weight: bold;
        color: #eff4f8;
    }

    #nav a.router-link-exact-active {
        color: #f0bd30;
    }
    .derecha {
        margin-right: 10pd;
        color: white;
    }

    .buscador {
        display: flex;

    }

    @media  screen and (max-width: 540px){
      .container {
        padding: 0px;
      }
  }
</style>


