<template>
  <v-list-subtitle>
    <h6 class="text-uppercase text-h6 pl-4 mt-4">{{ eventLabel }}</h6>
  </v-list-subtitle>

  <v-list-item
    v-for="event in eventList"
    :key="event?.id"
    class="py-4"
    link
  >
    <v-list-item-title>{{ `${event.title} (${event.value}${event.unit} / ${event.total}${event.unit})` }}</v-list-item-title>
    <v-list-item-subtitle>
      <v-progress-linear
        :bg-color="`${event?.color}-lighten-3`"
        :color="`${event?.color}-lighten-1`"
        :model-value="event?.value"
      ></v-progress-linear>
    </v-list-item-subtitle>
  </v-list-item>

  <v-divider v-if="isDivider"></v-divider>
</template>
<script setup lang="ts">
const props = defineProps({
  eventLabel: {
    type: String,
    default: 'Upcoming Events',
  },
  eventList: {
    type: Array,
    default: () => [],
  },
  isDivider: {
    type: Boolean,
    default: false,
  },
});
</script>