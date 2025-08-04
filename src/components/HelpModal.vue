<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  show: Boolean,
  content: Object
})

const emit = defineEmits(['close'])

const currentLanguage = inject('currentLanguage')

const helpTitle = computed(() => {
  if (!props.content) return ''
  return currentLanguage.value === 'ar' ? props.content.ar.title : props.content.en.title
})

const helpBody = computed(() => {
  if (!props.content) return ''
  return currentLanguage.value === 'ar' ? props.content.ar.body : props.content.en.body
})
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button @click="emit('close')" class="close-button">&times;</button>
        <h3 class="modal-title">{{ helpTitle }}</h3>
        <div class="modal-body" v-html="helpBody"></div>
        <div class="modal-actions">
          <button type="button" @click="emit('close')" class="action-button">
            {{ currentLanguage === 'en' ? 'Got it!' : 'فهمت!' }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* --- MODAL STYLES (Unchanged) --- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4000;
  padding: 1rem;
}
.modal-content {
  background: white;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  max-width: 650px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  border-top: 5px solid #8d99ae;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5em;
  line-height: 1;
  cursor: pointer;
  color: #aaa;
  transition: color 0.2s;
}
.close-button:hover {
  color: #333;
}
.modal-title {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8rem;
  font-weight: 700;
  color: #343a40;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.action-button {
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background-color: #8d99ae;
  transition: background-color 0.2s;
}
.action-button:hover {
    background-color: #6a7483;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* --- STYLES FOR V-HTML CONTENT --- */
.modal-body {
  line-height: 1.7;
  color: #495057;
  font-size: 1.05rem;
}
.modal-body :deep(p) {
  margin-bottom: 1rem;
}
.modal-body :deep(strong) {
  font-weight: 700;
  color: #343a40;
}

/* --- LIST STYLES --- */
.modal-body :deep(ul) {
  list-style: none; /* Remove default bullets */
  margin-top: 1rem;
}
.modal-body :deep(li) {
  position: relative;
  margin-bottom: 0.75rem; /* Space between list items */
}
.modal-body :deep(li::before) {
  content: '•';
  color: #8d99ae;
  font-weight: bold;
  position: absolute;
  top: 0;
  font-size: 1.2em;
}
.modal-body :deep(ul ul li::before) {
  content: '◦';
  color: #6a7483;
}

/* --- DIRECTIONAL STYLES FOR LISTS --- */

/* LTR (Default) */
.modal-body :deep(ul) {
  padding-inline-start: 20px;
}
.modal-body :deep(li) {
  padding-left: 1.5rem;
}
.modal-body :deep(li::before) {
  left: 0;
}

/* RTL Overrides */
[dir='rtl'] .modal-body :deep(ul) {
  padding-inline-start: 0;
  padding-right: 20px;
}
[dir='rtl'] .modal-body :deep(li) {
  padding-left: 0; /* Clear LTR padding */
  padding-right: 1.5rem; /* Add RTL padding */
}
[dir='rtl'] .modal-body :deep(li::before) {
  left: auto; /* Unset the left position */
  right: 0; /* Set the right position */
}
</style>
