<template>
  <v-list-item
    class="ma-0 pa-0"
    prepend-icon="mdi-note-text-outline"
    slim
    density="compact"
    nav
  >
    <v-list-item-title class="text-subtitle-1">
      Description
    </v-list-item-title>
  </v-list-item>
  <v-list-item
    class="ma-0 pa-0"
  >
    <v-textarea
      v-model="task.description"
      variant="outlined"
      rows="4"
      auto-grow
      class="ml-10"
    ></v-textarea>
  </v-list-item>
</template>
<script setup lang="ts">
const task = defineModel('task', {
  type: Object as () => Task,
  required: true
});
</script>