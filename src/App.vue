<script setup>
  import { ref } from 'vue'
  import UI from './components/UI.vue'
  import SideBar from './components/SideBar.vue'
  import Popup from './components/Popup.vue'

  const showPopup = ref(false)
  
  const allInvestments = ref([
    { name: 'Apple', price: 200, change: '+2%', category: 'stocks' },
    { name: 'Bitcoin', price: 50000, change: '-1.5%', category: 'crypto' }
  ])

  const handleAdd = (newInvestment) => {
    // I'm creating a brand new array with the old items + the new one
    // This 'force refreshes' the UI so the headers don't disappear
    allInvestments.value = [...allInvestments.value, newInvestment]
    showPopup.value = false
  }
</script>

<template> 
  <div class="app-wrapper">
    <UI @add="showPopup = true"/>

    <div class="container">
      <SideBar class="navigation"/>
      <main class="content">
        <router-view :investments="allInvestments" />   
      </main>
    </div>

    <Popup v-if="showPopup" @close="showPopup = false" @add="handleAdd" />
  </div>
</template>

<style>
/* I'm setting the font globally here so every page feels consistent */
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

/* On mobile, I want the sidebar to go to the top and the content below it */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
    padding: 10px;
  }
  
  .navigation {
    width: 100% !important;
    flex-direction: row !important;
    overflow-x: auto; /* I'm making the menu scrollable sideways if it's too long */
    white-space: nowrap;
    gap: 10px !important;
  }
}
</style>