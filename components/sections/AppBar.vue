<template>
  <v-app-bar app>
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
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            color="primary"
          >
            <v-icon>mdi-bell-ring</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Events -->
      <v-btn icon color="primary">
        <v-icon>mdi-book-multiple</v-icon>
      </v-btn>

      <!-- Locale -->
      <ItemsHeaderLocale />
    </div>
    </v-app-bar>
</template>
<script setup lang="ts">
const { mdAndDown } = useDisplay();

const drawer = defineModel('drawer', {
  default: true,
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