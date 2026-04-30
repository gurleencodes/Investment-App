import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Stocks from './Stocks.vue' 

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home   
  },
  { 
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  },
  { 
    path: '/crypto',
    name: 'Crypto',
    component: Crypto
  },
  { 
    path: '/real-estate',
    name: 'RealEstate',
    component: RealEstate
  },
  { 
    path: '/commodities',
    name: 'Commodities',
    component: Commodities
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router