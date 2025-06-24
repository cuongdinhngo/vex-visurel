<template>
  <v-card
    class="bg-grey-lighten-2 mr-6 scrumboard-card d-flex flex-column"
    flat
  >
    <!-- Column Title -->
    <v-card-title class="text-subtitle-1 font-weight-bold">
      {{ title }}
    </v-card-title>

    <!-- Task List -->
    <ItemsScrollCard>
      <ScrumboardTask 
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </ItemsScrollCard>

    <!-- Add New Task -->
    <v-card-actions class="pa-0 justify-center">
      <v-btn variant="text" prepend-icon="mdi-plus" width="90%" class="rounded-pill">
        Add Task
        <v-menu activator="parent" :close-on-content-click="false">
          <v-list class="d-flex flex-column align-center">
            <v-text-field
              v-model="taskName"
              placeholder="Task Name"
              variant="outlined"
              hide-details
              append-inner-icon="mdi-plus"
              @click:append-inner="addNewTask"
              width="90%"
            />
          </v-list>
        </v-menu>
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script setup lang="ts">
import { ItemsScrollCard } from '#components';
import type { Task } from '@/composables/useScrumboard';
import { faker } from '@faker-js/faker';

const props = defineProps({
  title: {
    type: String,
    default: 'Backlog'
  },
  columnId: {
    type: String,
    required: true
  }
});

const taskName = ref('');

const tasks = defineModel('tasks', {
  type: Array as PropType<Task[]>,
  default: () => []
});

function addNewTask() {
  if (taskName.value.trim()) {
    const newTask = {
      id: faker.string.uuid(),
      title: taskName.value,
      status: props.columnId,
      labels: [],
      members: [],
      description: '',
      attachments: [],
      comments: [],
    };
    taskName.value = '';
    tasks.value.push(newTask);
  }
}
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
  overflow-y: scroll;
}

.scrumboard-tasks::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
  display: none;
}

.scrumboard-tasks::-webkit-scrollbar
{
  width: 4px;
  background-color: #E0E0E0;
}

.scrumboard-tasks::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #c1c0c2;
  display: none;
}

.scrumboard-tasks:hover::-webkit-scrollbar-thumb
{
  display: block;
}

.scrumboard-tasks:hover::-webkit-scrollbar-track
{
  display: block;
}

</style>