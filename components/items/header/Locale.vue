<template>
  <v-menu offset="15">
    <template v-slot:activator="{ props }">
      <v-btn icon>
        <v-avatar
          v-bind="props"
          :image="selectedFlag"
          size="x-small"
        >
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in LOCALE"
        :key="locale.value"
        @click="selectedLocale = locale.value"
      >
        <template v-slot:prepend>
          <v-avatar
            :image="locale.flag"
            size="x-small"
          />
        </template>
        <v-list-item-title class="text-body-2">
          {{ locale.label }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import { LOCALE } from '~/config/locale';

const selectedLocale = defineModel('selectedLocale', {
  default: 'en',
  type: String,
});

const selectedFlag = computed(() => {
  const locale = LOCALE.find((l) => l.value === selectedLocale.value);
  return locale ? locale.flag : '';
});
</script>