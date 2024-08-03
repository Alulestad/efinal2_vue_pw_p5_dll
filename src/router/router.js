import { createRouter, createWebHashHistory } from "vue-router";
import VehiculoConsultarPage from "@/pages/VehiculoConsultarPage.vue";
import VehiculoGuardarPage from "../pages/VehiculoGuardarPage.vue";
import BienvenidaPage from "@/pages/BienvenidaPage.vue";

const routes = [
  {
    path: "/VehiculoConsultarPage",
    name: "name",
    component: VehiculoConsultarPage,
  },
  {
    path: "/VehiculoGuardarPage",
    component: VehiculoGuardarPage,
  },
  {
    path: "/",
    component: BienvenidaPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
