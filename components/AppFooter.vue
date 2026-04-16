<template>
  <footer class="bg-dark text-white font-sans">
    <div class="max-w-[1200px] mx-auto px-10 py-16">
      <!-- Top section -->
      <div class="flex flex-col lg:flex-row lg:justify-between gap-12">
        <!-- Company info -->
        <div>
          <div class="flex flex-col items-start">
            <span class="text-base font-bold leading-tight">United</span>
            <span class="text-base font-bold leading-tight">Printing</span>
            <span class="text-sm font-light leading-tight">Company</span>
          </div>

          <address class="not-italic mt-6 text-sm text-muted leading-relaxed">
            8200-A Arrowridge Blvd<br>
            Charlotte, NC 28273
          </address>

          <div class="mt-4 text-sm text-muted space-y-1">
            <p>
              <a href="tel:7045253710" class="hover:text-white transition-colors">(704) 525-3710</a>
            </p>
            <p>
              <a href="mailto:info@unitedprintingnc.com" class="hover:text-white transition-colors">info@unitedprintingnc.com</a>
            </p>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-col gap-3 lg:text-right">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm text-white/70 hover:text-accent transition-colors duration-200 uppercase tracking-wider">
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Divider -->
      <hr class="border-white/10 my-8">

      <!-- Copyright -->
      <p class="text-xs text-muted text-center">
        &copy; {{ currentYear }} United Printing Company. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Request a Quote', to: '/quote' },
]
</script>
