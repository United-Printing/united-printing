export function useHeaderTheme() {
  // All pages now have dark hero sections — header is always light
  const isDark = computed(() => false)

  return { isDark }
}
