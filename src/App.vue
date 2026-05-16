<script setup>
import { ref } from 'vue'
import UI from './components/UI.vue'
import SideBar from './components/SideBar.vue'
import Popup from './components/Popup.vue'

const showPopup = ref(false)
const editingInvestment = ref(null)
let nextId = 3

const allInvestments = ref([
  { id: 1, name: 'Apple', price: 200, change: '+2%', category: 'stocks' },
  { id: 2, name: 'Bitcoin', price: 50000, change: '-1.5%', category: 'crypto' }
])

const openAdd = () => {
  editingInvestment.value = null
  showPopup.value = true
}

const openEdit = (investment) => {
  editingInvestment.value = investment
  showPopup.value = true
}

const handleSave = (data) => {
  if (editingInvestment.value) {
    allInvestments.value = allInvestments.value.map(inv => {
      if (inv.id === editingInvestment.value.id) {
        return { ...data, id: inv.id }
      } else {
        return inv
      }
    })
  } else {
    allInvestments.value = [...allInvestments.value, { ...data, id: nextId++ }]
  }
  showPopup.value = false
  editingInvestment.value = null
}

const handleDelete = (id) => {
  allInvestments.value = allInvestments.value.filter(inv => inv.id !== id)
}
</script>

<template>
  <div class="app-wrapper">
    <UI @add="openAdd" />

    <div class="container">
      <SideBar class="navigation" />
      <main class="content">
        <router-view
          :investments="allInvestments"
          @edit="openEdit"
          @delete="handleDelete"
        />
      </main>
    </div>

    <Popup
      v-if="showPopup"
      :investment="editingInvestment"
      @close="showPopup = false"
      @add="handleSave"
    />
  </div>
</template>

<style>
:root {
  font-family: 'Geneva', Tahoma, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
  background-color: #f8fafc;
  color: #1e293b;
}

.container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.navigation {
  align-self: flex-start;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    padding: 10px;
  }

  .navigation {
    width: 100% !important;
    flex-direction: row !important;
    overflow-x: auto;
    white-space: nowrap;
    gap: 10px !important;
  }
}
</style>