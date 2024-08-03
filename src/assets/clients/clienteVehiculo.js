import axios from "axios";

const guardar = async (body) => {
  console.log("vehiculoCliente > guardar > Cuerpo");
  console.log(body);
  const data = axios
    .post(`http://localhost:8086/API/v1.0/Concesionario/vehiculo`, body)
    .then((r) => r.data);
  console.log("cleinteVehiculo > guardar > data");

  console.log(data);
  return data;
};

const consultar = async () => {
  const data = axios
    .get(`http://localhost:8086/API/v1.0/Concesionario/vehiculo`)
    .then((r) => r.data);
  console.log("CLIENTE > DATA: ");
  console.log(data);
  return data;
};

const consultarPlaca = async (placa) => {
  const data = axios
    .get(
      `http://localhost:8086/API/v1.0/Concesionario/vehiculo/${placa}`,
      placa
    )
    .then((r) => r.data);
  console.log("cleinteVehiculo > consultarPlaca > DATA:");
  console.log(data);
  return data;
};

const eliminar = async (placa) => {
  const data = axios
    .delete(
      `http://localhost:8086/API/v1.0/Concesionario/vehiculo/${placa}`,
      placa
    )
    .then((r) => r.data);
  console.log("CLIENTE > eliminar> data: ");
  console.log(data);
};

export const guardarFachada = async (body) => {
  console.log("cleinteVehiculo > guardarFachada > Cuerpo");
  console.log(body);
  return await guardar(body);
};

export const consultarFachada = async () => {
  return await consultar();
};

export const consultarPlacaFachada = async (placa) => {
  return await consultarPlaca(placa);
};

export const eliminarFachada = async (placa) => {
  return await eliminar(placa);
};
