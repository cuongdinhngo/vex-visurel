<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-col
        :cols="breakpoints.sm || 12"
        :md="breakpoints.md  || 6"
        :lg="breakpoints.lg  || 6"
        class="card-data"
      >
        <v-card
          v-bind="props"
          class="pa-4"
          :class="[isHovering ? 'elevation-5' : 'elevation-2']"
          :subtitle="label"
          max-height="250px"
        >
          <template #title>
            <span class="text-h6 font-weight-bold">{{ formatNumber(totalCount) }}</span>
          </template>
          <template #append>
            <v-btn
              :icon="tag?.icon || 'mdi-chart-bar-stacked'"
              variant="tonal"
              :color="tag.color || 'primary'"
            />
          </template>
          <v-card-text class="pa-0">
            <ChartsCanvasChart
              :chart-id="chartId"
              :chart-height="chartHeight"
              :chart-data="chartData"
            />
          </v-card-text>
        </v-card>
        <v-btn
          v-if="isHovering"
          icon="mdi-share-variant-outline"
          :class="['text-primary', 'btn-share']"
        ></v-btn>
      </v-col>
    </template>
  </v-hover>
</template>
<script setup lang="ts">
import { ChartsCanvasChart } from '#components';
import Chart from 'chart.js/auto';
import type { Tag } from '~/types/tag';

const props = defineProps({
  totalCount: {
    type: Number,
    default: 0
  },
  label: {
    type: String,
    default: 'Page Views'
  },
  tag: {
    type: Object as () => Tag,
    default: null
  },
  breakpoints: {
    type: Object as () => Record<string, number>,
    default: () => ({})
  },
  chartId: {
    type: String,
    default: 'chartCanvas'
  },
  chartHeight: {
    type: Object as () => Record<string, string>,
    default: () => ({})
  },
  chartData: {
    type: Object as () => Record<string, any>,
    default: () => ({})
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
</style>