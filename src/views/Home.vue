<script setup>
import InvestmentCard from '../components/InvestmentCard.vue'

// receiving the full list of investments from App.vue as a prop
const props = defineProps(['investments'])
</script>

<template>
  <div class="page">
    <h2>Portfolio Overview</h2>
    
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
.page {
  /* updated this to match Sidebar font */
  font-family: 'Geneva', Tahoma, sans-serif;
  width: 100%;
  padding: 50px 30px 50px 30px;
}

h2 {
  font-family: inherit;
  color: #333;
  margin-bottom: 20px;
}

.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* This helps the page look better on iPhone */
@media (max-width: 600px) {
  .cards-wrapper {
    justify-content: center;
  }
}
</style>