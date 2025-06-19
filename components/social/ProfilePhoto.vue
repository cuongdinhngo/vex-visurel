<template>
  <v-card
    :image="dashboardImgPath('landscape.jpg')"
    tile
    class="mx-auto rounded-ts-lg rounded-te-lg profile-background"
    height="250"
    elevation="0"
  >
  </v-card>

  <!-- Profile Avatar -->
  <v-avatar
    size="120"
    image="https://randomuser.me/api/portraits/women/17.jpg"
    class="profile-avatar"
  ></v-avatar>

  <!-- Tabs -->
  <v-card-actions class="bg-white mx-auto rounded-bs-lg rounded-be-lg justify-center pb-0">
    <v-tabs
      center-active
      color="primary"
      :show-arrows="mobile"
      v-model="tab"
    >
      <v-tab
        v-for="item in profileMenu"
        :key="item.value"
        :value="item.value"
        :width="mobile ? 150 :200"
        :to="item.to"
      >{{ item.title }}</v-tab>
    </v-tabs>
  </v-card-actions>
</template>
<script setup lang="ts">
const tab = ref('profile');
const { mobile } = useDisplay();
const profileMenu = [
  {
    title: 'About',
    value: 'profile',
    to: '/social'
  },
  {
    title: 'Timeline',
    value: 'timeline',
    to: '/social/timeline'
  },
  {
    title: 'Friends',
    value: 'friends',
  },
  {
    title: 'Photos',
    value: 'photos',
  },
]
</script>
<style scoped>
.profile-background {
  position: relative;
  opacity: 0.8;
}
.profile-avatar {
  position: absolute;
  top: 250px;
  left: calc(25% - 60px);
  border: 4px solid white;
}

@media screen and (max-width: 600px) {
  .profile-avatar {
    top: 100px;
    left: calc(25% - 60px);
  }
}
</style>