<template>
  <div>
    <span>Members</span>
    <div class="d-flex align-center mt-2">
      <ScrumboardAvatar
        v-for="(assignee, idx) in task.assignees"
        :key="idx"
        :image="assignee.avatar"
        :isLimited="false"
        size="32"
      />
      <ScrumboardAvatar
        image="+"
        :isLimited="true"
        :text-font-size="'text-h6'"
        size="32"
        id="menu-avatar-activator"
      />
      <v-menu activator="#menu-avatar-activator" :close-on-content-click="false" width="auto">
        <v-card  min-width="300" class="pa-4">
          <v-checkbox
            v-for="assignee in ASSIGNEES"
            :key="assignee.id"
            :label="assignee.name"
            :value="assignee.id"
            v-model="selectedAssignees"
            density="compact"
            nav
            hide-details
            color="primary"
            @change="updateTaskAssignees"
          ></v-checkbox>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ASSIGNEES, Task } from '@/composables/useScrumboard';

const task = defineModel('task', {
  type: Object as () => Task,
  required: true
});

const selectedAssignees = ref(task.value.assignees?.map(assignee => assignee.id) || []);

function updateTaskAssignees() {
  if (task.value.assignees) {
    task.value.assignees = ASSIGNEES.filter(assignee => selectedAssignees.value.includes(assignee.id));
  } else {
    task.value.assignees = [];
  }
}
</script>