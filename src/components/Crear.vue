<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
                Agregar nuevo empleado
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="agregar">

                    <div class="form-group">
                      <label for="code">CODE</label>
                      <input type="text"
                        class="form-control" name="code" id="code" v-model="empleado.code" aria-describedby="helpId"
                        placeholder="EMP001" required>
                      <small id="helpId" class="form-text text-muted">codigo del empleado</small>
                    </div>

                    <div class="form-group">
                      <label for="name">NOMBRE</label>
                      <input type="text"
                        class="form-control" name="name" id="name" v-model="empleado.name" aria-describedby="helpId" 
                        placeholder="ANAHI" required>
                      <small id="helpId" class="form-text text-muted">Nombre del empleado</small>
                    </div>

                    <div class="form-group">
                      <label for="last_name">APELLIDO PATERNO</label>
                      <input type="text"
                        class="form-control" name="last_name" id="last_name" v-model="empleado.last_name" aria-describedby="helpId" 
                        placeholder="GARCIA" required>
                      <small id="helpId" class="form-text text-muted">Nombre del empleado</small>
                    </div>

                    <div class="form-group">
                      <label for="surname">APELLIDO MATERNO</label>
                      <input type="text"
                        class="form-control" name="surname" id="surname" v-model="empleado.surname" aria-describedby="helpId" 
                        placeholder="PERCINA" required>
                      <small id="helpId" class="form-text text-muted">Apellido materno del empleado</small>
                    </div>

                    <div class="form-group">
                      <label for="email">CORREO</label>
                      <input type="email"
                        class="form-control" name="email" id="email" v-model="empleado.email" aria-describedby="helpId" 
                        placeholder="ANAHI@GMAIL.COM" required>
                      <small id="helpId" class="form-text text-muted">Correo del empleado</small>
                    </div>

                    <div class="btn-group" role="group">
                        <button type="submit" class="btn btn-outline-success margen-derecho">Agregar</button>
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
    data(){
        return {
            empleado: {}
        }
    },

    methods: {
        agregar(){
            var datosEnviar = {
                code: this.empleado.code,
                name: this.empleado.name,
                last_name: this.empleado.last_name,
                surname: this.empleado.surname,
                email: this.empleado.email
            }

            fetch('http://localhost/remote/?insertar=1',{
                method: "POST",
                body: JSON.stringify(datosEnviar)
            })
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta=>{
                    console.table(datosRespuesta)
                    window.location.href='listar'
                }))
        }
    }
}
</script>

<style scoped>
    .margen-derecho {
        margin-right: 10px;
    }
</style>