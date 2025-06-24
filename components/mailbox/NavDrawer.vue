<template>
  <v-navigation-drawer
    v-model="mailDrawer"
    width="300"
    floating
    class="nav-drawer"
  >
    <!-- Header with icon and title -->
    <v-list-item
      v-if="!mobile"
      slim class="header pl-6 text-black"
      height="100"
    >
      <template #prepend>
        <v-icon size="40">mdi-email</v-icon>
      </template>
      <v-list-item-title class="text-h4">Mail</v-list-item-title>
    </v-list-item>

    <v-list-item-title class="composer d-flex justify-center align-center">
      <v-btn
        variant="flat"
        color="primary"
        rounded="pill"
        class="text-none text-subtitle-2"
        width="80%"
      >
        Compose
      </v-btn>
    </v-list-item-title>

    <div>
      <v-list
        class="text-black bg-background"
        v-for="(menu, index) in mailMenu"
        :key="index"
      >
        <v-list-subheader>{{ menu.subHeader }}</v-list-subheader>
        <v-list-item
          v-for="item in menu.items"
          :key="item.icon"
          :title="item.title"
          :prepend-icon="item.icon"
          :to="item.to"
          class="text-none"
          link
          density="compact"
          slim
          @click.prevent="handleNavigation(item.to)"
        ></v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';

const router = useRouter();
const { mobile, smAndUp } = useDisplay();

const mailMenu = [
  {
    subHeader: 'Browse',
    items: [
      { title: 'Inbox', icon: 'mdi-inbox', to: { name: 'mail-category', params: { category: 'inbox'}} },
      { title: 'Sent', icon: 'mdi-send', to: { name: 'mail-category', params: { category: 'sent'}} },
      { title: 'Drafts', icon: 'mdi-file-document', to: { name: 'mail-category', params: { category: 'drafts'}} },
      { title: 'Spam', icon: 'mdi-alert-octagon', to: { name: 'mail-category', params: { category: 'spam'}} },
    ]
  },
  {
    subHeader: 'Labels',
    items: [
      { title: 'Work', icon: 'mdi-briefcase', to: { name: 'mail-category', params: { category: 'work'}} },
      { title: 'Personal', icon: 'mdi-account', to: { name: 'mail-category', params: { category: 'personal'}} },
      { title: 'Important', icon: 'mdi-star', to: { name: 'mail-category', params: { category: 'important'}} },
      { title: 'Social', icon: 'mdi-archive', to: { name: 'mail-category', params: { category: 'social'}} },
    ]
  }
];

const mailDrawer = defineModel('mailDrawer', {
  type: Boolean,
  default: false
});

function handleNavigation(to) {
  if (mobile.value) {
    mailDrawer.value = false;
  }
  router.push(to);
}

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
</style>