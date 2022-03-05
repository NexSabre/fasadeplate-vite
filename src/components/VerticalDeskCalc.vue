<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VerticalDeskCalc",
  data() {
    return {
      deskSize: 0,
      totalLength: 0,
    };
  },
  methods: {
    clear() {
      this.deskSize = 0;
      this.totalLength = 0;
    },
  },
  computed: {
    calculateFullSizeDesks(): number {
      return Math.floor(this.totalLength / this.deskSize);
    },
    calculateMissingPart(): number {
      const sizeOfXDesk = this.calculateFullSizeDesks * this.deskSize;
      return this.totalLength - sizeOfXDesk;
    },
    calculateCoverate(): number {
      return this.calculateFullSizeDesks * this.deskSize;
    },
    calculateClippings(): boolean {
      return this.totalLength % this.deskSize > 0;
    },
  },
});
</script>

<template>
  <div>
    <v-container fluid>
      <v-card class="mx-auto" variant="outlined">
        <v-card-header>
          <v-icon>mdi-arrow-split-vertical</v-icon>Desk Calculator
        </v-card-header>
        <v-card-text>
          <v-text-field
            v-model="deskSize"
            label="Desk size (cm)"
            type="number"
          />
        </v-card-text>
        <v-card-text>
          <v-text-field
            v-model="totalLength"
            label="total length (cm)"
            type="number"
          />
        </v-card-text>
        <v-card-actions v-if="deskSize && totalLength">
          <div>
            <h4>To cover you need: {{}}</h4>
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
          <h4>Provide desk size and total length of the wall</h4>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
