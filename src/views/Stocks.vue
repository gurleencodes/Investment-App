<script setup>
import InvestmentCard from '../components/InvestmentCard.vue'

const investments = [
  { name: 'Apple', price: 200, change: '+2%' },
  { name: 'Tesla', price: 700, change: '+3%' },
  { name: 'Amazon', price: 3200, change: '-1%' }
]
</script>

<template>
  <div class="page">
    <h2>Stocks</h2>

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