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
            <div 
              class="chart-container"
              :style="{ height: chartHeight }"
            >
            <canvas
              :id="chartId"
            ></canvas>
            </div>
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

const { mobile } = useDisplay();

const chartHeight = computed(() => {
  return mobile.value ? props.chartHeight.mobile : props.chartHeight.desktop;
});

onMounted(() => generateChart());

function generateChart() {
  const canvas = document.getElementById(props.chartId) as HTMLCanvasElement | null;

  if (!canvas) {
    console.error(`Canvas element not found => ${props.chartId}`, props);
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context', props);
    return;
  }

  new Chart(ctx, props.chartData);
}
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