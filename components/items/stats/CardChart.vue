<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-col cols="12" md="3" class="card-data">
        <v-card
          v-bind="props"
          class="pa-4"
          :class="[isHovering ? 'elevation-5' : 'elevation-2']"
          subtitle="Page Views"
        >
          <template #title>
            <span class="text-h6 font-weight-bold">92.4k</span>
          </template>      
          <template #append>
            <v-btn
              icon="mdi-chart-bar"
              variant="tonal"
              color="primary"
            />
          </template>
          <v-card-text class="pa-0">
            A dashboard is a visual representation of key metrics and data points, providing an at-a-glance view of performance and trends.
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