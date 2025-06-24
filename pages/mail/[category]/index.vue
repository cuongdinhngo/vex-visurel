<template>
  <MailboxLayout>
    <div
      v-if="!mobile"
      class="mail-content d-flex justify-center"
    >
      <h3 class="read-message">Select a mail to read</h3>
    </div>
  </MailboxLayout>
</template>
<script setup lang="ts">
const { mobile } = useDisplay();
</script>
<style scoped>
.mail-content {
  background-image: url("/images/new_message.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  min-height: 400px; /* or height: 100vh; */
  width: 100%;
}

.read-message {
  position: relative;
  top: 20px;
}
</style>