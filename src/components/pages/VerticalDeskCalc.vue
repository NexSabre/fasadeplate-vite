<script lang="ts">
import { defineComponent } from "vue";
import chipInformation from "../core/chipInformation.vue";

export default defineComponent({
  name: "VerticalDeskCalc",
  data() {
    return {
      deskSize: null,
      totalLength: null,
    };
  },
  methods: {
    clear() {
      this.deskSize = null;
      this.totalLength = null;
    },
  },
  computed: {
    calculateFullSizeDesks(): number {
      if (!this.totalLength || !this.deskSize) {
        return 0;
      }
      return Math.floor(this.totalLength / this.deskSize);
    },
    calculateMissingPart(): number {
      if (!this.deskSize || !this.totalLength) {
        return 0;
      }
      const sizeOfXDesk = this.calculateFullSizeDesks * this.deskSize;
      return this.totalLength - sizeOfXDesk;
    },
    calculateCoverate(): number {
      if (!this.deskSize) {
        return 0;
      }
      return this.calculateFullSizeDesks * this.deskSize;
    },
    calculateClippings(): boolean {
      if (!this.totalLength || !this.deskSize) {
        return false;
      }
      return this.totalLength % this.deskSize > 0;
    },
  },
  components: { chipInformation },
});
</script>

<template>
  <div>
    <v-container>
      <v-card class="mx-auto" elevation="5">
        <v-card-header>
          <v-icon>mdi-arrow-split-vertical</v-icon>Desk Calculator
        </v-card-header>
        <v-card-text>
          Desk size
          <v-text-field v-model="deskSize" label="(cm)" type="number" />
          Total length
          <v-text-field v-model="totalLength" label="(cm)" type="number" />
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions v-if="deskSize && totalLength">
          <div>
            <h4>To cover you need:</h4>
            <h2>
              Full desk {{ calculateFullSizeDesks }}
              <small v-show="calculateClippings"> + 1 for clippings.</small>
            </h2>
            <h4>
              <ul>
                <li>
                  You cover: {{ calculateCoverate.toFixed(2)
                  }}<small> (cm)</small>
                </li>
                <li>
                  Missing part {{ calculateMissingPart.toFixed(2)
                  }}<small> (cm)</small>
                </li>
              </ul>
            </h4>
          </div>
        </v-card-actions>
        <v-card-actions v-else>
          <chip-information missing-elements="Desk Size & Total Length" />
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
