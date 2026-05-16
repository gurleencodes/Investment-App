<script setup>
defineProps(['data'])
defineEmits(['edit', 'delete'])
</script>

<template>
  <div class="card">
    <h3>{{ data.name }}</h3>
    <p class="price">${{ data.price }}</p>
    <p :class="data.change.includes('+') ? 'positive' : 'negative'">
      {{ data.change }}
    </p>
    <div class="actions">
      <button class="btn-edit" @click="$emit('edit')">Edit</button>
      <button class="btn-delete" @click="$emit('delete')">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  font-family: 'Geneva', Tahoma, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: calc(50% - 12px);
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.price {
  margin: 6px 0;
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

p {
  font-family: inherit;
}

.positive {
  color: #349c5c;
  font-weight: 600;
}

.negative {
  color: #b44545;
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.btn-edit {
  flex: 1;
  padding: 7px 0;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: #e8f4f7;
  color: #61afbd;
}

.btn-delete {
  flex: 1;
  padding: 7px 0;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: #fdecea;
  color: #b44545;
}

.btn-edit:hover {
  opacity: 0.75;
}

.btn-delete:hover {
  opacity: 0.75;
}
</style>