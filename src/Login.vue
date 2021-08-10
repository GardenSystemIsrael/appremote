<template>
    <div class="contenedor bg-dark">
        <div class="card shadow p-3 mb-5 bg-white rounded">
            
            <div class="card-body">

                <div class="form-group">
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Usuario">
                </div>

                <div class="form-group">
                  <input type="password" class="form-control" name="" id="" placeholder="Contraseña">
                </div>

                <button type="submit" class="boton btn btn-dark">Ingresar</button>

            </div>

           
            <div class="card-footer text-muted">
                <a href="#">Olvide mi contraseña</a>
            </div>
            
            
        </div>
    </div>
</template>

<script>


export default {
    name: 'login',
    
}
</script>

<style scoped>
.contenedor {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card {
    width: 400px;
    height: 270px;
}
.boton {
    width: 100px;
    margin-left: 115px;
}
</style>