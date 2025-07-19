<script setup>
import { inject } from 'vue'

// This generic modal receives its text via props.
defineProps({
  show: Boolean,
  title: String,
  message: String,
})

// It tells the parent to 'close' or 'confirm' the action.
defineEmits(['close', 'confirm'])

const currentLanguage = inject('currentLanguage')
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content delete-confirm-modal">
        <h3 class="modal-title">{{ title }}</h3>
        <p>{{ message }}</p>
        <p class="warning-text">
          {{ currentLanguage === 'en' ? 'This action cannot be undone.' : 'لا يمكن التراجع عن هذا الإجراء.' }}
        </p>
        <div class="modal-actions">
          <button @click="$emit('close')" class="action-button secondary">
            {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
          </button>
          <button @click="$emit('confirm')" class="action-button delete-button-confirm">
            {{ currentLanguage === 'en' ? 'Delete' : 'حذف' }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* All styles for the delete confirmation modal */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000; padding: 20px; }
.modal-content { background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); position: relative; }
.delete-confirm-modal { max-width: 450px; text-align: center; }
.modal-title { color: #8d99ae; margin-bottom: 25px; font-size: 1.8em; font-weight: 700; text-align: center; }
.warning-text { color: #d9534f; font-weight: 600; margin-top: 10px; }
.modal-actions { display: flex; justify-content: center; gap: 15px; margin-top: 30px; }
.action-button { border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 1em; font-weight: 600; transition: all 0.2s ease; }
.action-button:hover { transform: translateY(-2px); }
.action-button.secondary { background-color: #6c757d; color: white; }
.action-button.secondary:hover { background-color: #5a6268; }
.delete-button-confirm { background-color: #d9534f; color: white; }
.delete-button-confirm:hover { background-color: #c9302c; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.4s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
</style>
