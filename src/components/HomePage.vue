<template>
  <div>
    <v-container>
      <v-card class="mx-auto" variant="outlined" @click="goTo('diagonal')">
        <v-card-header-text>Diagonal</v-card-header-text>
        <v-card-subtitle
          >calculate diagonal base on the short and long edge</v-card-subtitle
        >
      </v-card>
      <br />
      <v-card class="mx-auto" variant="outlined" @click="goTo('vertical')">
        <v-card-header-text>Vertical calculator</v-card-header-text>
        <v-card-subtitle>
          Calculate how many desk you need for wall
        </v-card-subtitle>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  methods: {
    goTo(pageName: string): any {
      this.$router.push(`/${pageName}`);
    },
  },
  data() {
    return {
      test: 0,
    };
  },
});
</script>
