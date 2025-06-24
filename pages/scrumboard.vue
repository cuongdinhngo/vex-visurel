<template>
  <v-container fluid class="ma-0 pa-0">
    <!-- Board Header -->
    <v-row class="bg-white ma-0 px-4">
      <v-col class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <span class="text-subtitle-1 mr-4 border-e-thin pr-4">
            Tech Startup Board
          </span>
          <v-rating
            :length="1"
            active-color="orange-lighten-1"
            clearable
            size="md"
            class="favorite-contact"
          ></v-rating>
        </div>

        <div>
          <ScrumboardAvatar
            v-for="assignee in ASSIGNEES"
            :key="assignee.id"
            :image="assignee.avatar"
            :isLimited="false"
            :size="24"
          />
        </div>
      </v-col>
    </v-row>

    <!-- Board Content -->
    <div class="scrumboard-row px-6 mt-6">
      <ScrumboardColumn
        v-for="(column, index) in columns"
        :key="index"
        :title="column.name"
        :columnId="column.id"
        v-model:tasks="column.tasks"
      />
      
      <!-- Add New List -->
      <ScrumboardAddList />
    </div>
  </v-container>
</template>

<script setup lang="ts">
const { columns, ASSIGNEES } = useScrumboard();
</script>

<style scoped>
.scrumboard-row {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  padding-bottom: 16px;
  /* Optional: for smooth scrolling on touch devices */
  -webkit-overflow-scrolling: touch;
}
</style>
