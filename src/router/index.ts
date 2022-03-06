import { createRouter, createWebHistory } from "vue-router";
import DiagonalVue from "@/components/pages/Diagonal.vue";
import VerticalDeskCalcVue from "@/components/pages/VerticalDeskCalc.vue";
import HorizontalDeskCalVue from "@/components/pages/HorizontalDeskCalc.vue";
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
    path: "/runningmeter",
    name: "RunningMeter",
    component: RunningMeterVue,
  },
  {
    path: "/horizontal",
    name: "Horizontal",
    component: HorizontalDeskCalVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
