<template>
  <v-card-text
    class="py-0 scrumboard-tasks"
    :min-height="minHeight"
    :max-height="maxHeight"
  >
    <slot />
  </v-card-text>
</template>
<script lang="ts" setup>
defineProps({
  maxHeight: {
    type: [String, Number],
    default: '600'
  },
  minHeight: {
    type: [String, Number],
    default: '450'
  }
});
</script>
<style scoped>
.scrumboard-tasks {
  overflow-y: scroll;
}

.scrumboard-tasks::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
  display: none;
}

.scrumboard-tasks::-webkit-scrollbar
{
	width: 4px;
	background-color: #E0E0E0;

}

.scrumboard-tasks::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #c1c0c2;
  display: none;
}

.scrumboard-tasks:hover::-webkit-scrollbar-thumb
{
  display: block;
}

.scrumboard-tasks:hover::-webkit-scrollbar-track
{
  display: block;
}
</style>