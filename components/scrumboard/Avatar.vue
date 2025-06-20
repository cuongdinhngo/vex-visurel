<template>
  <v-avatar
    :size="size"
    :image="image"
  ></v-avatar>
</template>
<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
  },
  size: {
    type: [Number, String],
    default: 24
  }
})
</script>
<style scoped>
.v-avatar:not(:first-child) {
  margin-left: -8px;
  border: 2px solid #fff;
  box-sizing: content-box;
}
</style>