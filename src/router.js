import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Stocks from './views/Stocks.vue'
import Crypto from './views/Crypto.vue'
import RealEstate from './views/RealEstate.vue'
import Commodities from './views/Commodities.vue'

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