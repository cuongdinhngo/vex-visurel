<template>
  <v-card class="contact-card justify-center text-center text-black ma-4" flat>
    <v-rating
      :model-value="contact.isStar"
      :length="1"
      active-color="orange-lighten-1"
      size="md"
      class="favorite-contact"
    ></v-rating>
    <v-avatar
      class="mt-4 mb-2"
      size="90"
      :image="contact.avatar"
    ></v-avatar>
    <v-card-title class="text-subtitle-1 font-weight-bold">{{ contact.name }}</v-card-title>
    <v-card-subtitle class="text-subtitle-2">
      <v-icon class="mr-1">mdi-home-city-outline</v-icon>
      {{ contact.city }}
    </v-card-subtitle>
    <v-card-subtitle class="text-subtitle-2">
      <v-icon class="mr-1">mdi-email-outline</v-icon>
      {{ contact.email }}
    </v-card-subtitle>
    <v-card-actions class="justify-space-between bg-grey-lighten-2 mt-2">
      <v-btn icon color="primary">
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-phone</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  contact: {
    type: Object,
    required: true,
    default: () => ({
      isStar: false,
      avatar: '',
      name: '',
      city: '',
      email: ''
    })
  }
});
</script>
<style scoped>
.contact-card {
  position: relative;
}
.favorite-contact {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>