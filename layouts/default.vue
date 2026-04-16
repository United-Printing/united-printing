<template>
  <div class="min-h-screen font-sans">
    <AppHeader @open-menu="menuOpen = true" />
    <MobileMenu v-model="menuOpen" />
    <main>
      <slot />
    </main>
    <AppFooter />
    <StickyQuoteCTA />
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
</script>
