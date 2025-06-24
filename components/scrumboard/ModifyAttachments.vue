<template>
  <v-list-item
    class="ma-0 pa-0"
    prepend-icon="mdi-paperclip"
    slim
    density="compact"
    nav
  >
    <v-list-item-title class="text-subtitle-1">
      Attachments
    </v-list-item-title>
    <template v-slot:append>
      <v-btn
        prepend-icon="mdi-plus"
        variant="text"
        class="text-none text-subtitle-2"
        color="primary"
      >
        Add Attachment
      </v-btn>
    </template>
  </v-list-item>
  <v-list-item class="ml-5">
    <v-row no-gutters>
      <v-col cols="12" md="6"
        v-for="(attachment, index) in task.attachments"
        :key="index"
      >
        <v-card
          class="elevation-0 border-thin mx-auto ml-2"
        >
          <template #subtitle>
            <div class="d-flex flex-column">
              <span>{{ attachment.name }}</span>
              <v-icon>{{ attachment.isCover ? 'mdi-star' : 'mdi-star-outline' }}</v-icon>
            </div>
          </template>
          <template #prepend>
            <v-avatar
              size="60"
              :image="attachment.url"
              tile
            >
            </v-avatar>
          </template>
          <template #append>
            <v-btn
              variant="text"
              size="small"
            >
              <v-icon>mdi-dots-vertical</v-icon>
              <v-menu activator="parent">
                <v-list>
                  <v-list-item
                    prepend-icon="mdi-image-filter-vintage"
                    title="Set as Cover"
                    @click="markAsCover(index)"
                  ></v-list-item>
                  <v-list-item
                    prepend-icon="mdi-trash-can-outline"
                    title="Remove"
                    @click="task.attachments.splice(index, 1)"
                  ></v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-list-item>
</template>
<script setup lang="ts">
const task = defineModel('task', {
  type: Object as () => Task,
  required: true
});

function markAsCover(index: number) {
  task.value.attachments.forEach((attachment) => {
    attachment.isCover = false;
  });
  task.value.attachments[index].isCover = true;
}
</script>