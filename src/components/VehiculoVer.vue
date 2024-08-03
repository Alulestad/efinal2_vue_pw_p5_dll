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

      <li>
        <label for="">Precio: </label>
        <input v-model="precio" type="text" id="id_precio" />
      </li>
    </ul>
  </div>
</template>

<script>
import { consultarPlacaFachada } from "@/assets/clients/clienteVehiculo";
export default {
  components: { consultarPlacaFachada },
  data() {
    return {
      placa: null,
      marca: null,
      modelo: null,
      color: null,
      precio: null,
    };
  },
  props: {
    placaP: {
      type: String,
      required: true,
      default: true,
    },
  },

  methods: {
    async asignar() {
      const vehiculo = await consultarPlacaFachada(this.placaP);
      this.placa = vehiculo.placa;
      this.marca = vehiculo.marca;
      this.modelo = vehiculo.modelo;
      this.color = vehiculo.color;
      this.precio = vehiculo.precio;
    },
  },
  created() {
    console.log("Created");
  },
  watch: {
    placaP(value, oldValue) {
      console.log("VIEJO Y NUEVO");
      console.log(value, oldValue);
      this.placa = value;

      this.asignar();
    },
  },
  computed: {},
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
  font-family: "Courier New", Courier, monospace;
  background-color: rgb(250, 183, 96);
}
</style>
