<script setup>
import InvestmentCard from '../components/InvestmentCard.vue'

const investments = [
  { name: 'Gold', price: 1900, change: '+0.5%' },
  { name: 'Silver', price: 25, change: '-0.8%' },
  { name: 'Oil', price: 70, change: '+1.3%' }
]
</script>

<template>
  <div class="page">
    <h2>Commodities</h2>

    <div class="cards-wrapper">
      <InvestmentCard 
        v-for="(item, index) in investments" 
        :key="index" 
        :data="item" 
      />
    </div>
  </div>
</template>

<style scoped>
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>