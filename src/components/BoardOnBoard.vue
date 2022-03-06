<script lang="ts">
import { defineComponent } from "vue";
import ChipInformation from "./core/chipInformation.vue";

export default defineComponent({
  name: "BoardOnBoard",
  data() {
    return {
      bottomDesk: null,
      upperDesk: null,
      totalLength: null,
      overlay: 2.5,
      bestOverlay: 0,
      minOverlay: 1.5,
      maxOverlay: 2.5,
    };
  },
  methods: {
    clear(): void {
      this.bottomDesk = null;
      this.upperDesk = null;
      this.totalLength = null;
    },
    setBtn(value: number) {
      // <any> to skip some error for strict null check
      this.bottomDesk = <any>value;
      this.upperDesk = <any>value;
    },
    calculatePartLength(overlay: number): number {
      if (!this.bottomDesk || !this.upperDesk) {
        return 0;
      }
      return this.bottomDesk - overlay + this.upperDesk - overlay;
    },
    calcBestOverlay(): number {
      if (!this.totalLength) {
        return 0;
      }

      const partLength = this.calculatePartLength(this.maxOverlay);
      const parts = Math.floor(this.totalLength / partLength);
      const missingPart = this.totalLength - partLength * parts;
      const bestOverlay = this.maxOverlay - missingPart / (parts * 2);
      this.bestOverlay = bestOverlay;
      return bestOverlay;
    },
  },
  computed: {
    bestCalculateSummary(): string[] {
      if (!this.totalLength) {
        return [];
      }
      this.calcBestOverlay();
      let sections: string[] = [];
      const partLength = this.calculatePartLength(this.bestOverlay);
      const parts = Math.floor(this.totalLength / partLength);
      for (let _i = 1; _i <= parts; _i++) {
        sections.push((Math.round(partLength * _i * 10) / 10).toFixed(2));
      }
      return sections;
    },
    showOverlayReport(): string {
      if (this.bestOverlay < 0) {
        return `gap ${this.bestOverlay.toFixed(
          1
        )} (cm). There's not enough space for this operation.`;
      }
      return `${this.bestOverlay.toFixed(1)} (cm)`;
    },
    calcStep(): number {
      if (!this.bottomDesk || !this.upperDesk) {
        return 0;
      }
      return (
        Math.round(
          (this.bottomDesk + this.upperDesk - 2 * this.bestOverlay) * 10
        ) / 10
      );
    },
  },
  components: { ChipInformation },
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
        <v-row justify="center">
          <v-col>Common boards (in cm)</v-col>
        </v-row>

        <v-row justify="center">
          <v-btn @click="setBtn(12.3)">12,3</v-btn><v-spacer> </v-spacer>
          <v-btn @click="setBtn(14.8)">14,8</v-btn><v-spacer> </v-spacer>
          <v-btn @click="setBtn(17.3)">17,3</v-btn>
        </v-row>
      </v-card-text>
      <v-card-text>
        Bottom desk (cm)
        <v-text-field
          v-model="bottomDesk"
          label="Bottom desk (cm)"
          type="number"
          clearable
        />

        Upper desk (cm)
        <v-text-field
          v-model="upperDesk"
          label="Upper desk (cm)"
          type="number"
          clearable
        />

        Total length (cm) from the edge of the first board to the edge of the
        last one
        <v-text-field
          v-model="totalLength"
          label="Total length (cm)"
          type="number"
          clearable
        />
      </v-card-text>

      <v-card-actions v-if="totalLength">
        <v-row>
          <v-col>
            Overlay: {{ showOverlayReport }}<br />
            Step: {{ calcStep.toFixed(1) }} (cm)
          </v-col>
          <v-col>
            Bottom desk positions ({{ bestCalculateSummary.length }}) <br />
            <ul>
              <li v-for="desk in bestCalculateSummary">{{ desk }} (cm)</li>
            </ul>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-actions v-else-if="totalLength == 0">
        <chip-information missing-elements="Total Length" />
      </v-card-actions>
      <v-card-actions v-else> Provide correct data </v-card-actions>
    </v-card>
  </v-container>
</template>
