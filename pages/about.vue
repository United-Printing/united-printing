<template>
  <div class="about-page bg-white">
    <!-- ==========================================
         HERO — Typographic statement
         ========================================== -->
    <section class="relative min-h-[70vh] sm:min-h-[80vh] bg-dark text-white flex items-end overflow-hidden">
      <!-- Gradient mesh background -->
      <div class="absolute inset-0 gradient-mesh opacity-60" />
      <div class="absolute inset-0 grid-pattern" />
      <div class="absolute inset-0 noise" />

      <!-- Large background year -->
      <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] sm:text-[18vw] lg:text-[14vw] font-extrabold text-white/[0.03] select-none leading-none pointer-events-none">
        1996
      </span>

      <!-- Content -->
      <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] pb-16 sm:pb-20 lg:pb-28 max-w-[1400px] mx-auto w-full">
        <span class="text-label text-accent block mb-5">About Us</span>
        <h1 class="text-editorial about-hero-size text-white max-w-[800px]">
          On this journey<br />together since
          <span class="text-accent">1996</span>
        </h1>
        <div class="mt-6 w-16 h-1 bg-accent" />
        <p class="mt-6 text-[17px] sm:text-[19px] leading-relaxed text-white/50 max-w-[500px] font-light">
          Veteran-owned. Award-winning. Committed to sustainable printing and world-class service from Charlotte, NC.
        </p>
      </div>
    </section>

    <!-- ==========================================
         FEATURE SECTIONS — Alternating layouts
         ========================================== -->
    <div class="relative">
      <!-- Vertical timeline connector (lg only) -->
      <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-dark/8" />

      <section
        v-for="(feature, index) in features"
        :key="feature.label"
        class="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">

        <!-- Grid pattern on alternating -->
        <div v-if="index % 2 === 1" class="absolute inset-0 grid-pattern-dark" />

        <!-- Timeline dot (lg only) -->
        <div class="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="w-3 h-3 rounded-full bg-accent ring-4 ring-white" />
        </div>

        <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">
          <div
            class="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center"
            :class="index % 2 === 1 ? 'lg:direction-rtl' : ''">

            <!-- Text content -->
            <div :class="index % 2 === 1 ? 'lg:text-right' : ''">
              <!-- Label + indicator -->
              <div class="flex items-center gap-3 mb-6" :class="index % 2 === 1 ? 'lg:justify-end' : ''">
                <span class="text-label text-dark/40">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="w-6 h-px bg-accent" />
                <span class="text-label text-accent">{{ feature.label }}</span>
              </div>

              <!-- Highlight -->
              <p
                v-if="feature.highlight"
                class="text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-snug text-dark mb-6">
                {{ feature.highlight }}
              </p>

              <!-- Paragraphs -->
              <div class="space-y-4">
                <p
                  v-for="(paragraph, pi) in feature.paragraphs"
                  :key="pi"
                  class="text-[16px] sm:text-[17px] leading-[28px] text-dark/60">
                  {{ paragraph }}
                </p>
              </div>
            </div>

            <!-- Visual illustration block -->
            <div class="relative" :class="index % 2 === 1 ? 'lg:order-first' : ''">
              <div
                class="feature-visual relative aspect-[4/3] rounded-lg overflow-hidden"
                :class="featureVisualBg(index)">

                <!-- ORIGINS: Connected community nodes -->
                <svg v-if="index === 0" class="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <!-- Animated connection lines -->
                  <line x1="80" y1="100" x2="200" y2="60" stroke="#FEE137" stroke-width="1" opacity="0.3" class="anim-draw" />
                  <line x1="200" y1="60" x2="320" y2="120" stroke="#FEE137" stroke-width="1" opacity="0.3" class="anim-draw delay-1" />
                  <line x1="200" y1="60" x2="160" y2="180" stroke="#FEE137" stroke-width="1" opacity="0.2" class="anim-draw delay-2" />
                  <line x1="320" y1="120" x2="280" y2="220" stroke="#FEE137" stroke-width="1" opacity="0.2" class="anim-draw delay-3" />
                  <line x1="80" y1="100" x2="120" y2="240" stroke="#FEE137" stroke-width="1" opacity="0.2" class="anim-draw delay-2" />
                  <line x1="160" y1="180" x2="280" y2="220" stroke="#19B4B0" stroke-width="1" opacity="0.3" class="anim-draw delay-4" />
                  <line x1="120" y1="240" x2="160" y2="180" stroke="#19B4B0" stroke-width="1" opacity="0.2" class="anim-draw delay-3" />
                  <!-- Nodes -->
                  <circle cx="80" cy="100" r="8" fill="#FEE137" opacity="0.8" class="anim-pop" />
                  <circle cx="200" cy="60" r="12" fill="#FEE137" class="anim-pop delay-1" />
                  <circle cx="320" cy="120" r="8" fill="#FEE137" opacity="0.8" class="anim-pop delay-2" />
                  <circle cx="160" cy="180" r="6" fill="#19B4B0" opacity="0.7" class="anim-pop delay-3" />
                  <circle cx="280" cy="220" r="6" fill="#19B4B0" opacity="0.7" class="anim-pop delay-4" />
                  <circle cx="120" cy="240" r="5" fill="#FEE137" opacity="0.5" class="anim-pop delay-5" />
                  <!-- Center pulse -->
                  <circle cx="200" cy="60" r="20" fill="none" stroke="#FEE137" stroke-width="1" opacity="0.2" class="anim-pulse" />
                  <text x="200" y="155" text-anchor="middle" fill="white" font-size="11" font-family="Helvetica Now, sans-serif" letter-spacing="0.15em" opacity="0.2" font-weight="500">COMMUNITY</text>
                </svg>

                <!-- CRAFTSMANSHIP: CMYK registration / print precision -->
                <svg v-if="index === 1" class="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <!-- CMYK circles -->
                  <circle cx="170" cy="120" r="60" fill="none" stroke="#00AEEF" stroke-width="1.5" opacity="0.5" class="anim-spin-slow" style="transform-origin: 170px 120px" />
                  <circle cx="210" cy="120" r="60" fill="none" stroke="#EC008C" stroke-width="1.5" opacity="0.5" class="anim-spin-slow-reverse" style="transform-origin: 210px 120px" />
                  <circle cx="190" cy="155" r="60" fill="none" stroke="#FFF200" stroke-width="1.5" opacity="0.5" class="anim-spin-slow" style="transform-origin: 190px 155px" />
                  <!-- Registration crosshairs -->
                  <g opacity="0.3" class="anim-fade-in delay-2">
                    <line x1="320" y1="40" x2="320" y2="60" stroke="white" stroke-width="0.5" />
                    <line x1="310" y1="50" x2="330" y2="50" stroke="white" stroke-width="0.5" />
                    <circle cx="320" cy="50" r="6" fill="none" stroke="white" stroke-width="0.5" />
                  </g>
                  <g opacity="0.3" class="anim-fade-in delay-3">
                    <line x1="80" y1="240" x2="80" y2="260" stroke="white" stroke-width="0.5" />
                    <line x1="70" y1="250" x2="90" y2="250" stroke="white" stroke-width="0.5" />
                    <circle cx="80" cy="250" r="6" fill="none" stroke="white" stroke-width="0.5" />
                  </g>
                  <!-- Award star -->
                  <polygon points="340,220 345,235 360,235 348,244 352,258 340,250 328,258 332,244 320,235 335,235" fill="#FEE137" opacity="0.6" class="anim-pop delay-4" />
                  <text x="340" y="278" text-anchor="middle" fill="white" font-size="9" font-family="Helvetica Now, sans-serif" letter-spacing="0.12em" opacity="0.25" font-weight="500">7x PICA</text>
                </svg>

                <!-- SUSTAINABILITY: Growing tree / leaves -->
                <svg v-if="index === 2" class="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <!-- Tree trunk -->
                  <line x1="200" y1="280" x2="200" y2="160" stroke="#111" stroke-width="3" opacity="0.3" class="anim-grow-up" />
                  <!-- Branches -->
                  <line x1="200" y1="200" x2="150" y2="160" stroke="#111" stroke-width="2" opacity="0.2" class="anim-grow-up delay-1" />
                  <line x1="200" y1="180" x2="260" y2="140" stroke="#111" stroke-width="2" opacity="0.2" class="anim-grow-up delay-2" />
                  <line x1="200" y1="160" x2="160" y2="120" stroke="#111" stroke-width="1.5" opacity="0.15" class="anim-grow-up delay-3" />
                  <!-- Leaves -->
                  <circle cx="150" cy="155" r="18" fill="#19B4B0" opacity="0.5" class="anim-pop delay-2" />
                  <circle cx="260" cy="135" r="22" fill="#19B4B0" opacity="0.6" class="anim-pop delay-3" />
                  <circle cx="160" cy="115" r="14" fill="#19B4B0" opacity="0.4" class="anim-pop delay-4" />
                  <circle cx="200" cy="140" r="26" fill="#19B4B0" opacity="0.5" class="anim-pop delay-3" />
                  <circle cx="230" cy="110" r="16" fill="#19B4B0" opacity="0.35" class="anim-pop delay-5" />
                  <!-- FSC badge outline -->
                  <rect x="60" y="40" width="60" height="30" rx="4" fill="none" stroke="#19B4B0" stroke-width="1" opacity="0.3" class="anim-fade-in delay-4" />
                  <text x="90" y="60" text-anchor="middle" fill="#19B4B0" font-size="10" font-family="Helvetica Now, sans-serif" font-weight="700" opacity="0.4" class="anim-fade-in delay-4">FSC</text>
                  <!-- Recycling arrows hint -->
                  <path d="M320,230 L340,210 L330,210 L330,190 L310,190 L310,210 L300,210 Z" fill="#19B4B0" opacity="0.15" class="anim-spin-slow" style="transform-origin: 320px 210px" />
                </svg>

                <!-- VETERAN OWNED: Flag stripes + stars -->
                <svg v-if="index === 3" class="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <!-- Horizontal stripes -->
                  <rect v-for="s in 7" :key="s" x="60" :y="60 + (s-1) * 26" width="280" height="13" :fill="s % 2 === 1 ? '#FEE137' : 'transparent'" :opacity="s % 2 === 1 ? 0.08 : 0" class="anim-fade-in" :class="`delay-${s}`" />
                  <!-- Stars field -->
                  <rect x="60" y="60" width="110" height="90" fill="#19B4B0" opacity="0.08" class="anim-fade-in" />
                  <!-- Stars -->
                  <g class="anim-pop delay-2">
                    <circle cx="85" cy="80" r="3" fill="#FEE137" opacity="0.6" />
                    <circle cx="105" cy="80" r="3" fill="#FEE137" opacity="0.6" />
                    <circle cx="125" cy="80" r="3" fill="#FEE137" opacity="0.6" />
                    <circle cx="145" cy="80" r="3" fill="#FEE137" opacity="0.6" />
                  </g>
                  <g class="anim-pop delay-3">
                    <circle cx="95" cy="100" r="3" fill="#FEE137" opacity="0.5" />
                    <circle cx="115" cy="100" r="3" fill="#FEE137" opacity="0.5" />
                    <circle cx="135" cy="100" r="3" fill="#FEE137" opacity="0.5" />
                  </g>
                  <g class="anim-pop delay-4">
                    <circle cx="85" cy="120" r="3" fill="#FEE137" opacity="0.4" />
                    <circle cx="105" cy="120" r="3" fill="#FEE137" opacity="0.4" />
                    <circle cx="125" cy="120" r="3" fill="#FEE137" opacity="0.4" />
                    <circle cx="145" cy="120" r="3" fill="#FEE137" opacity="0.4" />
                  </g>
                  <!-- Shield shape -->
                  <path d="M280,180 L320,195 L320,240 L300,260 L280,240 L280,195 Z" fill="none" stroke="#FEE137" stroke-width="1.5" opacity="0.3" class="anim-draw delay-3" />
                  <text x="300" y="230" text-anchor="middle" fill="#FEE137" font-size="14" font-weight="800" opacity="0.3" class="anim-fade-in delay-5">V</text>
                </svg>

                <!-- Counter label -->
                <div class="absolute top-6 right-6 sm:top-8 sm:right-8">
                  <span class="text-label" :class="featureLabelClass(index)">
                    {{ String(index + 1).padStart(2, '0') }} / {{ String(features.length).padStart(2, '0') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ==========================================
         LOGO SECTION — Company identity
         ========================================== -->
    <section class="relative py-24 sm:py-32 lg:py-40 bg-dark text-white overflow-hidden">
      <div class="absolute inset-0 gradient-mesh opacity-40" />
      <div class="absolute inset-0 noise" />

      <div class="reveal relative z-10 text-center px-6">
        <div class="inline-block">
          <span class="text-label text-accent block mb-6">Since 1996</span>
          <div class="flex flex-col items-center">
            <span class="text-[40px] sm:text-[56px] lg:text-[72px] font-extrabold tracking-tight leading-none">United</span>
            <span class="text-[40px] sm:text-[56px] lg:text-[72px] font-extrabold tracking-tight leading-none">Printing</span>
            <span class="text-[32px] sm:text-[44px] lg:text-[56px] font-extralight tracking-tight leading-none text-white/60 mt-1">Company</span>
          </div>
          <div class="mt-8 w-16 h-1 bg-accent mx-auto" />
          <p class="mt-6 text-white/40 text-label">Charlotte, North Carolina</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FEATURES } from '~/data/aboutFeatures'

useHead({ title: 'About Us | United Printing Company' })

const features = FEATURES

function featureVisualBg(index: number) {
  return [
    'bg-dark',
    'bg-teal',
    'bg-accent',
    'bg-dark',
  ][index] || 'bg-dark'
}

function featureLabelClass(index: number) {
  return [
    'text-white/30',
    'text-white/40',
    'text-dark/30',
    'text-white/30',
  ][index] || 'text-white/30'
}


useScrollReveal()
</script>

<style scoped>
.about-hero-size {
  font-size: clamp(32px, 6vw, 72px);
}

/* RTL grid for alternating layouts */
.lg\:direction-rtl {
  direction: ltr;
}

@media (min-width: 1200px) {
  .lg\:direction-rtl > :first-child {
    order: 2;
  }
  .lg\:direction-rtl > :last-child {
    order: 1;
  }
}

.feature-visual {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.feature-visual:hover {
  transform: scale(1.02);
}

/* SVG animation keyframes */
@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes drawLine {
  from { stroke-dashoffset: 300; }
  to { stroke-dashoffset: 0; }
}

@keyframes fadeInSvg {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes growUp {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulseRing {
  0%, 100% { r: 20; opacity: 0.2; }
  50% { r: 30; opacity: 0; }
}

.anim-pop { animation: popIn 0.6s ease both; }
.anim-draw { stroke-dasharray: 300; animation: drawLine 1.2s ease both; }
.anim-fade-in { animation: fadeInSvg 0.8s ease both; }
.anim-grow-up { transform-origin: bottom; animation: growUp 0.8s ease both; }
.anim-spin-slow { animation: spinSlow 20s linear infinite; }
.anim-spin-slow-reverse { animation: spinSlow 15s linear infinite reverse; }
.anim-pulse { animation: pulseRing 3s ease-in-out infinite; }

.delay-1 { animation-delay: 0.15s; }
.delay-2 { animation-delay: 0.3s; }
.delay-3 { animation-delay: 0.45s; }
.delay-4 { animation-delay: 0.6s; }
.delay-5 { animation-delay: 0.75s; }
.delay-6 { animation-delay: 0.9s; }
.delay-7 { animation-delay: 1.05s; }
</style>
