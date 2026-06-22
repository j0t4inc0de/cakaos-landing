<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import WaffleBuilder from './components/WaffleBuilder.vue'
import CoffeeMenu from './components/CoffeeMenu.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-brand-dark font-sans text-brand-cream antialiased selection:bg-brand-caramel selection:text-brand-cream">
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
</template>

<style>
/* Custom smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
