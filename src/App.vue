<script setup>
import { ref } from 'vue'
import UI from './components/UI.vue'
import SideBar from './components/SideBar.vue'
import AddInvestmentModal from './components/AddInvestmentModal.vue'

const showModal = ref(false)
const investments = ref([
  { name: 'AAPL', price: '180.00', change: '+2.3%' },
  { name: 'TSLA', price: '240.50', change: '-1.1%' }
])

const addNewItem = (item) => {
  investments.value.push(item)
  showModal.value = false
}
</script>

<template>
  <UI @add="showModal = true" />
  
  <div class="container">
    <SideBar />
    <router-view :investments="investments" />    <!-- where pages appear -->
  </div>

  <AddInvestmentModal 
    v-if="showModal" 
    @close="showModal = false" 
    @save="addNewItem" 
  />
</template>