<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="accounts"
    :search="searchQuery"
    item-value="id"
    show-select
    @click:row="openEditDialogByClickingRow"
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
            v-for="(action, index) in actions"
            :key="index"
            :value="index"
            :prepend-icon="action.icon"
            @click="handleAction(action.event, item)"
          >
            <v-list-item-title>{{ action.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
  <v-dialog
    v-model="editDialog"
    max-width="500"
  >
    <template v-slot:default="{ isActive }">
      <AioAccountCard
        title="Modify Account"
        :action-label="'Update'"
        :account="editingAccount"
        @closeDialog="() => { isActive.value = false; }"
        @accountAction="updateAccount"
      />
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
const { accounts, deleteAccount, updateAccount } = useAccounts();
const props = defineProps({
  searchQuery: {
    type: String,
    default: '',
  },
  headers: {
    type: Array,
    default: () => [],
  },
});

const actions = [
  { title: 'Modify', icon: 'mdi-pencil', event: 'modify' },
  { title: 'Delete', icon: 'mdi-delete', event: 'delete' },
];
const selected = defineModel('selected', {
  type: Array as () => Account[],
  default: () => [],
});
const editDialog = ref(false);
const editingAccount = ref<Account | undefined>(undefined);

const selectedCount = computed(() => {
  return selected.value.length ? 
    `${selected.value.length} Customers selected` :
    'Customers';
});

// const headers = ref([
//   { title: 'Name', key: 'name', align: 'start' },
//   { title: '', key: 'contacts', align: 'start', sortable: false },
//   { title: 'Address', key: 'address', align: 'start' },
//   { title: 'Phone', key: 'phone', align: 'start' },
//   { title: 'Skills', key: 'skills', align: 'start' },
//   { title: '', key: 'actions', align: 'end', sortable: false },
// ])

function handleAction(event: string, account: Account) {
  console.log('Action:', event, 'on account:', account);
  switch (event) {
    case 'modify':
      openEditDialog(account);
      break;
    case 'delete':
      removeAccount(account);
      break;
  }
}

function openEditDialog(account: Account) {
  console.log('Editing account:', account);
  editingAccount.value = { ...account };
  editDialog.value = true;
}

function openEditDialogByClickingRow(event: PointerEvent, row: { item: Account }) {
  const account = row.item;
  console.log('Row clicked, editing account:', { ...account });
  editingAccount.value = { ...account };
  editDialog.value = true;
}

function removeAccount(account: Account) {
  // Logic to delete the account
  console.log('Delete account:', account);
  deleteAccount(account.id);
}

</script>