<script setup>
import InvestmentCard from '../components/InvestmentCard.vue'

defineProps(['investments'])
defineEmits(['edit', 'delete'])
</script>

<template>
  <div class="page">
    <h2>Portfolio Overview</h2>
    <div class="cards-wrapper">
      <InvestmentCard
        v-for="item in investments"
        :key="item.id"
        :data="item"
        @edit="$emit('edit', item)"
        @delete="$emit('delete', item.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  font-family: 'Geneva', Tahoma, sans-serif;
  width: 100%;
  padding: 50px 30px 50px 30px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 600px) {
  .cards-wrapper {
    justify-content: center;
  }
}
</style>