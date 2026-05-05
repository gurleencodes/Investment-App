<script setup>
import { ref } from 'vue'
const emit = defineEmits(['add', 'close']) 

const name = ref('')
const price = ref('')
const change = ref('')
const category = ref('stocks')

const submitInvestment = () => {
  if (name.value && price.value) {
    emit('add', {
      name: name.value,
      price: price.value,
      change: change.value,
      category: category.value 
    })
    name.value = ''; price.value = ''; change.value = ''; category.value = 'stocks';
  }
}
</script>

<template>  
    <div class="overlay">
        <div class="popup">
            <h3>Add Investment</h3>
            <div class="form-group">
                <input v-model="name" type="text" placeholder="Name (e.g. Apple)"/>
                <input v-model="price" type="number" placeholder="Price"/>
                <input v-model="change" type="text" placeholder="Change (ex: +2%)"/>
                <div class="dropdown-area">
                    <label>Choose Category:</label>
                    <select v-model="category">
                        <option value="stocks">Stocks</option>
                        <option value="crypto">Crypto</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="commodities">Commodities</option>
                    </select>
                </div>
            </div>
            <div class="button-group">
                <button @click="submitInvestment" class="add-btn">Add</button>
                <button @click="$emit('close')" class="close-btn">Close</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup {
    font-family: 'Geneva', Tahoma, sans-serif;
    background: white;
    padding: 30px;
    border-radius: 24px;
    width: 340px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

h3, input, select, button, label {
    font-family: inherit;
}

input, select {
    padding: 14px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    font-size: 16px;
    background-color: #f9fafb;
}

button {
    flex: 1;
    padding: 14px;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

.add-btn { background-color: #61afbd; color: white; }
.close-btn { background-color: #f3f4f6; color: #666; }
/* ... existing positioning styles ... */
</style>