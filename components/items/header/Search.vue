<template>
  <v-btn
    icon
    color="primary"
    id="header-search-dialog"
  >
    <v-icon>mdi-magnify</v-icon>
  </v-btn>

  <v-dialog
    activator="#header-search-dialog"
    max-width="800"
    scrollable
    transition="dialog-top-transition"
  >
    <template v-slot:default="{ isActive }">
      <v-sheet>
        <v-row>
          <v-col cols="12">
            <v-list-item
              prepend-icon="mdi-magnify"
            >
              <v-text-field
                v-model="searchQuery"
                placeholder="Search..."
                single-line
                hide-details
                clearable
                width="100%"
                variant="plain"
              />
              <template v-slot:append>
                <v-btn
                  class="ma-2"
                  icon="mdi-cog-outline"
                  variant="text"
                ></v-btn>
              </template>
            </v-list-item>
          </v-col>
        </v-row>

        <!-- Result of Contacts -->
        <ItemsHeaderSearchContacts />

        <!-- Result of Pages -->
        <ItemsHeaderSearchPages />

        <!-- Result of Tasks -->
        <ItemsHeaderSearchTasks />
      </v-sheet>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
const searchQuery = ref('');
</script>