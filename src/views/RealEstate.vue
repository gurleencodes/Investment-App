<script setup>
import InvestmentCard from '../components/InvestmentCard.vue'

const investments = [
  { name: 'NY Apartment', price: 800000, change: '+1%' },
  { name: 'LA House', price: 1200000, change: '+2.5%' },
  { name: 'Miami Condo', price: 600000, change: '-0.5%' }
]
</script>

<template>
  <div class="page">
    <h2>Real Estate</h2>

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