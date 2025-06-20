<template>
  <v-card class="bg-grey-lighten-2 mr-6 scrumboard-card" flat>
    <v-card-title class="text-subtitle-1 font-weight-bold">
      Backlog
    </v-card-title>
    <v-card-text class="py-0">
      <ScrumboardTask />
      <ScrumboardTask />
    </v-card-text>
    <v-card-actions class="pa-0 justify-center">
      <v-btn variant="text" prepend-icon="mdi-plus" width="90%" class="rounded-pill">Add Task</v-btn>
    </v-card-actions>
</v-card>
</template>
<style scoped>
.scrumboard-card {
  flex: 0 0 300px;
  max-width: 300px;
  min-width: 300px;
}
</style>