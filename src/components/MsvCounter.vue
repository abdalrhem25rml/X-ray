<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentMsv: Number,
  yearlyLimit: Number,
  currentLanguage: String,
})

const msvColor = computed(() => {
  if (props.currentMsv < props.yearlyLimit * 0.5) return '#45d175'
  if (props.currentMsv < props.yearlyLimit) return '#f6b93b'
  return '#e74c3c'
})
</script>

<template>
  <div class="msv-counter">
    <span class="counter-label">
      {{ currentLanguage === 'en' ? 'Annual Dose:' : 'الجرعة السنوية:' }}
    </span>
    <span class="counter-value" :style="{ color: msvColor }">
      {{ currentMsv.toFixed(2) }} mSv
    </span>
    <div class="counter-bar-container">
      <div
        class="counter-bar"
        :style="{
          width: Math.min((currentMsv / yearlyLimit) * 100, 100) + '%',
          backgroundColor: msvColor,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.msv-counter {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 0.88em;
  font-weight: 600;
  color: #333;
}
.counter-label {
  color: #444;
}
.counter-value {
  font-family: monospace;
  font-size: 1.1em;
  font-weight: bold;
  min-width: 60px;
  text-align: right;
}
.counter-bar-container {
  width: 80px;
  height: 10px;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
}
.counter-bar {
  height: 100%;
  border-radius: 5px;
  transition: width 0.4s ease, background-color 0.3s ease;
}
</style>
