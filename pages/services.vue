<template>
  <div class="services-page bg-white">
    <!-- ==========================================
         HERO — Bold statement with geometric bg
         ========================================== -->
    <section class="relative min-h-[50vh] sm:min-h-[60vh] bg-dark text-white flex items-end overflow-hidden">
      <!-- Gradient mesh -->
      <div class="absolute inset-0 gradient-mesh opacity-50" />
      <div class="absolute inset-0 grid-pattern" />
      <div class="absolute inset-0 noise" />

      <!-- Large background text -->
      <span class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] text-[16vw] font-extrabold text-white/[0.02] select-none leading-none pointer-events-none whitespace-nowrap">
        SERVICES
      </span>

      <!-- Geometric shapes -->
      <div class="absolute top-[15%] right-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border border-accent/10" />
      <div class="absolute bottom-[20%] right-[20%] w-[100px] h-[100px] rounded-full border border-teal/10" />

      <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] pb-16 sm:pb-20 max-w-[1400px] mx-auto w-full">
        <span class="text-label text-accent block mb-5">Our Capabilities</span>
        <h1 class="text-editorial services-hero-size text-white">
          Award-winning.<br />
          <span class="text-editorial-light text-white/40">Sustainable.</span><br />
          <span class="text-accent">Awesome.</span>
        </h1>
      </div>
    </section>

    <!-- ==========================================
         SERVICES NAVIGATION — Sticky horizontal
         ========================================== -->
    <nav class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-dark/8">
      <div class="px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">
        <div class="flex items-center gap-1 overflow-x-auto py-4 no-scrollbar">
          <button
            v-for="(service, i) in services"
            :key="i"
            class="service-nav-btn shrink-0 px-4 py-2 text-label transition-all duration-300 rounded"
            :class="activeNav === i
              ? 'bg-dark text-white'
              : 'text-dark/50 hover:text-dark hover:bg-dark/5'"
            @click="scrollToService(i)">
            {{ service.label }}
          </button>
        </div>
      </div>
    </nav>

    <!-- ==========================================
         SERVICE SECTIONS — Full-width alternating
         ========================================== -->
    <div class="services-content">
      <section
        v-for="(service, index) in services"
        :key="service.title"
        :ref="el => { if (el) featureRefs[index] = el as HTMLElement }"
        class="relative py-16 sm:py-24 lg:py-32 border-b border-dark/5"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">

        <div v-if="index % 2 === 1" class="absolute inset-0 grid-pattern-dark" />

        <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">
          <div class="reveal grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
            <!-- Content -->
            <div>
              <div class="flex items-center gap-3 mb-6">
                <span class="text-label text-dark/30">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="w-6 h-px bg-accent" />
              </div>

              <h2 class="text-editorial text-[28px] sm:text-[36px] lg:text-[42px] text-dark mb-6">
                {{ service.title }}
              </h2>

              <div class="space-y-4 mb-8">
                <p
                  v-for="(paragraph, pi) in service.paragraphs"
                  :key="pi"
                  class="text-[16px] sm:text-[17px] leading-[28px] text-dark/60">
                  {{ paragraph }}
                </p>
              </div>

              <!-- Products expandable -->
              <div v-if="service.products.length" class="mb-8">
                <button
                  class="flex items-center gap-3 text-label text-dark/60 hover:text-accent transition-colors group"
                  @click="toggleProducts(index)">
                  <span
                    class="inline-block w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] transition-transform"
                    :class="openProducts[index] ? 'rotate-45 bg-accent border-accent text-dark' : ''">
                    +
                  </span>
                  Products & Capabilities
                </button>

                <transition name="products-expand">
                  <div v-if="openProducts[index]" class="mt-4 pl-8 overflow-hidden">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
                      <span
                        v-for="(product, pi) in service.products"
                        :key="pi"
                        class="text-[14px] text-dark/50 py-1 border-b border-dark/5">
                        {{ product }}
                      </span>
                    </div>
                  </div>
                </transition>
              </div>

              <!-- CTA -->
              <NuxtLink
                to="/quote"
                class="btn-magnetic border-2 border-dark text-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-semibold hover:text-white">
                <span>Get a Quote</span>
              </NuxtLink>
            </div>

            <!-- Visual accent (lg+ only) -->
            <div class="hidden lg:block">
              <div
                class="service-visual relative aspect-square rounded-lg overflow-hidden"
                :class="serviceVisualClass(index)">
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-[100px] font-extrabold opacity-[0.06] select-none">
                    {{ service.title.charAt(0) }}
                  </span>
                </div>
                <div class="absolute inset-4 crop-marks" style="--crop-color: rgba(254, 225, 55, 0.15)" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SERVICES } from '~/data/serviceCategories'

useHead({ title: 'Printing Services | United Printing Company' })

const services = SERVICES
const activeNav = ref(0)
const featureRefs = ref<HTMLElement[]>([])
const openProducts = ref<boolean[]>(services.map(() => false))

function toggleProducts(index: number) {
  openProducts.value[index] = !openProducts.value[index]
}

function scrollToService(index: number) {
  activeNav.value = index
  const el = featureRefs.value[index]
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function serviceVisualClass(index: number) {
  const classes = [
    'bg-gradient-to-br from-accent/10 via-transparent to-teal/5',
    'bg-gradient-to-br from-teal/10 via-transparent to-accent/5',
    'bg-gradient-to-br from-dark/5 via-transparent to-accent/5',
    'bg-gradient-to-br from-accent/5 via-transparent to-dark/5',
    'bg-gradient-to-br from-teal/8 via-transparent to-accent/5',
    'bg-gradient-to-br from-accent/8 via-transparent to-teal/5',
  ]
  return classes[index] || classes[0]
}

useScrollReveal()
</script>

<style scoped>
.services-hero-size {
  font-size: clamp(28px, 5.5vw, 64px);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.service-visual {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-visual:hover {
  transform: scale(1.03);
}

/* Products expand transition */
.products-expand-enter-active,
.products-expand-leave-active {
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  max-height: 300px;
}

.products-expand-enter-from,
.products-expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
