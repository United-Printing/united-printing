<template>
  <div class="quote-page min-h-screen bg-dark text-white">
    <!-- ==========================================
         HERO BAR — Compact header
         ========================================== -->
    <section class="relative pt-[120px] sm:pt-[140px] pb-10 sm:pb-14 overflow-hidden">
      <div class="absolute inset-0 gradient-mesh opacity-30" />
      <div class="absolute inset-0 noise" />

      <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">
        <span class="text-label text-accent block mb-4">Start a Project</span>
        <h1 class="text-editorial quote-hero-size text-white">
          Request a <span class="text-accent">Quote</span>
        </h1>
        <p class="mt-4 text-[17px] text-white/40 font-light max-w-[460px]">
          Let's get down to business. Complete the form below and we'll get back to you within 24 hours.
        </p>
      </div>
    </section>

    <!-- ==========================================
         FORM SECTION
         ========================================== -->
    <section class="relative pt-6 sm:pt-10 pb-20 sm:pb-28">
      <div class="px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">

        <!-- Success state -->
        <div v-if="sent" class="relative py-16 sm:py-24 text-center">
          <div class="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
            <span class="text-accent text-2xl">&#10003;</span>
          </div>
          <h2 class="text-editorial text-[28px] sm:text-[36px] text-white mb-3">Sent Successfully</h2>
          <p class="text-white/40 text-[17px] mb-8">We'll get back to you as soon as possible.</p>
          <button
            class="btn-magnetic border-2 border-accent text-accent px-8 py-4 text-sm tracking-[0.15em] uppercase font-semibold hover:text-dark"
            @click="handleReset">
            <span>Send Another</span>
          </button>
        </div>

        <!-- Form -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16">
          <!-- Form fields -->
          <div class="form-area">
            <!-- Required fields -->
            <div class="mb-10">
              <span class="text-label text-accent block mb-6">Project Details</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                <div class="field-group">
                  <label class="field-label" for="q-name">Name <span class="text-accent">*</span></label>
                  <input
                    id="q-name"
                    v-model="form.name"
                    type="text"
                    class="field-input"
                    :class="{ 'field-error': attempted && !form.name }" />
                </div>

                <div class="field-group">
                  <label class="field-label" for="q-email">Email <span class="text-accent">*</span></label>
                  <input
                    id="q-email"
                    v-model="form.email"
                    type="email"
                    class="field-input"
                    :class="{ 'field-error': attempted && !form.email }" />
                </div>

                <div class="field-group">
                  <label class="field-label" for="q-phone">Phone</label>
                  <input
                    id="q-phone"
                    v-model="form.phone"
                    type="tel"
                    class="field-input" />
                </div>

                <div class="field-group">
                  <label class="field-label" for="q-company">Company</label>
                  <input
                    id="q-company"
                    v-model="form.companyName"
                    type="text"
                    class="field-input" />
                </div>
              </div>

              <div class="field-group mt-1">
                <label class="field-label" for="q-description">Project Description <span class="text-accent">*</span></label>
                <textarea
                  id="q-description"
                  v-model="form.description"
                  rows="4"
                  class="field-input resize-none"
                  :class="{ 'field-error': attempted && !form.description }" />
              </div>
            </div>

            <!-- Print specifications -->
            <div class="mb-10">
              <span class="text-label text-white/30 block mb-6">Print Specifications</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                <div class="field-group">
                  <label class="field-label" for="q-stock">Stock / Paper</label>
                  <input
                    id="q-stock"
                    v-model="form.stock"
                    type="text"
                    class="field-input" />
                </div>

                <div class="field-group">
                  <label class="field-label" for="q-colors-front">Colors (Front)</label>
                  <select id="q-colors-front" v-model="form.colorsFront" class="field-input field-select">
                    <option value="">Select...</option>
                    <option v-for="opt in colorOptions" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>

                <div class="field-group">
                  <label class="field-label" for="q-colors-back">Colors (Back)</label>
                  <select id="q-colors-back" v-model="form.colorsBack" class="field-input field-select">
                    <option value="">Select...</option>
                    <option v-for="opt in colorOptions" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>

                <div class="field-group">
                  <label class="field-label" for="q-proof">Proof Type</label>
                  <select id="q-proof" v-model="form.proofType" class="field-input field-select">
                    <option value="">Select...</option>
                    <option v-for="opt in proofTypeOptions" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>

                <div class="field-group">
                  <label class="field-label" for="q-shipping">Shipping</label>
                  <select id="q-shipping" v-model="form.shipping" class="field-input field-select">
                    <option value="">Select...</option>
                    <option v-for="opt in shippingOptions" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Validation + Submit -->
            <div>
              <p v-if="attempted && !valid" class="text-accent text-[14px] font-medium mb-4">
                Please fill in the required fields marked with *
              </p>

              <p v-if="error" class="text-red-400 text-[14px] font-medium mb-4">
                Something went wrong. Please try again or call us at (704) 525-3710.
              </p>

              <button
                class="btn-magnetic border-2 border-accent text-accent px-10 py-5 text-sm tracking-[0.15em] uppercase font-bold hover:text-dark w-full sm:w-auto"
                :disabled="processing"
                @click="handleSubmit">
                <span>{{ processing ? 'Sending...' : 'Submit Quote Request' }}</span>
              </button>
            </div>
          </div>

          <!-- Sidebar — Trust signals -->
          <aside class="hidden lg:block">
            <div class="sticky top-[120px] space-y-6">
              <!-- Trust card -->
              <div class="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
                <span class="text-label text-accent block mb-4">Need Help?</span>
                <p class="text-[15px] text-white/50 leading-relaxed mb-3">
                  Have a question about your project? We're here to help.
                </p>
                <p class="text-[18px] font-bold text-white">(704) 525-3710</p>
                <p class="text-[14px] text-white/30 mt-1">info@unitedprintingnc.com</p>
              </div>

              <!-- Stats -->
              <div class="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
                <span class="text-label text-white/30 block mb-4">Why United?</span>
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span class="text-[14px] text-white/50">Award-winning quality (7x PICA)</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span class="text-[14px] text-white/50">Veteran owned & operated</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span class="text-[14px] text-white/50">FSC certified & sustainable</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span class="text-[14px] text-white/50">Serving clients nationwide</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Request a Quote | United Printing Company' })

const { processing, sent, error, submitQuote, reset } = useQuoteApi()

const colorOptions = ['1 PMS Color', '2 PMS Color', '3 PMS Color', '4 PMS Color', '4 Color Process']
const proofTypeOptions = ['Epson Color Proof', 'PDF', 'Fax Laser']
const shippingOptions = ['Call When Ready', 'Local Delivery', 'Ground', '2nd Day Air', 'Next Day Air']

const form = reactive({
  name: '',
  email: '',
  phone: '',
  companyName: '',
  description: '',
  stock: '',
  colorsFront: '',
  colorsBack: '',
  proofType: '',
  shipping: '',
})

const attempted = ref(false)
const valid = computed(() => !!(form.name && form.email && form.description))

async function handleSubmit() {
  attempted.value = true
  if (!valid.value) return
  await submitQuote(form)
}

function handleReset() {
  reset()
  attempted.value = false
  Object.assign(form, {
    name: '', email: '', phone: '', companyName: '', description: '',
    stock: '', colorsFront: '', colorsBack: '', proofType: '', shipping: '',
  })
}
</script>

<style scoped>
.quote-hero-size {
  font-size: clamp(32px, 5vw, 56px);
}

/* Form field styling */
.field-group {
  margin-bottom: 16px;
}

.field-label {
  display: block;
  font-family: 'Helvetica Now', 'Helvetica', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.35);
}

.field-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: white;
  padding: 12px 16px;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.field-input:focus {
  border-color: rgba(254, 225, 55, 0.4);
  background: rgba(255, 255, 255, 0.06);
}

.field-input::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.field-error {
  border-color: rgba(254, 225, 55, 0.6);
}

.field-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
}

.field-select option {
  color: #111;
  background: white;
}
</style>
