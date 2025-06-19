<template>
  <!-- Left Content -->
  <v-col cols="12" md="8">
    <!-- Social Actions -->
    <v-row class="mb-4">
      <v-col cols="12" md="12" class="d-flex align-center justify-space-between">
        <v-btn
          v-for="action in actions"
          :key="action.title"
          :color="action.color"
          class="d-flex flex-column align-center justify-center text-none"
          variant="text"
          size="x-large"
          rounded="pill"
        >
          <v-icon
            :icon="action.icon"
            :class="`pa-6 rounded-circle bg-${action.color}-lighten-5 text-${action.color}-darken-4 mr-2`">
          </v-icon>
          <span class="text-subtitle-1">{{ action.title }}</span>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Create Post -->
    <v-card elevation="0" rounded="lg" class="mb-8">
      <v-card-text>
        <v-textarea
          placeholder="What's on your mind?"
          rows="2"
          variant="text"
          auto-grow
          hide-details
        ></v-textarea>
      </v-card-text>
      <v-card-actions class="bg-grey-lighten-2">
        <v-btn
          class="text-none" variant="text"
          prepend-icon="mdi-image"
        >Photo</v-btn>
        <v-btn
          class="text-none" variant="text"
          prepend-icon="mdi-video"
        >Video</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary" class="text-none" variant="flat"
          append-icon="mdi-send"
        >Post</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Posts -->
    <SocialPosts />
  </v-col>

  <!-- Right Suggestions -->
  <v-col cols="12" md="4">
    <!-- Personal Info -->
    <SocialAbout
      :breakpoints="{
        sm: 12,
        md: 12,
        lg: 12
      }"
    />

    <!-- Friend Suggestions -->
    <SocialFriendSuggestions />
  </v-col>
</template>

<script setup lang="ts">
import { SocialPosts } from '#components';
import { fa, faker } from '@faker-js/faker';
import { formatTimeAgo } from '@vueuse/core';

const actions = [
  {
    title: 'Create Post',
    icon: 'mdi-pencil',
    color: 'purple',
  },
  {
    title: 'Upload Photo',
    icon: 'mdi-camera',
    color: 'orange',
  },
  {
    title: 'Share Link',
    icon: 'mdi-link-variant',
    color: 'teal',
  }
];

// Generate posts with consistent structure
const posts = Array.from({ length: 20 }, (_, index) => {
  const hasImage = faker.datatype.boolean();
  return {
    id: index + 1,
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    date: faker.date.past().toLocaleDateString(),
    hasImage,
    content: faker.lorem.paragraph(),
    image: hasImage ? `https://picsum.photos/id/${faker.number.int({ min: 1, max: 500 })}/600/400` : '',
    likes: faker.number.int({ min: 1, max: 100 }),
  };
});
</script>

<style scoped>
</style>