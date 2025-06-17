<template>
      <v-col cols="12" md="6">
      <v-card class="pa-4 bg-primary text-white">
        <v-card-text>
          <v-row>
            <v-col cols="12" md="5" v-if="!mobile">
              <v-img
                aspect-ratio="16/9"
                contain
                :src="dashboardImgPath('checklist.svg')"
                height="150px"
              >
              </v-img>
            </v-col>

            <v-col cols="12" md="7">
              <v-card-title >Good job, David!</v-card-title>
              <v-card-subtitle class="text-caption">You've finished all of your tasks for this week</v-card-subtitle>
              <v-list-item
                v-for="(item, index) in ['Task 1', 'Task 2', 'Task 3']"
                :key="index"
                :title="item"
                prepend-icon="mdi-check"
                density="compact"
                slim
              >
              </v-list-item>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
</template>
<script setup lang="ts">
const { mobile } = useDisplay();
</script>