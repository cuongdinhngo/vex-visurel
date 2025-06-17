<template>
  <ChartsBigCard
    label="Sales Overview"
    :breakpoints="{ sm: 12, md: 6, lg: 6 }"
  >
    <v-data-table
      :headers="headers"
      :items="items"
      item-value="name"
      :items-per-page="6"
      :items-per-page-options="[6]"
    >
      <template v-slot:item.status="{ item }">
        <v-tooltip :text="item.status" location="top">
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
              :color="item.status === 'Ready to Ship' ? 'green' : item.status === 'Pending Payment' ? 'orange' : 'red'"
              size="50"
            >
              mdi-circle-small
            </v-icon>
          </template>
        </v-tooltip>
      </template>

      <template v-slot:item.timestamp="{ item }">
        {{ formatTimeAgo(new Date(item.timestamp)) }}
      </template>
    </v-data-table>
  </ChartsBigCard>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { formatTimeAgo } from '@vueuse/core'

const headers = [
  {
    title: '',
    align: 'start',
    key: 'status',
  },
  {
    title: 'PRODUCT',
    align: 'end',
    key: 'name',
  },
  {
    title: '$ PRICE',
    align: 'end',
    key: 'price',
  },
  {
    title: 'DATE',
    align: 'end',
    key: 'timestamp',
  },
]

const items = Array.from({ length: 20 }, () => {
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  return {
    status: faker.helpers.arrayElement(['Ready to Ship', 'Pending Payment', 'Missing Payment']),
    name: faker.commerce.productName(),
    price: faker.number.int({ min: 10, max: 2000 }),
    timestamp: faker.date.between({ 
      from: startOfToday, 
      to: new Date() 
    }),
  };
});
</script>