<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        icon
        color="primary"
        v-bind="props"
      >
        <v-icon>mdi-bell-ring</v-icon>
      </v-btn>
    </template>
    
    <v-card
      class="mx-auto bg-primary"
      title="Notifications"
      subtitle="You have 9 notifications"
      width="400"
    >
      <!-- Notification Setting -->
      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
            >
              mdi-cog-outline
            </v-icon>
          </template>
          <v-list>
            <v-list-item
              v-for="item in actionMenu"
              :key="item.icon"
              :prepend-icon="item.icon"
              :title="item.title"
              class="text-black"
              link
            >
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <!-- Notification List -->
      <v-card-text class="bg-background">
        <v-virtual-scroll
          :items="notifications"
          height="320"
          item-height="48"
        >
          <template v-slot:default="{ item }">
            <v-list-item
              class="py-3"
              density="compact"
              nav
              slim
              link
            >
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-list-item-title
                    v-bind="props"
                    :class="isHovering ? 'text-primary' : 'text-black'"
                  >
                    {{ item.title }}
                  </v-list-item-title>
                </template>
              </v-hover>

              <v-list-item-subtitle
                class="text-caption"
                v-text="formatTimeAgo(new Date(item.timestamp))"
              ></v-list-item-subtitle>

              <template v-slot:prepend>
                <v-icon color="primary">{{ item.icon }}</v-icon>
              </template>

              <template v-slot:append>
                <v-btn
                  icon="mdi-chevron-right"
                  size="x-small"
                  variant="text"
                ></v-btn>
              </template>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-card-text>

      <!-- Mark all as read button -->
      <v-card-actions class="bg-grey-lighten-2">
        <v-btn
          variant="text"
          class="mx-auto"
          color="primary"
          width="50%"
        >
          Mark all as read
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'

const actionMenu = [
  {
    title: 'Mark all as read',
    icon: 'mdi-check-all',
    to: { name: 'index' }
  },
  {
    title: 'Disable notifications',
    icon: 'mdi-bell-off',
    to: { name: 'index' }
  },
];

const notifications = [
  {
    title: 'New message from John',
    timestamp: '2025-06-16 12:00',
    icon: 'mdi-message',
  },
  {
    title: 'Server maintenance scheduled',
    timestamp: '2025-06-15 09:30',
    icon: 'mdi-server',
  },
  {
    title: 'New comment on your post',
    timestamp: '2025-06-14 15:45',
    icon: 'mdi-comment',
  },
  {
    title: 'New follower on your profile',
    timestamp: '2025-06-13 08:20',
    icon: 'mdi-account-plus',
  },
  {
    title: 'Password change successful',
    timestamp: '2025-06-12 10:15',
    icon: 'mdi-lock-check',
  },
  {
    title: 'New like on your photo',
    timestamp: '2025-06-11 14:05',
    icon: 'mdi-heart',
  },
  {
    title: 'System update available',
    timestamp: '2025-06-10 11:30',
    icon: 'mdi-update',
  },
  {
    title: 'New event invitation received',
    timestamp: '2025-06-09 16:45',
    icon: 'mdi-calendar-plus',
  },
  {
    title: 'Weekly report generated',
    timestamp: '2025-06-08 13:00',
    icon: 'mdi-file-document',
  },
];
</script>