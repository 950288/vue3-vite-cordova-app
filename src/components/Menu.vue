<script setup lang="ts">
import { currentRoute } from "@/router"
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <nav>
    <router-link to="/" class="link-icon" :class="{ 'current': currentRoute == 'Home' }"><img src="@/assets/all.svg" alt=""></router-link>
    <router-link to="/about" class="link-icon" :class="{ 'current': currentRoute == 'About' }"><img src="@/assets/transport.svg" alt=""></router-link>
    <router-link to="/user" class="link-icon" :class="{ 'current': currentRoute == 'User' }"><img src="@/assets/user.svg" alt=""></router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  box-shadow: 0 0px 100px #cecece;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4em;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  
  .link-icon {
    transition: all 0.2s ease-out;
    height: 100%;
    display: block;
    border-radius: 50%;
    aspect-ratio: 1/1;

    img {
      height: 80%;
      margin-top: 10%;
      aspect-ratio: 1/1;
      background-size: contain;
      // filter: invert(48%) sepia(100%) saturate(1500%) hue-rotate(80deg) brightness(90%) contrast(90%);
      // filter: invert(60%) sepia(20%) saturate(1500%) hue-rotate(90deg) brightness(110%) contrast(90%);
    }

  }

  .link-icon.current{
    background-color: #98cf9a;
    transform: translateY(-30%);
    box-shadow: 0 0 0 5px #ffffff;
  }
}
</style>
