<template>
    <div class="container">

        <div class="card shadow p-3 mb-5 bg-white rounded">
            <div class="card-header">
                Empleados
            </div>
            <div class="card-body">
                <table class="table table-hover ">
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
export default {
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
</style>