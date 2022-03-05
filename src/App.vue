<template>
  <v-app>
    <v-app-bar absolute color="deep-purple" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        @click="
          {
            {
              this.$router.push('/');
            }
          }
        "
        >Fasadeplate</v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dense>
        <v-list-item
          @click="
            {
              {
                this.$router.push('/');
              }
            }
          "
          ><v-icon>mdi-home-minus-outline</v-icon>Home</v-list-item
        >
        <v-list-item
          @click="
            {
              {
                this.$router.push('/diagonal');
              }
            }
          "
          ><v-icon>mdi-arrow-top-left-bottom-right</v-icon>Diagonal
          calc</v-list-item
        >
        <v-list-item
          @click="
            {
              {
                this.$router.push('/vertical');
              }
            }
          "
          ><v-icon>mdi-arrow-split-vertical</v-icon>Vertical calc</v-list-item
        >
        <v-list-item
          @click="
            {
              {
                this.$router.push('/boardonboard');
              }
            }
          "
        >
          <v-icon>mdi-format-columns</v-icon> Board-on-board calc
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
