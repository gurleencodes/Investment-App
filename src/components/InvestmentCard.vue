<script setup>
defineProps(['data'])
</script>

<template>
  <div class="card">
    <h3>{{ data.name }}</h3>
    <p>${{ data.price }}</p>
    <p :class="data.change.includes('+') ? 'positive' : 'negative'">
      {{ data.change }}
    </p>
  </div>
</template>