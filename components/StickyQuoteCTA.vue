<template>
  <Transition name="slide-up">
    <div
      v-if="visible"
      class="fixed bottom-0 left-0 right-0 z-40">
      <div class="bg-accent px-6 py-3 flex items-center justify-between">
        <span class="text-dark text-sm font-semibold hidden sm:inline">
          Ready to start your print project?
        </span>
        <span class="text-dark text-sm font-semibold sm:hidden">
          Start your project
        </span>
        <NuxtLink
          to="/quote"
          class="bg-dark text-white px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors">
          Request a Quote
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const route = useRoute()

const isQuotePage = computed(() => route.path === '/quote')
const hasScrolled = ref(false)
const footerVisible = ref(false)

const visible = computed(() =>
  !isQuotePage.value && hasScrolled.value && !footerVisible.value
)

let ticking = false
let observer: IntersectionObserver | null = null

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(() => {
      hasScrolled.value = window.scrollY > 200
      ticking = false
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  const footer = document.querySelector('footer')
  if (footer) {
    observer = new IntersectionObserver(
      ([entry]) => {
        footerVisible.value = entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(footer)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
