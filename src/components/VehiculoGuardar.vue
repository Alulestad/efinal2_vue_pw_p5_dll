<template>
  <div>
    <ul>
      <li>
        <label for="">Placa: </label>
        <input v-model="placa" type="text" id="id_placa" />
      </li>

      <li>
        <label for="">Marca: </label>
        <input v-model="marca" type="text" id="id_marca" />
      </li>

      <li>
        <label for="">Modelo: </label>
        <input v-model="modelo" type="text" id="id_modelo" />
      </li>

      <li>
        <label for="">Color: </label>
        <input v-model="color" type="text" id="id_color" />
      </li>

      <!-- <li>
        <label for="">Precio: </label>
        <input v-model="precio" type="text" id="id_precio" />
      </li> -->
    </ul>
    <button class="btn btn-primary" @click="guardar()">GUARDAR</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/assets/clients/clienteVehiculo";
export default {
  components: { guardarFachada },
  data() {
    return {
      placa: null,
      marca: null,
      modelo: null,
      color: null,
      precio: null,
    };
  },
  props: {},

  methods: {
    async guardar() {
      const vehiculo = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        /* precio: this.precio, */
      };
      const data = await guardarFachada(vehiculo);

      this.placa = null;
      this.marca = null;
      this.modelo = null;
      this.color = null;
      this.precio = null;

      window.alert("Se guardo el vehiculo");
    },
  },
  created() {
    console.log("Created");
  },
  watch: {},
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
li {
  list-style: none;
  color: blue;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
button {
  background-color: green;
}
input {
  background-color: rgb(109, 226, 255);
}
</style>
