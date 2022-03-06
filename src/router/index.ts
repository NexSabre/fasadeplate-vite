import { createRouter, createWebHistory } from "vue-router";
import DiagonalVue from "@/components/pages/Diagonal.vue";
import VerticalDeskCalcVue from "@/components/pages/VerticalDeskCalc.vue";
import BoardOnBoardVue from "@/components/pages/BoardOnBoard.vue";
import RunningMeterVue from "@/components/pages/RunningMeterCalc.vue";

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
  {
    path: "/vertical",
    name: "Vertical",
    component: VerticalDeskCalcVue,
  },
  {
    path: "/boardonboard",
    name: "BoardOnBoard",
    component: BoardOnBoardVue,
  },
  {
    path: "/runnigmeter",
    name: "RunningMeter",
    component: RunningMeterVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
