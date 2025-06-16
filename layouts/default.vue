<template>
  <v-app>
    <!--Navigation drawer -->
    <SectionsNavDrawer
      v-model="drawer"
    />
    <!-- Event Drawer -->
    <SectionsEventDrawer
      v-model="eventDrawer"
    />

    <!-- App Bar -->
    <SectionsAppBar
      v-model:drawer="drawer"
      v-model:eventDrawer="eventDrawer"
    />

    <v-main>
      <v-container class="py-2 px-2" fluid>
        <slot />
      </v-container>
    </v-main>

    <v-footer app>
      <span class="text-center">© 2023 My Application</span>
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
const drawer = ref(true);
const eventDrawer = ref(false);
const { mdAndDown } = useDisplay();
</script>
<style scoped>
.left {
  margin-left: 20px;
}
.right {
  margin-right: 20px;
}
</style>