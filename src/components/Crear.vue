<template>
    <div class="container">

        <div class="card  shadow p-3 mb-5 bg-white rounded">
            <div class="card-header">
                Agregar nuevo empleado
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="agregar">

                    <div class="form-group">
                      <label for="code">CODE</label>
                      <input type="text"
                        class="form-control upper" name="code" id="code" v-model="empleado.code" aria-describedby="helpId"
                        placeholder="EMP001" required>
                      <small id="helpId" class="form-text text-muted">codigo del empleado</small>
                    </div>

                    <div class="form">
                      <label for="code">CONTRASEÑA</label>
                      <input type="password"
                        class="form-control" name="pass" id="pass" v-model="empleado.pass" aria-describedby="helpId"
                        placeholder="PASSWORD" required>
                      <small id="helpId" class="form-text text-muted">contraseña</small>
                    </div>

                    <div class="form-group">
                      <label for="code">CONFIRMA CONTRASEÑA</label>
                      <input type="password"
                        class="form-control" name="passC" id="passC" v-model="passC" aria-describedby="helpId"
                        placeholder="CONFIRM PASSWORD" required>
                      <small id="helpId" class="form-text text-muted">confirma contraseña</small>
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
            empleado: {},
            passC: this.passC
        }
    },

    methods: {
        agregar(){
          
            var datosEnviar = {
                code: this.empleado.code.toUpperCase(),
                pass: this.empleado.pass,
                name: this.empleado.name.toUpperCase(),
                last_name: this.empleado.last_name.toUpperCase(),
                surname: this.empleado.surname.toUpperCase(),
                email: this.empleado.email.toUpperCase(),
            }

            if (this.passC===this.empleado.pass) {
                fetch('http://localhost/remote/?insertar=1',{
                    method: "POST",
                    body: JSON.stringify(datosEnviar)
                })
                    .then(respuesta=>respuesta.json())
                    .then((datosRespuesta=>{
                        console.log(datosRespuesta)
                       window.location.href='listar'
                   }))
              } else {
                alert("Contraseñas diferentes")
            }    
        }
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