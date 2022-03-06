<script setup lang="ts">
interface Props {
  chipColor?: string;
  missingElements: string;
}

const props = withDefaults(defineProps<Props>(), {
  chipColor: "red",
  missingElements: "",
});
</script>

<template>
  <v-row justify="center" v-if="missingElements.length > 0">
    <v-chip color="red"> ☝️ Provide {{ props.missingElements }} 📏 </v-chip>
  </v-row>
</template>
