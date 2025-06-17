<template>
  <div 
    class="chart-container"
    :style="{ height: chartHeight }"
  >
    <canvas
      :id="chartId"
    ></canvas>
  </div>
</template>
<script setup lang="ts">
import Chart from 'chart.js/auto';

const props = defineProps({
  chartId: {
    type: String,
    default: 'chartCanvas'
  },
  chartHeight: {
    type: Object as () => Record<string, string>,
    default: () => ({ mobile: '300px', desktop: '400px' })
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