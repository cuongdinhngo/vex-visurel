<template>
  <v-row>
    <v-col
      cols="12" md="4"
      v-for="plan in pricingPlans"
      :key="plan.icon"
    >
      <v-card class="elevation-0 text-center py-5 text-black">
        <v-card-title class="text-h3">
           <v-btn color="primary" size="70" rounded="circle" variant="tonal">
            <v-icon size="50">{{ plan.icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-title class="text-h6">{{ plan.title }}</v-card-title>
        <v-card-text>
          <v-list-item
            v-for="benefit in plan.benefits"
            :key="benefit"
            :title="benefit"
            density="compact"
          />
        </v-card-text>
        <v-card-title class="text-h3 d-flex justify-center">
          {{ plan.price }}
          <span class="text-h6">$</span>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn
            class="rounded-pill bg-primary text-white"
            variant="tonal"
          >Purchase</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { pl } from '@faker-js/faker';

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: 19,
    icon: 'mdi-currency-usd',
    benefits: [
      '2 Users',
      '10 GB Storage',
      '10 Projects',
      'Basic Support',
    ],
  },
  {
    title: 'Premium Plan',
    price: 49,
    icon: 'mdi-star-box',
    benefits: [
      '10 Users',
      '100 GB Storage',
      'Unlimited Projects',
      'Priority Support',
    ],
  },
  {
    title: 'Enterprise Plan',
    price: 99,
    icon: 'mdi-diamond-stone',
    benefits: [
      'Unlimited Users',
      'Unlimited Storage',
      'Unlimited Projects',
      'Dedicated Support',
    ],
  },
];
</script>