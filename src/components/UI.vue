<script setup>
const emit = defineEmits(['add'])
</script>

<template> 
  <header>
    <div class="title">
        <h1>Portfolio</h1>
        <span class="subtitle">Overview</span>
    </div>

    <div class="buttons">
      <button @click="emit('add')">+ Add Investment </button>  <!-- when button clicked, the header emits/signals to app.vue   -->
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

h1 {
  color: #61afbd;
}

.title{
    padding: 15px;
}

button{
  padding: 12px 20px; /* fix spacing */
  background-color: #61afbd;
  color: white;

  border: none;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.6s ease;

  box-shadow: 0 4px 10px rgba(8, 29, 33, 0.3);
}

.subtitle {
  font-size: 18px;
  font-weight: 600;
  color: #61afbd;
}

button:hover {
  background-color: #2e7585ff;
  box-shadow: 0 6px 12px rgba(8, 29, 33, 0.4);
}
</style>