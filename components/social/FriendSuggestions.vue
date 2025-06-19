<template>
  <v-card flat rounded="lg" class="mb-6">
    <v-card-title>Friend Suggestions</v-card-title>
    <v-divider></v-divider>
    <v-list density="compact" nav class="text-black">
      <v-list-item
        v-for="i in 10"
        :key="i"
        :prepend-avatar="faker.image.avatar()"
        :title="faker.person.fullName()"
        :subtitle="faker.number.int({ min: 1, max: 100 }) + ' mutual friends'"
      >
        <template v-slot:append>
          <v-btn
            color="primary"
            variant="text"
            icon
          ><v-icon>mdi-account-plus</v-icon></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
</script>