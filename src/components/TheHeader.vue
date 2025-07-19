<script setup>
import MsvCounter from './MsvCounter.vue'

defineProps({
  currentLanguage: String,
  user: Object,
  msvData: Object, // { current: Number, limit: Number }
})

defineEmits(['toggle-language', 'toggle-info-modal'])
</script>

<template>
  <header class="app-header">
    <button @click="$emit('toggle-language')" class="language-toggle-button">
      {{ currentLanguage === 'en' ? 'العربية' : 'English' }}
    </button>

    <div class="app-header-center">
      <h1 class="project-title">
        {{ currentLanguage === 'en' ? 'mSv Exposure Calculator' : 'حاسبة التعرض للأشعة' }}
      </h1>
      <MsvCounter
        v-if="user"
        :current-msv="msvData.current"
        :yearly-limit="msvData.limit"
        :current-language="currentLanguage"
      />
    </div>

    <button @click="$emit('toggle-info-modal')" class="info-button-global">
      {{ currentLanguage === 'en' ? 'Information' : 'معلومات' }}
    </button>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #f1e234;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 80px;
  gap: 15px;
  flex-wrap: wrap;
}
.app-header-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 200px;
}
.project-title {
  color: #000;
  font-size: 2.8em;
  font-weight: 800;
  text-align: center;
  margin-bottom: 5px;
}
.language-toggle-button, .info-button-global {
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.language-toggle-button:hover, .info-button-global:hover {
  background-color: #6a7483;
}
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    padding: 15px 20px;
  }
  .project-title {
    font-size: 2em;
    margin-bottom: 15px;
    order: 2;
  }
  .language-toggle-button, .info-button-global {
    width: 80%;
    max-width: 300px;
  }
  .language-toggle-button { order: 1; margin-bottom: 10px; }
  .info-button-global { order: 3; margin-top: 10px; }
}
</style>
