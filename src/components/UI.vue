<script setup>
const emit = defineEmits(['add'])
</script>

<template> 
  <header>
    <div class="title">
        <h1>Portfolio Overview</h1>
    </div>


    <button @click="emit('add')">+ Add Investment </button>  <!-- when button clicked, the header emits/signals to app.vue   --> 
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

button {
    padding: 10 px;
    background-color: #61afbd;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
</style>