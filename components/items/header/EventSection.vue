<template>
  <v-list-subheader>
    <h6 class="text-uppercase text-h6 mt-4 text-black">{{ eventLabel }}</h6>
  </v-list-subheader>

  <v-list-item
    v-for="event in eventList"
    :key="event?.id"
    class="py-3"
    link
  >
    <v-list-item-title>{{ event?.title }}</v-list-item-title>
    <v-list-item-subtitle v-if="event?.subTitle">
      {{ event?.subTitle }}
    </v-list-item-subtitle>
    <v-list-item-subtitle v-if="event?.timestamp">
      {{ useDateFormat(event?.timestamp, 'hh:mm A') }}
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