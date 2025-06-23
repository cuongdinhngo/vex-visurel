<template>
  <v-btn
    class="bg-grey-lighten-2 elevation-0"
    prepend-icon="mdi-plus"
    width="300"
  >
    Add List
    <v-menu
      activator="parent" :close-on-content-click="false"
      v-model="addListMenu"
    >
      <v-card>
        <v-card-text>
          <v-text-field
            v-model="listName"
            placeholder="List Name"
            variant="outlined"
            hide-details
          />
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            color="primary"
            variant="tonal"
            class="rounded-pill"
            @click="addColumn(listName); listName = ''; addListMenu = false;"
          >
            Add Column
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-btn>
</template>
<script setup lang="ts">
const { columns, addColumn } = useScrumboard();

const listName = ref('');
const addListMenu = ref(false);
</script>