<script setup>
import InvestmentCard from '../components/InvestmentCard.vue'

const investments = [
  { name: 'Apple', price: 200, change: '+2%' },
  { name: 'Bitcoin', price: 50000, change: '-1.5%' }
]
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

<style scoped>   /* makes cards-wrapper look better */
  .cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>