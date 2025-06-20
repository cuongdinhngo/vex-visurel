<template>
  <v-container fluid class="pa-0 ma-0 bg-transparent wrapper">
    <!-- Header row -->
    <v-row class="header-container justify-center" width="100%" no-gutters>
      <v-col cols="12" md="10">
        <v-row class="" no-gutters>
          <v-col
            cols="12" md="4"
            class="d-flex align-center"
          >
              <v-avatar
                v-if="!mobile"
                class="mr-3 pa-6 bg-deep-purple-lighten-5"
              >
                <v-icon
                  icon="mdi-contacts-outline"
                  size="30"
                  color="deep-purple-darken-2"
                ></v-icon>
              </v-avatar>
              <v-icon
                class="mx-4"
                v-if="mobile"
                @click="contactDrawer = !contactDrawer"
              >mdi-menu</v-icon>
              <span class="text-h4 font-weight-bold text-black">Contacts</span>
          </v-col>

          <v-col
            cols="12" md="8"
            v-if="!mobile"
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
              class="mx-auto"
              width="60%"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Main content -->
    <v-row no-gutters class="justify-center main-content">
      <v-col cols="12" md="11">
        <v-layout>
          <v-navigation-drawer
            v-model="contactDrawer"
            app
            width="280"
            :class="[mobile ? 'bg-white' : 'bg-transparent']"
            floating
          >
            <div class="d-flex justify-center my-2">
              <v-btn
                variant="flat"
                color="primary"
                prepend-icon="mdi-plus"
                class="text-none rounded-pill"
              >Add Contact</v-btn>
            </div>
            <v-list class="mt-6 ml-4">
              <v-list-item
                v-for="(tabItem, index) in tabs"
                :key="index"
                :value="tabItem.value"
                :prepend-icon="tabItem.icon"
                density="compact"
                slim
                color="primary"
                variant="text"
                class="text-black rounded-lg my-1"
                width="90%"
              >
                <v-list-item-title>{{ tabItem.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-main height="80vh" class="ml-4">
            <v-row class="justify-center">
              <v-col cols="12" md="12" class="">
                <v-data-table
                  :items="contacts"
                  :headers="headers"
                  item-value="id"
                  hover
                  class="border-thin text-black"
                  height="650"
                  fixed-header
                  width="100%"
                >
                  <template v-slot:item.isSelected="{ item }">
                    <v-checkbox-btn
                      color="primary"
                      @click.native="item.isSelected = !item.isSelected"
                    ></v-checkbox-btn>
                  </template>

                  <template v-slot:item.avatar="{ item }">
                    <v-avatar size="40" class="mr-2">
                      <img :src="item.avatar" alt="Avatar">
                    </v-avatar>
                  </template>

                  <template v-slot:item.isStar="{ item }">
                    <v-rating
                      :model-value="item.isStar"
                      :length="1"
                      active-color="orange-lighten-1"
                      size="md"
                      clearable
                    ></v-rating>
                  </template>

                  <template v-slot:item.actions="{ item }">
                    <v-btn
                      variant="text"
                      icon
                      size="small"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                      <v-menu activator="parent">
                        <v-list>
                          <v-list-item
                            v-for="(item, index) in actions"
                            :key="index"
                            :value="index"
                            :prepend-icon="item.icon"
                            class="text-black"
                            density="compact"
                            nav
                            slim
                          >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-btn>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-main>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

const { mobile } = useDisplay();
const contactDrawer = ref(true);

const actions = [
  { title: 'Edit', icon: 'mdi-pencil' },
  { title: 'Delete', icon: 'mdi-delete' },
];

const tabs = [
  { title: 'All Contacts', value: 'all', icon: 'mdi-account-multiple' },
  { title: 'Frequently Contacted', value: 'frequently', icon: 'mdi-account-star' },
  { title: 'Starred', value: 'starred', icon: 'mdi-star' },
];

const headers = [
  { title: '', align: 'center', sortable: false, key: 'isSelected' },
  { title: '', align: 'center', sortable: false, key: 'avatar' },
  { title: 'Name', align: 'start', key: 'name' },
  { title: 'Email', align: 'start', key: 'email' },
  { title: 'City', align: 'start', key: 'city' },
  { title: '', align: 'center', key: 'isStar' },
  { title: '', align: 'center', key: 'actions' },
]

const contacts = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  city: faker.location.city(),
  email: faker.internet.email(),
  avatar: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/200/300`,
  isStar: faker.number.int({ min: 0, max: 1 }),
  counts: faker.number.int({ min: 0, max: 100 }),
  isSelected: false,
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
  padding-top: 40px;
  padding-bottom: 100px;
}

.header-navigation-drawer {
  background-color: #4f46e51a;
}

.wrapper {
  position: relative;
}

.main-content {
  position: relative;
  top: -55px;
}

</style>