<template>
  <v-col
    :cols="breakpoints.sm"
    :md="breakpoints.md"
    :lg="breakpoints.lg"
  >
    <v-card
      min-height="550px"
      max-height="700px"
    >
      <v-card-title class="d-flex align-center justify-space-between">
        <h4 class="text-h6 text-black">{{ label }}</h4>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-cloud-arrow-down" variant="text" color="primary"></v-btn>
        <v-btn icon="mdi-dots-horizontal" variant="text" color="primary"></v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Big Chart'
  },
  breakpoints: {
    type: Object,
    default: () => ({ sm: 12, md: 6, lg: 6 })
  }
});
</script>