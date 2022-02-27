<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: "name",
  data() {
    return {
      count: 0,
      inputModel: 0
    }
  },  
  props: {
    msg: String
  },
  computed: {
    calculate(): string | number {
      return Math.pow(this.inputModel, 2) ? Math.pow(this.inputModel, 2) : "sadas"
    }
  }
})
</script>

<template>
  <div>
    <input v-model="inputModel" /><button>sadf</button>
    {{ calculate }}
    <div>

      <h2>Results</h2>
    </div>
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
