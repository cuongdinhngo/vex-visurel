<template>
  <v-row class="justify-center">
    <v-col cols="12" md="8">
      <v-expansion-panels>
        <v-expansion-panel
          elevation="1"
          v-for="(question, index) in questions"
          :key="index"
          :title="question.title"
          :text="question.content"
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { fa, faker } from '@faker-js/faker';
const questions = [
  {
    title: 'What is the purpose of this FAQ?',
    content: faker.lorem.paragraphs(2),
  },
  {
    title: 'How can I contact support?',
    content: faker.lorem.paragraphs(5),
  },
  {
    title: 'What are the operating hours of support?',
    content: faker.lorem.paragraphs(4),
  },
  {
    title: 'Where can I find the user manual?',
    content: faker.lorem.paragraphs(3),
  },
  {
    title: 'How do I reset my password?',
    content: faker.lorem.paragraphs(5)
  }
]
</script>