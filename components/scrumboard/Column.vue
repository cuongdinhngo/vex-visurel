<template>
  <v-card
    class="bg-grey-lighten-2 mr-6 scrumboard-card d-flex flex-column"
    flat
  >
    <v-card-title class="text-subtitle-1 font-weight-bold">
      {{ title }}
    </v-card-title>
    <v-card-text class="py-0 scrumboard-tasks flex-grow-1">
      <ScrumboardTask 
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </v-card-text>
    <v-card-actions class="pa-0 justify-center">
      <v-btn variant="text" prepend-icon="mdi-plus" width="90%" class="rounded-pill">Add Task</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Task } from '@/composables/useScrumboard';
const props = defineProps({
  title: {
    type: String,
    default: 'Backlog'
  },
  tasks: {
    type: Array<Task[]>,
    default: () => []
  }
});
</script>

<style scoped>
.scrumboard-card {
  flex: 0 0 300px;
  max-width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}
.scrumboard-tasks {
  max-height: 600px;
  overflow-y: auto;
  flex-grow: 1;
  min-height: 0; /* Ensures proper flexbox shrinking */
}
</style>