export function useGtag() {
  function trackConversion(sendTo: string, value?: number, currency?: string) {
    try {
      const w = window as any
      if (w.gtagRef) {
        const params: Record<string, any> = { send_to: sendTo }
        if (value !== undefined) params.value = value
        if (currency) params.currency = currency
        w.gtagRef('event', 'conversion', params)
      }
    } catch { /* ignore tracking errors */ }
  }

  return { trackConversion }
}
