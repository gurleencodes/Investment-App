<script setup>
import { ref } from 'vue'
const emit = defineEmits(['close', 'save'])

const name = ref('')
const price = ref('')

const submit = () => {
  emit('save', { 
    name: name.value, 
    price: price.value, 
    change: '0.0%' // Default for new entries
  })
  name.value = ''
  price.value = ''
}
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h3>Add New Investment</h3>
      <input v-model="name" placeholder="Stock Symbol (e.g. BTC)" />
      <input v-model="price" type="number" placeholder="Price" />
      
      <div class="actions">
        <button @click="emit('close')">Cancel</button>
        <button @click="submit" class="save-btn">Add to Portfolio</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;
}
.modal-content { background: white; padding: 20px; border-radius: 12px; width: 300px; }
input { display: block; width: 100%; margin: 10px 0; padding: 8px; box-sizing: border-box; }
.save-btn { background: #61afbd; color: white; }
</style>