<script setup>
import { computed } from 'vue'
import InvestmentCard from '../components/InvestmentCard.vue'

const props = defineProps(['investments'])
defineEmits(['edit', 'delete'])

// Add up every investment's price to get the total portfolio value
const totalValue = computed(function () {
  let total = 0
  for (let i = 0; i < props.investments.length; i++) {
    total = total + props.investments[i].price
  }
  return total
})

// Find the investment with the highest price change (most positive)
const bestPerformer = computed(function () {
  if (props.investments.length === 0) {
    return null
  }

  let best = props.investments[0]

  for (let i = 1; i < props.investments.length; i++) {
    const current = props.investments[i]
    const currentChange = parseFloat(current.change)
    const bestChange = parseFloat(best.change)

    if (currentChange > bestChange) {
      best = current
    }
  }

  return best
})

// Find the investment with the lowest price change (most negative)
const worstPerformer = computed(function () {
  if (props.investments.length === 0) {
    return null
  }

  let worst = props.investments[0]

  for (let i = 1; i < props.investments.length; i++) {
    const current = props.investments[i]
    const currentChange = parseFloat(current.change)
    const worstChange = parseFloat(worst.change)

    if (currentChange < worstChange) {
      worst = current
    }
  }

  return worst
})

// Count how many investments are in each category
const categoryCount = computed(function () {
  const counts = {}

  for (let i = 0; i < props.investments.length; i++) {
    const cat = props.investments[i].category

    if (counts[cat] === undefined) {
      counts[cat] = 0
    }
    counts[cat] = counts[cat] + 1
  }

  return counts
})
</script>

<template>
  <div class="page">
    <h2>Portfolio Overview</h2>

    <!-- Stat Cards -->
    <div class="stats-grid">

      <div class="stat-card">
        <span class="stat-icon">💰</span>
        <span class="stat-label">Total Value</span>
        <span class="stat-value">${{ totalValue.toLocaleString() }}</span>
      </div>

      <div class="stat-card">
        <span class="stat-icon">📦</span>
        <span class="stat-label">Holdings</span>
        <span class="stat-value">{{ investments.length }}</span>
      </div>

      <div class="stat-card">
        <span class="stat-icon">📈</span>
        <span class="stat-label">Best Performer</span>
        <span class="stat-value" v-if="bestPerformer">{{ bestPerformer.name }}</span>
        <span class="stat-value muted" v-else>—</span>
        <span class="stat-sub positive" v-if="bestPerformer">{{ bestPerformer.change }}</span>
      </div>

      <div class="stat-card">
        <span class="stat-icon">📉</span>
        <span class="stat-label">Worst Performer</span>
        <span class="stat-value" v-if="worstPerformer">{{ worstPerformer.name }}</span>
        <span class="stat-value muted" v-else>—</span>
        <span class="stat-sub negative" v-if="worstPerformer">{{ worstPerformer.change }}</span>
      </div>

    </div>

    <!-- Category Breakdown -->
    <div class="breakdown" v-if="investments.length > 0">
      <h3 class="section-heading">By Category</h3>
      <div class="breakdown-row" v-for="(count, category) in categoryCount" :key="category">
        <span class="breakdown-label">{{ category }}</span>
        <span class="breakdown-count">{{ count }} holding{{ count > 1 ? 's' : '' }}</span>
      </div>
    </div>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- All Investment Cards -->
    <h3 class="section-heading">All Investments</h3>
    <div class="cards-wrapper" v-if="investments.length > 0">
      <InvestmentCard
        v-for="item in investments"
        :key="item.id"
        :data="item"
        @edit="$emit('edit', item)"
        @delete="$emit('delete', item.id)"
      />
    </div>
    <p class="empty" v-else>No investments yet. Click + Add Investment to get started!</p>
  </div>
</template>

<style scoped>
.page {
  font-family: 'Geneva', Tahoma, sans-serif;
  width: 100%;
  padding: 40px 30px;
}

h2 {
  color: #1e293b;
  margin: 0 0 24px 0;
  font-size: 22px;
}

/* Stat Cards Grid */
.stats-grid {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.stat-card {
  background: white;
  border-radius: 18px;
  padding: 20px 24px;
  flex: 1;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.09);
}

.stat-icon {
  font-size: 22px;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #94a3b8;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
}

.stat-value.muted {
  color: #cbd5e1;
}

.stat-sub {
  font-size: 13px;
  font-weight: 600;
}

.positive {
  color: #349c5c;
}

.negative {
  color: #b44545;
}

/* Category Breakdown */
.breakdown {
  background: white;
  border-radius: 18px;
  padding: 20px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  margin-bottom: 10px;
}

.breakdown-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f3f4f6;
  font-size: 14px;
}

.breakdown-row:last-child {
  border-bottom: none;
}

.breakdown-label {
  font-weight: 600;
  color: #475569;
  text-transform: capitalize;
}

.breakdown-count {
  font-size: 12px;
  font-weight: 600;
  color: #61afbd;
  background: #e8f4f7;
  padding: 3px 10px;
  border-radius: 20px;
}

/* Divider */
.divider {
  height: 1px;
  background: #e5e7eb;
  margin: 28px 0 20px 0;
}

/* Section heading */
.section-heading {
  color: #475569;
  font-size: 12px;
  font-weight: 700;
  margin: 0 0 14px 0;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

/* Cards */
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.empty {
  color: #94a3b8;
  font-size: 14px;
  margin: 0;
}
</style>