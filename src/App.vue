<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import WaffleBuilder from './components/WaffleBuilder.vue'
import CoffeeMenu from './components/CoffeeMenu.vue'
import Footer from './components/Footer.vue'
import Propuesta from './components/Propuesta.vue'

const showPropuesta = ref(false)

const checkRoute = () => {
  showPropuesta.value = window.location.hash === '#propuesta'
}

onMounted(() => {
  checkRoute()
  window.addEventListener('hashchange', checkRoute)
})
</script>

<template>
  <div class="min-h-screen bg-brand-dark font-sans text-brand-cream antialiased selection:bg-brand-caramel selection:text-brand-cream">
    <div v-if="showPropuesta" class="animate-fade-in">
      <Propuesta />
    </div>
    <div v-else>
      <!-- Navbar -->
      <Navbar />

      <!-- Hero Section -->
      <Hero />

      <!-- Waffle Builder Section -->
      <WaffleBuilder />

      <!-- Coffee & Extras Menu Section -->
      <CoffeeMenu />

      <!-- Footer Section -->
      <Footer />
    </div>
  </div>
</template>

<style>
/* Custom smooth scrolling */
html {
  scroll-behavior: smooth;
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
