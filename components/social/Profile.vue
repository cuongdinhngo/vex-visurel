<template>
  <!-- Left Content -->
  <v-col cols="12" md="8">
    <!-- Personal Info -->
    <SocialAbout
      :breakpoints="{
        sm: 12,
        md: 6,
        lg: 4
      }"
    />

    <!-- Photos -->
    <SocialPhotos />
  </v-col>

  <!-- Right Suggestions -->
  <v-col cols="12" md="4">
    <SocialFriendSuggestions />
  </v-col>
</template>