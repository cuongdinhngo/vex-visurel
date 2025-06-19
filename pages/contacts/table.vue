<template>
  <v-container fluid class="pa-0 ma-0 ">
    <!-- Header row -->
    <v-row class="header-container justify-center" width="100%" no-gutters>
      <v-col cols="12" md="10">
        <v-row class="" no-gutters>
          <v-col
            cols="12" md="4"
            class="d-flex align-center"
          >
            <v-avatar
              class="mr-3 pa-6 bg-deep-purple-lighten-5"
            >
              <v-icon
                icon="mdi-contacts-outline"
                size="30"
                color="deep-purple-darken-2"
              ></v-icon>
            </v-avatar>
            <span class="text-h4 font-weight-bold text-black">Contacts</span>
          </v-col>

          <v-col
            cols="12" md="8"
          >
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              placeholder="Search Contacts"
              variant="solo"
              rounded="pill"
              hide-details
              color="primary"
              elevation="0"
              flat
              density="compact"
              width="60%"
              class="mx-auto"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Main content -->
    <v-row no-gutters class="">
      <v-layout>
        <v-navigation-drawer
          permanent
          app
          width="250"
          class="bg-transparent"
        >
          <div class="header-navigation-drawer d-flex justify-center">
            <v-btn
              variant="flat"
              color="primary"
            >Compose</v-btn>
          </div>
          <v-list>
            <v-list-item
              v-for="tabItem in tabs"
              :key="tabItem.value"
            >
              <v-list-item-title>{{ tabItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main height="76vh" class="pb-2 ma-0">
          <v-row class="justify-center">
            <v-col cols="12" md="10">

            </v-col>
          </v-row>
        </v-main>
      </v-layout>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
const tab = ref(null);

const tabs = [
  { title: 'All Contacts', value: 'all', icon: 'mdi-account-multiple' },
  { title: 'Frequently Contacted', value: 'frequently', icon: 'mdi-account-star' },
  { title: 'Starred', value: 'starred', icon: 'mdi-star' },
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
<style scoped>
.header-container {
  background-color: #4f46e51a;
  padding: 37px 0;
}

.header-navigation-drawer {
  background-color: #4f46e51a;
}
</style>