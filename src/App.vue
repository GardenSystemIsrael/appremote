<template >
 <!-- <div id="nav">
    
    <nav class="navbar navbar-expand navbar-light bg-dark">
        <div class="nav navbar-nav">  
          <router-link to="/crear" class="nav-link derecha">Dar de alta empleado</router-link> 
          <router-link to="/listar" class="nav-link derecha">Consultar empleados</router-link>
          <router-link to="/eventos" class="nav-link" >Ver eventos</router-link>
        </div>
    </nav>

  </div> -->
  <router-view/>
</template>

<script>


// import Barnav from './components/Barnav.vue'

export default {
  // components: { Barnav },
  name: "app",
  
}
</script>

<style scoped>
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
</style>

