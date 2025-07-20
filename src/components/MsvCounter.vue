<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentMsv: { type: Number, default: 0 },
  yearlyLimit: { type: Number, default: 1 },
  currentLanguage: String,
  isLoading: { type: Boolean, default: true }, // ✅ NEW: Prop to control loading state
})

const statusClass = computed(() => {
  const percentage = props.yearlyLimit > 0 ? (props.currentMsv / props.yearlyLimit) * 100 : 0
  if (percentage < 50) return 'status-safe'
  if (percentage < 100) return 'status-warning'
  return 'status-danger'
})
</script>

<template>
  <!-- ✅ MODIFIED: Conditionally render based on the isLoading prop -->
  <div class="msv-counter" :class="statusClass">
    <div v-if="isLoading" class="loading-state">
      {{ currentLanguage === 'en' ? 'Calculating...' : 'جاري الحساب...' }}
    </div>
    <template v-else>
      <span class="counter-label">
        {{ currentLanguage === 'en' ? 'Annual Dose:' : 'الجرعة السنوية:' }}
      </span>
      <div class="progress-details">
        <div class="counter-bar-container">
          <div
            class="counter-bar"
            :style="{
              width: Math.min((currentMsv / yearlyLimit) * 100, 100) + '%',
            }"
          ></div>
        </div>
        <span class="counter-value"> {{ currentMsv.toFixed(2) }} mSv </span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.msv-counter {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #f7f9fc;
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid #eef2f7;
  min-width: 250px;
  transition: background-color 0.4s ease;
}
/* ✅ NEW: Style for the loading state text */
.loading-state {
  font-size: 0.85em;
  font-weight: 600;
  color: #5a6e8a;
  width: 100%;
  text-align: center;
  font-style: italic;
}
.counter-label {
  font-size: 0.85em;
  font-weight: 600;
  color: #5a6e8a;
  white-space: nowrap;
}
.progress-details {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.counter-value {
  font-family: 'Inter', monospace, sans-serif;
  font-size: 0.9em;
  font-weight: 700;
  color: #334155;
  white-space: nowrap;
  transition: color 0.4s ease;
}
.counter-bar-container {
  flex-grow: 1;
  height: 10px;
  background-color: #e2e8f0;
  border-radius: 5px;
  overflow: hidden;
}
.counter-bar {
  height: 100%;
  border-radius: 5px;
  transition:
    width 0.5s ease,
    background-color 0.4s ease;
}

/* Status Colors using CSS Classes */
.status-safe .counter-bar {
  background-color: #34d399;
}
.status-warning .counter-bar {
  background-color: #fbbf24;
}
.status-danger .counter-bar {
  background-color: #f87171;
}
.status-danger .counter-value {
  color: #b91c1c;
}
</style>
