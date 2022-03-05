<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoardOnBoard",
  data() {
    return {
      bottomDesk: 14.8,
      upperDesk: 14.8,
      totalLength: 345.5,
      overlay: 2.5,
      bestOverlay: 0.0,
      minOverlay: 1.5,
      maxOverlay: 2.5,

      infinityE: false,
    };
  },
  methods: {
    clear(): void {
      this.bottomDesk = 0;
      this.upperDesk = 0;
      this.totalLength = 0;
    },
    calculatePartLength(overlay: number): number {
      return this.bottomDesk - overlay + this.upperDesk - overlay;
    },

    calcBestOverlay(): number {
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
    calcStep(): string {
      return (
        Math.round(
          (this.bottomDesk + this.upperDesk - 2 * this.bestOverlay) * 10
        ) / 10
      ).toFixed(1);
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

      <v-card-actions v-if="totalLength">
        <v-row>
          <v-col>
            Overlay: {{ showOverlayReport }}<br />
            Step: {{ calcStep }} (cm)
          </v-col>
          <v-col>
            Bottom desk positions ({{ bestCalculateSummary.length }}) <br />
            <ul>
              <li v-for="desk in bestCalculateSummary">{{ desk }} (cm)</li>
            </ul>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-actions v-else> Provide correct data </v-card-actions>
    </v-card>
  </v-container>
</template>
