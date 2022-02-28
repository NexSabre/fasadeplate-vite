<template>
  <v-app>
    <v-layout style="overflow: hidden">
      <v-app-bar absolute color="deep-purple">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute fixed app temporary>
        <v-list nav dense> </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-card class="mx-auto overflow-hidden"><router-view></router-view></v-card>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
  import DiagonalVue from "./components/Diagonal.vue";

  export default {
    name: "App",

    components: {
      DiagonalVue,
    },

    data: () => ({
      drawer: false,
      group: null,
    }),
  };
</script>
