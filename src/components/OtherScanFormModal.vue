<script setup>
import { reactive, watch, inject } from 'vue'
import { Timestamp } from 'firebase/firestore'

const props = defineProps({
  show: Boolean,
  scan: Object,
  isSaving: Boolean,
})
const emit = defineEmits(['close', 'save'])
const currentLanguage = inject('currentLanguage')

const form = reactive({
  id: null,
  type: '',
  date: '',
  dosage: null,
})

watch(() => props.show, (isShown) => {
  if (isShown) {
    // Reset form
    Object.assign(form, {
      id: null,
      type: '',
      date: new Date().toISOString().split('T')[0],
      dosage: null,
    })
    // Populate with existing data if in edit mode
    if (props.scan) {
      form.id = props.scan.id
      form.type = props.scan.type
      form.dosage = props.scan.dosage
      form.date = props.scan.date?.toDate ? props.scan.date.toDate().toISOString().split('T')[0] : ''
    }
  }
})

const handleSubmit = () => {
  if (!form.type || !form.date || form.dosage === null) {
    alert(currentLanguage.value === 'en' ? 'Please fill all fields.' : 'يرجى ملء جميع الحقول.')
    return
  }
  emit('save', {
    id: form.id,
    type: form.type,
    date: Timestamp.fromDate(new Date(form.date)),
    dosage: Number(form.dosage),
  })
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <h3>{{ scan ? (currentLanguage === 'en' ? 'Edit Other Scan' : 'تعديل الفحص الآخر') : (currentLanguage === 'en' ? 'Add Other Scan' : 'إضافة فحص آخر') }}</h3>
        <p class="subtitle">{{ currentLanguage === 'en' ? 'For miscellaneous radiation sources like background or occupational.' : 'لمصادر الإشعاع المتنوعة مثل الخلفية أو المهنية.' }}</p>
        <form @submit.prevent="handleSubmit" class="scan-form">
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Type of Scan / Source' : 'نوع الفحص / المصدر' }}</label>
            <input type="text" v-model="form.type" :placeholder="currentLanguage === 'en' ? 'e.g. Annual Background Radiation' : 'مثال: إشعاع الخلفية السنوي'" required />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Date' : 'التاريخ' }}</label>
            <input type="date" v-model="form.date" required />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Dosage (mSv)' : 'الجرعة (mSv)' }}</label>
            <input type="number" step="0.01" v-model="form.dosage" required />
          </div>
          <div class="modal-actions">
            <button type="submit" class="action-button" :disabled="isSaving">{{ isSaving ? (currentLanguage === 'en' ? 'Saving...' : 'جار الحفظ...') : (currentLanguage === 'en' ? 'Save' : 'حفظ') }}</button>
            <button type="button" @click="$emit('close')" class="action-button secondary">{{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}</button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* You can reuse styles from your other modals */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); z-index: 4000; display: flex; justify-content: center; align-items: center; }
.modal-content { background: #fff; padding: 2rem; border-radius: 12px; max-width: 500px; width: 100%; position: relative; }
.close-modal-button { position: absolute; top: 10px; right: 15px; font-size: 2rem; border: none; background: none; cursor: pointer; }
h3 { text-align: center; margin-top: 0; margin-bottom: 0.5rem; }
.subtitle { text-align: center; margin-top: 0; margin-bottom: 2rem; color: #6c757d; }
.scan-form { display: flex; flex-direction: column; gap: 1rem; }
.form-group label { font-weight: 600; margin-bottom: 0.5rem; display: block; }
.form-group input { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ccc; box-sizing: border-box; }
.modal-actions { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem; }
.action-button { padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer; font-weight: 600; }
.action-button[type="submit"] { background-color: #8d99ae; color: white; }
.action-button.secondary { background-color: #e9ecef; }
</style>
