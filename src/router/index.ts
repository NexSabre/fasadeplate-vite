import { createRouter, createWebHistory } from "vue-router";
import DiagonalVue from "@/components/Diagonal.vue";
import HomePageVue from "@/components/HomePage.vue";
import VerticalDeskCalcVue from "@/components/VerticalDeskCalc.vue";

import BoardOnBoard from "@/components/BoardOnBoard.vue";

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
  {
    path: "/vertical",
    name: "Vertical",
    component: VerticalDeskCalcVue,
  },
  {
    path: "/boardonboard",
    name: "BoardOnBoard",
    component: BoardOnBoard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
