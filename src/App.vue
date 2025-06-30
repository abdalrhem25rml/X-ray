<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <Transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style>
/* Basic global styles, moved from previous App.vue */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  overflow-x: hidden; /* Prevent horizontal scroll during transitions */
}

#app {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
}

/* Page Transition Styles */
/* These define the animation for route changes */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s ease; /* Fade duration */
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0; /* Start/End completely transparent */
}
</style>
