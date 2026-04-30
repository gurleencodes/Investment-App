<script setup>
import InvestmentCard from '../components/InvestmentCard.vue'

const investments = [
  { name: 'Bitcoin', price: 50000, change: '-1.5%' },
  { name: 'Ethereum', price: 3000, change: '+1.2%' },
  { name: 'Solana', price: 150, change: '+4%' }
]
</script>

<template>
  <div class="page">
    <h2>Crypto</h2>

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