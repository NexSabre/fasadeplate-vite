<template>
  <div>
    <v-card> Card1 </v-card>

    <v-card>Card2</v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      test: 0,
    };
  },
});
</script>
