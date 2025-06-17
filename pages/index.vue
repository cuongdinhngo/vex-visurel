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
    <!-- Highlight Card-->
    <ChartsCardHighlight />

    <!-- Page views Card-->
    <ChartsPageView />

    <!-- Unique users Card -->
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