<template>
  <v-breadcrumbs
    :items="items"
    style="text-decoration: none;"
  >
    <template v-slot:divider>
      <v-icon icon="mdi-square-small"></v-icon>
    </template>
    <template v-slot:title="{ item }">
      {{ item.title }}
    </template>
  </v-breadcrumbs>
</template>
<script setup lang="ts">
const items = [
  {
    title: 'Home',
    disable: false,
    icon: 'mdi-home',
    to: { name: 'index'}
  },
  {
    title: 'Dashboards',
    disable: true,
    icon: 'mdi-view-dashboard',
    to: { name: 'index'}
  },
  {
    title: 'Analytics',
    disable: true,
    icon: 'mdi-cog',
    to: { name: 'index'}
  }
];
</script>