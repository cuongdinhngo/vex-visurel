<template>
  <v-card>
    <v-card-title class="d-flex align-center justify-space-between">
      <h4 class="text-h6 text-black">Sale Overview</h4>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-cloud-arrow-down" variant="text" color="primary"></v-btn>
      <v-btn icon="mdi-dots-horizontal" variant="text" color="primary"></v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-card-title class="text-h4 text-black">4567</v-card-title>
          <v-card-title class="text-h6 text-black">Sale this month</v-card-title>
          <v-list-item
            v-for="item in saleHighlight"
            :key="item.amount"
          >
            <template v-slot:prepend>
              <v-icon
                :color="item.trend === 'up' ? 'green' : 'red'"
                :class="[item.trend === 'up' ? 'bg-green-lighten-4' : 'bg-red-lighten-5', 'pa-3', 'rounded-lg']"
              >
                {{ item.trend === 'up' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
              </v-icon>
            </template>
            <v-list-item-title class="text-black list-item-title">
              <span :class="item.trend === 'up' ? 'text-green' : 'text-red'">{{  item.amount }}{{ item.unit }} {{ item.legend }}</span> in comparison to last month
            </v-list-item-title>
          </v-list-item>
          <v-card-actions class="justify-center">
            <v-btn variant="flat" color="primary" rounded="pill" width="90%" class="text-none">View Details</v-btn>
          </v-card-actions>
        </v-col>

        <!-- Sale overview chart -->
        <v-col cols="12" md="6">
          <ChartsCanvasChart
            chart-id="monthly-sale-overview-chart"
            :chart-height="{ mobile: '300px', desktop: '300px' }"
            :chart-data="monthlySaleOverview"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
const saleHighlight = [
  {
    trend: 'up',
    amount: 11,
    unit: '%',
    legend: 'more sales'
  },
  {
    trend: 'down',
    amount: 5,
    unit: '%',
    legend: 'revenue per sale'
  }
];

const { monthlySales } = useStatistics();
const { data:monthlySaleOverview, error } = await useAsyncData(
  'monthly-sale-overview',
  () => monthlySales(),
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
        }
      }
    }
  }
);
</script>
<style scoped>
.list-item-title {
  white-space: normal;
}
</style>