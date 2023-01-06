<template>
  <div id="app">
    <div>
      <vue-typewriter-next :words="['I Love Coding', 'Vue Typewriter Next', 'Typewriter of Vue3 Component']" />
    </div>
    <div>
      <vue-typewriter-next :words="['Flexable', 'Amazing']" prefix-txt="Vue Typewriter Next is" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { VueTypewriterNext } from 'core'
</script>

<style>
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .vue-typewriter-next__label-container {
    margin-bottom: 10px;
  }
  .vue-typewriter-next__typewriter {
    font-size: 30px;
    color: rgba(143, 0, 0, 0.644);
  }
</style>
