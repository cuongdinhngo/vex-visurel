<template>
  <v-card flat rounded="lg" class="mb-8">
    <v-card-title>About</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col
          :cols="breakpoints.sm || 12"
          :md="breakpoints.md || 6"
          :lg="breakpoints.lg || 4"
          v-for="(item, index) in profileInfo"
          :key="index"
        >
          <v-list-item class="text-black">
            <v-list-item-title class="text-subtitle-2">{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle class="text-subtitle-2">{{ item.subtitle }}</v-list-item-subtitle>
            <template #prepend>
              <v-avatar>
                <v-icon
                  :class="`pa-6 rounded-circle bg-${item.color}-lighten-4 text-${item.color}-darken-3`"
                >{{ item.icon }}</v-icon>
              </v-avatar>
            </template>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  breakpoints: {
    type: Object
  }
});

const profileInfo = [
  {
    title: 'Web Developer at IceCube',
    subtitle: 'Previously Designer at HotStuff',
    icon: 'mdi-briefcase',
    color: 'purple',
  },
  {
    title: 'Lives in San Francisco, CA',
    subtitle: 'From Los Angeles, CA',
    icon: 'mdi-map-marker',
    color: 'blue',
  },
  {
    title: 'Born on January 1, 1990',
    subtitle: 'Age: 33',
    color: 'pink',
    icon: 'mdi-cake-variant',
  },
  {
    title: 'Joined on January 1, 2010',
    icon: 'mdi-calendar',
    color: 'green',
    subtitle: 'Member for 13 years',
  },
  {
    title: 'Add Hobbies',
    icon: 'mdi-account-multiple',
    color: 'grey',
  },
  {
    title: 'Add Interests',
    icon: 'mdi-heart',
    color: 'grey',
  },
];
</script>