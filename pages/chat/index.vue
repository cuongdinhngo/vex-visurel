<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-layout>
      <v-navigation-drawer
        width="350"
        v-model="chatListDrawer"
      >
        <v-list>
          <!-- Header with title and button -->
          <v-card-title class="d-flex align-center justify-space-between">
            <h3>Chat</h3>
            <v-btn
              prepend-icon="mdi-plus"
              variant="flat"
              color="primary"
            >
              New Chat
            </v-btn>
          </v-card-title>

          <!-- Search bar -->
          <v-card-title class="mb-3">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              placeholder="Search"
              hide-details
              color="primary"
              rounded="lg"
              density="compact"
            ></v-text-field>
          </v-card-title>

          <v-divider></v-divider>

          <!-- Tabs for Groups -->
          <v-tabs
            v-model="tab"
            align-tabs="center"
            color="deep-purple-accent-4"
            class="mt-3"
          >
            <v-tab
              v-for="(group, index) in groups"
              :key="index"
              :value="Math.pow(2, index + 1)"
              class="text-none"
            >
              {{ group }}
            </v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item
              v-for="(item, index) in groups"
              :key="item"
              :value="Math.pow(2, index + 1)"
            >
              <!-- Chat List -->
              <v-card flat class="mt-3">
                <v-list-item
                  v-for="chat in chatList"
                  :key="chat.id"
                  :prepend-avatar="chat.avatar"
                  density="comfortable"
                  nav
                  class="px-5 py-2"
                  link
                >
                  <v-list-item-title class="text-black">
                    {{ chat.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-caption">
                    {{ chat.lastMessage }}
                  </v-list-item-subtitle>
                  <template #append>
                    <span class="text-caption">{{ formatTimeAgo(new Date(chat.timestamp)) }}</span>
                  </template>
                </v-list-item>

                <v-btn
                  append-icon="mdi-chevron-down"
                  variant="text"
                  class="text-none ml-4"
                  size="small"
                  density="compact"
                  slim
                >
                  Show more
                </v-btn>
              </v-card>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 89vh">
        <!-- Chat Header -->
        <v-list-item
          density="comfortable"
          nav
          class="px-5 py-3 bg-white border-b-sm"
          link
        >
          <template #prepend>
            <v-avatar
              v-if="!mobile"
              image="https://randomuser.me/api/portraits/lego/5.jpg"
              size="40"
            ></v-avatar>
            <v-btn
              v-if="mobile"
              variant="text"
              @click="chatListDrawer = !chatListDrawer"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list-item-title class="text-black">
            {{ faker.person.fullName() }}
          </v-list-item-title>
          <v-list-item-title class="text-caption d-flex align-center text-secondary">
            <v-icon 
              color="green-darken-1" 
              size="x-small" 
              class="me-2"
            >
              mdi-circle
            </v-icon>
            Online
          </v-list-item-title>
          <template #append>
            <v-btn
              variant="text"
              icon
              size="small"
              class="text-none"
            >
              <v-icon>mdi-camera</v-icon>
            </v-btn>
            <v-btn
              variant="text"
              icon
              size="small"
              class="text-none"
            >
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </template>
        </v-list-item>

        <!-- Chat Content -->
        <v-card-text class="d-flex flex-column chat-content">
          <!-- Receiver (left side) -->
          <div class="d-flex receiver align-end">
            <v-avatar
              image="https://randomuser.me/api/portraits/lego/5.jpg"
              size="32"
              class="me-2"
            ></v-avatar>
            <div class="">
              <p class="message">{{ faker.lorem.paragraph(4) }}</p>
              <p class="message">{{ faker.lorem.paragraph(4) }}</p>
              <span class="text-caption text-medium-emphasis d-block">10:20 AM</span>
            </div>
          </div>
          
          <!-- Sender (right side) -->
          <div class="d-flex justify-end sender">
            <div class="d-flex flex-column align-end">
              <p class="message">{{ faker.lorem.paragraph(4) }}</p>
              <p class="message">{{ faker.lorem.paragraph(4) }}</p>
              <span class="text-caption text-medium-emphasis">
                <v-icon size="x-small" class="me-1">mdi-check-all</v-icon>
                10:20 AM
              </span>
            </div>
          </div>

          <!-- Receiver (left side) -->
          <div class="d-flex receiver align-end">
            <v-avatar
              image="https://randomuser.me/api/portraits/lego/5.jpg"
              size="32"
              class="me-2"
            ></v-avatar>
            <div class="">
              <p class="message">{{ faker.lorem.paragraph(4) }}</p>
              <p class="message">{{ faker.lorem.paragraph(4) }}</p>
              <span class="text-caption text-medium-emphasis d-block">10:20 AM</span>
            </div>
          </div>

          <!-- Sender (right side) -->
          <div class="d-flex justify-end sender">
            <div class="d-flex flex-column align-end">
              <p class="message">{{ faker.lorem.paragraph(4) }}</p>
              <p class="message">{{ faker.lorem.paragraph(4) }}</p>
              <span class="text-caption text-medium-emphasis">
                <v-icon size="x-small" class="me-1">mdi-check-all</v-icon>
                10:20 AM
              </span>
            </div>
          </div>
        </v-card-text>

        <!-- Chat Input -->
        <v-card-actions>
          <v-text-field
            variant="outlined"
            placeholder="Type your message here..."
            hide-details
            color="primary"
            rounded="lg"
            nav
          >
            <template #prepend-inner>
              <v-btn
                color="primary"
                icon
                variant="flat"
                size="small"
              >
                <v-icon>mdi-plus</v-icon>
                <v-menu activator="parent">
                  <v-list>
                    <v-list-item
                      v-for="item in messageTypes"
                      :key="item.icon"
                      :value="item.icon"
                      :prepend-icon="item.icon"
                      :title="item.title"
                      density="compact"
                      slim
                      link
                      :class="['text-black']"
                    >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-btn>
            </template>

            <template #append-inner>
              <v-btn
                icon
                variant="text"
              >
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-card-actions>
      </v-main>
    </v-layout>
  </v-container>
</template>
<script setup lang="ts">
import { fa, faker } from '@faker-js/faker';
import { formatTimeAgo } from '@vueuse/core';

const chatListDrawer = ref(true);
const { mobile } = useDisplay();
const tab = ref(null);

const groups = ['All', 'Teams', 'Workspaces'];
const messageTypes = [
  { title: 'Upload file', icon: 'mdi-paperclip' },
  { title: 'Image', icon: 'mdi-image' },
  { title: 'File', icon: 'mdi-file-document' },
  { title: 'Location', icon: 'mdi-map-marker' },
];

const today = new Date();
const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
const chatList = ref(
  Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    lastMessage: faker.lorem.sentence({min: 1, max: 3}),
    timestamp: faker.date.between({ 
      from: startOfToday, 
      to: new Date() 
    }),
  }))
);
</script>
<style scoped>
.message {
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 8px;
  max-width: 70%;
  word-wrap: break-word;
  display: inline-block;
}

.receiver .message {
  color: white;
  background-color: rgb(var(--v-theme-primary));
  border-bottom-left-radius: 4px;
}

.sender .message {
  background-color: rgb(var(--v-theme-surface));
  border-bottom-right-radius: 4px;
}

.sender {
  margin-left: auto;
}

.chat-content {
  height: 700px;
  overflow-y: auto;
}
</style>