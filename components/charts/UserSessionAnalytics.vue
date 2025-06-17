<template>
  <ChartsBigCard
    label="User Session Analytics"
    :breakpoints="{ sm: 12, md: 6, lg: 6 }"
  >
    <ChartsCanvasChart
      chart-id="user-session-analytics-chart"
      :chart-height="{ mobile: '450px', desktop: '450px' }"
      :chart-data="userSessionAnalytics"
    />
  </ChartsBigCard>
</template>
<script setup lang="ts">
const { monthlySales } = useStatistics();
const { data:userSessionAnalytics, error } = await useAsyncData(
  'user-session-analytics',
  () => monthlySales(),
  {
    transform: (data) => {
      return {
        type: 'line',
        data: {
          labels: data.map(item => item.month),
          datasets: [{
            label: 'User Sessions',
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
            legend: { display: 'top'},
          },
        }
      }
    }
  }
);
</script>