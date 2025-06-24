<template>
  <v-list-item
    class="ma-0 pa-0"
    prepend-icon="mdi-message-text-outline"
    slim
    density="compact"
    nav
  >
    <v-list-item-title class="text-subtitle-1">
      Comments
    </v-list-item-title>
  </v-list-item>
  <v-list>
    <v-list-item
      v-for="(comment, index) in taskComments"
      :key="index"
      :prepend-avatar="comment.author.avatar"
      :title="comment.author.name"
      :subtitle="formatTimeAgo(new Date(comment.createdAt))"
      density="compact"
      nav
      link
    >
      <v-list-item-action class="text-subtitle-2">
        {{ comment.content }}
      </v-list-item-action>
    </v-list-item>

    <v-list-item
      density="compact"
      nav
      link
      :prepend-avatar="faker.image.avatar()"
    >
      <v-list-item-title>
        <v-text-field
          v-model="newComment"
          variant="outlined"
          placeholder="Add a comment..."
          density="compact"
          hide-details
          clearable
          append-inner-icon="mdi-send"
          @click:append-inner="addNewComment()"
        ></v-text-field>
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core';
import { ASSIGNEES } from '@/composables/useScrumboard';
import { faker } from '@faker-js/faker';

const task = defineModel('task', {
  type: Object as () => Task,
  required: true
});

const newComment = ref('');

const taskComments = computed(() => {
  return task.value.comments?.map(comment => {
    const author = ASSIGNEES.find(assignee => assignee.id === comment.authorId);
    return {
      ...comment,
      author: {
        ...author,
      },
    }
  })
});

function addNewComment() {
  if (!newComment.value.trim()) return;

  const newCommentData = {
    content: newComment.value,
    authorId: ASSIGNEES[0].id,
    createdAt: new Date().toISOString(),
  };

  task.value.comments.push(newCommentData);
  newComment.value = '';
}
</script>