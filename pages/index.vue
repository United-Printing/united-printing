<template>
  <div class="home-page relative bg-dark text-white overflow-hidden">
    <!-- ==========================================
         HERO SECTION — Full viewport editorial
         ========================================== -->
    <section class="hero relative min-h-screen flex flex-col">
      <!-- Animated gradient mesh background -->
      <div class="absolute inset-0 gradient-mesh" />

      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 grid-pattern" />

      <!-- Noise texture -->
      <div class="absolute inset-0 noise" />

      <!-- Diagonal accent lines -->
      <div class="absolute inset-0 diagonal-lines opacity-50" />

      <!-- Geometric accent shapes -->
      <div class="geo-circle geo-circle-1" />
      <div class="geo-circle geo-circle-2" />
      <div class="geo-line geo-line-1" />

      <!-- Main hero content -->
      <div class="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 xl:px-[120px]">
        <div class="max-w-[1400px] mx-auto w-full relative">
          <!-- Label -->
          <div class="flex items-center gap-3 mb-6 sm:mb-8">
            <span class="w-8 h-px bg-accent" />
            <span class="text-label text-accent">Est. 1996 — Charlotte, NC</span>
          </div>

          <!-- Hero title — cycling presets -->
          <transition name="hero-swap">
            <div :key="active" class="hero-content">
              <h1 class="text-editorial hero-size text-white mb-6 sm:mb-8">
                <span
                  v-for="(word, i) in presets[active].title"
                  :key="i"
                  class="mr-[0.25em]"
                  :class="word.accent ? 'text-accent' : ''">{{ word.text }}</span>
              </h1>

              <p class="text-[17px] sm:text-[19px] leading-relaxed text-white/60 max-w-[520px] font-light">
                {{ presets[active].supplementaryText }}
              </p>
            </div>
          </transition>

          <!-- CTA row -->
          <div class="mt-10 sm:mt-14 flex flex-wrap items-center gap-6">
            <NuxtLink
              to="/quote"
              class="btn-magnetic group border-2 border-accent text-accent px-8 py-4 text-sm tracking-[0.15em] uppercase font-semibold hover:text-dark">
              <span>Request a Quote</span>
            </NuxtLink>

            <NuxtLink
              to="/services"
              class="text-white/50 hover:text-white text-sm tracking-[0.1em] uppercase transition-colors flex items-center gap-2">
              Explore Services
              <span class="inline-block transition-transform group-hover:translate-x-1">&#8594;</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom bar — preset indicators + stats -->
      <div class="relative z-10 border-t border-white/10">
        <div class="px-6 sm:px-10 lg:px-20 xl:px-[120px] py-6 flex items-center justify-between max-w-[1400px] mx-auto w-full">
          <!-- Preset indicators -->
          <div class="flex items-center gap-3">
            <button
              v-for="(preset, i) in presets"
              :key="i"
              class="preset-dot"
              :class="i === active ? 'active' : ''"
              @click="goToPreset(i)">
              <span class="text-label">{{ String(i + 1).padStart(2, '0') }}</span>
            </button>
          </div>

          <!-- Stats ticker -->
          <div class="hidden sm:flex items-center gap-8 lg:gap-12">
            <div class="stat-item">
              <span class="text-label text-white/30 block">Founded</span>
              <span class="text-[22px] font-bold text-white mt-1 block tabular-nums">1996</span>
            </div>
            <div class="w-px h-8 bg-white/10" />
            <div class="stat-item">
              <span class="text-label text-white/30 block">Awards</span>
              <span class="text-[22px] font-bold text-accent mt-1 block">7x PICA</span>
            </div>
            <div class="w-px h-8 bg-white/10" />
            <div class="stat-item">
              <span class="text-label text-white/30 block">Veteran</span>
              <span class="text-[22px] font-bold text-white mt-1 block">Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SERVICES PREVIEW — Horizontal scroll cards
         ========================================== -->
    <section class="relative py-20 sm:py-28 lg:py-36 bg-dark border-t border-white/5">
      <div class="px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">
        <!-- Section header -->
        <div class="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <span class="text-label text-accent block mb-3">What We Do</span>
            <h2 class="text-editorial text-3xl sm:text-4xl lg:text-5xl text-white">
              Printing with<br /><span class="text-editorial-light text-white/50">precision & care</span>
            </h2>
          </div>
          <NuxtLink
            to="/services"
            class="text-white/40 hover:text-accent text-sm tracking-[0.1em] uppercase transition-colors shrink-0">
            All Services &#8594;
          </NuxtLink>
        </div>

        <!-- Service cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <NuxtLink
            v-for="(service, i) in featuredServices"
            :key="service.title"
            to="/services"
            class="reveal service-card group relative overflow-hidden border border-white/8 rounded-lg p-6 sm:p-8 transition-all duration-500 hover:border-accent/30"
            :class="`reveal-delay-${i + 1}`">
            <!-- Card number -->
            <span class="text-[64px] sm:text-[80px] font-extrabold text-white/[0.03] absolute -top-2 -right-1 leading-none select-none">
              {{ String(i + 1).padStart(2, '0') }}
            </span>

            <!-- Card content -->
            <div class="relative">
              <span class="text-label text-accent/70 block mb-4">{{ service.label }}</span>
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-[15px] text-white/40 leading-relaxed line-clamp-3">
                {{ service.paragraphs[0] }}
              </p>

              <!-- Arrow -->
              <div class="mt-6 flex items-center gap-2 text-white/20 group-hover:text-accent transition-all duration-300">
                <span class="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                <span class="text-sm">&#8594;</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ==========================================
         ABOUT TEASER — Split composition
         ========================================== -->
    <section class="relative py-20 sm:py-28 lg:py-36 bg-white text-dark overflow-hidden">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 grid-pattern-dark" />

      <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Left: Large typography -->
          <div class="reveal">
            <span class="text-label text-teal block mb-4">About Us</span>
            <h2 class="text-editorial text-[36px] sm:text-[48px] lg:text-[56px] text-dark leading-[0.92]">
              On this journey<br />together since<br />
              <span class="text-accent">1996</span>
            </h2>

            <div class="mt-8 w-20 h-1 bg-accent" />

            <p class="mt-8 text-[17px] leading-[28px] text-dark/60 max-w-[460px]">
              Community has always been at the heart of our operation. Partners across the nation expect the same local care and world-class efficiency we first cultivated in Charlotte.
            </p>

            <NuxtLink
              to="/about"
              class="btn-magnetic mt-10 border-2 border-dark text-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-semibold hover:text-white">
              <span>Our Story</span>
            </NuxtLink>
          </div>

          <!-- Right: Feature highlights -->
          <div class="reveal reveal-delay-2 grid grid-cols-2 gap-4">
            <div
              v-for="(feature, i) in aboutHighlights"
              :key="i"
              class="about-highlight-card relative p-6 rounded-lg border"
              :class="i === 0 ? 'border-accent/20 bg-accent/5' : 'border-dark/10 bg-dark/[0.02]'">
              <span class="text-label block mb-3" :class="i === 0 ? 'text-accent' : 'text-dark/40'">
                {{ feature.label }}
              </span>
              <p class="text-[14px] leading-relaxed text-dark/60">
                {{ feature.summary }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         CTA BANNER — Full width conversion push
         ========================================== -->
    <section class="relative py-16 sm:py-20 bg-accent overflow-hidden">
      <!-- Halftone overlay -->
      <div class="absolute inset-0 halftone-lg text-dark/[0.04]" />

      <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8">
        <div>
          <h2 class="text-editorial text-2xl sm:text-3xl lg:text-4xl text-dark leading-tight">
            Ready to start your<br class="hidden sm:block" /> next project?
          </h2>
          <p class="mt-2 text-dark/60 text-[15px]">Get a free quote in under 2 minutes.</p>
        </div>

        <NuxtLink
          to="/quote"
          class="btn-magnetic mt-6 sm:mt-0 shrink-0 border-2 border-dark bg-dark text-accent px-10 py-5 text-sm tracking-[0.15em] uppercase font-bold hover:text-dark">
          <span>Get a Quote</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PRESETS, PRESET_TIMING } from '~/data/homePresets'
import { SERVICES } from '~/data/serviceCategories'
import { FEATURES } from '~/data/aboutFeatures'

useHead({
  title: 'United Printing Company | Charlotte\'s Top Commercial Printer',
})

const presets = PRESETS
const active = ref(0)
let timer: ReturnType<typeof setTimeout> | null = null

const featuredServices = SERVICES.slice(0, 3)

const aboutHighlights = FEATURES.map(f => ({
  label: f.label,
  summary: f.highlight || f.paragraphs[0].slice(0, 120) + '...',
}))

function scheduleNext() {
  timer = setTimeout(() => {
    active.value = (active.value + 1) % presets.length
    scheduleNext()
  }, PRESET_TIMING)
}

function goToPreset(index: number) {
  active.value = index
  if (timer) clearTimeout(timer)
  scheduleNext()
}

onMounted(() => {
  scheduleNext()
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

useScrollReveal()
</script>

<style scoped>
/* Hero sizing — scales with viewport, capped to prevent overflow */
.hero-size {
  font-size: clamp(28px, 5.5vw, 72px);
}

/* Geometric accent elements */
.geo-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(254, 225, 55, 0.08);
}

.geo-circle-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -100px;
  animation: geoFloat 25s ease-in-out infinite;
}

.geo-circle-2 {
  width: 300px;
  height: 300px;
  bottom: 15%;
  right: 10%;
  border-color: rgba(25, 180, 176, 0.1);
  animation: geoFloat 18s ease-in-out infinite reverse;
}

.geo-line-1 {
  position: absolute;
  width: 1px;
  height: 40vh;
  right: 25%;
  top: 10%;
  background: linear-gradient(to bottom, transparent, rgba(254, 225, 55, 0.1), transparent);
  animation: geoFloat 15s ease-in-out infinite;
}

@keyframes geoFloat {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 15px); }
}

/* Hero text swap transition */
.hero-swap-enter-active {
  transition: opacity 0.5s ease;
}

.hero-swap-leave-active {
  transition: opacity 0.3s ease;
  position: absolute;
}

.hero-swap-enter-from {
  opacity: 0;
}

.hero-swap-leave-to {
  opacity: 0;
}

/* Preset indicator dots */
.preset-dot {
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.preset-dot:hover {
  border-color: rgba(254, 225, 55, 0.3);
}

.preset-dot.active {
  background: rgba(254, 225, 55, 0.1);
  border-color: rgba(254, 225, 55, 0.4);
}

.preset-dot.active .text-label {
  color: #FEE137;
}

/* Service cards */
.service-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1px);
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-4px);
}

/* Line clamp */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* About highlight cards */
.about-highlight-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-highlight-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

/* Responsive adjustments */
@media screen and (max-width: 599px) {
  .stat-item { display: none; }
}
</style>
