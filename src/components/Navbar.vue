<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Arma tu Waffle', href: '#builder' },
  { name: 'Nuestra Carta', href: '#menu' },
  { name: 'Contacto', href: '#footer' }
]
</script>

<template>
  <nav class="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-coffee/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo / Marca -->
        <div class="flex-shrink-0 flex items-center gap-2">
          <span class="text-2xl">☕</span>
          <span class="font-outfit font-black text-2xl tracking-tight text-brand-cream">
            ESTACIÓN <span class="text-brand-caramel text-shadow">CAKAO'S</span>
          </span>
        </div>

        <!-- Links Desktop -->
        <div class="hidden md:flex items-center gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-brand-muted hover:text-brand-cream text-sm font-semibold transition-colors duration-300 font-outfit"
          >
            {{ link.name }}
          </a>
          <a 
            href="#builder" 
            class="bg-brand-coffee text-brand-cream font-outfit font-bold px-5 py-2.5 rounded-full hover:bg-brand-caramel transition-colors duration-300 text-sm shadow-md shadow-brand-coffee/20"
          >
            Pide en Línea
          </a>
        </div>

        <!-- Botón Móvil -->
        <div class="md:hidden flex items-center">
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            type="button" 
            class="text-brand-muted hover:text-brand-cream focus:outline-none focus:text-brand-cream"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path 
                v-if="!isMenuOpen" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú Móvil -->
    <div v-show="isMenuOpen" class="md:hidden bg-brand-darker border-b border-brand-coffee/10">
      <div class="px-2 pt-2 pb-4 space-y-1 sm:px-3">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          @click="isMenuOpen = false"
          class="block text-brand-muted hover:text-brand-cream hover:bg-brand-coffee/20 px-3 py-3 rounded-xl text-base font-semibold transition-all duration-300 font-outfit"
        >
          {{ link.name }}
        </a>
        <div class="pt-2 px-3">
          <a 
            href="#builder" 
            @click="isMenuOpen = false"
            class="block w-full text-center bg-brand-caramel text-brand-cream font-outfit font-bold py-3 rounded-xl hover:bg-brand-coffee transition-colors duration-300 shadow-md"
          >
            Pide en Línea
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
