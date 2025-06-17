<template>
  <ChartsCardChart
    :total-count="3400"
    label="Unique Users"
    :tag="{ icon: 'mdi-account', color: 'orange' }"
    :breakpoints="{ sm: 12, md: 3, lg: 3 }"
    :chart-id="'unique-users-chart'"
    :chart-height="{ mobile: '115px', desktop: '115px' }"
    :chart-data="uniqueUsers"
  />
</template>
<script setup lang="ts">
const { monthlySales:monthlyUniqueUser } = useStatistics();
const { data:uniqueUsers, error } = await useAsyncData(
  'unique-users',
  () => monthlyUniqueUser(),
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