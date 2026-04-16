export function useQuoteApi() {
  const config = useRuntimeConfig()
  const processing = ref(false)
  const sent = ref(false)
  const error = ref(false)

  async function submitQuote(formData: {
    name: string
    email: string
    phone: string
    companyName: string
    description: string
    stock: string
    colorsFront: string
    colorsBack: string
    proofType: string
    shipping: string
  }) {
    if (!formData.name || !formData.email || !formData.description) {
      return false
    }

    processing.value = true
    error.value = false

    try {
      const params = new URLSearchParams(
        Object.entries(formData).filter(([, v]) => v),
      )
      await $fetch(`${config.public.apiBaseUrl}/request-quote?${params.toString()}`)
      sent.value = true

      // Fire Google Ads conversion
      try {
        const w = window as any
        if (w.gtagRef) {
          w.gtagRef('event', 'conversion', {
            send_to: 'AW-10880773539/wDx4CP6q25gYEKPbrcQo',
          })
        }
      } catch { /* ignore tracking errors */ }

      return true
    } catch {
      error.value = true
      return false
    } finally {
      processing.value = false
    }
  }

  function reset() {
    sent.value = false
    error.value = false
  }

  return { processing, sent, error, submitQuote, reset }
}
