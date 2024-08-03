<template>
  <div class="container-principal">
    <div class="nav-bar">
      <a href="/#/VehiculoGuardarPage">Guardar Vehiculo</a>
      <a href="/#/VehiculoConsultarPage">Consultar Vehiculos</a>
    </div>

    <VehiculoConsultar :verVehiculoProp="true" @placaEmit="ver($event)" />

    <VehiculoVer :placaP="codigo" />
  </div>
</template>

<script>
import VehiculoConsultar from "@/components/VehiculoConsultar.vue";
import VehiculoVer from "@/components/VehiculoVer.vue";

export default {
  name: "App",
  components: {
    VehiculoConsultar,
    VehiculoVer,
  },

  data() {
    return {
      codigo: null,
    };
  },
  methods: {
    async ver(placa) {
      console.log("App>ver>placa: ");
      console.log(placa);
      this.codigo = placa;
    },
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
button {
  margin: 15px;
  margin-top: 20px;
  background-color: #dbe514;
  font: bold;
}
</style>
