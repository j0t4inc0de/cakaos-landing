<script setup>
import { ref, computed } from 'vue'

const clientName = ref('')
const orderType = ref('mesa') // 'mesa', 'llevar'
const tableNumber = ref('')

const bases = [
  { id: 'clasico', name: 'Waffle Belga Clásico', price: 4500, desc: 'Masa tradicional dorada y crujiente por fuera, suave por dentro.' },
  { id: 'vegano', name: 'Waffle Vegano', price: 4900, desc: 'Masa hecha a base de leche de almendras y harina integral, sin huevo.' },
  { id: 'chocolate', name: 'Waffle de Chocolate', price: 4800, desc: 'Nuestra masa clásica infusionada con cacao amargo belga.' }
]

const toppings = [
  { id: 'frutilla', name: 'Frutillas frescas', price: 800 },
  { id: 'platano', name: 'Plátano en rodajas', price: 800 },
  { id: 'helado', name: 'Helado de Vainilla', price: 1200 },
  { id: 'oreo', name: 'Galletas Oreo molidas', price: 800 },
  { id: 'chips', name: 'Chips de Chocolate', price: 800 },
  { id: 'nueces', name: 'Nuez picada cruda', price: 1000 }
]

const sauces = [
  { id: 'chocolate_salsa', name: 'Salsa de Chocolate Belga', price: 500 },
  { id: 'manjar', name: 'Manjar artesanal casero', price: 500 },
  { id: 'caramelo', name: 'Salsa de Caramelo Salado', price: 500 },
  { id: 'nutella', name: 'Nutella cremosa', price: 1000 }
]

const selectedBase = ref(bases[0])
const selectedToppings = ref([])
const selectedSauces = ref([])

const toggleTopping = (topping) => {
  const index = selectedToppings.value.findIndex(t => t.id === topping.id)
  if (index > -1) {
    selectedToppings.value.splice(index, 1)
  } else {
    selectedToppings.value.push(topping)
  }
}

const toggleSauce = (sauce) => {
  const index = selectedSauces.value.findIndex(s => s.id === sauce.id)
  if (index > -1) {
    selectedSauces.value.splice(index, 1)
  } else {
    selectedSauces.value.push(sauce)
  }
}

const isToppingSelected = (id) => selectedToppings.value.some(t => t.id === id)
const isSauceSelected = (id) => selectedSauces.value.some(s => s.id === id)

const totalAmount = computed(() => {
  let total = selectedBase.value.price
  total += selectedToppings.value.reduce((sum, t) => sum + t.price, 0)
  total += selectedSauces.value.reduce((sum, s) => sum + s.price, 0)
  return total
})

const formatPrice = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value)
}

const sendWhatsAppOrder = () => {
  if (!clientName.value.trim()) {
    alert('Por favor, ingresa tu nombre para personalizar el pedido.')
    return
  }
  if (orderType.value === 'mesa' && !tableNumber.value.trim()) {
    alert('Por favor, ingresa tu número de mesa.')
    return
  }

  const baseText = `*Base:* ${selectedBase.value.name} (${formatPrice(selectedBase.value.price)})`
  const toppingsText = selectedToppings.value.length > 0 
    ? `*Toppings:* \n  - ` + selectedToppings.value.map(t => `${t.name} (+${formatPrice(t.price)})`).join('\n  - ') 
    : '*Toppings:* Ninguno'
  const saucesText = selectedSauces.value.length > 0 
    ? `*Salsas:* \n  - ` + selectedSauces.value.map(s => `${s.name} (+${formatPrice(s.price)})`).join('\n  - ') 
    : '*Salsas:* Ninguna'

  const cleanTableNumber = tableNumber.value.replace(/mesa\s*/gi, '')
  const locationText = orderType.value === 'mesa' 
    ? `Mesa N° ${cleanTableNumber}` 
    : 'Para Llevar / Retiro en local'

  const message = `¡Hola Cakao's Coffee!
Me gustaría pedir un Waffle personalizado con la siguiente combinación:

${baseText}
${toppingsText}
${saucesText}

*Total:* ${formatPrice(totalAmount.value)}
*Cliente:* ${clientName.value}
*Servicio:* ${locationText}

¡Muchas gracias!`

  const whatsappURL = `https://wa.me/56976619819?text=${encodeURIComponent(message)}`
  window.open(whatsappURL, '_blank')
}
</script>

<template>
  <section id="builder" class="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-coffee/20">
    <!-- Título de Sección -->
    <div class="text-center mb-10 md:mb-12">
      <span class="text-brand-caramel uppercase tracking-widest text-xs sm:text-sm font-semibold font-outfit">Crea tu Experiencia</span>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-brand-cream mt-2">Armador de Waffles Virtual</h2>
      <p class="text-sm sm:text-base text-brand-muted max-w-xl mx-auto mt-4">
        Personaliza tu waffle belga en tiempo real. Elige tu masa favorita, toppings frescos y salsas premium. ¡Te calculamos el total al instante!
      </p>
    </div>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
      <!-- Selector de Ingredientes (8 Columnas en LG) -->
      <div class="lg:col-span-8 space-y-6 md:space-y-8">
        
        <!-- 1. Selección de Base -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 md:p-8">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-coffee flex items-center justify-center text-brand-cream text-sm font-bold font-outfit">1</span>
            <h3 class="text-xl sm:text-2xl font-outfit font-bold text-brand-cream">Elige tu Base de Waffle</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <button 
              v-for="base in bases" 
              :key="base.id" 
              @click="selectedBase = base"
              class="text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between min-h-[110px] sm:h-40"
              :class="selectedBase.id === base.id 
                ? 'bg-brand-coffee/30 border-brand-caramel text-brand-cream ring-1 ring-brand-caramel shadow-lg' 
                : 'bg-brand-darker/50 border-brand-coffee/20 text-brand-muted hover:border-brand-coffee/60 hover:text-brand-cream'"
            >
              <div>
                <span class="block font-bold text-base sm:text-lg font-outfit text-brand-cream leading-tight">{{ base.name }}</span>
                <span class="block text-[11px] sm:text-xs mt-1 leading-normal text-brand-muted">{{ base.desc }}</span>
              </div>
              <span class="block text-brand-caramel font-bold font-outfit mt-3 sm:mt-4 text-right w-full text-sm sm:text-base">{{ formatPrice(base.price) }}</span>
            </button>
          </div>
        </div>

        <!-- 2. Selección de Toppings -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 md:p-8">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-coffee flex items-center justify-center text-brand-cream text-sm font-bold font-outfit">2</span>
            <h3 class="text-xl sm:text-2xl font-outfit font-bold text-brand-cream">Agrega tus Toppings (Opcional)</h3>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <button 
              v-for="topping in toppings" 
              :key="topping.id" 
              @click="toggleTopping(topping)"
              class="p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between items-center text-center gap-2 min-h-[90px] sm:min-h-0"
              :class="isToppingSelected(topping.id) 
                ? 'bg-brand-coffee/30 border-brand-caramel text-brand-cream ring-1 ring-brand-caramel shadow-md' 
                : 'bg-brand-darker/50 border-brand-coffee/20 text-brand-muted hover:border-brand-coffee/60 hover:text-brand-cream'"
            >
              <span class="font-semibold font-outfit text-sm sm:text-base text-brand-cream">{{ topping.name }}</span>
              <span class="text-brand-caramel font-bold text-xs sm:text-sm font-outfit">+{{ formatPrice(topping.price) }}</span>
            </button>
          </div>
        </div>

        <!-- 3. Selección de Salsas -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 md:p-8">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-coffee flex items-center justify-center text-brand-cream text-sm font-bold font-outfit">3</span>
            <h3 class="text-xl sm:text-2xl font-outfit font-bold text-brand-cream">Báñalo con Salsas (Opcional)</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button 
              v-for="sauce in sauces" 
              :key="sauce.id" 
              @click="toggleSauce(sauce)"
              class="p-4 rounded-xl border transition-all duration-300 flex justify-between items-center gap-4 text-left"
              :class="isSauceSelected(sauce.id) 
                ? 'bg-brand-coffee/30 border-brand-caramel text-brand-cream ring-1 ring-brand-caramel shadow-md' 
                : 'bg-brand-darker/50 border-brand-coffee/20 text-brand-muted hover:border-brand-coffee/60 hover:text-brand-cream'"
            >
              <span class="font-semibold font-outfit text-sm sm:text-base text-brand-cream">{{ sauce.name }}</span>
              <span class="text-brand-caramel font-bold text-xs sm:text-sm font-outfit whitespace-nowrap">+{{ formatPrice(sauce.price) }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Resumen y Formulario de Envío (4 Columnas en LG) -->
      <div class="lg:col-span-4 lg:sticky lg:top-24 space-y-6 w-full">
        <!-- Tarjeta de Resumen -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 md:p-8 border border-brand-coffee/30 lg:border-2 lg:border-brand-coffee/50 relative overflow-hidden">
          <div class="absolute -right-12 -top-12 w-24 h-24 bg-brand-caramel/10 rounded-full blur-xl"></div>
          
          <h3 class="text-xl sm:text-2xl font-outfit font-bold text-brand-cream mb-6 border-b border-brand-coffee/20 pb-4">Tu Pedido</h3>
          
          <!-- Lista de ítems seleccionados -->
          <div class="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
            <div class="flex justify-between items-start gap-4">
              <div>
                <span class="block font-semibold text-sm sm:text-base text-brand-cream">{{ selectedBase.name }}</span>
                <span class="text-[10px] sm:text-xs text-brand-muted">Base de Waffle</span>
              </div>
              <span class="text-sm sm:text-base text-brand-cream font-medium">{{ formatPrice(selectedBase.price) }}</span>
            </div>

            <!-- Toppings -->
            <TransitionGroup name="list-fade" tag="div" class="space-y-2">
              <div v-for="t in selectedToppings" :key="t.id" class="flex justify-between items-center pl-3 border-l border-brand-coffee/40">
                <span class="text-xs sm:text-sm text-brand-muted">{{ t.name }}</span>
                <span class="text-xs sm:text-sm text-brand-cream font-medium">+{{ formatPrice(t.price) }}</span>
              </div>
            </TransitionGroup>

            <!-- Salsas -->
            <TransitionGroup name="list-fade" tag="div" class="space-y-2 mt-2">
              <div v-for="s in selectedSauces" :key="s.id" class="flex justify-between items-center pl-3 border-l border-brand-caramel/40">
                <span class="text-xs sm:text-sm text-brand-muted">{{ s.name }}</span>
                <span class="text-xs sm:text-sm text-brand-cream font-medium">+{{ formatPrice(s.price) }}</span>
              </div>
            </TransitionGroup>
          </div>

          <!-- Total -->
          <div class="flex justify-between items-center border-t border-brand-coffee/20 pt-4 mb-6">
            <span class="font-outfit font-bold text-base sm:text-lg text-brand-cream">Total:</span>
            <span class="font-outfit font-bold text-xl sm:text-2xl text-brand-caramel">{{ formatPrice(totalAmount) }}</span>
          </div>

          <!-- Formulario de Entrega -->
          <div class="space-y-4 mb-6">
            <div>
              <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Tu Nombre</label>
              <input 
                v-model="clientName" 
                type="text" 
                placeholder="Ej. Juan Pérez"
                class="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
              />
            </div>

            <div>
              <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">¿Dónde consumes?</label>
              <div class="grid grid-cols-2 gap-2">
                <button 
                  @click="orderType = 'mesa'"
                  type="button"
                  class="py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all duration-300"
                  :class="orderType === 'mesa' 
                    ? 'bg-brand-coffee text-brand-cream border-brand-caramel' 
                    : 'bg-brand-dark border-brand-coffee/20 text-brand-muted hover:border-brand-coffee/60'"
                >
                  En Mesa
                </button>
                <button 
                  @click="orderType = 'llevar'"
                  type="button"
                  class="py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all duration-300"
                  :class="orderType === 'llevar' 
                    ? 'bg-brand-coffee text-brand-cream border-brand-caramel' 
                    : 'bg-brand-dark border-brand-coffee/20 text-brand-muted hover:border-brand-coffee/60'"
                >
                  Para Llevar
                </button>
              </div>
            </div>

            <Transition name="expand">
              <div v-if="orderType === 'mesa'" class="overflow-hidden">
                <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Número de Mesa</label>
                <input 
                  v-model="tableNumber" 
                  type="text" 
                  placeholder="Ej. 5"
                  class="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                />
              </div>
            </Transition>
          </div>

          <!-- Botón de Envío -->
          <button 
            @click="sendWhatsAppOrder"
            type="button"
            class="w-full bg-gradient-to-r from-brand-coffee to-brand-caramel hover:from-brand-caramel hover:to-brand-coffee text-brand-cream font-outfit font-bold py-3.5 sm:py-4 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-[1.01] flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <span>Pedir por WhatsApp</span>
          </button>
          
          <span class="block text-center text-[10px] sm:text-xs text-brand-muted mt-3">
            El pedido se enviará formateado al WhatsApp del local.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transiciones de la lista de pedidos */
.list-fade-enter-active,
.list-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-fade-enter-from {
  opacity: 0;
  transform: translateX(-15px);
}
.list-fade-leave-to {
  opacity: 0;
  transform: translateX(15px);
  position: absolute;
}
.list-fade-move {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Transición expandir para número de mesa */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-out;
  max-height: 100px;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
</style>
