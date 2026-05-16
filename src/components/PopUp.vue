<script setup>
import { ref } from 'vue'

const props = defineProps(['investment'])
const emit = defineEmits(['close', 'add'])

const isEditing = !!props.investment
const name = ref(props.investment ? props.investment.name : '')
const price = ref(props.investment ? props.investment.price : '')
const change = ref(props.investment ? props.investment.change : '')
const category = ref(props.investment ? props.investment.category : 'stocks')

const save = () => {
  if (!name.value || !price.value || !change.value) {
    return
  }

  emit('add', {
    name: name.value,
    price: Number(price.value),
    change: change.value,
    category: category.value
  })

  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">

        <div class="modal-header">
          <h2>{{ isEditing ? 'Edit Investment' : 'New Investment' }}</h2>
          <p>Fill in the details below</p>
        </div>

        <div class="modal-body">
          <div class="input-group">
            <label>Name</label>
            <input v-model="name" placeholder="ex: Apple" />
          </div>

          <div class="input-group">
            <label>Price ($)</label>
            <input v-model="price" type="number" placeholder="ex: 200" />
          </div>

          <div class="input-group">
            <label>Change</label>
            <input v-model="change" placeholder="ex: +2% or -1.5%" />
          </div>

          <div class="input-group">
            <label>Category</label>
            <select v-model="category">
              <option value="stocks">Stocks</option>
              <option value="crypto">Crypto</option>
              <option value="real-estate">Real Estate</option>
              <option value="commodities">Commodities</option>
            </select>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn-save" @click="save">
            {{ isEditing ? 'Update' : 'Save' }}
          </button>
          <button class="btn-cancel" @click="$emit('close')">Cancel</button>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-window {
  background: white;
  width: 90%;
  max-width: 400px;
  border-radius: 28px;
  padding: 40px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modalPop {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-header h2 {
  margin: 0;
  font-size: 1.6rem;
}

.modal-header p {
  color: #888;
  margin: 8px 0 25px;
  font-size: 0.95rem;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 700;
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input {
  padding: 14px;
  border: 2px solid #f3f4f6;
  border-radius: 14px;
  font-size: 1rem;
  background: #f9fafb;
}

select {
  padding: 14px;
  border: 2px solid #f3f4f6;
  border-radius: 14px;
  font-size: 1rem;
  background: #f9fafb;
}

input:focus {
  outline: none;
  border-color: #61afbd;
  background: white;
}

select:focus {
  outline: none;
  border-color: #61afbd;
  background: white;
}

.modal-actions {
  margin-top: 35px;
  display: flex;
  gap: 15px;
}

.btn-save {
  flex: 2;
  background: #61afbd;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(97, 175, 189, 0.3);
}

.btn-cancel {
  flex: 1;
  background: #f3f4f6;
  color: #666;
  border: none;
  padding: 16px;
  border-radius: 14px;
  font-weight: 600;
  cursor: pointer;
}
</style>