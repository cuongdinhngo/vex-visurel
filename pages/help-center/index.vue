<template>
  <v-container 
    fluid
    class="helper-header bg-background"
  >
    <v-row
      class="
        search-header
        d-flex justify-center align-center text-center
      "
    >
      <v-col cols="12" md="9">
        <h3 class="text-h4">Hello, how can we help?</h3>
      </v-col>
      <v-col cols="12" md="9">
        <v-text-field
          placeholder="Search for answers..."
          variant="plain"
          width="50%"
          hide-details
          class="mx-auto bg-white rounded-pill pb-4 px-5"
        >
          <template #append-inner>
            <v-btn
              class="rounded-pill bg-primary text-white"
              variant="tonal"
              size="small"
            >Search</v-btn>
          </template>
          <template #prepend-inner>
            <v-icon>mdi-magnify</v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row
      class="
        tabs-header
        d-flex justify-center
      "
    >
      <v-col cols="12" md="11">
        <v-row>
          <v-col
            cols="6" md="3"
            v-for="item in helperItems"
            :key="item.icon"
          >
            <v-hover>
              <template #default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  :to="item.to"
                  :class="[
                    { 'active-card': isActiveTab(item.value) },
                    'text-center cursor-pointer elevation-0',
                  ]"
                  :variant="isHovering ? 'tonal' : 'flat'"
                  v-ripple
                >
                  <v-card-title class="text-h6 py-4">
                    <v-icon size=40>{{ item.icon }}</v-icon>
                  </v-card-title>
                  <v-card-title class="text-h6">{{ item.title }}</v-card-title>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-white" fluid>
    <v-row class="help-content d-flex justify-center align-center text-center">
      <v-col cols="12" md="9">
        <v-card elevation="0" class="text-black">
          <v-card-title class="text-h4">{{ acctiveComponent.title }}</v-card-title>
          <v-card-subtitle class="text-subtitle-1">{{ acctiveComponent.brief }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-background" fluid>
    <v-row class="help-content d-flex justify-center align-center">
      <v-col cols="12" md="11">
        <component :is="resolveComponent()" />
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-white" fluid>
    <v-row class="search-header d-flex justify-center align-center text-center">
      <v-col cols="12" md="9">
        <h3 class="text-h4">Still have questions?</h3>
      </v-col>
      <v-col cols="12" md="6">
        <p>
          A wonderful serenity has taken possession of my entire soul, 
          like these sweet mornings of spring which I enjoy with my whole heart.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-white helper-contact" fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="3">
        <v-card
          class="elevation-0 text-center py-5 border-sm"
          variant="text"
        >
          <v-card-title class="text-h6">
            <v-avatar
              size="50"
              class="bg-primary text-white pa-8"
              rounded="circle"
            >
              <v-icon size="40">mdi-headset</v-icon>
            </v-avatar>
          </v-card-title>
          <v-card-text>
            <p>Contact our support team for assistance.</p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              class="rounded-pill bg-primary text-white"
              variant="tonal"
              size="small"
            >Contact Support</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card
          class="elevation-0 text-center py-5 border-sm"
          variant="text"
        >
          <v-card-title class="text-h6">
            <v-avatar
              size="50"
              class="bg-primary text-white pa-8"
              rounded="circle"
            >
              <v-icon size="40">mdi-headset</v-icon>
            </v-avatar>
          </v-card-title>
          <v-card-text>
            <p>Contact our support team for assistance.</p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              class="rounded-pill bg-primary text-white"
              variant="tonal"
              size="small"
            >Contact Support</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import Faq from './faq.vue';
import GettingStarted from './getting-started.vue';
import Guides from './guides.vue';
import Pricing from './pricing.vue';

const route = useRoute();
const { mobile } = useDisplay();
const acctiveComponent = computed(() => {
  return helperItems.filter(item => item.value === route.query.tab)[0];
});

const currentTab = computed(() => route.query.tab as string || 'getting-started')
const isActiveTab = (tabValue: string): boolean => {
  return currentTab.value === tabValue
}

const componentMap = {
  'getting-started': GettingStarted,
  'faq': Faq,
  'pricing': Pricing,
  'guides': Guides
};
const resolveComponent = () => {
  return componentMap[route.query.tab] || GettingStarted;
};

const helperItems = [
  {
    title: 'Getting Started',
    value: 'getting-started',
    brief: 'Learn how to set up and use our platform effectively.',
    icon: 'mdi-flag',
    to: { name: 'help-center', query: { tab: 'getting-started'} } 
  },
  {
    title: 'FAQ',
    value: 'faq',
    brief: 'Find answers to common questions about our services.',
    icon: 'mdi-help-circle',
    to: { name: 'help-center', query: { tab: 'faq'} }
  },
  {
    title: 'Pricing',
    value: 'pricing',
    brief: 'Explore our pricing plans and find the best fit for you.',
    icon: 'mdi-currency-usd',
    to: { name: 'help-center', query: { tab: 'pricing'} }
  },
  {
    title: 'Guides',
    value: 'guides',
    brief: 'Step-by-step guides to help you navigate our platform.',
    icon: 'mdi-book-open-page-variant',
    to: { name: 'help-center', query: { tab: 'guides'} }
  },
];
</script>
<style scoped>
.helper-header {
  background-image: url("/images/helper_bg_image.svg");
  background-repeat: repeat;
}
.helper-contact {
  background-image: url("/images/it_support.svg");
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 250px;
  @media (max-width: 1264px) {
    padding-bottom: 250px;
  }
}
.active-card {
  background-color: #4f46e51a;
  border: 1px solid rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-primary));
}
.search-header {
  margin: 70px 0 !important;
}
.tabs-header {
  margin: 20px 0 !important;
}
.help-content {
  padding: 40px 0 !important;
}
</style>