<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="menu-overlay fixed inset-0 z-[60] flex flex-col items-end justify-center p-[60px] sm:p-[60px]"
      @click.self="close"
      @keydown.escape.window="close">
      <nav class="flex flex-col items-end justify-center">
        <NuxtLink
          v-for="(item, i) in menuItems"
          :key="item.to"
          :to="item.to"
          class="menu-item block text-right font-bold cursor-pointer"
          :class="[
            route.path === item.to ? 'text-accent' : 'text-white',
            { 'mt-10': item.separated },
          ]"
          :style="{ '--i': i }"
          @click="close">
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const route = useRoute()

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Request a Quote', to: '/quote', separated: true },
]

function close() {
  emit('update:modelValue', false)
}

watch(() => props.modelValue, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.menu-overlay {
  background: rgba(0, 0, 0, 0.9);
  animation: menu-fade-in 0.4s ease-in-out;
}

.menu-item {
  --i: 0;
  font-size: 60px;
  line-height: 64px;
  transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
  animation: menu-slide-in 0.3s ease-in-out calc(var(--i) * 80ms) both;
  text-decoration: none;
}

.menu-item:hover {
  transform: translateX(-10px);
}

/* Smaller screens */
@media screen and (max-width: 599px) {
  .menu-overlay {
    padding: 40px;
  }

  .menu-item {
    font-size: 40px;
    line-height: 42px;
  }
}

@keyframes menu-fade-in {
  from {
    background: rgba(0, 0, 0, 0);
  }
}

@keyframes menu-slide-in {
  from {
    transform: translateX(200px);
    opacity: 0;
  }
}
</style>
