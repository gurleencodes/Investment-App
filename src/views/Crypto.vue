<script setup>
import { computed } from 'vue'
import InvestmentCard from '../components/InvestmentCard.vue'

const props = defineProps(['investments'])
defineEmits(['edit', 'delete'])

const cryptoItems = computed(() => {
  return props.investments.filter(item => {
    return item.category === 'crypto'
  })
})
</script>

<template>
  <div class="page">
    <h2>Cryptocurrency</h2>
    <div class="cards-wrapper">
      <InvestmentCard
        v-for="item in cryptoItems"
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
</style>