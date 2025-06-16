<template>
  <v-app-bar app elevation="0" class="border-b-sm">
    <!-- LEFT MENU ACTIONS-->
    <div
      v-if="!mdAndDown"
      class="left"
    >
      <!-- Add new -->
      <ItemsHeaderNewButton />

      <!-- Mega Menu -->
      <ItemsHeaderMegaMenu />
    </div>

    <!-- Mobile Nav Menu Button -->
    <div
      v-if="mdAndDown"
      class="left-nav-bar"
    >
      <v-btn
        icon
        color="primary"
        @click="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <!-- RIGHT MENU ACTIONS -->
    <div class="right d-flex align-center ga-2">
      <!-- Search -->
      <ItemsHeaderSearch />

      <!-- Notifications -->
      <ItemsHeaderNotifications />

      <!-- Events -->
      <v-btn
        icon
        color="primary"
        @click="eventDrawer = !eventDrawer"
      >
        <v-icon>mdi-book-multiple</v-icon>
      </v-btn>

      <!-- Locale -->
      <ItemsHeaderLocale />
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
import { ItemsHeaderNotifications } from '#components';

const { mdAndDown } = useDisplay();

const drawer = defineModel('drawer', {
  default: true,
  type: Boolean,
});

const eventDrawer = defineModel('eventDrawer', {
  default: false,
  type: Boolean,
});
</script>
<style scoped>
.left {
  margin-left: 20px;
}
.right {
  margin-right: 20px;
}
</style>