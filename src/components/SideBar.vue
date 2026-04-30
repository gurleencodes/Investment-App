<script setup>
</script>

<template>
  <div class="side-bar">
    <router-link to="/"> Home </router-link>
    <router-link to="/stocks"> Stocks </router-link>
    <router-link to="/crypto">Crypto</router-link>
    <router-link to="/real-estate">Real Estate</router-link>
    <router-link to="/commodities">Commodities</router-link>
  </div>
</template>

<style scoped>
.side-bar {
    width: 200px; 
    flex-shrink: 0; 
    display: flex;
    flex-direction: column;
    gap: 25px;
    background: white;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
}

a{
    padding: 8px 14px;
    font-size: 14px;
    font-family: Geneva;
    background-color: white;
    color: #61afbd;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s ease;
}

a:hover {
    background-color: #f3f4f6;
}
</style>