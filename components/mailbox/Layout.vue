<template>
  <v-container fluid class="container-page pa-0 ma-0">
    <v-layout>
      <!-- Navigation Drawer for Mail -->
      <MailboxNavDrawer
        v-model="mailDrawer"
      />

      <!-- Main content area -->
      <v-main height="89vh" class="main-wrapper">

        <!-- Header with search input -->
        <v-list-item
          class="header pa-0 mr-4"
          slim
          :height="mobile ? 60 : 100"
        >
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            placeholder="Search mails..."
            density="comfortable"
            hide-details
            rounded="lg"
            color="primary"
          >
            <template #prepend v-if="mobile">
              <v-btn
                variant="text"
                icon
                @click="mailDrawer = !mailDrawer"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-list-item>

        <div :class="['d-flex align-center header-actions px-4 border-b-thin', { 'mr-4': !mobile }]">
          <div>
            <v-checkbox
              v-model="selectAll"
              color="primary"
              hide-details
              density="compact"
              multiple
            />
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-btn
              variant="text"
              color="primary"
              prepend-icon="mdi-refresh"
              density="compact"
              class="text-none"
            >
              Refresh
            </v-btn>
          </div>
        </div>

        <!-- Mail list and selected mail details -->
        <v-sheet :class="['d-flex', { 'mr-4': !mobile }]">
          <!-- Mail List -->
          <MailboxMailList
            v-model:selectAll="selectAll"
          />

          <!-- Mail Content Details -->
          <slot />
        </v-sheet>
      </v-main>
    </v-layout>
  </v-container>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { formatTimeAgo } from '@vueuse/core';

const { mobile } = useDisplay();
const { mails, getMailsViaCategory, getMailsViaLabel } = useMails();

const selectAll = ref([]);
const expandSenderInfo = ref(false);
const mailDrawer = ref(true);

</script>
<style scoped>
.container-page {
  background-color: #e3e2fd;
}
.header {
  background-color: #e3e2fd;
} 
.composer {
  height: 60px;
  background-color: #e3e2fd;
}
.header-actions {
  background-color: #ffffff;
  height: 60px;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}

.scrollbar
{
	height: 680px;
	overflow-y: scroll;
}

.scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
  display: none;
}

.scrollbar::-webkit-scrollbar
{
	width: 8px;
}

.scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #555;
  display: none;
}

.scrollbar:hover::-webkit-scrollbar-thumb, .scrollbar:hover::-webkit-scrollbar-track
{
  display: block;
}

.force-overflow
{
	min-height: 450px;
}
</style>