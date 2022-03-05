<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeskOnDesk",
});
</script>

<template>
  <v-container>
    <v-card class="mx-auto" variant="outlined">
      <v-card-header>
        <v-icon>mdi-format-columns</v-icon>Desk On Desk
      </v-card-header>
      <v-card-text> Bottom desk (cm) </v-card-text>
    </v-card>
  </v-container>
</template>
