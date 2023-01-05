<template>
  <div id="app">
    <vue-typewriter-next :words="['Vue Typewriter Next', 'Typewriter of Vue3 Component', 'I Love Coding']" />
  </div>
</template>

<script setup lang="ts">
  import { VueTypewriterNext } from 'core'
</script>

<style scoped>
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
