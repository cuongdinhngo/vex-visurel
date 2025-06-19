<template>
  <v-row>
    <v-col
      v-for="post in posts"
      :key="post.id"
      cols="12"
      md="6"
    >
      <v-card class="no-gap">
        <v-list-item
          :prepend-avatar="post.avatar"
          :title="post.name"
          :subtitle="formatTimeAgo(new Date(post.date))"
          class="pa-4 text-black"
          density="compact"
          nav
        ></v-list-item>

        <div class="content-wrapper">
          <v-img
            v-if="post.hasImage"
            :src="post.image"
            height="200"
            :aspect-ratio="16/9"
            cover
          ></v-img>

          <v-card-text :class="{ 'pt-2': post.hasImage }">
            <p class="text-body-2 text-black">{{ post.content }}</p>
          </v-card-text>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            prepend-icon="mdi-thumb-up"
            class="text-none"
            variant="text"
          >Like</v-btn>
          <v-btn
            prepend-icon="mdi-comment"
            class="text-none"
            variant="text"
          >Comment</v-btn>
          <v-spacer></v-spacer>
          <span class="text-caption text-grey-darken-2">{{ post.likes }} Likes</span>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { formatTimeAgo } from '@vueuse/core';

const posts = Array.from({ length: 20 }, (_, index) => {
  const hasImage = faker.datatype.boolean();
  return {
    id: index + 1,
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    date: faker.date.past().toLocaleDateString(),
    hasImage,
    content: faker.lorem.paragraph(),
    image: hasImage
      ? `https://picsum.photos/id/${faker.number.int({ min: 1, max: 500 })}/600/400`
      : '',
    likes: faker.number.int({ min: 1, max: 100 }),
  };
});
</script>