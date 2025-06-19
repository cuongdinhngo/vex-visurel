<template>
  <v-row no-gutters>
  <v-col
    cols="12" md="3"
    v-for="contact in contacts"
  >
    <ContactCard
      :key="contact.id"
      :contact="contact"
    />
  </v-col>
</v-row>
</template>
<script setup lang="ts">
const props = defineProps({
  contacts: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>