<template>
  <ChartsCardChart
    :total-count="92300"
    label="Page Views"
    :tag="{ icon: 'mdi-chart-bar-stacked', color: 'primary' }"
    :breakpoints="{ sm: 12, md: 3, lg: 3 }"
    :chart-id="'page-views-chart'"
    :chart-height="{ mobile: '100px', desktop: '100px' }"
    :chart-data="pageViews"
  />
</template>
<script setup lang="ts">
const { monthlySales:monthlyPageViews } = useStatistics();
const { data:pageViews, error } = await useAsyncData(
  'page-views',
  () => monthlyPageViews(),
  {
    transform: (data) => {
      return {
        type: 'line',
        data: {
          labels: data.map(item => item.month),
          datasets: [{
            data: data.map(item => item.amount),
            borderColor: '#1976D2',
            backgroundColor: '#82B1FF',
            fill: false,
            tension: 0.1,
            pointBackgroundColor: '#1976D2',
            pointRadius: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false},
          },
          scales: {
            x: { display: false},
            y: { display: false}
          }
        }
      }
    }
  }
);
</script>