import { createRouter, createWebHistory } from "vue-router";
import DiagonalVue from "@/components/Diagonal.vue";
import HomePageVue from "@/components/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePageVue,
  },
  {
    path: "/diagonal",
    name: "Diagonal",
    component: DiagonalVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
