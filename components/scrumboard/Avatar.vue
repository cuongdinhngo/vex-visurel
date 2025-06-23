<template>
  <v-avatar
    :size="size"
    :color="isLimited ? 'grey' : ''"
  >
    <span v-if=isLimited :class="textFontSize">{{ image }}</span>
    <v-img v-else :src="image"></v-img>
  </v-avatar>
</template>
<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 24
  },
  isLimited: {
    type: Boolean,
    default: true
  },
  textFontSize: {
    type: String,
    default: 'text-caption'
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