<template>
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
      <v-btn
        id="menu-label-activator"
        size="small"
        class="ml-2"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-menu activator="#menu-label-activator" :close-on-content-click="false" width="auto">
        <v-card  min-width="300" class="pa-4">
          <v-list-item
            v-for="label in LABELS"
            :key="label.id"
            density="compact"
            class="pa-0"
            link
          >
            <template v-slot:prepend>
              <v-checkbox
                :value="label.id"
                v-model="task.labels"
                density="compact"
                nav
                hide-details
                color="primary"
              ></v-checkbox>
            </template>
            <v-list-item-title class="text-subtitle-2 d-flex align-center">
              <span :class="[`bg-${label.color}`, 'badges']"></span>
              {{ label.name }}
            </v-list-item-title>
          </v-list-item>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LABELS } from '@/composables/useScrumboard';

const task = defineModel('task', {
  type: Object as () => Task,
  required: true
});

const labels = computed(() => {
  return task.value.labels.map(label => {
    const labelData = LABELS.find(l => l.id === label);
    return labelData;
  });
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

.badges {
  margin-right: 5px;
  margin-left: 5px;
  height: 20px;
  width: 20px;
  display: block;
  border-radius: 5px;
}
</style>