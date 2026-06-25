<script setup>
import { ref } from 'vue'

const activeCategory = ref('todos')

const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'cafe', name: 'Cafetería' },
  { id: 'dulce', name: 'Pastelería' },
  { id: 'frio', name: 'Bebidas Frías' }
]

const menuItems = [
  // Cafetería
  { 
    id: 'espresso', 
    name: 'Espresso Italiano', 
    category: 'cafe', 
    price: 2200, 
    desc: 'Extracción simple de granos seleccionados con crema densa y persistente.', 
    tags: ['Intenso', 'Caliente'],
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'cappuccino', 
    name: 'Cappuccino Italiano', 
    category: 'cafe', 
    price: 3200, 
    desc: 'Espresso con leche texturizada y una capa perfecta de espuma cremosa.', 
    tags: ['Clásico', 'Caliente'],
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'flatwhite', 
    name: 'Flat White', 
    category: 'cafe', 
    price: 3400, 
    desc: 'Doble shot de espresso con una fina y sedosa capa de leche texturizada.', 
    tags: ['Novedad', 'Caliente'],
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'latte', 
    name: 'Latte Macchiato', 
    category: 'cafe', 
    price: 3600, 
    desc: 'Leche caliente, espuma de leche y un shot de espresso vertido suavemente.', 
    tags: ['Suave', 'Caliente'],
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'chocolate', 
    name: 'Chocolate Caliente Belga', 
    category: 'cafe', 
    price: 3500, 
    desc: 'Leche vaporizada con auténtico chocolate de cacao belga derretido.', 
    tags: ['Dulce', 'Caliente'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'
  },
  
  // Pastelería
  { 
    id: 'croissant', 
    name: 'Croissant Francés Mantequilla', 
    category: 'dulce', 
    price: 2000, 
    desc: 'Masa de hojaldre crujiente y aireada hecha con 100% mantequilla.', 
    tags: ['Horneado hoy'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'cheesecake', 
    name: 'Cheesecake de Maracuyá', 
    category: 'dulce', 
    price: 3800, 
    desc: 'Base crujiente de galleta con crema de queso y cobertura ácida de maracuyá.', 
    tags: ['Fresco', 'Recomendado'],
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'brownie', 
    name: 'Brownie Fudge con Helado', 
    category: 'dulce', 
    price: 3500, 
    desc: 'Brownie de chocolate húmedo servido tibio con una bola de helado de vainilla.', 
    tags: ['Caliente y Frío'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'muffin', 
    name: 'Muffin de Arándanos Silvestres', 
    category: 'dulce', 
    price: 2200, 
    desc: 'Muffin esponjoso relleno de arándanos frescos y crumble crujiente.', 
    tags: ['Esponjoso'],
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=80'
  },

  // Bebidas Frías
  { 
    id: 'icedlatte', 
    name: 'Iced Latte Caramelo', 
    category: 'frio', 
    price: 3800, 
    desc: 'Espresso doble servido sobre hielo, leche fría y salsa de caramelo.', 
    tags: ['Frío', 'Dulce'],
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'coldbrew', 
    name: 'Cold Brew Tonic', 
    category: 'frio', 
    price: 3600, 
    desc: 'Café extraído en frío por 18 horas mezclado con agua tónica y rodaja de limón.', 
    tags: ['Frío', 'Refrescante'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'frappe', 
    name: 'Frappé de Moka & Oreo', 
    category: 'frio', 
    price: 4200, 
    desc: 'Café licuado con hielo, leche, salsa de chocolate y trozos de galleta Oreo.', 
    tags: ['Frío', 'Favorito'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
  }
]

const filteredItems = ref(menuItems)

const selectCategory = (categoryId) => {
  activeCategory.value = categoryId
  if (categoryId === 'todos') {
    filteredItems.value = menuItems
  } else {
    filteredItems.value = menuItems.filter(item => item.category === categoryId)
  }
}

const formatPrice = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value)
}
</script>

<template>
  <section id="menu" class="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-coffee/20">
    <div class="text-center mb-10 md:mb-12">
      <span class="text-brand-caramel uppercase tracking-widest text-xs sm:text-sm font-semibold font-outfit">Nuestra Carta</span>
      <h2 class="text-3xl sm:text-4xl font-outfit font-bold text-brand-cream mt-2">Café de Especialidad y Delicias</h2>
      <p class="text-sm sm:text-base text-brand-muted max-w-xl mx-auto mt-4">
        Descubre nuestra selección de granos de origen y repostería horneada diariamente para acompañar tus mejores momentos.
      </p>
    </div>

    <!-- Filtros por Categoría -->
    <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
      <button 
        v-for="category in categories" 
        :key="category.id" 
        @click="selectCategory(category.id)"
        class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 font-outfit border"
        :class="activeCategory === category.id 
          ? 'bg-brand-caramel text-brand-cream border-brand-caramel shadow-md shadow-brand-caramel/20' 
          : 'bg-brand-darker border-brand-coffee/20 text-brand-muted hover:border-brand-coffee/60 hover:text-brand-cream'"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- Grid de Productos con Transición -->
    <TransitionGroup 
      name="menu-list" 
      tag="div" 
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      <div 
        v-for="item in filteredItems" 
        :key="item.id" 
        class="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between glass-panel-hover group/card"
      >
        <div>
          <!-- Contenedor de la Imagen con zoom en hover -->
          <div class="relative h-48 overflow-hidden w-full">
            <img 
              :src="item.image" 
              :alt="item.name" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
          </div>

          <!-- Contenido de la Tarjeta con Padding -->
          <div class="p-5 sm:p-6">
            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-3.5">
              <span 
                v-for="tag in item.tags" 
                :key="tag"
                class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-coffee/30 text-brand-cream border border-brand-coffee/20"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Nombre y Precio -->
            <div class="flex justify-between items-start gap-4 mb-2">
              <h4 class="text-lg sm:text-xl font-outfit font-bold text-brand-cream leading-tight group-hover/card:text-brand-caramel transition-colors duration-300">
                {{ item.name }}
              </h4>
              <span class="text-brand-caramel font-bold font-outfit whitespace-nowrap text-sm sm:text-base">
                {{ formatPrice(item.price) }}
              </span>
            </div>

            <!-- Descripción -->
            <p class="text-xs sm:text-sm text-brand-muted leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
        
        <!-- Pie de Tarjeta Visual de acompañamiento -->
        <div class="mx-5 sm:mx-6 pb-5 pt-4 border-t border-brand-coffee/10 flex justify-between items-center text-[10px] sm:text-xs text-brand-muted">
          <span>Servido fresco</span>
          <span class="text-brand-cream/60">Estación Cakao's</span>
        </div>
      </div>
    </TransitionGroup>
  </section>
</template>

<style scoped>
.menu-list-enter-active,
.menu-list-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.menu-list-enter-from,
.menu-list-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
.menu-list-move {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
