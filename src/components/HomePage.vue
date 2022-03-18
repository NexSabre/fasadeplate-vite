<script lang="ts">
import { defineComponent } from "vue";
import PageCard from "./core/pageCard.vue";

import cardPages from "@/router/routes";

export default defineComponent({
  name: "HomePage",
  methods: {
    goTo(pageName: string): any {
      this.$router.push(`/${pageName}`);
    },
  },
  data() {
    return {
      dataCardPage: cardPages,
    };
  },
  components: {
    PageCard,
  },
});
</script>

<template>
  <div>
    <v-container fluid>
      <page-card
        v-for="page in dataCardPage"
        :icon-name="page.iconName"
        :title="page.title"
        :description="page.description"
        :uri="page.uri"
        :picture-name="page.pictureName"
      />
    </v-container>
  </div>
</template>

<style>
.v-container {
  max-width: 1200px;
}
</style>
