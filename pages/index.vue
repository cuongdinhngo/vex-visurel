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

  <v-row class="pa-4">
    <v-col cols="12" md="6">
      <v-card class="pa-4">
        <v-card-title class="text-caption font-weight-bold">Dashboards</v-card-title>
        <v-card-text>
          <p class="text-subtitle-1">
            A dashboard is a visual representation of key metrics and data points, providing an at-a-glance view of performance and trends.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    
    <ChartsPageView />

    <ChartsUniqueUser />
  </v-row>
</template>
<script setup lang="ts">
const { mobile} = useDisplay();

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