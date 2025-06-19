<template>
  <v-card flat rounded="lg" class="mb-8">
    <v-card-title>Photos</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col cols="6" sm="6" md="4" lg="3" v-for="i in 20" :key="i">
          <v-img
            :src="`https://picsum.photos/200/200?random=${i}`"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>