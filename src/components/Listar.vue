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

        <div class="card shadow p-3 mb-5 bg-white rounded">
            <div class="card-header">
                Empleados
            </div>
            <div class="card-body">
                <table class="table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CODE</th>
                            <th>NOMBRE</th>
                            <th>APELLIDO PATERNO</th>
                            <th>APELLIDO MATERNO</th>
                            <th>CORREO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.id">
                            <td>{{ empleado.id }}</td>
                            <td>{{ empleado.code }}</td>
                            <td>{{ empleado.name }}</td>
                            <td>{{ empleado.last_name }}</td>
                            <td>{{ empleado.surname }}</td>
                            <td>{{ empleado.email }}</td>
                            <td>
                                   
                                <router-link :to="{name:'Editar', params:{id:empleado.id}}"
                                class="btn btn-outline-success btn-sm margen-derecho">
                                    Editar
                                </router-link>
                                <button type="button" class="btn btn-outline-danger btn-sm" v-on:click="borrarEmpleado(empleado.id)">
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer text-muted">
                Muestra todos los empledos
            </div>     
        </div>


    </div>
</template>



<script>

// import Barnav from './Barnav.vue'

export default {
    // components: { Barnav },
    data() {
        return {
            empleados: [], 
        }
    },


    //funciones que se rean al crear el componente
    created: function() {
        //llama al metodo de listar al crear el componente
        this.listar()
    },
    methods: {
        //creamos metodo de consulta
        listar(){
            fetch('http://localhost/remote/')
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    console.table(datosRespuesta)
                    this.empleados=[]
                    if(typeof datosRespuesta[0].success==='undefined'){
                        this.empleados=datosRespuesta
                    }
                })
                .catch(console.log)
        },

        //creamos el metodo de borrar empleados
        borrarEmpleado(id){
            let opc = confirm("¿Decea borrar empleado?")

            if (opc == true) {
                fetch('http://localhost/remote/?borrar='+id)
                    .then(respuesta=>respuesta.json())
                    .then((datosRespuesta)=>{
                        console.table(datosRespuesta)
                        window.location.href="listar"
                    })
                    .catch(console.log)     
            }
        }

    }
}
</script>

<style scoped>
    .margen-derecho {
        margin-right: 10px;
    }

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
  .btn {
      margin-bottom: 5px;
  }

  @media  screen and (min-width: 540px){
      .btn {
       
      }
  }
  @media  screen and (max-width: 540px){
      .container {
        padding: 0px;
      }
  }
</style>