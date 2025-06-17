<template>
  <v-breadcrumbs
    :items="items"
    density="compact"
    class="pa-0"
  >
    <template v-slot:divider>
      <v-icon icon="mdi-square-small"></v-icon>
    </template>
    <template v-slot:title="{ item }">
      <v-icon
        v-if="item.icon"
        :icon="item.icon"
      />
      <span v-else>{{ item.title }}</span>
    </template>
  </v-breadcrumbs>
</template>
<script setup lang="ts">
defineProps<{
  items?: Array<{
    title: string;
    disable?: boolean;
    icon?: string;
    to?: { name: string };
  }>;
}>();
</script>
<style scoped>
.v-breadcrumbs-item--link {
  text-decoration: none !important;
}
</style>