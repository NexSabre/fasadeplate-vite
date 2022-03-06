<script lang="ts">
import { defineComponent } from "vue";
import ChipInformation from "./core/chipInformation.vue";

export default defineComponent({
  name: "DiagonalVue",
  data() {
    return {
      count: 0,
      textFieldShort: null,
      textFieldLong: null,
    };
  },
  props: {
    msg: String,
  },
  computed: {
    calculate(): number {
      if (!this.textFieldLong || !this.textFieldShort) {
        return 0;
      }
      const floatCalc = Math.sqrt(
        Math.pow(this.textFieldShort, 2) + Math.pow(this.textFieldLong, 2)
      );
      return floatCalc;
    },
  },
  components: { ChipInformation },
});
</script>

<template>
  <div>
    <v-container>
      <v-card class="mx-auto" variant="outlined">
        <v-card-header>
          <v-icon>mdi-arrow-top-left-bottom-right</v-icon>Diagonal Card
        </v-card-header>
        <v-card-text>
          Short
          <v-text-field
            v-model="textFieldShort"
            label="(cm)"
            defatype="number"
          />
          Long
          <v-text-field v-model="textFieldLong" label="(cm)" type="number" />
        </v-card-text>
        <v-card-actions v-if="calculate">
          <div>
            <h4>Diagonal:</h4>
            <h2>{{ calculate.toFixed(1) }} <small>(cm)</small></h2>
          </div>
        </v-card-actions>
        <v-card-actions v-else>
          <chip-information missing-elements="Short & Long" />
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
