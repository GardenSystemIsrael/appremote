<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | -->
    <router-link to="/crear">Dar de alta empleado</router-link> |
    <router-link to="/editar">Editar empleado</router-link> |
    <router-link to="/listar">Consultar empleados</router-link>
  </div>
  <router-view/>
</template>

<style>
#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f0bd30;
}
</style>
