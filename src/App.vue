<template>
  <router-view />
</template>

<script>
import VehiculoGuardarPage from "./pages/VehiculoGuardarPage.vue";
import VehiculoConsultar from "./pages/VehiculoConsultarPage.vue";

export default {
  name: "App",
  components: {
    VehiculoGuardarPage,
    VehiculoConsultar,
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
</style>
