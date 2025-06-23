<template>
  <v-btn
    icon
    color="primary"
    size="40"
    id="add-account"
  >
    <v-icon>mdi-plus</v-icon>
    <v-dialog activator="parent" max-width="500">
      <template v-slot:default="{ isActive }">
        <AioAccountCard
          title="Add New Account"
          v-model:account="account"
          @accountAction="addAccount"
          @closeDialog="() => { isActive.value = false; }"
        />
      </template>
    </v-dialog>
  </v-btn>
</template>
<script setup lang="ts">
const { addAccount, accounts } = useAccounts();
const account = reactive({
    id: accounts.length + 1,
    email: '',
    firstName: '',
    lastName: '',
    name: '',
    phone: '',
    note: ''
}); 
</script>