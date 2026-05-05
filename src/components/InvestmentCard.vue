<script setup>
defineProps(['data'])
</script>

<template> 
  <div class="card">
    <h3>{{ data.name }}</h3>
    <p class="price">${{ data.price }}</p>
    <p :class="data.change.includes('+') ? 'positive' : 'negative'">
      {{ data.change }}
    </p>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  font-family: 'Geneva', Tahoma, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  width: calc(50% - 12px); 
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
}

.price {
  margin: 6px 0;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  font-family: inherit;
}

p {
  font-family: inherit;
}

.positive {
  color: #349c5cff;
  font-weight: 600;
}

.negative {
  color: #b44545ff;
  font-weight: 600;
}
</style>