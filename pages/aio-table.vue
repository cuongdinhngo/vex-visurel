<template>
  <v-layout>
    <v-main class="header-container">
      <v-container :fluid="isFluid" class="pb-0">
        <v-row class="py-4">
          <v-col
            cols="12"
            md="12"
            class="d-flex align-center"
          >
            <div class="page-info">
              <h5 class="text-subtitle-1 font-weight-bold">All-In-One Table</h5>
              <ItemsBreadcrumbs
                :items="[
                  {
                    title: 'Home',
                    disable: false,
                    icon: 'mdi-home',
                    to: { name: 'index'}
                  },
                  {
                    title: 'Apps',
                    disable: true,
                    to: { name: 'index'}
                  },
                  {
                    title: 'All-In-One Table',
                    disable: true,
                    to: { name: 'index'}
                  }
                ]"
              />
            </div>

            <v-spacer></v-spacer>

            <div class="page-actions" v-if="!mobile">
              <span
                @click="isFluid = false"
                class="px-5 py-3 rounded-ts-xl rounded-bs-xl"
                :class="[isFluid === false ? 'bg-grey' : 'bg-grey-lighten-3']"
              >Boxed</span>
              <span
                @click="isFluid = true"
                class="px-5 py-3 rounded-te-xl rounded-be-xl"
                :class="[ isFluid ? 'bg-grey' : 'bg-grey-lighten-3']"
              >Full-Width</span>
            </div>
          </v-col>
        </v-row>

        <v-row class="table-header pb-4 rounded-lg">
          <v-col
            cols="12"
            md="12"
            class="d-flex"
          >
            <div class="page-info d-flex align-center ga-3">
              <h5 class="text-h6 border-e-sm pr-3">{{ selectedCount }}</h5>
              <div
                v-if="selected.length"
                class="border-e-sm pr-3"
              >
                <v-btn
                  icon="mdi-trash-can"
                  variant="text"
                  color="primary"
                />
                <v-btn
                  icon="mdi-folder-cog"
                  variant="text"
                  color="primary"
                />
              </div>
              <v-text-field
                variant="outlined"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                hide-details
                single-line
                width="300"
                density="compact"
                color="primary"
              />
            </div>
            <v-spacer></v-spacer>
            <div class="page-actions pr-3 d-flex align-center ga-5">
              <v-btn
                variant="text"
                icon="mdi-filter-variant"
              />
              <v-btn
                icon="mdi-plus"
                color="primary"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>

  <v-container :fluid="isFluid" class="pt-0">
    <v-row>
      <v-col cols="12" md="12" class="px-0">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="contacts"
          item-value="name"
          show-select
        >
          <template v-slot:item.name="{ item }">
            <v-list-item
              :key="item.id"
            >
              <template v-slot:prepend>
                <v-avatar
                  :image="item.avatar"
                />
              </template>
              <v-list-item-title class="text-subtitle-2">{{ item.name }}</v-list-item-title>
            </v-list-item>
          </template>

          <template v-slot:item.contacts="{ item }">
            <v-btn
              icon="mdi-email"
              variant="tonal"
              size="35"
              color="primary"
            />
            <v-btn
              icon="mdi-phone"
              variant="text"
              size="35"
              color="green"
            />
            <v-btn
              icon="mdi-chat"
              variant="tonal"
              size="35"
              color="purple"
            />
          </template>

          <template v-slot:item.skills="{ item }">
            <v-chip
              v-for="skill in item.skills"
              :key="skill"
              class="ma-1"
              color="primary"
              text-color="white"
              size="small"
            >
              {{ skill }}
            </v-chip>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn
              icon="mdi-dots-vertical"
              variant="text"
            >
            </v-btn>
            <v-menu activator="parent">
              <v-list>
                <v-list-item
                  v-for="(item, index) in actions"
                  :key="index"
                  :value="index"
                  :prepend-icon="item.icon"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

const { mobile } = useDisplay();
const isFluid = ref(false);
const actions = [
  { title: 'Modify', icon: 'mdi-pencil' },
  { title: 'Delete', icon: 'mdi-delete' },
];
const selected = ref([]);

const selectedCount = computed(() => {
  return selected.value.length ? 
    `${selected.value.length} Customers selected` :
    'Customers';
});

const headers = ref([
  { title: 'Name', key: 'name', align: 'start' },
  { title: '', key: 'contacts', align: 'start', sortable: false },
  { title: 'Address', key: 'address', align: 'start' },
  { title: 'Phone', key: 'phone', align: 'start' },
  { title: 'Skills', key: 'skills', align: 'start' },
  { title: '', key: 'actions', align: 'end', sortable: false },
])

const skills = ['PM', 'BE', 'FE', 'BA', 'SA', 'TA', 'HR'];

const contacts = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
  address: faker.location.streetAddress({ useFullAddress: true }),
  phone: faker.phone.number(),
  skills: faker.helpers.arrayElements(skills, { min: 1, max: 3 })
}));
</script>
<style scoped>
.header-container {
  background-color: #4f46e51a;
}
.table-header {
  background-color: #e5e7eb;
}
</style>