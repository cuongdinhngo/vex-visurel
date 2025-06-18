<template>
  <v-row>
    <v-col
      cols="12" md="6"
      v-for="guide in guides"
      :key="guide.title"
    >
      <v-card elevation-1 class="text-black">
        <v-card-title class="text-h6 py-5">{{ guide.title }}</v-card-title>
        <v-card-text>
          <v-list-item
            v-for="(question, index) in guide.questions"
            :key="index"
            prepend-icon="mdi-information"
            :title="question.title"
            link
          >
            <v-dialog activator="parent" max-width="600">
              <template v-slot:default="{ isActive }">
                <v-card
                  :title="question.title"
                  :text="question.content"
                >
                  <template v-slot:append>
                    <v-btn
                      variant="text"
                      icon="mdi-folder"
                    ></v-btn>
                    <v-btn
                      variant="text"
                      icon="mdi-close"
                      @click="isActive.value = false"
                    ></v-btn>
                  </template>
                </v-card>
              </template>
            </v-dialog>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

const guides = Array.from({ length: 4 }, () => ({
  title: faker.lorem.sentence({ min: 2, max: 4 }),
  questions: Array.from({ length: 5 }, () => ({
    title: faker.lorem.sentence({ min: 4, max: 5 }),
    content: faker.lorem.paragraphs(2),
  })),
}));
</script>