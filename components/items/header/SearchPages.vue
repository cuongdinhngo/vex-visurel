<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="0">
        <v-card-title class="text-caption font-weight-bold">Pages</v-card-title>
        <v-list-item
          v-for="page in pages"
          :key="page.id"
          :title="page.name"
          :subtitle="page.path"
          prepend-icon="mdi-page-next-outline"
          class="my-2"
          link
        >
          <template v-slot:append>
            <v-icon
              icon="mdi-chevron-right"
              class="text-black"
            />
          </template>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
const pages = [
  {
    id: 1,
    name: 'Scrumboard',
    path: '/apps/scrumboard',
  },
  {
    id: 2,
    name: 'Mailbox',
    path: '/apps/mailbox',
  }
];
</script>