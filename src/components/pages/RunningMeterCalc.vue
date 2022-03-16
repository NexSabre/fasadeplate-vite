<script lang="ts" setup>
import RunningMeterCalc from "@/core/RunningMeterCalc";
import { ComputedRef, computed, ref } from "vue";
import chipInformationVue from "../core/chipInformation.vue";

const deskWide = ref();
const deskField = ref();
const percentageOfExcess = ref();

const runningMeterCalc: ComputedRef<RunningMeterCalc> = computed(
  (): RunningMeterCalc => {
    return new RunningMeterCalc(
      deskWide.value,
      deskField.value,
      percentageOfExcess.value
    );
  }
);

const chipInformation = chipInformationVue;
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

        Field to cover with desks (m²)
        <v-text-field
          v-model="deskField"
          label="(m²)"
          type="number"
          clearable
        />

        Percentage of excess: {{ runningMeterCalc.percentageOfExcess }}%
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
            Linear meters:
            {{ runningMeterCalc.deskSquare() ? runningMeterCalc.deskSquare()!.toFixed(2) : ""}}
            <span v-if="percentageOfExcess"
              >+
              {{ runningMeterCalc.excess() ? runningMeterCalc.excess()!.toFixed(2) : "" }}</span
            >
            <p v-if="percentageOfExcess">
              Linear meters with
              {{ runningMeterCalc.percentageOfExcess }}%:
              {{
                (
                  runningMeterCalc.deskSquare()! + runningMeterCalc.excess()!
                ).toFixed(2)
              }}
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
