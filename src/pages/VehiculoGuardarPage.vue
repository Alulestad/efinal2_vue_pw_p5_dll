<template>
  <div class="container-principal">
    <div class="nav-bar">
      <a href="/#/VehiculoGuardarPage">Guardar Vehiculo</a>
      <a href="/#/VehiculoConsultarPage">Consultar Vehiculos</a>
    </div>
    <VehiculoGuardar />
  </div>
</template>

<script>
import VehiculoGuardar from "../components/VehiculoGuardar.vue";

export default {
  name: "App",
  components: {
    VehiculoGuardar,
  },

  data() {
    return {};
  },
  methods: {},
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
</style>
