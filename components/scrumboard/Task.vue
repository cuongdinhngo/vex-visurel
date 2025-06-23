<template>
  <v-card
    class="rounded-lg text-black mb-4 cursor-pointer elevation-0"
    @click="dialogState.value = true"
  >
    <v-img
      v-if="coverImage"
      :src="coverImage"
      height="200"
      width="300"
      class="rounded-t-lg bg-whtie"
      cover
    ></v-img>
    <v-card-title class="d-flex align-center">
      <span
        v-for="(label, index) in labels"
        :key="index"
        :class="['sticker', `bg-${label.color}`]"></span>
    </v-card-title>
    <v-card-title class="text-subtitle-2">
      {{ task.title }}
    </v-card-title>
    <v-card-subtitle
      v-if="task.description"
      class="text-caption"
    >
      {{ task.description }}
    </v-card-subtitle>
    <v-card-title class="d-flex justify-space-between align-center">
      <div class="ga-1 d-flex align-center mr-2">
        <v-chip
          v-if="task.createdAt"
          prepend-icon="mdi-calendar"
          color="green"
          variant="flat"
          size="small"
        >{{ useDateFormat(new Date(task.createdAt), 'MMM, D') }}</v-chip>

        <v-chip
          prepend-icon="mdi-email"
          color="grey"
          variant="flat"
          size="small"
        >{{ task.comments ? task.comments.length : 0 }}</v-chip>
        <v-chip
          prepend-icon="mdi-paperclip"
          color="grey"
          variant="flat"
          size="small"
        >{{ task.attachments ? task.attachments.length : 0 }}</v-chip>
      </div>

      <div class="d-flex align-center">
        <ScrumboardAvatar
          v-for="(assignee, idx) in avatarImages"
          :key="idx"
          :image="assignee"
          :isLimited="idx > 1"
          size="24"
        />
      </div>
    </v-card-title>
  </v-card>
  <v-dialog
    v-model="dialogState.value"
    width="auto"
  >
    <v-card
      max-width="800" min-width="600" class="text-black"
      prepend-icon="mdi-file-document-edit-outline"
    >
      <template #title>
        <v-text-field
          v-model="task.title"
          variant="outlined"
          hide-details
          class="text-h1 font-weight-bold"
        ></v-text-field>
      </template>

      <template #append>
        <v-btn
          icon
          @click="dialogState.value = false"
          variant="text"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>

      <v-card-title class="text-subtitle-1 ml-10 py-0">
        <span>Tech Startup Board</span> -
        <span>{{ mapStatus(task.status) }}</span>
      </v-card-title>

      <v-card-title class="d-flex justify-space-between align-center text-subtitle-2 ml-10">
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
              id="menu-activator"
            />
            <v-menu activator="#menu-activator" :close-on-content-click="false" width="auto">
              <v-card  min-width="300" class="pa-4">
                <v-checkbox
                  v-for="assignee in ASSIGNEES"
                  :key="assignee.id"
                  :label="assignee.name"
                  :value="assignee.id"
                  v-model="taskAssignees"
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

        <v-spacer></v-spacer>

        <div class="text-end">
          <span class="text-end">Labels</span>
          <div class="d-flex align-center mt-2">
            <span
              v-for="(label, index) in labels"
              :key="index"
              :class="[`bg-${label.color}`, 'py-1 px-2 ml-2 rounded-lg text-white']"
            >
              {{ label.name }}
            </span>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import type { Task, LABELS, ASSIGNEES } from '@/composables/useScrumboard';
const props = defineProps({
  task: {
    type: Object as () => Task,
    required: true
  }
});

const { mapStatus } = useScrumboard();

const dialogState = reactive({
  value: false
});

const taskAssignees = ref([]);

const selectedAssignees = computed(() => {
  return props.task.assignees?.map(assignee => assignee.id) || [];
});

function updateTaskAssignees() {
  if (props.task.assignees) {
    props.task.assignees = ASSIGNEES.filter(assignee => selectedAssignees.value.includes(assignee.id));
  } else {
    props.task.assignees = [];
  }
}

const coverImage = computed(() => {
  if (props.task.attachments && props.task.attachments.length > 0) {
    return props.task.attachments.filter(item => item.isCover)[0]?.url || '';
  }
});

const labels = computed(() => {
  return props.task.labels.map(label => {
    const labelData = LABELS.find(l => l.id === label);
    return labelData;
  });
});

const avatarImages = computed(() => {
  let assignees = [];
  if (props.task.assignees && props.task.assignees.length > 2) {
    assignees = props.task.assignees.slice(0, 2).map(assignee => assignee.avatar);
    assignees.push(`+${props.task.assignees.length - 2}`);
  } else {
    assignees = props.task.assignees?.map(assignee => assignee.avatar) || [];
  }

  return assignees
});
</script>
<style scoped>
.sticker {
  margin-right: 5px;
  height: 5px;
  width: 40px;
  display: block;
  border-radius: 5px;
}

</style>