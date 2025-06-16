<template>
  <v-btn
    class="text-none bg-primary rounded-pill mr-2"
  >
    Add new
  </v-btn>
  <v-menu activator="parent" offset="10">
    <v-list density="compact" slim elevation="1">
      <v-list-item
        v-for="item in ADD_NEW_MENU"
        :key="item.label"
        link
         class="text-black"
      >
        <template v-slot:prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>

        <NuxtLink :to="item.to">
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </NuxtLink>

        <template
          v-if="item.submenu"
          v-slot:append
        >
          <v-icon>
            mdi-chevron-right
          </v-icon>
        </template>

        <v-menu
          v-if="item.submenu"
          :open-on-focus="false"
          activator="parent"
          open-on-hover
          submenu
        >
          <v-list density="compact" slim elevation="1">
            <v-list-item
              v-for="subItem in item.submenu"
              :key="subItem.label"
              :prepend-icon="subItem.icon"
              link
              class="text-black"
            >
              <v-list-item-title>{{ subItem.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import { ADD_NEW_MENU } from '~/config/header-new-menu';
</script>