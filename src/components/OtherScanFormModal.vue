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

const scanSubtypes = {
  CT: [
    { value: 'Abdomen & Pelvis', en: 'Abdomen & Pelvis', ar: 'البطن والحوض' },
    { value: 'Brain with contrast', en: 'Brain with contrast', ar: 'الدماغ بمادة تباين' },
    { value: 'Angiography CTA', en: 'Angiography CTA', ar: 'تصوير الأوعية CTA' },
    { value: 'Urography', en: 'Urography', ar: 'تصوير المسالك البولية' },
    { value: 'Enterography', en: 'Enterography', ar: 'تصوير الأمعاء' },
    { value: 'Other', en: 'Other...', ar: 'أخرى...' },
  ],
  'X-ray': [
    { value: 'Barium Enema', en: 'Barium Enema', ar: 'حقنة الباريوم الشرجية' },
    { value: 'IV Urogram (IVP)', en: 'IV Urogram (IVP)', ar: 'أشعة المسالك البولية (IVP)' },
    { value: 'HSG', en: 'HSG', ar: 'أشعة الرحم (HSG)' },
    { value: 'VCUG', en: 'VCUG', ar: 'دراسة المثانة بالصبغة (VCUG)' },
    { value: 'Other', en: 'Other...', ar: 'أخرى...' },
  ],
}

const scanPlaces = [
  { value: 'head', en: 'Head', ar: 'الرأس' },
  { value: 'neck', en: 'Neck', ar: 'الرقبة' },
  { value: 'chest', en: 'Chest', ar: 'الصدر' },
  { value: 'abdomen', en: 'Abdomen', ar: 'البطن' },
  { value: 'pelvis', en: 'Pelvis', ar: 'الحوض' },
  { value: 'spine', en: 'Spine', ar: 'العمود الفقري' },
  { value: 'upper_extremity', en: 'Upper Extremity', ar: 'الطرف العلوي' },
  { value: 'lower_extremity', en: 'Lower Extremity', ar: 'الطرف السفلي' },
  { value: 'other', en: 'Other', ar: 'أخرى' },
]

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

// ✅ UPDATED: handleSubmit now logs the data before emitting
const handleSubmit = () => {
  if (!form.type || !form.date || form.dosage === null) {
    alert(currentLanguage.value === 'en' ? 'Please fill all fields.' : 'يرجى ملء جميع الحقول.')
    return
  }

  // Prepare the data object to be saved
  const dataToEmit = {
    id: form.id,
    type: form.type,
    // Convert the string date from the form into a Firestore Timestamp
    date: Timestamp.fromDate(new Date(form.date)),
    dosage: Number(form.dosage),
  };

  // ✅ ADDED: Log the data object to the console for debugging
  console.log('[OtherScanFormModal] Emitting "save" event with data payload:', JSON.parse(JSON.stringify(dataToEmit)));

  // Emit the save event with the prepared data
  emit('save', dataToEmit)
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
/* Styles are unchanged */
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
