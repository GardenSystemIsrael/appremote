<template>
    
    <div class="container">

        <div class="card">
            <div class="card-header">
                Editar empleado
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="actualizar">

                    <div class="form-group">
                      <label for="code">CODE</label>
                      <input type="text"
                        class="form-control upper" name="code" id="code" v-model="empleado.code" aria-describedby="helpId"
                        placeholder="EMP001" required>
                      <small id="helpId" class="form-text text-muted">codigo del empleado</small>
                    </div>

                    <div class="form-group">
                      <label for="name">NOMBRE</label>
                      <input type="text"
                        class="form-control upper" name="name" id="name" v-model="empleado.name" aria-describedby="helpId" 
                        placeholder="ANAHI" required>
                      <small id="helpId" class="form-text text-muted">Nombre del empleado</small>
                    </div>

                    <div class="form-group">
                      <label for="last_name">APELLIDO PATERNO</label>
                      <input type="text"
                        class="form-control upper" name="last_name" id="last_name" v-model="empleado.last_name" aria-describedby="helpId" 
                        placeholder="GARCIA" required>
                      <small id="helpId" class="form-text text-muted">Nombre del empleado</small>
                    </div>

                    <div class="form-group">
                      <label for="surname">APELLIDO MATERNO</label>
                      <input type="text"
                        class="form-control upper" name="surname" id="surname" v-model="empleado.surname" aria-describedby="helpId" 
                        placeholder="PERCINA" required>
                      <small id="helpId" class="form-text text-muted">Apellido materno del empleado</small>
                    </div>

                    <div class="form-group">
                      <label for="email">CORREO</label>
                      <input type="email"
                        class="form-control upper" name="email" id="email" v-model="empleado.email" aria-describedby="helpId" 
                        placeholder="ANAHI@GMAIL.COM" required>
                      <small id="helpId" class="form-text text-muted">Correo del empleado</small>
                    </div>

                    <div class="btn-group" role="group">
                        <button type="submit" class="btn btn-outline-success margen-derecho">Modificar</button>
                        <router-link :to="{name:'Listar'}" class="btn btn-outline-danger">Cancelar</router-link>
                    </div>

                </form>

            </div>
            <div class="card-footer text-muted">
                pruebas de asistencia remota
            </div>
        </div>

    </div>

</template>

<script>
export default {
    // aqui va todo lo que se exporta al componente, importante el return
    data(){
        return{
            empleado:{},
        }
    },
    //aqui van las funciones que se ejecutaran al crear el componente
    created: function(){
        this.consultaEmpedoId()
    },
    methods: {
        consultaEmpedoId(){
            // utilizamos el this.$route.params.id para decirle que de la ruta viene el parametro
            fetch('http://localhost/remote/?consultar='+this.$route.params.id)
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    this.empleado=datosRespuesta[0]
                })
                .catch(console.log)
        },
        actualizar(){
            let datosEnviar = {
                id: this.$route.params.id.toUpperCase(),
                code: this.empleado.code,
                name: this.empleado.name.toUpperCase(),
                last_name: this.empleado.last_name.toUpperCase(),
                surname: this.empleado.surname.toUpperCase(),
                email: this.empleado.email.toUpperCase()
            }

            fetch('http://localhost/remote/?actualizar='+this.$route.params.id,{
                method: "POST",
                body: JSON.stringify(datosEnviar)
            })
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta=>{
                    console.table(datosRespuesta)
                    window.location.href='../listar'
                })) 
        },
    }
}
</script>

<style scoped>
    .margen-derecho {
        margin-right: 10px;
    }
    .upper {
        text-transform: uppercase;
    }
</style>