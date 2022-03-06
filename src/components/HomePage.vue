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

<template>
  <div>
    <v-container>
      <v-card class="mx-auto" variant="outlined" @click="goTo('diagonal')">
        <v-card-header
          ><v-icon>mdi-arrow-top-left-bottom-right</v-icon> Diagonal calculator
        </v-card-header>
        <v-card-subtitle
          >Calculate diagonal base on the short and long edge.</v-card-subtitle
        >
      </v-card>
      <br />

      <v-card class="mx-auto" variant="outlined" @click="goTo('vertical')">
        <v-card-header
          ><v-icon>mdi-arrow-split-vertical</v-icon> Vertical
          calculator</v-card-header
        >
        <v-card-subtitle>
          Calculate how many desk you need for wall.
        </v-card-subtitle>
      </v-card>
      <br />

      <v-card class="mx-auto" variant="outlined" @click="goTo('boardonboard')">
        <v-img src="assets/board_on_board.png" cover></v-img>
        <v-card-header
          ><v-icon>mdi-format-columns</v-icon> Board-on-board
          calculator</v-card-header
        >
        <v-card-subtitle>
          Calculate positions if you want to lay a plank facade where one row
          overlaps the other.
        </v-card-subtitle>
      </v-card>
      <br />

      <v-card class="mx-auto" variant="outlined" @click="goTo('runnigmeter')">
        <v-card-header
          ><v-icon>mdi-pillar</v-icon> Linear meter calculator</v-card-header
        >
        <v-card-subtitle>
          Calculate how many desk in currect meter you need.
        </v-card-subtitle>
      </v-card>
      <br />
    </v-container>
  </div>
</template>
