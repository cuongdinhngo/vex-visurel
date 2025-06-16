<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="0">
        <v-card-title class="text-caption font-weight-bold">Contacts</v-card-title>
        <v-list-item
          v-for="contact in contacts"
          :key="contact.id"
          :title="contact.name"
          class="my-2"
          link
        >
          <template v-slot:prepend>
            <v-avatar
              size="40"
              :image="contact.avatar"
            />
          </template>
          <template v-slot:append>
            <span class="text-caption mr-1">found in Contacts</span>
            <v-icon
              icon="mdi-clipboard-account-outline"
              color="secondary"
            />
            <v-icon
              icon="mdi-chevron-right"
              class="text-black"
            />
          </template>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
const contacts = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/lego/2.jpg',
  }
];
</script>