<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="0">
        <v-card-title class="text-caption font-weight-bold">Tasks</v-card-title>
        <v-list-item
          v-for="task in tasks"
          :key="task.id"
          :title="task.name"
          prepend-icon="mdi-check"
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
const tasks = [
  {
    id: 1,
    name: 'Create a new project',
  },
  {
    id: 2,
    name: 'Review the latest pull requests',
  }
];
</script>