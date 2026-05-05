<script setup>
import { computed } from 'vue'
import InvestmentCard from '../components/InvestmentCard.vue'

// This receives the list from App.vue
const props = defineProps(['investments'])

// Filters the master list for 'stock' items
const stockItems = computed(() => {
  return props.investments.filter(item => item.category === 'stocks')
})
</script>

<template>
  <div class="page">
    <h2>Stocks</h2>
    <div class="cards-wrapper">
      <InvestmentCard 
        v-for="(item, index) in stockItems" 
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

.page {
  font-family: 'Geneva', Tahoma, sans-serif;
  width: 100%;
  padding: 50px 30px 50px 30px;
}
</style>