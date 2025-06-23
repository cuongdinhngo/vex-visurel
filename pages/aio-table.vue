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

            <!-- Resize Configuration -->
            <AioResize
              @resize="resizeWrapper"
            />
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
                  @click="handleDelete"
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
                v-model="searchQuery"
                @keyup.enter="resizeWrapper(false)"
              />
            </div>
            <v-spacer></v-spacer>
            <div class="page-actions pr-3 d-flex align-center ga-1">
              <v-btn
                variant="text"
                size="40"
              >
                <v-icon>mdi-filter-variant</v-icon>
                <v-menu activator="parent" :close-on-content-click=false>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in originalHeaders"
                      :key="index"
                      :value="item.value"
                      density="compact"
                      nav
                      slim
                      class="ma-0"
                    >
                      <template v-slot:prepend>
                        <v-checkbox
                          v-model="selectedHeader"
                          :label="item.title"
                          :value="item.value"
                          hide-details
                          color="primary"
                          class="ma-0 pa-0"
                        />
                      </template>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-btn>

              <!-- Add Account -->
              <AioAddAccount />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>

  <!-- Data Table -->
  <v-container fluid class="pt-0 px-10">
    <v-row>
      <v-col
        cols="12"
        :md="wrapperCols"
        class="px-0 mx-auto"
      >
        <AioDataTable
          :search-query="searchQuery"
          v-model:selected="selected"
          :headers="headers"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const { mobile } = useDisplay();
const wrapperCols = ref(12);
const { deleteAccount } = useAccounts();

const selected = ref([]);
const searchQuery = ref('');
const selectedHeader = ref([
  'name', 'address', 'skills', 'email', 'actions'
]);
const headers = ref([]);

const selectedCount = computed(() => {
  return selected.value.length ? 
    `${selected.value.length} Customers selected` :
    'Customers';
});

onMounted(() => {
  headers.value = originalHeaders.filter(header => 
    selectedHeader.value.includes(header.value)
  );
});

watch(
  selectedHeader,
  (newHeaders) => {
    headers.value = originalHeaders.filter(header => 
      newHeaders.includes(header.value)
    );
});

const originalHeaders = [
  { title: 'ID', value: 'id', sortable: true, key: 'id', align: 'start' },
  { title: 'Name', value: 'name', sortable: true, key: 'name', align: 'start' },
  { title: 'First Name', value: 'firstName', sortable: true, key: 'firstName', align: 'start' },
  { title: 'Last Name', value: 'lastName', sortable: true, key: 'lastName', align: 'start' },
  { title: 'Address', value: 'address', sortable: false, key: 'address', align: 'start' },
  { title: 'Skills', value: 'skills', sortable: false, key: 'skills', align: 'start' },
  { title: 'Email', value: 'email', sortable: true, key: 'email', align: 'start' },
  { title: 'Phone', value: 'phone', sortable: true, key: 'phone', align: 'start' },
  { title: 'Actions', value: 'actions', sortable: false, key: 'actions', align: 'end' },
];

function resizeWrapper(isBoxed: boolean = true) {
  wrapperCols.value = !mobile.value && isBoxed ? 10 : 12;
}

function handleDelete() {
  console.log('Selected accounts for deletion:', selected.value);
  if (selected.value.length) {
    selected.value.forEach(account => {
      deleteAccount(account);
    });
    selected.value = [];
  }
}

</script>
<style scoped>
.header-container {
  background-color: #4f46e51a;
}
.table-header {
  background-color: #e5e7eb;
}
</style>