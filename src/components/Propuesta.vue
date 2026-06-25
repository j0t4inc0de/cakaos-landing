<script setup>
import { ref, computed } from 'vue'

const extraOrdersPerDay = ref(3)
const averageTicket = ref(5500) // Waffle + café promedio

const monthlyRevenue = computed(() => {
  return extraOrdersPerDay.value * 30 * averageTicket.value
})

const formatPrice = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value)
}

const goToDemo = () => {
  window.location.hash = ''
}

const getWhatsAppLink = (planName) => {
  const message = `¡Hola Jota! Revisamos la propuesta digital de Estación Cakao's y nos interesa conversar más sobre el ${planName}. ¿Cuándo nos podríamos reunir?`
  return `https://wa.me/56976619819?text=${encodeURIComponent(message)}`
}
</script>

<template>
  <div class="min-h-screen bg-brand-dark py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-between select-none">
    <!-- Header -->
    <header class="text-center mb-8 sm:mb-12">
      <div class="flex justify-center items-center gap-2 mb-3">
        <!-- Brand Coffee SVG -->
        <svg class="w-8 h-8 text-brand-caramel" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9V3m0 0H7.5m2.25 0h2.25M3.75 9h12a3 3 0 013 3v2.25a6 6 0 01-6 6h-6a6 6 0 01-6-6V12a3 3 0 013-3zM18.75 12h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5V12z" />
        </svg>
        <span class="font-outfit font-black text-xl tracking-tight text-brand-cream">
          WE ARE <span class="text-brand-caramel">SAMOD</span>
        </span>
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-outfit font-black text-brand-cream tracking-tight leading-tight px-2">
        Propuesta Digital: <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-caramel to-brand-cream">Estación Cakao's</span>
      </h1>
      <p class="text-xs sm:text-sm md:text-base text-brand-muted max-w-xl mx-auto mt-4 px-2">
        Diseñamos una experiencia exclusiva para tus clientes. Más que una carta virtual, creamos un canal directo de ventas a medida, sin comisiones ni intermediarios.
      </p>
      
      <div class="mt-6 flex flex-col items-center gap-2">
        <button 
          @click="goToDemo"
          class="text-xs sm:text-sm bg-brand-darker hover:bg-brand-coffee/20 border border-brand-coffee/30 text-brand-cream font-semibold px-5 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
        >
          <!-- Left Arrow SVG -->
          <svg class="w-4 h-4 text-brand-cream" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Ver Prototipo de la Carta
        </button>
        <span class="text-[10px] text-brand-muted">
          *Nota: El prototipo de la carta es una muestra visual preliminar y no constituye el producto final.
        </span>
      </div>
    </header>

    <!-- Comparativa con cartas frías -->
    <section class="glass-panel rounded-2xl p-5 sm:p-8 mb-8 sm:mb-12 border border-brand-coffee/20">
      <h2 class="text-lg sm:text-2xl font-outfit font-bold text-brand-cream mb-6 text-center">¿Por qué un Menú Exclusivo y no un PDF o Carta Genérica?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div class="space-y-3">
          <!-- Waffle/Grid Layout SVG -->
          <svg class="w-8 h-8 text-brand-caramel" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
          <h3 class="text-base sm:text-lg font-outfit font-bold text-brand-cream">Armador Interactivo</h3>
          <p class="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Los clientes arman su waffle en pantalla en tiempo real. Al ver los ingredientes de forma lúdica, se incentiva la adición de toppings, subiendo el valor del ticket promedio.
          </p>
        </div>
        <div class="space-y-3">
          <!-- Lightning/Bolt SVG -->
          <svg class="w-8 h-8 text-brand-caramel" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
          <h3 class="text-base sm:text-lg font-outfit font-bold text-brand-cream">Carga en 1 Segundo</h3>
          <p class="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Sin descargas molestas de PDFs pesados ni registros complejos. Funciona de inmediato en cualquier teléfono con solo escanear el código QR en las mesas.
          </p>
        </div>
        <div class="space-y-3">
          <!-- Heart/Branding SVG -->
          <svg class="w-8 h-8 text-brand-caramel" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <h3 class="text-base sm:text-lg font-outfit font-bold text-brand-cream">Branding de tu Marca</h3>
          <p class="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Muestra la vibra acogedora del local, reviews reales y políticas inclusivas (Pet Friendly / LGBTQ+ Safe), algo que los menús POS genéricos no hacen.
          </p>
        </div>
      </div>
    </section>

    <!-- Planes y Precios -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12">
      <!-- Plan 1 -->
      <div class="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-coffee/30 flex flex-col justify-between hover:border-brand-coffee transition-all duration-300">
        <div>
          <span class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Plan Esencial</span>
          <h3 class="text-xl sm:text-3xl font-outfit font-bold text-brand-cream mt-1">Menú Virtual + Administrador</h3>
          <p class="text-xs sm:text-sm text-brand-muted mt-3">
            Ideal para modernizar el local con carta digital y tener control total de los productos y precios.
          </p>

          <ul class="space-y-3 my-6 text-xs sm:text-sm text-brand-muted">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Landing page de marca y carta digital filtrable.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Waffle Builder interactivo.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span><strong>Panel de Administración:</strong> Permite agregar nuevos productos, cambiar precios, crear descuentos y desactivar productos sin stock al instante de forma fácil.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Código QR del local listo para imprimir.</span>
            </li>
          </ul>
        </div>

        <div>
          <div class="border-t border-brand-coffee/10 pt-4 mb-6">
            <div class="flex justify-between items-baseline mb-1">
              <span class="text-[10px] sm:text-xs text-brand-muted uppercase">Implementación:</span>
              <span class="text-lg sm:text-xl font-bold text-brand-cream">{{ formatPrice(70000) }} <span class="text-[9px] sm:text-[10px] text-brand-muted font-normal">(en 2 cuotas)</span></span>
            </div>
            <div class="flex justify-between items-baseline">
              <span class="text-[10px] sm:text-xs text-brand-muted uppercase">Mantención mensual:</span>
              <span class="text-lg sm:text-xl font-bold text-brand-caramel">{{ formatPrice(20000) }}<span class="text-xs font-normal text-brand-muted">/mes</span></span>
            </div>
            <div class="text-[9px] text-brand-muted text-right mt-1.5">*Se comienza a pagar desde el 2° mes de servicio</div>
          </div>
          <a 
            :href="getWhatsAppLink('Plan 1 (Menú + Panel Admin)')"
            target="_blank"
            class="block w-full text-center bg-brand-darker hover:bg-brand-coffee/30 border border-brand-coffee/30 text-brand-cream font-outfit font-bold py-3 rounded-xl transition-all duration-300 text-xs sm:text-sm"
          >
            Me interesa el Plan 1
          </a>
        </div>
      </div>

      <!-- Plan 2 -->
      <div class="glass-panel rounded-2xl p-6 sm:p-8 border-2 border-brand-caramel/60 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-brand-caramel transition-all duration-300">
        <div class="absolute top-4 right-4 bg-brand-caramel text-brand-cream text-[9px] uppercase font-bold px-2.5 py-1 rounded-full tracking-wider">
          Recomendado
        </div>
        
        <div>
          <span class="text-xs font-semibold uppercase tracking-widest text-brand-caramel">Plan Inteligente</span>
          <h3 class="text-xl sm:text-3xl font-outfit font-bold text-brand-cream mt-1">Pro + Recepcionista IA</h3>
          <p class="text-xs sm:text-sm text-brand-muted mt-3">
            Para locales que quieren automatizar consultas y ofrecer pedidos por mesa sin errores humanos.
          </p>

          <ul class="space-y-3 my-6 text-xs sm:text-sm text-brand-muted">
            <li class="flex items-start gap-2 text-brand-cream font-medium">
              <svg class="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Todo lo incluido en el Plan 1.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span><strong>Recepcionista IA en WhatsApp 24/7:</strong> responde dudas comunes (horarios, ubicación, opciones veganas) y envía el enlace de pedido de forma automática.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span><strong>QR inteligente por Mesa:</strong> autocompleta el número de mesa en el pedido del cliente de forma invisible, eliminando errores de digitación.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span><strong>Estadísticas de consumo:</strong> visualiza en tu panel qué ingredientes y productos son los más populares de forma gráfica.</span>
            </li>
          </ul>
        </div>

        <div>
          <div class="border-t border-brand-coffee/10 pt-4 mb-6">
            <div class="flex justify-between items-baseline mb-1">
              <span class="text-[10px] sm:text-xs text-brand-muted uppercase">Implementación:</span>
              <span class="text-lg sm:text-xl font-bold text-brand-cream">{{ formatPrice(120000) }} <span class="text-[9px] sm:text-[10px] text-brand-muted font-normal">(en 2 cuotas)</span></span>
            </div>
            <div class="flex justify-between items-baseline">
              <span class="text-[10px] sm:text-xs text-brand-muted uppercase">Mantención mensual:</span>
              <span class="text-lg sm:text-xl font-bold text-brand-caramel">{{ formatPrice(35000) }}<span class="text-xs font-normal text-brand-muted">/mes</span></span>
            </div>
            <div class="text-[9px] text-brand-muted text-right mt-1.5">*Se comienza a pagar desde el 2° mes de servicio</div>
          </div>
          <a 
            :href="getWhatsAppLink('Plan 2 (Pro + Recepcionista IA)')"
            target="_blank"
            class="block w-full text-center bg-gradient-to-r from-brand-coffee to-brand-caramel hover:from-brand-caramel hover:to-brand-coffee text-brand-cream font-outfit font-bold py-3.5 rounded-xl shadow-lg transition-all duration-500 text-xs sm:text-sm"
          >
            Me interesa el Plan 2
          </a>
        </div>
      </div>
    </section>

    <!-- Simulador de Retorno de Inversión (Interactive ROI Widget) -->
    <section class="glass-panel rounded-2xl p-5 sm:p-8 mb-8 sm:mb-12 border border-brand-coffee/20 text-center">
      <h2 class="text-lg sm:text-2xl font-outfit font-bold text-brand-cream mb-2">Simulador de Retorno de Inversión (ROI)</h2>
      <p class="text-xs sm:text-sm text-brand-muted mb-6 max-w-xl mx-auto px-2">
        Comprueba cómo se autofinancia la mantención de la carta con el aumento de ventas virtuales.
      </p>

      <div class="max-w-md mx-auto space-y-6 px-2">
        <!-- Input 1 -->
        <div>
          <div class="flex justify-between text-xs sm:text-sm font-semibold text-brand-muted mb-2">
            <span>Pedidos adicionales al día:</span>
            <span class="text-brand-caramel font-bold">{{ extraOrdersPerDay }} pedidos</span>
          </div>
          <input 
            v-model.number="extraOrdersPerDay" 
            type="range" 
            min="1" 
            max="15" 
            class="w-full accent-brand-caramel cursor-pointer"
          />
        </div>

        <!-- Input 2 -->
        <div>
          <div class="flex justify-between text-xs sm:text-sm font-semibold text-brand-muted mb-2">
            <span>Ticket promedio estimado:</span>
            <span class="text-brand-caramel font-bold">{{ formatPrice(averageTicket) }} CLP</span>
          </div>
          <input 
            v-model.number="averageTicket" 
            type="range" 
            min="3000" 
            max="12000" 
            step="500" 
            class="w-full accent-brand-caramel cursor-pointer"
          />
        </div>

        <!-- Resultado -->
        <div class="bg-brand-darker/50 rounded-xl p-4 sm:p-5 border border-brand-coffee/10 mt-6">
          <span class="block text-[10px] sm:text-xs uppercase tracking-wider text-brand-muted mb-1">Ingreso adicional estimado al mes</span>
          <span class="text-xl sm:text-3xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-caramel to-brand-cream">
            {{ formatPrice(monthlyRevenue) }} CLP
          </span>
          <span class="block text-[9px] sm:text-[10px] text-brand-muted mt-2 leading-relaxed">
            *Estimación basada en 30 días de atención. La mantención se paga sola con los primeros pedidos del mes.
          </span>
        </div>
      </div>
    </section>

    <!-- Footer de Propuesta -->
    <footer class="text-center text-[10px] sm:text-xs text-brand-muted py-6 border-t border-brand-coffee/10">
      <p>© 2026 We Are Samod. Propuesta comercial exclusiva para Estación Cakao's.</p>
    </footer>
  </div>
</template>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  background: rgba(120, 53, 15, 0.2);
  height: 6px;
  border-radius: 3px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #D97706;
  cursor: pointer;
  transition: transform 0.2s ease;
}
input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
</style>
