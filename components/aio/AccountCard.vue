<template>
  <v-card
    :title="title"
  >
    <v-divider></v-divider>
    <v-card-text>
      <!-- First Name & Last Name -->
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="account.firstName"
            prepend-inner-icon="mdi-account"
            label="First Name"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="account.lastName"
            prepend-inner-icon="mdi-account"
            label="Last Name"
            variant="outlined"
            hide-details
          />
        </v-col>
      </v-row>

      <!-- Street address -->
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="account.address"
            prepend-inner-icon="mdi-map-marker"
            label="Street Address"
            variant="outlined"
            hide-details
          />
        </v-col>
      </v-row>

      <!-- Phone Number -->
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="account.phone"
            prepend-inner-icon="mdi-phone"
            label="Phone Number"
            variant="outlined"
            hide-details
          />
        </v-col>
      </v-row>

      <!-- Notes -->
      <v-row>
        <v-col cols="12" md="12">
          <v-textarea
            v-model="account.note"
            variant="outlined"
            rows="2"
            placeholder="Notes"
            hide-details
            clearable
          />
        </v-col>
      </v-row>
    </v-card-text>

    <template v-slot:actions>
      <v-btn
        class="ml-auto"
        text="Close"
        @click="closeDialog"
      ></v-btn>
      <v-btn
        class="ml-2"
        color="primary"
        @click="handleAccount(account)"
      >{{ actionLabel }}</v-btn>
    </template>
  </v-card>
</template>
<script setup lang="ts">
import type { Account } from '@/composables/useAccounts';

const emit = defineEmits(['accountAction', 'closeDialog']);

function closeDialog() {
  emit('closeDialog');
}

function handleAccount(account: Account) {
  emit('accountAction', account);
}

const isActive = defineModel('isActive');

const account = defineModel('account', {
  type: Object as () => Account,
  default: () => ({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    note: ''
  })
});

const props = defineProps({
  title: {
    type: String,
    default: 'Add new account'
  },
  actionLabel: {
    type: String,
    default: 'Add Account'
  }
});
</script>