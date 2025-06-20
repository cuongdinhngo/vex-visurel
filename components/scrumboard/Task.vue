<template>
  <v-card class="rounded-lg text-black mb-4" flat>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200"
      width="300"
      class="rounded-t-lg"
      cover
    ></v-img>
    <v-card-title class="d-flex align-center">
      <span class="bg-green sticker"></span>
      <span class="bg-orange sticker"></span>
    </v-card-title>
    <v-card-title class="text-subtitle-2">
      Task Title
    </v-card-title>
    <v-card-title class="d-flex justify-space-between align-center">
      <div class="ga-1 d-flex align-center mr-2">
        <v-chip
          prepend-icon="mdi-calendar"
          color="green"
          variant="flat"
          size="small"
        >Jun, 25</v-chip>

        <v-chip
          prepend-icon="mdi-email"
          color="grey"
          variant="flat"
          size="small"
        >3</v-chip>
        <v-chip
          prepend-icon="mdi-map-marker"
          color="grey"
          variant="flat"
          size="small"
        >3</v-chip>
      </div>

      <div class="d-flex align-center">
        <ScrumboardAvatar
          v-for="i in 3"
          :image="`https://cdn.vuetifyjs.com/images/lists/${i}.jpg`"
          size="24"
        />
      </div>
    </v-card-title>
  </v-card>
</template>
<style scoped>
.sticker {
  margin-right: 5px;
  height: 5px;
  width: 40px;
  display: block;
  border-radius: 5px;
}

</style>