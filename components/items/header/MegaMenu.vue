<template>
  <v-menu
    offset="13"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        class="text-none rounded-pill"
        color="primary"
        v-bind="props"
      >
        <template v-slot:prepend>
          <v-icon size="8">mdi-triangle-down</v-icon>
        </template>  
        Mega Menu
      </v-btn>
    </template>
    <v-card max-width="1200px" max-height="500px" class="overflow-hidden">
      <v-container class="pa-0">
        <v-row>
          <!-- Mega menu description-->
          <v-col class="mega-description py-8 px-8">
            <h3 class="text-primary text-h5">Mega menu</h3>
            <p class="mega-menu-description text-caption my-4 text-black">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <div class="d-flex justify-center">
              <v-btn
                class="text-none bg-primary rounded-pill"
                href="#"
                width="100%"
              >
                Learn more
              </v-btn>
            </div>
          </v-col>

          <!-- Feature menus -->
          <v-col class="py-8 pl-6">
            <h5 class="py-2">Features</h5>
            <div class="features-grid">
              <v-card
                v-for="feature in MEGA_FEATURES"
                :key="feature.label"
                class="text-center"
                width="130px"
                height="80px"
                flat
                :to="feature.to"
                density="compact"
              >
                <v-card-title><v-icon color="primary">{{ feature.icon }}</v-icon></v-card-title>
                <v-card-title class="text-body-2 text-black">{{ feature.label }}</v-card-title>
              </v-card>
            </div>
          </v-col>

          <!-- Pages -->
          <v-col class="py-8 pl-8">
            <h5 class="py-2">Pages</h5>
            <div class="pages-grid">
              <v-list-item
                v-for="page in MEGA_PAGES"
                :key="page.label"
                width="150px"
                height="30px"
                class="pa-0 "
                density="compact"
              >
                <v-hover  v-slot="{ isHovering, props }">
                  <NuxtLink :to="page.to">
                    <v-list-item-title
                      v-bind="props"
                      :class="['text-body-2', isHovering ? 'text-primary' : 'text-black']">
                      {{ page.label }}
                    </v-list-item-title>
                  </NuxtLink>
                </v-hover>
              </v-list-item>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { MEGA_FEATURES, MEGA_PAGES } from '~/config/mega-menu';
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.pages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}

.mega-description {
  background-color: #e2e1f3;
}
</style>