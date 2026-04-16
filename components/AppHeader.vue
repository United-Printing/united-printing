<template>
  <header class="absolute w-full py-[34px] z-50">
    <div class="w-[calc(100%-80px)] mx-auto flex items-center">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="logo flex flex-col items-end cursor-pointer z-[1]"
        :class="{ dark: isDark }">
        <span class="bold">United</span>
        <span class="bold">Printing</span>
        <span class="light">Company</span>
      </NuxtLink>

      <!-- Vertical divider (lg+) -->
      <span
        v-if="!isDark"
        class="hidden lg:block w-px h-[50px] xl:h-[62px] mx-8 bg-white z-[1]" />
      <span
        v-else
        class="hidden lg:block w-px h-[50px] xl:h-[62px] mx-8 bg-black z-[1]" />

      <!-- Location (lg+) -->
      <span
        class="location hidden lg:block z-[1]"
        :class="{ dark: isDark }">
        Charlotte, NC
      </span>

      <!-- Spacer -->
      <div class="flex-1" />

      <!-- Request a Quote button (md+) -->
      <NuxtLink
        to="/quote"
        class="hidden md:inline-flex items-center justify-center w-[150px] h-[44px] border text-[10px] tracking-wider uppercase font-sans transition-colors z-[1]"
        :class="isDark
          ? 'border-black text-black hover:bg-black hover:text-white'
          : 'border-white text-white hover:bg-white hover:text-black'"
      >
        Request a Quote
      </NuxtLink>

      <!-- Menu button -->
      <button
        class="inline-flex items-center justify-center w-[60px] h-[44px] ml-4 border text-[10px] tracking-wider uppercase font-sans transition-colors z-[1]"
        :class="isDark
          ? 'border-black text-black hover:bg-black hover:text-white'
          : 'border-white text-white hover:bg-white hover:text-black'"
        @click="$emit('open-menu')"
      >
        Menu
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isDark } = useHeaderTheme()

defineEmits<{
  'open-menu': []
}>()
</script>

<style scoped>
/* Logo text sizing — ratio-based from legacy $title-font-size: 28px */
.logo span {
  color: white;
  font-weight: 200;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.099);
}

.logo.dark span {
  color: black;
  text-shadow: none;
}

/* Bold spans: "United", "Printing" */
.logo .bold {
  font-size: 16.8px;
  line-height: 16.8px;
  font-weight: 700;
}

/* Light span: "Company" */
.logo .light {
  font-size: 14.45px;
  line-height: 15.12px;
  margin-right: 2.8px;
}

/* Location */
.location {
  font-size: 15.4px;
  font-weight: 500;
  color: white;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.099);
}

.location.dark {
  color: black;
  text-shadow: none;
}

/* md: 720px - 1199px */
@media screen and (min-width: 720px) and (max-width: 1199px) {
  .logo .bold {
    font-size: 22.4px;
    line-height: 22.4px;
  }

  .logo .light {
    font-size: 19.26px;
    line-height: 20.16px;
  }
}

/* lg: 1200px - 1919px */
@media screen and (min-width: 1200px) and (max-width: 1919px) {
  .logo .bold {
    font-size: 19.6px;
    line-height: 19.6px;
  }

  .logo .light {
    font-size: 16.86px;
    line-height: 17.64px;
  }

  .location {
    font-size: 15.4px;
    font-weight: 500;
  }
}

/* xl: 1920px+ */
@media screen and (min-width: 1920px) {
  .logo .bold {
    font-size: 28px;
    line-height: 28px;
  }

  .logo .light {
    font-size: 24.08px;
    line-height: 25.2px;
  }

  .location {
    font-size: 22px;
    font-weight: 100;
  }
}
</style>
