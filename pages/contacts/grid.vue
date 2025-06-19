<template>
  <v-container fluid class="pa-0 ma-0">
    <!-- Header row with title and actions -->
    <v-row class="justify-center bg-white" width="100%" no-gutters>
      <v-col cols="12" md="10">
        <v-card flat>
          <!-- Card title with avatar -->
          <v-card-title class="d-flex align-center pt-4">
            <v-avatar
              class="mr-3 pa-6 bg-deep-purple-lighten-5"
            >
              <v-icon
                icon="mdi-account"
                size="30"
                color="deep-purple-darken-2"
              ></v-icon>
            </v-avatar>
            <span class="text-h4 font-weight-bold text-black">Contacts</span>
          </v-card-title>
          
          <!-- Card actions with tabs and buttons -->
          <v-card-actions class="pb-0">
            <v-tabs
              v-model="tab"
              align-tabs="start"
              color="primary"
              class="text-none"
            >
              <v-tab
                v-for="item in tabs"
                :key="item.value"
                :value="item.value"
                class="text-none"
                width="230px"
              >{{ item.title }}</v-tab>
            </v-tabs>

            <v-btn icon color="primary">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon color="primary">
              <v-icon>mdi-cloud-download</v-icon>
            </v-btn>
            <v-btn icon color="primary">
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
            <v-btn
              prepend-icon="mdi-plus"
              class="text-none rounded-pill"
              variant="flat"
              color="primary"
            >
              Add Contact
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Main content area with tabs for contacts -->
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <v-tabs-window v-model="tab">
          <!-- All Contacts -->
          <v-tabs-window-item value="all">
            <ContactGrid
              :contacts="contacts"
            />
          </v-tabs-window-item>

          <!-- Frequently Contacted -->
          <v-tabs-window-item value="frequently">
            <ContactGrid
              :contacts="frequentlyContacts"
            />
          </v-tabs-window-item>

          <!-- Starred Contacts -->
          <v-tabs-window-item value="starred">
            <ContactGrid
              :contacts="starredContacts"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
const tab = ref(null);

const tabs = [
  { title: 'All Contacts', value: 'all' },
  { title: 'Frequently Contacted', value: 'frequently' },
  { title: 'Starred', value: 'starred' },
];

const contacts = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  city: faker.location.city(),
  email: faker.internet.email(),
  avatar: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/200/300`,
  isStar: faker.number.int({ min: 0, max: 1 }),
  counts: faker.number.int({ min: 0, max: 100 }),
}));

const starredContacts = computed(() => {
  return contacts.filter(contact => contact.isStar);
});

const frequentlyContacts = computed(() => {
  return contacts.filter(contact => contact.counts > 60);
});
</script>