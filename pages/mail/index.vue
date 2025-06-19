<template>
  <v-container fluid class="container-page pa-0 ma-0">
    <v-layout>
      <v-navigation-drawer
        v-model="mailDrawer"
        width="300"
        floating
        class="nav-drawer"
      >
        <!-- Header with icon and title -->
        <v-list-item
          v-if="!mobile"
          slim class="header pl-6 text-black"
        >
          <template #prepend>
            <v-icon size="40">mdi-email</v-icon>
          </template>
          <v-list-item-title class="text-h4">Mail</v-list-item-title>
        </v-list-item>

        <v-list-item-title class="composer d-flex justify-center align-center">
          <v-btn
            variant="flat"
            color="primary"
            rounded="pill"
            class="text-none text-subtitle-2"
            width="80%"
          >
            Compose
          </v-btn>
        </v-list-item-title>

        <div>
          <v-list
            class="text-black bg-background"
            v-for="(menu, index) in mailMenu"
            :key="index"
          >
            <v-list-subheader>{{ menu.subHeader }}</v-list-subheader>
            <v-list-item
              v-for="item in menu.items"
              :key="item.icon"
              :title="item.title"
              :prepend-icon="item.icon"
              class="text-none"
              link
              density="compact"
              slim
            ></v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>

      <!-- Main content area -->
      <v-main height="89vh" class="main-wrapper">

        <!-- Header with search input -->
        <v-list-item class="header pa-0 mr-4" slim>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            placeholder="Search mails..."
            density="comfortable"
            hide-details
            rounded="lg"
            color="primary"
          >
            <template #prepend v-if="mobile">
              <v-btn
                variant="text"
                icon
                @click="mailDrawer = !mailDrawer"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-list-item>

        <div :class="['d-flex align-center header-actions px-4 border-b-thin', { 'mr-4': !mobile }]">
          <div>
            <v-checkbox
              v-model="selectAll"
              color="primary"
              hide-details
              density="compact"
            />
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-btn
              variant="text"
              color="primary"
              prepend-icon="mdi-refresh"
              density="compact"
              class="text-none"
            >
              Refresh
            </v-btn>
          </div>
        </div>

        <!-- Mail list and selected mail details -->
        <v-sheet :class="['d-flex', { 'mr-4': !mobile }]">
          <!-- Mail List -->
          <v-card
            class="scrollbar border-e-thin" elevation="0" flat tile
            :width="mobile ? '100%' : '50%'">
            <div class="force-overflow">
              <v-hover
                v-for="mail in mailList"
                :key="mail.id"
              >
                <template #default="{ isHovering, props }">
                  <div
                    v-bind="props"
                    :class="[
                      'message-item', 'd-flex', 'align-top', 'py-2',
                      { 'bg-grey-lighten-4': isHovering }
                    ]"
                  >
                    <div class="user-avatar d-flex flex-column align-center pl-1">
                      <v-avatar
                        size="40"
                        :image="mail.avatar"
                        v-if="!isHovering"
                      />
                      <v-checkbox
                        v-if="isHovering"
                        v-model="selectAll"
                        :value="mail.id"
                        color="primary"
                        hide-details
                        density="compact"
                        single-line
                        width="40"
                        class="pl-1"
                      />
                      <v-rating
                        v-if="isHovering"
                        :length="1"
                        active-color="orange-lighten-1"
                        size="md"
                        :model-value="mail.isStared"
                      ></v-rating>
                    </div>
                    <div class="message-brief">
                      <v-list-item
                        density="comfortable" nav
                      >
                        <v-list-item-title :class="['text-subtitle-1 pb-1', { 'font-weight-bold': !mail.isRead }]">
                          {{ mail.sender }}
                        </v-list-item-title>
                        <v-list-item-title :class="['text-subtitle-2 py-1', { 'font-weight-bold': !mail.isRead }]">
                          {{ mail.subject }}
                        </v-list-item-title>
                        <v-list-item-title class="text-caption text-disabled pt-1">
                          {{ mail.body }}
                        </v-list-item-title>

                        <template #append>
                          <div class="d-flex flex-column align-end">
                            <span class="text-caption">{{ formatTimeAgo(new Date(mail.timestamp)) }}</span>
                            <v-chip color="primary" size="x-small">
                              Primary
                            </v-chip>
                          </div>
                        </template>
                      </v-list-item>
                    </div>
                  </div>
                </template>
              </v-hover>
            </div>
          </v-card>

          <!-- Mail Content Details -->
          <v-card
            v-if="!mobile"
            class="pa-4" elevation="0" tile width="50%"
          >
            <v-card-title class="text-h6">{{ faker.lorem.sentence({ min: 3, max: 9 }) }}</v-card-title>
            <v-card-title>
              <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/lego/5.jpg"
                :title="faker.person.fullName()"
                @click="expandSenderInfo = !expandSenderInfo"
                density="compact"
                nav
              >
                <v-list-item-subtitle class="">
                  to me <v-icon size="16">mdi-chevron-down</v-icon>
                </v-list-item-subtitle>

                <template #append>
                  <span class="text-caption text-disabled">
                    {{ formatTimeAgo(new Date(faker.date.past({ years: 1, refDate: new Date() }))) }}
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
                class="pa-2"
                @click.stop="expandSenderInfo = false"
              >
                <v-list-item-title class="text-subtitle-2">
                  <span>From:</span> {{ faker.person.fullName() }} - {{ faker.internet.email() }}
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
                  <span>Date:</span> {{ formatTimeAgo(new Date(faker.date.past({ years: 1, refDate: new Date() }))) }}
                </v-list-item-title>
              </v-card>
            </v-expand-transition>
            <v-card-text class="text-subtitle-1">
              {{ faker.lorem.paragraphs({ min: 2, max: 4 }) }}
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-main>
    </v-layout>
  </v-container>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { formatTimeAgo } from '@vueuse/core';

const { mobile } = useDisplay();
const selectAll = ref(false);
const expandSenderInfo = ref(false);
const mailDrawer = ref(true);

const mailActions = [
  { title: 'Reply', icon: 'mdi-reply' },
  { title: 'Forward', icon: 'mdi-forward' },
  { title: 'Delete', icon: 'mdi-delete' },
  { title: 'Mark as Read', icon: 'mdi-check-circle' },
  { title: 'Mark as Unread', icon: 'mdi-circle-outline' },
];

const mailMenu = [
  {
    subHeader: 'Browse',
    items: [
      { title: 'Inbox', icon: 'mdi-inbox' },
      { title: 'Sent', icon: 'mdi-send' },
      { title: 'Drafts', icon: 'mdi-file-document' },
      { title: 'Spam', icon: 'mdi-alert-octagon' },
    ]
  },
  {
    subHeader: 'Labels',
    items: [
      { title: 'Work', icon: 'mdi-briefcase' },
      { title: 'Personal', icon: 'mdi-account' },
      { title: 'Important', icon: 'mdi-star' },
      { title: 'Archive', icon: 'mdi-archive' },
    ]
  }
];

const mailList = ref(
  Array.from({ length: 20 }, (_,index) => ({
    id: index + 1,
    isRead: faker.datatype.boolean(),
    isStared: faker.number.int({ min: 0, max: 1 }),
    sender: faker.person.fullName(),
    avatar: faker.image.avatar(),
    subject: faker.lorem.sentence({ min: 3, max: 10 }),
    body: faker.lorem.paragraph(),
    timestamp: faker.date.past({ years: 1, refDate: new Date() }),
  }))
);
</script>
<style scoped>
.container-page {
  background-color: #e3e2fd;
}
.header {
  height: 100px;
  background-color: #e3e2fd;
} 
.composer {
  height: 60px;
  background-color: #e3e2fd;
}
.header-actions {
  background-color: #ffffff;
  height: 60px;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}

.scrollbar
{
	height: 680px;
	overflow-y: scroll;
}

.scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
  display: none;
}

.scrollbar::-webkit-scrollbar
{
	width: 8px;
}

.scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #555;
  display: none;
}

.scrollbar:hover::-webkit-scrollbar-thumb, .scrollbar:hover::-webkit-scrollbar-track
{
  display: block;
}

.force-overflow
{
	min-height: 450px;
}
</style>