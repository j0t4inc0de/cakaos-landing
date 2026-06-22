<template>
  <footer id="footer" class="bg-brand-darker border-t border-brand-coffee/20 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-left">
      <!-- Sección Marca -->
      <div class="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
        <h4 class="font-outfit font-black text-xl sm:text-2xl tracking-tight text-brand-cream">
          ESTACIÓN <span class="text-brand-caramel text-shadow">CAKAO'S</span>
        </h4>
        <p class="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-md">
          Tu punto de encuentro favorito en Villa Alemana. Waffles belgas crujientes hechos al momento, café de especialidad y un espacio seguro para todos (incluyendo tus amigos de cuatro patas).
        </p>
        <!-- Badges de inclusión -->
        <div class="flex gap-2 pt-1">
          <span class="text-[10px] sm:text-xs px-2.5 py-1 rounded bg-brand-coffee/20 text-brand-cream font-medium">🐾 Pet Friendly</span>
          <span class="text-[10px] sm:text-xs px-2.5 py-1 rounded bg-brand-coffee/20 text-brand-cream font-medium">🌈 LGBTQ+ Safe</span>
        </div>
      </div>

      <!-- Sección Horarios y Contacto -->
      <div class="space-y-4">
        <h5 class="font-outfit font-bold text-brand-cream uppercase tracking-wider text-xs">
          Horarios & Contacto
        </h5>
        <ul class="space-y-2 text-xs sm:text-sm text-brand-muted">
          <li>
            <strong class="text-brand-cream">Lunes a Sábado:</strong> 09:30 AM – 09:30 PM
          </li>
          <li>
            <strong class="text-brand-cream">Domingo:</strong> Cerrado
          </li>
          <li class="pt-3 flex items-center gap-2">
            <span class="font-semibold text-brand-cream text-[10px] sm:text-xs uppercase tracking-wider">Teléfono:</span>
            <a href="tel:+56976619819" class="hover:text-brand-caramel transition-colors">+56 9 7661 9819</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="font-semibold text-brand-cream text-[10px] sm:text-xs uppercase tracking-wider">Instagram:</span>
            <a href="https://instagram.com/cakaos" target="_blank" class="hover:text-brand-caramel transition-colors">@cakaos</a>
          </li>
        </ul>
      </div>

      <!-- Sección Ubicación -->
      <div class="space-y-4">
        <h5 class="font-outfit font-bold text-brand-cream uppercase tracking-wider text-xs">
          Ubicación
        </h5>
        <p class="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Calle Progreso 48,<br />
          Villa Alemana, Valparaíso, Chile
        </p>
        <!-- Mini-Mapa conceptual / Enlace de Google Maps -->
        <div class="pt-1">
          <a 
            href="https://maps.google.com/?q=Progreso+48,+Villa+Alemana" 
            target="_blank"
            class="inline-flex items-center gap-2 bg-brand-coffee/40 border border-brand-coffee/50 text-brand-cream text-xs px-4 py-2.5 rounded-xl font-bold hover:bg-brand-caramel transition-colors duration-300 shadow-md w-full sm:w-auto justify-center"
          >
            <span>Ver en Google Maps</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Barra de copyright inferior -->
    <div class="max-w-7xl mx-auto border-t border-brand-coffee/10 mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-brand-muted gap-4">
      <p class="text-center sm:text-left">© 2026 Estación Cakao's. Todos los derechos reservados.</p>
      <p class="flex items-center gap-1.5 justify-center sm:justify-end">
        Diseñado y automatizado por 
        <a href="https://wearesamod.com" target="_blank" class="font-bold text-brand-caramel hover:underline">
          We Are Samod
        </a>
      </p>
    </div>
  </footer>
</template>
