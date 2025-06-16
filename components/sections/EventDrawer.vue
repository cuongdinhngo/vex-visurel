<template>
  <v-navigation-drawer
    v-model="eventDrawer"
    app
    density="compact"
    nav
    location="right"
  >
    <v-card
      tile
      class="bg-primary"
      subtitle="Today"
      :title="useDateFormat(new Date(), 'dddd MMM DD, YYYY').value"
    >
      <v-card-text class="bg-background pa-0">
        <v-list slim density="compact">
          <ItemsHeaderEventSection
            :event-label="'Upcoming Events'"
            :event-list="upcomingEvents"
            is-divider
          />

          <ItemsHeaderEventSection
            :event-label="'To-do List'"
            :event-list="todoList"
            is-divider
          />

          <ItemsHeaderEventStats
            :event-label="'Server Stats'"
            :event-list="serverStats"
          />
        </v-list>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
const eventDrawer = defineModel('eventDrawer', {
  default: false,
  type: Boolean,
});

const upcomingEvents = [
  {
    id: 1,
    title: 'Meeting with team',
    subTitle: 'Discuss project updates',
  },
  {
    id: 2,
    title: 'Amazon Project Kickoff',
    timestamp: '2025-06-17T10:00:00Z',
  },
  {
    id: 3,
    title: 'Client daily call',
    timestamp: '2025-06-17T15:00:00Z',
  },
  {
    id: 4,
    title: 'Team lunch',
    timestamp: '2025-06-17T12:00:00Z',
  },
  {
    id: 5,
    title: 'Project deadline',
    timestamp: '2025-06-18T17:00:00Z',
  },
];

const todoList = [
  {
    id: 1,
    title: 'Prepare presentation for client',
    timestamp: '2025-06-15T09:00:00Z',
  },
  {
    id: 2,
    title: 'Review project requirements',
    timestamp: '2025-06-14T09:00:00Z',
  },
  {
    id: 3,
    title: 'Send weekly report',
    timestamp: '2025-06-15T12:00:00Z',
  },
  {
    id: 4,
    title: 'Update project documentation',
    timestamp: '2025-06-15T11:00:00Z',
  },
];

const serverStats = [
  {
    id: 1,
    title: 'Server 1',
    value: 75,
    total: 100,
    unit: '%',
    color: 'green',
  },
  {
    id: 2,
    title: 'Server 2',
    value: 50,
    total: 100,
    unit: '%',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Server 3',
    value: 90,
    total: 100,
    unit: '%',
    color: 'red',
  },
];
</script>