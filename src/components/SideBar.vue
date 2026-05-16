<script setup>
</script>

<template>
  <div class="side-bar">
    <router-link to="/"> Home</router-link>
    <router-link to="/stocks"> Stocks</router-link>
    <router-link to="/crypto"> Crypto</router-link>
    <router-link to="/real-estate"> Real Estate</router-link>
    <router-link to="/commodities"> Commodities</router-link>
  </div>
</template>

<style scoped>
.side-bar {
  width: 130px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: white;
  padding: 20px 14px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

a {
  padding: 10px 14px;
  font-size: 15px;
  font-family: Geneva, Tahoma, sans-serif;
  font-weight: 600;
  background-color: white;
  color: #000000ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

a:hover {
  background-color: #f0f9fb;
  color: #61afbd;
}

a.router-link-active {
  background-color: #e8f4f7;
  color: #61afbd;
}
</style>