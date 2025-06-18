<template>
  <v-container fluid class="container-page pa-0 ma-0">
    <v-layout>
      <v-navigation-drawer
        width="300"
        permanent
        floating
        class="nav-drawer"
      >
        <v-list-item slim class="header pl-6 text-black">
          <template #prepend>
            <v-icon size="40">mdi-email</v-icon>
          </template>
          <v-list-item-title class="text-h4">Mail</v-list-item-title>
        </v-list-item>

        <v-list-title class="composer d-flex justify-center align-center">
          <v-btn
            variant="flat"
            color="primary"
            rounded="pill"
            class="text-none text-subtitle-2"
            width="80%"
          >
            Compose
          </v-btn>
        </v-list-title>
        <v-list>
          <v-list-subheader>Browse</v-list-subheader>
          <v-list-item
            v-for="item in browseItems"
            :key="item.icon"
            :title="item.title"
            :prepend-icon="item.icon"
            class="text-none"
            link
            density="compact"
            slim
            nav
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Main content area -->
      <v-main height="89vh" class="main-wrapper">
        <!-- Header with search input -->
        <v-list-item class="header" slim>
          <v-list-item-title>
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              placeholder="Search mails..."
              density="comfortable"
              hide-details
              rounded="lg"
              color="primary"
            ></v-text-field>
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="d-flex align-center header-actions mr-4">
          <v-btn
            variant="flat"
            color="primary"
            rounded="pill"
            class="text-none text-subtitle-2"
          >
            Actions
          </v-btn>
        </v-list-item>
      </v-main>
    </v-layout>
  </v-container>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

const browseItems = [
  { title: 'Inbox', icon: 'mdi-inbox' },
  { title: 'Sent', icon: 'mdi-send' },
  { title: 'Drafts', icon: 'mdi-file-document' },
  { title: 'Spam', icon: 'mdi-alert-octagon' },
];
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
</style>