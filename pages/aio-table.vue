<template>
  <v-layout>
    <v-main class="header-container">
      <v-container fluid class="pb-0 px-10">
        <v-row class="py-4">
          <v-col
            cols="12"
            :md="wrapperCols"
            class="d-flex align-center mx-auto"
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

            <div class="page-actions d-flex align-center" v-if="!mobile">
              <div
                @click="resizeWrapper(true)"
                class="px-5 py-3 rounded-ts-xl rounded-bs-xl"
                :class="[isFullWidth === false ? 'bg-grey border-thin border-white' : 'bg-grey-lighten-3']"
              >Boxed</div>
              <div
                @click="resizeWrapper(false)"
                class="px-5 py-3 rounded-te-xl rounded-be-xl"
                :class="[ isFullWidth ? 'bg-grey border-thin border-white' : 'bg-grey-lighten-3']"
              >Full-Width</div>
            </div>
          </v-col>
        </v-row>

        <v-row class="pb-2">
          <v-col
            cols="12"
            :md="wrapperCols"
            class="d-flex mx-auto table-header rounded-t-lg"
          >
            <div class="page-info d-flex align-center ga-3">
              <h5
                v-if="!mobile"
                class="text-h6 border-e-sm pr-3"
              >{{ selectedCount }}</h5>
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
                :width="selected.length && mobile ? '50px' : '200px'"
                density="compact"
                color="primary"
              />
            </div>
            <v-spacer></v-spacer>
            <div class="page-actions pr-3 d-flex align-center ga-1">
              <v-btn
                variant="text"
                icon="mdi-filter-variant"
                size="40"
              />
              <v-btn
                icon="mdi-plus"
                color="primary"
                size="40"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>

  <v-container fluid class="pt-0 px-10">
    <v-row>
      <v-col
        cols="12"
        :md="wrapperCols"
        class="px-0 mx-auto"
      >
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
              density="comfortable"
              class="pa-0"
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
const wrapperCols = ref(12);
const isFullWidth = ref(true);

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

function resizeWrapper(isBoxed: boolean = true) {
  isFullWidth.value = !isBoxed;
  wrapperCols.value = !mobile.value && isBoxed ? 10 : 12;
}
</script>
<style scoped>
.header-container {
  background-color: #4f46e51a;
}
.table-header {
  background-color: #e5e7eb;
}
.border-white {
  border-color: #ffffff !important;
}
</style>