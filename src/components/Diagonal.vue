<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "DiagonalVue",
    data() {
      return {
        count: 0,
        textFieldShort: 0,
        textFieldLong: 0,
      };
    },
    props: {
      msg: String,
    },
    computed: {
      calculate(): string | number {
        const floatCalc = Math.sqrt(
          Math.pow(this.textFieldShort, 2) + Math.pow(this.textFieldLong, 2),
        );

        return floatCalc !== 0 ? floatCalc.toFixed(3) : 0;
      },
    },
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
          <v-text-field v-model="textFieldShort" label="short (cm)" defatype="number" />
        </v-card-text>
        <v-card-text>
          <v-text-field v-model="textFieldLong" label="long (cm)" type="number" />
        </v-card-text>
        <v-card-actions>
          <div>
            <h4>Diagonal:</h4>
            <h2>{{ calculate }} <small>(cm)</small></h2>
          </div>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: rgb(179, 105, 105);
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
