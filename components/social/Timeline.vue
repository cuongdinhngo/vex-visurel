<template>
  <!-- Left Content -->
  <v-col cols="12" md="8">
    <!-- Photos -->
    <SocialPhotos />
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