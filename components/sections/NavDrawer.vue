<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    density="compact"
    nav
    color="#1F2937"
  >
    <v-list>
      <v-list-item to="/">
        <v-list-item-title class="">Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/about">
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
const drawer = defineModel('drawer', {
  default: true,
  type: Boolean,
})
</script>