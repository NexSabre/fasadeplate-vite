<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoardOnBoard",
  data() {
    return {
      bottomDesk: 14.8,
      upperDesk: 14.8,
      totalLength: 3000,
    };
  },
  methods: {
    clear(): void {
      this.bottomDesk = 0;
      this.upperDesk = 0;
      this.totalLength = 0;
    },
  },
});
</script>

<template>
  <v-container>
    <v-card class="mx-auto" variant="outlined">
      <v-card-title>
        <v-icon>mdi-format-columns</v-icon>Board-on-board
      </v-card-title>
      <v-card-header-text
        >Provide information about width of the bottom and the top
        board</v-card-header-text
      >
      <v-card-text>
        Bottom desk (cm)
        <v-text-field
          v-model="bottomDesk"
          label="Bottom desk (cm)"
          type="number"
          clearable
        />
      </v-card-text>
      <v-card-text
        >Upper desk (cm)
        <v-text-field
          v-model="upperDesk"
          label="Upper desk (cm)"
          type="number"
          clearable
        />
      </v-card-text>
      <v-card-text>
        Total length (cm) from the edge of the first board to the edge of the
        last one
        <v-text-field
          v-model="totalLength"
          label="Total length (cm)"
          type="number"
          clearable
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>
