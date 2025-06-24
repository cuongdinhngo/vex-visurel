<template>
  <!--Mail Content-->
  <v-card
    elevation="0" tile
    class="pa-0 ma-0"
    width="auto"
  >
    <v-card-title class="text-h6 text-wrap">{{ mail?.subject }}</v-card-title>
    <v-card-title class="">
      <v-list-item
        :prepend-avatar="mail?.sender.avatar"
        :title="mail?.sender.name"
        @click="expandSenderInfo = !expandSenderInfo"
        density="compact"
        nav
      >
        <v-list-item-subtitle class="">
          to me <v-icon size="16">mdi-chevron-down</v-icon>
        </v-list-item-subtitle>

        <template #append>
          <span class="text-caption text-disabled">
            {{ formatTimeAgo(new Date(mail?.timestamp)) }}
          </span>
          <v-menu>
            <template #activator="{ props }">
              <v-icon
                v-bind="props"
                size="x-small"
                class="text-black"
              >mdi-dots-vertical</v-icon>
            </template>
            <v-list density="compact" nav slim>
              <v-list-item
                v-for="action in mailActions"
                :key="action.title"
                :prepend-icon="action.icon"
                :title="action.title"
                link
              >
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-card-title>
    <v-expand-transition>
      <v-card
        v-show="expandSenderInfo"
        variant="outlined"
        class="pa-2 text-wrap mx-auto"
        width="90%"
        @click.stop="expandSenderInfo = false"
      >
        <v-list-item-title class="text-subtitle-2">
          <span>From:</span> {{ mail?.sender.name }} - {{ mail?.sender.email }}
        </v-list-item-title>
        <v-list-item-title class="text-subtitle-2">
          <span>To:</span> {{ faker.person.fullName() }} - {{ faker.internet.email() }}
        </v-list-item-title>
        <v-list-item-title class="text-subtitle-2">
          <span>CC:</span> {{ faker.person.fullName() }} - {{ faker.internet.email() }}
        </v-list-item-title>
        <v-list-item-title class="text-subtitle-2">
          <span>BCC:</span> {{ faker.person.fullName() }} - {{ faker.internet.email() }}
        </v-list-item-title>
        <v-list-item-title class="text-subtitle-2">
          <span>Date:</span> {{ formatTimeAgo(new Date(mail?.timestamp)) }}
        </v-list-item-title>
      </v-card>
    </v-expand-transition>
    <v-card-text class="text-body-2 text-wrap">
      {{ mail?.body }}
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { formatTimeAgo } from '@vueuse/core';

const { mobile } = useDisplay();
const { getMailById, markAsRead } = useMails();
const mailActions = [
  { title: 'Reply', icon: 'mdi-reply' },
  { title: 'Forward', icon: 'mdi-forward' },
  { title: 'Delete', icon: 'mdi-delete' },
  { title: 'Mark as Read', icon: 'mdi-check-circle' },
  { title: 'Mark as Unread', icon: 'mdi-circle-outline' },
];

const expandSenderInfo = ref(false);
const mailId = useRouteParams('id', null, { transform: Number });
const mail = ref(null);

onMounted(() => {
  mail.value = getMailById(mailId.value);
  console.log('Mail Content:', mail.value);
  if (mail.value) {
    markAsRead(mail.value.id);
  }
});
</script>