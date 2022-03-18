<template>
  <v-app>
    <v-app-bar
      absolute
      color="#500000"
      style="color: white"
      app
      image="assets/app_bar.webp"
    >
      <v-toolbar-title>
        <v-btn @click="drawer = !drawer" style="opacity: 60%" color="black" icon
          ><v-icon>mdi-menu</v-icon></v-btn
        >
        <span @click="this.$router.push('/')"
          >Facade Calculator 📱</span
        ></v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list shaped>
        <v-list-subheader>HOME</v-list-subheader>
        <v-list-item
          v-for="item in navigationItems"
          @click="this.$router.push(item.uri)"
        >
          <v-icon>{{ item.iconName }}</v-icon> {{ item.title }}
        </v-list-item>
        <v-list-subheader>CALCULATORS</v-list-subheader>
        <v-list-item
          v-for="item in navigationCalcs"
          @click="this.$router.push(item.uri)"
        >
          <v-icon>{{ item.iconName }}</v-icon> {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <v-footer app bottom fixed padless></v-footer> -->
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import DiagonalVue from "./components/pages/Diagonal.vue";
import { navigationItemCalculators, navigationItems } from "@/router/routes";

export default defineComponent({
  name: "App",
  components: {
    DiagonalVue,
  },
  data: () => ({
    drawer: false,
    group: null,
    navigationItems: navigationItems,
    navigationCalcs: navigationItemCalculators,
  }),
});
</script>
