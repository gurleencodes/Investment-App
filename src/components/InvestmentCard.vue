<script setup>
defineProps(['data'])
</script>

<template>  <-- recieves data via props -->
  <div class="card">
    <h3>{{ data.name }}</h3>
    <p>${{ data.price }}</p>
    <p :class="data.change.includes('+') ? 'positive' : 'negative'">
      {{ data.change }}
    </p>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 16px;
  gap: 30px;
  padding: 16px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  transition: all 0.2s ease;

  width: 180px;
}

/* hover effect */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

p {
  margin: 6px 0;
  font-size: 14px;
}

/* price */
p:nth-of-type(1) {
  font-weight: 500;
  color: #333;
}

/* positive / negative colors */
.positive {
  color: #16a34a;
  font-weight: 600;
}

.negative {
  color: #dc2626;
  font-weight: 600;
}
</style>