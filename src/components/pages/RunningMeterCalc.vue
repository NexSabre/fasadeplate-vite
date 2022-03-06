<script lang="ts">
import { defineComponent } from "vue";
import chipInformation from "../core/chipInformation.vue";

export default defineComponent({
  name: "RunningMeterCalc",
  data() {
    return {
      deskWide: null,
      deskField: null,
      percentageOfExcess: 0,
    };
  },
  computed: {
    calculateDeskSquare(): number {
      if (!this.deskField || !this.deskWide) {
        return 0;
      }
      return this.deskField / (this.deskWide * 0.1);
    },
    calculateExcess(): number {
      if (!this.deskField || !this.deskWide) {
        return 0;
      }
      const currectMeter = this.deskField / (this.deskWide * 0.1);
      return (currectMeter / 100) * this.percentageOfExcess;
    },
  },
  components: { chipInformation },
});
</script>

<template>
  <v-container>
    <v-card class="mx-auto" elevation="5">
      <v-card-title>
        <v-icon>mdi-pillar</v-icon>Linear meter calculator
      </v-card-title>
      <v-card-header-text></v-card-header-text>

      <v-card-text>
        Wide desk (cm)
        <v-text-field v-model="deskWide" label="(cm)" type="number" clearable />

        Field to cover with desks (m^2)
        <v-text-field
          v-model="deskField"
          label="(m^2)"
          type="number"
          clearable
        />

        Percentage of excess: {{ percentageOfExcess }}%
        <v-slider
          v-model="percentageOfExcess"
          hint="Percentage of excess"
          :min="0"
          :max="40"
          :step="5"
        ></v-slider>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions v-if="deskWide && deskField">
        <v-row>
          <v-col>
            Linear meters: {{ calculateDeskSquare.toFixed(2) }}
            <span v-if="percentageOfExcess"
              >+ {{ calculateExcess.toFixed(2) }}</span
            >
            <p v-if="percentageOfExcess">
              Linear meters with {{ percentageOfExcess }}%:
              {{ (calculateDeskSquare + calculateExcess).toFixed(2) }}
              <!-- Overlay: {{ showOverlayReport }}<br />
            Step: {{ calcStep.toFixed(1) }} (cm) -->
            </p></v-col
          >
        </v-row>
      </v-card-actions>
      <v-card-actions v-else>
        <chip-information missing-elements="Desk Wide & Field to cover" />
      </v-card-actions>
    </v-card>
  </v-container>
</template>
