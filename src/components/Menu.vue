<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
    <nav>
      <router-link to="/" class="link-icon"><img src="@/assets/all.svg" alt=""></router-link>
      <router-link to="/about" class="link-icon"><img src="@/assets/transport.svg" alt="" class="center"></router-link>
      <router-link to="/user" class="link-icon"><img src="@/assets/user.svg" alt=""></router-link>
    </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4em;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(94, 121, 190);

  .link-icon{
    height: 100%;
    background-color: inherit;
    img {
    height: 100%;
    aspect-ratio: 1/1;
    background-size: contain;
    }
    img.center {
      transform: scale(1.7) translateY(-0.5em);
      background-color: inherit;
      border-radius: 15%;
    }
  
  }
}
</style>
