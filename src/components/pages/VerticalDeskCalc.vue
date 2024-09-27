<script lang="ts" setup>
import SingleBoardCalc from "@/core/SingleBoardCalc";
import { computed, ComputedRef, ref } from "vue";
import chipInformationVue from "../core/chipInformation.vue";

const deskSize = ref();
const totalLength = ref();

const singleBoardCalc: ComputedRef<SingleBoardCalc> = computed(
  (): SingleBoardCalc => {
    return new SingleBoardCalc(deskSize.value, totalLength.value);
  }
);

const chipInformation = chipInformationVue;
</script>

<template>
  <div>
    <v-container>
      <v-card class="mx-auto" elevation="5">
        <v-card-header>
          <v-icon>mdi-arrow-split-vertical</v-icon>Vertical desk Calculator
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
              Full desk {{ singleBoardCalc.countFullSizeBoards }}
              <small v-show="singleBoardCalc.clippings">
                + 1 for clippings.</small
              >
            </h2>
            <h4>
              <ul>
                <li>
                  You cover: {{ singleBoardCalc.coverate.toFixed(2)
                  }}<small> (cm)</small>
                </li>
                <li>
                  Missing part {{ singleBoardCalc.missingPart.toFixed(2)
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
