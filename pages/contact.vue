<template>
  <div class="contact-page bg-white min-h-screen">
    <!-- ==========================================
         HERO — Large typographic title
         ========================================== -->
    <section class="relative min-h-[50vh] sm:min-h-[60vh] bg-dark text-white flex items-end overflow-hidden">
      <div class="absolute inset-0 gradient-mesh opacity-50" />
      <div class="absolute inset-0 grid-pattern" />
      <div class="absolute inset-0 noise" />

      <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] pb-16 sm:pb-20 max-w-[1400px] mx-auto w-full">
        <span class="text-label text-accent block mb-5">Get in Touch</span>
        <h1 class="text-editorial contact-hero-size text-white">
          We would <em class="not-italic text-accent">love</em><br />
          <em class="not-italic text-accent">to hear</em> from<br />
          you.
        </h1>
      </div>
    </section>

    <!-- ==========================================
         CONTACT CARDS — Grid layout
         ========================================== -->
    <section class="relative py-16 sm:py-24 lg:py-32">
      <div class="absolute inset-0 grid-pattern-dark" />

      <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <!-- Address card -->
          <a
            href="https://www.google.com/maps/place/United+Printing+Company/@35.1325055,-80.9114746,18.35z"
            target="_blank"
            rel="noopener"
            class="reveal contact-card group border border-dark/8 rounded-lg p-8 sm:p-10 transition-all duration-500 hover:border-accent/30 hover:shadow-lg"
            @click="trackMapsClick">
            <span class="text-label text-teal block mb-6">Company Address</span>
            <div class="text-[18px] sm:text-[20px] font-semibold text-dark leading-relaxed group-hover:text-accent transition-colors">
              <p>8200-A Arrowridge Blvd</p>
              <p>Charlotte, NC 28273</p>
            </div>
            <div class="mt-6 flex items-center gap-2 text-dark/30 group-hover:text-accent transition-all">
              <span class="w-5 h-px bg-current transition-all duration-300 group-hover:w-8" />
              <span class="text-label">Open Maps</span>
            </div>
          </a>

          <!-- Phone card -->
          <a
            href="tel:7045253710"
            class="reveal reveal-delay-1 contact-card group border border-dark/8 rounded-lg p-8 sm:p-10 transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
            <span class="text-label text-teal block mb-6">Call Us</span>
            <p class="text-[24px] sm:text-[28px] font-bold text-dark group-hover:text-accent transition-colors">
              (704) 525-3710
            </p>
            <p class="mt-2 text-[15px] text-dark/40">Monday - Friday</p>
            <div class="mt-6 flex items-center gap-2 text-dark/30 group-hover:text-accent transition-all">
              <span class="w-5 h-px bg-current transition-all duration-300 group-hover:w-8" />
              <span class="text-label">Call Now</span>
            </div>
          </a>

          <!-- Email card -->
          <a
            href="mailto:info@unitedprintingnc.com"
            class="reveal reveal-delay-2 contact-card group border border-dark/8 rounded-lg p-8 sm:p-10 transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
            <span class="text-label text-teal block mb-6">Email</span>
            <p class="text-[18px] sm:text-[20px] font-semibold text-dark group-hover:text-accent transition-colors break-all">
              info@unitedprintingnc.com
            </p>
            <p class="mt-2 text-[15px] text-dark/40">We respond within 24 hours</p>
            <div class="mt-6 flex items-center gap-2 text-dark/30 group-hover:text-accent transition-all">
              <span class="w-5 h-px bg-current transition-all duration-300 group-hover:w-8" />
              <span class="text-label">Send Email</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SOCIAL + SERVICES LINK
         ========================================== -->
    <section class="relative py-16 sm:py-24 border-t border-dark/5">
      <div class="px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto">
        <div class="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <!-- Follow us -->
          <div>
            <span class="text-label text-dark/40 block mb-4">Follow Us</span>
            <a
              href="https://www.linkedin.com/company/unitedprinting/"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-4">
              <div class="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                <span class="text-sm font-bold text-dark/60 group-hover:text-accent transition-colors">in</span>
              </div>
              <div>
                <p class="text-[17px] font-semibold text-dark group-hover:text-accent transition-colors">LinkedIn</p>
                <p class="text-[14px] text-dark/40">@unitedprintingnc</p>
              </div>
            </a>
          </div>

          <!-- Services link -->
          <div>
            <span class="text-label text-dark/40 block mb-4">Explore</span>
            <NuxtLink
              to="/services"
              class="group flex items-center gap-4">
              <div class="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                <span class="text-sm font-bold text-dark/60 group-hover:text-accent transition-colors">&#8594;</span>
              </div>
              <div>
                <p class="text-[17px] font-semibold text-dark group-hover:text-accent transition-colors">Our Services</p>
                <p class="text-[14px] text-dark/40">Digital, offset, wide format & more</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         CTA BANNER
         ========================================== -->
    <section class="relative py-16 sm:py-20 bg-dark text-white overflow-hidden">
      <div class="absolute inset-0 gradient-mesh opacity-30" />
      <div class="absolute inset-0 noise" />

      <div class="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-[120px] max-w-[1400px] mx-auto text-center">
        <span class="text-label text-accent block mb-4">Ready?</span>
        <h2 class="text-editorial text-[28px] sm:text-[36px] lg:text-[42px] text-white mb-6">
          Let's build something<br /><span class="text-accent">together</span>.
        </h2>
        <NuxtLink
          to="/quote"
          class="btn-magnetic inline-flex border-2 border-accent text-accent px-10 py-5 text-sm tracking-[0.15em] uppercase font-bold hover:text-dark">
          <span>Request a Quote</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Contact Us | United Printing Company' })

const { trackConversion } = useGtag()

function trackMapsClick() {
  trackConversion('AW-10880773539/u9XbCJPBsZoYEKPbrcQo', 10.0, 'USD')
}

useScrollReveal()
</script>

<style scoped>
.contact-hero-size {
  font-size: clamp(32px, 6vw, 72px);
}

.contact-card {
  background: white;
}

.contact-card:hover {
  transform: translateY(-4px);
}
</style>
