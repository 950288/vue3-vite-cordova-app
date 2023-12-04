<script setup lang="ts">
import Menu from './components/Menu.vue'
</script>

<template>
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" class="main" />
    </transition>
  </router-view>
  <Menu />
</template>

<style scoped>
.main {
  box-sizing: border-box;
  padding: 1em;
  background-color: #ffffff;
  padding-bottom: 6em;
}
</style>
