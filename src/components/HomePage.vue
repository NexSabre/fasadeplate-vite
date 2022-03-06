<script lang="ts">
import { defineComponent } from "vue";
import pageCard from "./core/pageCard.vue";

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
      test: cardPages,
    };
  },
  components: {
    pageCard,
  },
});
</script>

<template>
  <div>
    <v-container>
      <page-card
        v-for="page in test"
        :icon-name="page.iconName"
        :title="page.title"
        :description="page.description"
        :uri="page.uri"
        :picture-name="page.pictureName"
      />
    </v-container>
  </div>
</template>
