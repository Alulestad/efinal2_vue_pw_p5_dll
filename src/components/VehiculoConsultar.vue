<template>
  <div class="container">
    <button @click="consultar()">CONSULTAR</button>
    <ul class="encabezados">
      <li>Placa</li>
      <li>Marca</li>
      <li>Modelo</li>
      <li>Acción</li>
      <li>Acción</li>
    </ul>
    <ul class="items" v-for="vehiculo in vehiculos" :key="vehiculo.id">
      <li>
        {{ vehiculo.placa }}
      </li>
      <li>
        {{ vehiculo.marca }}
      </li>
      <li>
        {{ vehiculo.modelo }}
      </li>
      <li>
        <button @click="$emit('placaEmit', vehiculo.placa)">Ver</button>
      </li>
      <li>
        <button @click="consultarEliminar(vehiculo.placa)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  consultarFachada,
  eliminarFachada,
} from "@/assets/clients/clienteVehiculo";
export default {
  components: { consultarFachada },
  data() {
    return {
      vehiculos: [],
      placa: null,
      marca: null,
      modelo: null,
    };
  },
  props: {
    verProductosProp: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  methods: {
    async consultar() {
      const data = await consultarFachada();

      console.log("VehiculoConsultar.vue >consultar> data: ");
      console.log(data);
      this.vehiculos = data;
    },
    async consultarEliminar(placaB) {
      eliminarFachada(placaB);
      this.vehiculos = this.vehiculos.filter((p) => p.placa !== placaB);
      window.alert("Se ha eliminado exitosamente el vehiculo");
    },
  },
  created() {
    console.log("Created");
  },
  watch: {
    placa(value, oldValue) {
      console.log({ value }, { oldValue });
    },
  },
  computed: {},
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
li {
  list-style: none;
}
.encabezados {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.encabezados li {
  margin: 0 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: large;
  font-weight: 100;
}

.items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.items li {
  margin: 0 20px;
  border: 1px black;
  border-style: solid;
}
</style>
