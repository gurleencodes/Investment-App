<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add', 'close'])  //Modal sends data up to app.vue

const name = ref('')
const amount = ref('')

const submit = () => {
  emit('add', {
    name: name.value,
    amount: amount.value
  })

  name.value = ''
  amount.value = ''
}
</script>

<template>  <-- emits data back to app.vue when user clicks add button -->
  <div class="modal-overlay">
    <div class="modal">
      <h2>Add Investment</h2>

      <input v-model="name" placeholder="Name" />
      <input v-model="amount" placeholder="Amount" />

      <button @click="submit">Add</button>
      <button @click="emit('close')">Cancel</button>
    </div>
  </div>
</template>