<template>
  <v-card
    class="scrollbar border-e-thin elevation-0" elevation="0" flat tile
    :width="mobile ? '100%' : '50%'">
    <div class="force-overflow">
      <v-hover
        v-for="mail in mailList"
        :key="mail.id"
      >
        <template #default="{ isHovering, props }">
          <div
            v-bind="props"
            :class="[
              'message-item', 'd-flex', 'align-top', 'py-2',
              { 'bg-grey-lighten-4': isHovering }
            ]"
          >
            <div class="user-avatar d-flex flex-column align-center pl-1">
              <v-avatar
                size="40"
                :image="mail.sender.avatar"
                v-if="!isHovering"
              />
              <v-checkbox
                v-if="isHovering"
                v-model="selectAll"
                :value="mail.id"
                color="primary"
                hide-details
                density="compact"
                single-line
                width="40"
                class="pl-1"
              />
              <v-rating
                v-if="isHovering"
                :length="1"
                active-color="orange-lighten-1"
                size="md"
                :model-value="mail.isStared"
              ></v-rating>
            </div>
            <div class="message-brief">
              <v-list-item
                density="comfortable" nav
                :to="{ name: 'mail-category-id', params: { category: category.value, id: mail.id } }"
              >
                <v-list-item-title :class="['text-subtitle-1 pb-1', { 'font-weight-bold': !mail.isRead }]">
                  {{ mail.sender.name }}
                </v-list-item-title>
                <v-list-item-title :class="['text-subtitle-2 py-1', { 'font-weight-bold': !mail.isRead }]">
                  {{ mail.subject }}
                </v-list-item-title>
                <v-list-item-title class="text-caption text-disabled pt-1">
                  {{ mail.body }}
                </v-list-item-title>

                <template #append>
                  <div class="d-flex flex-column align-end">
                    <span class="text-caption">{{ formatTimeAgo(new Date(mail.timestamp)) }}</span>
                    <v-chip
                      v-if="mail.label"
                      :color="mail.label.color"
                      size="x-small"
                    >
                      {{ mail.label.title }}
                    </v-chip>
                  </div>
                </template>
              </v-list-item>
            </div>
          </div>
        </template>
      </v-hover>
    </div>
  </v-card>
</template>
<script lang="ts" setup>
import { formatTimeAgo } from '@vueuse/core';
import type { Mail } from '@/composables/useMails';

const { mobile } = useDisplay();
const { mails, getMailsViaCategory, getMailsViaLabel, CATEGORIES } = useMails();
const category = useRouteParams('category', 'inbox');

const mailList = ref<Mail[]>([]);
const selectAll = defineModel('selectAll', {
  type: Array as () => string[],
  default: false
});

function isCategory() {
  return CATEGORIES.some(cat => cat.id === category.value);
}

onMounted(() => {
  console.log('Mounted Mail List Component');
  if (category.value && isCategory()) {
    mailList.value = getMailsViaCategory(category.value);
  } else {
    mailList.value = getMailsViaLabel(category.value);
  }
});
</script>