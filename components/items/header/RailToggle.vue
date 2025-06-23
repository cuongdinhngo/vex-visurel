<template>
  <v-rating
    length="1"
    empty-icon="mdi-circle-outline"
    full-icon="mdi-record-circle-outline"
    clearable
    size="x-small"
    :value="rail"
    @click="rail = !rail"
  ></v-rating>
</template>
<script setup lang="ts">
const rail = defineModel('rail', {
  type: Boolean,
  default: false,
  required: true,
});
</script>