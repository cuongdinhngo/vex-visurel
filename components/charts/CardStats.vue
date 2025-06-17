<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-col
        :cols="breakpoints?.sm || 12"
        :md="breakpoints?.md || 6"
        :lg="breakpoints?.lg || 6"
        class="card-data"
      >
        <v-card
          v-bind="props"
          class="pa-4"
          :class="[
            isHovering ? 'elevation-5' : 'elevation-2',
            'text-center',
            'text-black',
            'card-content'
          ]"
          max-height="250px"
        >
          <v-card-title>
            <v-icon
              :icon="tag?.icon"
              :color="tag?.color || 'primary'"
              :class="[`bg-${tag?.color}-lighten-5`, 'pa-6', 'rounded-circle']"
            >
            </v-icon>
          </v-card-title>

          <v-card-title class="text-h3 my-0 py-0">{{ formatNumber(totalCount) }}</v-card-title>

          <v-card-title class="text-subtitle-1 d-flex justify-center">{{ label }}</v-card-title>

          <v-card-title :class="[
            'text-subtitle-1',
            'd-flex',
            'align-center',
            'justify-center',
            `text-${stats?.trend === 'up' ? 'green' : 'red'}`
          ]">
            <v-icon>{{ `mdi-triangle-small-${stats?.trend === 'up' ? 'up' : 'down'}` }}</v-icon>
            {{ stats?.amount || 0 }}{{ stats?.unit || '%' }}
          </v-card-title>

          <v-btn
            v-if="isEnabled"
            class="hint-info"
            icon="mdi-help-circle-outline"
            variant="text"
          >
          </v-btn>
        </v-card>
        <v-btn
          v-if="isHovering"
          icon="mdi-share-variant-outline"
          class="text-primary btn-share"
        ></v-btn>
      </v-col>
    </template>
  </v-hover>
</template>
<script setup lang="ts">
import type { Tag } from '~/types/tag';

const props = defineProps({
  tag: {
    type: Object as () => Tag
  },
  isEnabled: {
    type: Boolean,
    default: false
  },
  totalCount: {
    type: Number
  },
  label: {
    type: String,
    default: 'Users'
  },
  stats: {
    type: Object as () => Record<string, any>,
    default: () => ({})
  },
  breakpoints: {
    type: Object as () => Record<string, number>,
    default: () => ({ sm: 12, md: 3, lg: 3 })
  }
});
</script>
<style scoped>
.card-data {
  position: relative;
}
.btn-share {
  position: absolute;
  z-index: 9999;
  top: -5px;
  right: -5px;
  transition: opacity 0.3s ease;
}
.card-content {
  position: relative;
}
.hint-info {
  position: absolute;
  top: 10px;
  left: 10px;
  transition: opacity 0.3s ease;
}
</style>