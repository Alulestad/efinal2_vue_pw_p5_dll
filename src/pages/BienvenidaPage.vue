<template>
  <div class="nav-bar">
    <a href="/#/VehiculoGuardarPage">Guardar Vehiculo</a>
    <a href="/#/VehiculoConsultarPage">Consultar Vehiculos</a>
  </div>
</template>

<script>
import router from "@/router/router";
import { routerKey } from "vue-router";

export default {
  methods: {
    hre() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  margin-left: 15px;
}
</style>
