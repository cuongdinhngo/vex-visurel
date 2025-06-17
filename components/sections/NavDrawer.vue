<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    density="compact"
    nav
    color="#1F2937"
    :rail="rail"
    id="main-nav-drawer"
  >
    <v-card
      elevation="0"
      tile
      color="#1F2937"
    >
      <template #prepend>
        <v-img
          width="25px"
          aspect-ratio="16/9"
          cover
          :src="logoNav"
          @click="rail = !rail"
        ></v-img>
      </template>
      <template #title>
        <span class="text-h5 font-weight-bold text-white">VEX</span>
      </template>
      <template #append>
        <v-checkbox
          class="rounded-circle"
          @click="rail = true"
          hide-details
          :value="rail"
        ></v-checkbox>
      </template>

      <v-card-actions class="d-flex justify-center">
        <v-list-item
          density="compact"
          nav
          title="Quick Search"
          prepend-icon="mdi-magnify"
          append-icon="mdi-chevron-right"
          link
          class="rounded-lg my-2 pa-2"
          id="header-search-dialog"
          variant="tonal"
        ></v-list-item>
      </v-card-actions>
    </v-card>
    <v-list
      v-for="group in NAV_MENU"
      :key="group.group"
      nav
      density="compact"
      slim
    >
      <v-list-subheader class="text-uppercase font-weight-bold text-primary" v-if="!rail">
        {{ group.group }}
      </v-list-subheader>
      <template
        v-for="item in group.menu"
        :key="`${item.icon}-${item.label}`"
      >
        <!-- Main Item without sub-menu -->
        <v-list-item
          v-if="!item.subMenu"
          :key="`${item.icon}-${item.label}`"
          :title="item.label"
          :prepend-icon="item.icon"
          link
          :to="item.to"
          :active="route.name === item.page"
        >
        </v-list-item>

        <!-- Sub menu -->
        <v-list-group
          v-else
          :value="item.label"
        >
          <!-- Main Item -->
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.label"
              :prepend-icon="item.icon"
              :key="`${item.icon}-${item.label}`"
            ></v-list-item>
          </template>
          <!-- Sub Items -->
          <v-list-item
            v-for="subItem in item.subMenu"
            :key="subItem.label"
            :title="subItem.label"
          ></v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
const drawer = defineModel('drawer', {
  default: true,
  type: Boolean,
})

import { NAV_MENU } from '~/config/nav-menu';

const route = useRoute();
const rail = ref(false);

const logoNav = computed(() => `${useRuntimeConfig().app.baseURL}/logo.svg`);
</script>