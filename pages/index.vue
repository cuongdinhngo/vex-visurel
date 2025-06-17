<template>
  <v-row class="bg-white">
    <v-col cols="6" md="6" class="d-flex align-center">
      <h4 class="border-e-md pr-5 pl-4">Dashboards</h4>
      
      <ItemsBreadcrumbs
        v-if="!mobile"
      />
    </v-col>
    <v-col cols="6" md="6" class="text-end">
      <v-btn icon="mdi-dots-vertical" variant="text" color="primary"></v-btn>
    </v-col>
  </v-row>

  <v-row class="px-4">
    <!-- Highlight Card-->
    <ChartsCardHighlight />

    <!-- Page views Card-->
    <ChartsPageView />

    <!-- Unique users Card -->
    <ChartsUniqueUser />
  </v-row>

  <v-row class="px-4">
    <v-col class="12" md="12">
      <!-- Sale Overview Card -->
      <ChartsSaleOverview />
    </v-col>
  </v-row>

  <v-row class="px-4">
    <!-- User Stats -->
    <ChartsCardStats
      label="Users"
      :is-enabled="true"
      :total-count="64700"
      :stats="{ trend: 'up', amount: 12, unit: '%' }"
      :tag="{ icon: 'mdi-account', color: 'indigo' }"
      :breakpoints="{ sm: 12, md: 3, lg: 3 }"
    />

    <ChartsCardStats
      label="Orders"
      :is-enabled="false"
      :total-count="12300"
      :stats="{ trend: 'down', amount: 5, unit: '%' }"
      :tag="{ icon: 'mdi-cart', color: 'green' }"
      :breakpoints="{ sm: 12, md: 3, lg: 3 }"
    />

    <ChartsCardStats
      label="Revenue"
      :is-enabled="false"
      :total-count="45000"
      :stats="{ trend: 'up', amount: 20, unit: '%' }"
      :tag="{ icon: 'mdi-currency-usd', color: 'orange' }"
      :breakpoints="{ sm: 12, md: 3, lg: 3 }"
    />

    <ChartsCardStats
      label="Page Views"
      :is-enabled="true"
      :total-count="92300"
      :stats="{ trend: 'up', amount: 15, unit: '%' }"
      :tag="{ icon: 'mdi-chart-bar-stacked', color: 'teal' }"
      :breakpoints="{ sm: 12, md: 3, lg: 3 }"
    />
  </v-row>
</template>
<script setup lang="ts">
import type { Tag } from '~/types/tag';

const { mobile} = useDisplay();

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