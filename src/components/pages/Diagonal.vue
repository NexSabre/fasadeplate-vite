<script lang="ts" setup>
import { ComputedRef, computed, ref } from "vue";
import chipInformationVue from "../core/chipInformation.vue";
import diagonalCalculation, { numberOrNull } from "@/core/DiagonalCalc";

const textFieldShort = ref();
const textFieldLong = ref();

const calculate: ComputedRef<numberOrNull> = computed((): numberOrNull => {
  return diagonalCalculation(textFieldShort.value, textFieldLong.value);
});

const chipInformation = chipInformationVue;
</script>

<template>
  <div>
    <v-container>
      <v-card class="mx-auto" elevation="5">
        <v-card-header>
          <v-icon>mdi-arrow-top-left-bottom-right</v-icon>Diagonal Calculator
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
        <v-divider></v-divider>
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
