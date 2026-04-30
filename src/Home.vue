<script setup>
import InvestmentCard from './components/InvestmentCard.vue'
defineProps(['investments'])
</script>

<template>
  <div class="page">
    <h2>Overview</h2>
    <div class="cards-wrapper">
      <InvestmentCard 
        v-for="(item, index) in investments" 
        :key="index" 
        :data="item" 
      />
    </div>
  </div>
</template>