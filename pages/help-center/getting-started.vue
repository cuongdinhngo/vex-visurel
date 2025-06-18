<template>
  <v-row>
    <v-col>
      <v-card class="elevation-0">
        <v-card-title class="text-h5 py-5">Installation</v-card-title>
        <v-card-text>
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
              elevation="1"
              v-for="items in installationItems"
              :key="items.title"
              :title="items.title"
              :text="items.content"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col>
      <v-card class="elevation-0">
        <v-card-title class="text-h5 py-5">Usage</v-card-title>
        <v-card-text>
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
              elevation="1"
              v-for="items in usageItems"
              :key="items.title"
              :title="items.title"
              :text="items.content"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { fa, faker } from '@faker-js/faker';
const installationItems = [
  {
    title: '1. Download',
    content: faker.lorem.paragraphs(2),
  },
  {
    title: '2. Installation',
    content: faker.lorem.paragraphs(3),
  },
  {
    title: '3. Configuration',
    content: faker.lorem.paragraphs(4),
  },
  {
    title: '4. Run',
    content: faker.lorem.paragraphs(2),
  },
];

const usageItems = [
  {
    title: '1. Basic Usage',
    content: faker.lorem.paragraphs(2),
  },
  {
    title: '2. Advanced Features',
    content: faker.lorem.paragraphs(3),
  },
  {
    title: '3. Tips and Tricks',
    content: faker.lorem.paragraphs(4),
  },
  {
    title: '4. Troubleshooting',
    content: faker.lorem.paragraphs(2),
  },
];
</script>