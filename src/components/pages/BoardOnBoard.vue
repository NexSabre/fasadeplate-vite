<script lang="ts">
import { defineComponent } from "vue";

import chipInformation from "../core/chipInformation.vue";

interface PathQuery {
  bottom?: null;
  upper?: null;
  length?: null;
  overlay?: null;
}

export default defineComponent({
  name: "BoardOnBoard",
  data() {
    return {
      bottomDesk: null,
      upperDesk: null,
      totalLength: null,
      bestOverlay: 0,
      minOverlay: 1.5,
      maxOverlay: 2.5,
      checkBoxMaxOverlay: false,
      shareThisWindow: false,
    };
  },
  mounted() {
    console.log("s");
    const query: PathQuery = this.$route.query;
    if (query.bottom) {
      this.bottomDesk = <any>Number(query.bottom);
    }
    if (query.upper) {
      this.upperDesk = <any>Number(query.upper);
    }
    if (query.length) {
      this.totalLength = <any>Number(query.length);
    }
    if (query.overlay) {
      this.checkBoxMaxOverlay = true;
      this.maxOverlay = <any>Number(query.overlay);
    }
  },
  methods: {
    async updateURI(): Promise<void> {
      const _bottom = this.bottomDesk
        ? `bottom=${(this.bottomDesk as number).toString().replace(",", ".")}`
        : "";
      const _upper = this.upperDesk
        ? `upper=${(this.upperDesk as number).toString().replace(",", ".")}`
        : "";
      const _length = this.totalLength
        ? `length=${(this.totalLength as number).toString().replace(",", ".")}`
        : "";
      const _overlay = this.maxOverlay
        ? `overlay=${(this.maxOverlay as number).toString().replace(",", ".")}`
        : "";

      const params = [_bottom, _upper, _length, _overlay];
      params.filter((e) => {
        e !== "";
      });
      const fullPath = `http://localhost:3000${this.$route.path}?${params.join(
        "&"
      )}`;

      await navigator.clipboard.writeText(fullPath);
      this.shareThisWindow = true;
      this.shareThisWindow = false;
    },
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
    getMaxOverlay(): number {
      const _bottomDesk = this.bottomDesk ? this.bottomDesk : 10;
      const _upperDesk = this.upperDesk ? this.upperDesk : 10;
      return Math.min(_bottomDesk, _upperDesk) - 0.5;
    },
    color(): string {
      if (!this.bottomDesk || !this.upperDesk || !this.totalLength) {
        return "gray";
      }
      return this.bestOverlay > 0 ? "green" : "red";
    },
  },
  watch: {
    checkBoxMaxOverlay(newValue: boolean) {
      if (newValue == false) {
        this.maxOverlay = 2.5;
      }
    },
  },
  components: { chipInformation },
});
</script>

<template>
  <v-container>
    <v-card class="mx-auto" elevation="5">
      <v-card-title>
        <v-icon>mdi-format-columns</v-icon>Board-on-board
      </v-card-title>
      <v-card-header
        >Provide information about width of the bottom and the top
        board</v-card-header
      >
      <v-card-text>
        <v-row justify="center">
          <v-col>Common boards (in cm)</v-col>
        </v-row>

        <div
          class="d-flex justify-space-around align-center flex-md-row fill-height"
        >
          <v-btn @click="setBtn(12.3)" rounded="lg" color="orange">12,3</v-btn>
          <v-btn @click="setBtn(14.8)" rounded="lg" color="orange">14,8</v-btn>
          <v-btn @click="setBtn(17.3)" rounded="lg" color="orange">17,3</v-btn>
        </div>
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
        <v-checkbox
          v-model="checkBoxMaxOverlay"
          label="Set manuall overlay"
        ></v-checkbox>
        <v-row justify="center" v-if="checkBoxMaxOverlay">
          <v-slider
            v-model="maxOverlay"
            hint="Manuall overlay"
            :min="0"
            :max="getMaxOverlay"
            :step="0.1"
            :color="color"
            thumb-label="always"
          ></v-slider>
        </v-row>
      </v-card-text>
      <v-row justify="center">
        <v-chip
          color="orange"
          v-if="bestOverlay <= 0 && bestCalculateSummary.length"
          >⚠️ Warning, You should use a wider desk on the top
        </v-chip>
        <v-chip color="green" v-else-if="bestOverlay > 0">
          Calculation looks 👌
        </v-chip>
      </v-row>
      <br />

      <v-divider></v-divider>

      <v-card-actions v-if="totalLength">
        <v-row>
          <v-col>
            Overlay: {{ showOverlayReport }}<br />
            Step: {{ calcStep.toFixed(1) }} (cm) <br />
            <br />
            <v-row justify="center">
              <v-btn
                justify="center"
                @click="updateURI"
                variant="text"
                color="teal-accent-4"
                >Copy link<v-icon>mdi-content-copy</v-icon>
              </v-btn></v-row
            >
          </v-col>
          <v-col>
            Bottom desk positions ({{ bestCalculateSummary.length }}) <br />
            <ul>
              <li v-for="desk in bestCalculateSummary">{{ desk }} (cm)</li>
            </ul>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-actions v-else-if="!upperDesk || !bottomDesk">
        <chip-information missing-elements="Desk size"
      /></v-card-actions>
      <v-card-actions v-else>
        <chip-information missing-elements="Total Length" />
      </v-card-actions>
    </v-card>
  </v-container>
</template>
