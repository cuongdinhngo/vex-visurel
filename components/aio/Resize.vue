<template>
  <div class="page-actions d-flex align-center" v-if="!mobile">
    <div
      @click="handleResize(true)"
      class="px-5 py-3 rounded-ts-xl rounded-bs-xl"
      :class="[ isFullWidth === false ? 'bg-grey border-thin border-white' : 'bg-grey-lighten-3']"
    >Boxed</div>
    <div
      @click="handleResize(false)"
      class="px-5 py-3 rounded-te-xl rounded-be-xl"
      :class="[ isFullWidth ? 'bg-grey border-thin border-white' : 'bg-grey-lighten-3']"
    >Full-Width</div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['resize']);

const { mobile } = useDisplay();

const isFullWidth = defineModel('isFullWidth', {
  type: Boolean,
  default: false,
});

function handleResize(isBoxed: boolean = true) {
  isFullWidth.value = !isBoxed;
  emit('resize', isBoxed);
}
</script>
<style scoped>
.border-white {
  border-color: #ffffff !important;
}
</style>