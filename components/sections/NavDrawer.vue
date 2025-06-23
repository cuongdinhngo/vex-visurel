<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    nav app open-on-hover
    density="compact" color="#1F2937"
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
        <ItemsHeaderRailToggle
          v-model:rail="rail"
        ></ItemsHeaderRailToggle>
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
          :prepend-icon="item.icon"
          :to="item.to"
          :active="isActiveMenu(item)"
          color="primary"
          link
        >
          <template #prepend>
            <v-icon :color="isActiveMenu(item) ? 'primary' : ''">{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title
            :class="{'text-white': isActiveMenu(item)}"
          >{{ item.label }}
          </v-list-item-title>
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
              :active="isActiveMenu(item)"
              :alt="item.page"
            >
              <template #prepend>
                <v-icon :color="isActiveMenu(item) ? 'primary' : ''">{{ item.icon }}</v-icon>
              </template>
            </v-list-item>
          </template>
          <!-- Sub Items -->
          <v-list-item
            v-for="subItem in item.subMenu"
            :key="subItem.label"
            :to="subItem.to"
            :active="isActiveMenu(subItem)"
            color="primary"
            link
          >
            <v-list-item-title
              :class="{'text-white': isActiveMenu(subItem)}"
            >{{ subItem.label }}</v-list-item-title>
          </v-list-item>
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

import { ItemsHeaderRailToggle } from '#components';
import { NAV_MENU } from '~/config/nav-menu';
import type { NavMenuItem } from '~/config/nav-menu';

const route = useRoute();
const rail = ref(false);

const logoNav = computed(() => `${useRuntimeConfig().app.baseURL}/logo.svg`);

function isActiveMenu(item: NavMenuItem): boolean {
  console.log('Checking active menu for:', item, route.name);
  return route.name === item.page || route.query.tab === item.page;
} 
</script>