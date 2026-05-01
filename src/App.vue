<script setup>
  import UI from './components/UI.vue'
  import SideBar from './components/SideBar.vue'
</script>

<template> 
  <UI />

  <div class="container">
    <SideBar />
    <router-view />   </div>
</template>

<style scoped>
  .container {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
</style>