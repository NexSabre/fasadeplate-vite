<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "pageCard",
  props: {
    iconName: String,
    title: String,
    description: String,
    uri: String,
    pictureName: String,
  },
  methods: {
    goTo() {
      this.$router.push(`/${this.uri}`);
    },
    getImageSrc(): string {
      return `assets/${this.pictureName}`;
    },
  },
});
</script>

<template>
  <v-card class="mx-auto" elevation="5" @click="goTo()">
    <v-img :src="getImageSrc()" cover></v-img>
    <v-card-header
      ><v-icon>{{ iconName }}</v-icon> {{ title }}
    </v-card-header>
    <v-card-subtitle>{{ description }}</v-card-subtitle>
  </v-card>
  <br />
</template>
