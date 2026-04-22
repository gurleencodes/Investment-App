<script setup>
import { ref } from 'vue'
import UI from './components/UI.vue'
import InvestmentCard from './components/InvestmentCard.vue'
import SideBar from './components/SideBar.vue'

const count = ref(3)        //ref is a live var so when count changes, vue redoes html using count
</script>

<template> 
  <UI @add="count++"/>
  
  <div class="container">
    <SideBar/>
    <div class="cards-wrapper">
      <InvestmentCard v-for="n in count" :key="n" />        <!-- for n times in count, have investment card that n times -->
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    gap: 20px;
    padding: 20px;
  }

  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex: 1;
  }
</style>