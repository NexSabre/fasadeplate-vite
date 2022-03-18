<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    goTo(pageName: string): any {
      this.$router.push(`/${pageName}`);
    },
  },
});
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title
        >How to measure for Board-on-Board calculations?</v-card-title
      >
      <v-img src="assets/how_to_board_on_board.webp" width="400px" />
      <v-card-text>
        1. Nail the first and the last boards into place<br />
        2. Measure the distance from the first plank (including it) to the edge
        of the last plank
      </v-card-text>
      <v-card-actions>
        <v-btn @click="goTo('boardonboard')">Back to calculator</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
