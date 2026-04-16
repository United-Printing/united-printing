<template>
  <div class="dots-grid" :class="{ 'dark-dots': dark }" :style="gridStyle">
    <span
      v-for="(dot, i) in dots"
      :key="i"
      class="dot"
      :class="{ filled: dot.filled, colored: dot.colored }" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  width: number
  height: number
  fillRatio?: number
  coloredRatio?: number
  dark?: boolean
}>(), {
  fillRatio: 0.6,
  coloredRatio: 0.15,
  dark: false,
})

interface Dot {
  filled: boolean
  colored: boolean
}

// Generate on client only to avoid SSR hydration mismatch from Math.random()
const dots = ref<Dot[]>([])

onMounted(() => {
  const total = props.width * props.height
  const result: Dot[] = []
  for (let i = 0; i < total; i++) {
    const filled = Math.random() < props.fillRatio
    const colored = filled && Math.random() < props.coloredRatio
    result.push({ filled, colored })
  }
  dots.value = result
})

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.width}, 15px)`,
  gridTemplateRows: `repeat(${props.height}, 15px)`,
}))
</script>

<style scoped>
.dots-grid {
  display: grid;
  gap: 7.5px;
}

.dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: border-color 0.3s ease;
}

.filled {
  border-color: rgba(255, 255, 255, 0.6);
}

.dark-dots .dot {
  border-color: rgba(0, 0, 0, 0.15);
}

.dark-dots .filled {
  border-color: rgba(0, 0, 0, 0.3);
}

.colored {
  border-color: #FEE137;
  animation: glow 5s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { border-color: #FEE137; }
  50% { border-color: rgba(254, 225, 55, 0.3); }
}
</style>
