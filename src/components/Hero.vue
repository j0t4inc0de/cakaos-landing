<template>
  <section id="home" class="relative overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center min-h-[calc(100svh-80px)]">
    <!-- Glowing background elements -->
    <div class="absolute top-1/4 left-1/10 w-72 md:w-96 h-72 md:h-96 bg-brand-coffee/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-1/4 right-1/10 w-72 md:w-96 h-72 md:h-96 bg-brand-caramel/10 rounded-full blur-3xl -z-10"></div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
      <!-- Texto (7 Columnas en LG) con animación de entrada -->
      <div class="lg:col-span-7 text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start animate-fade-in-up">
        <!-- Badges superiores -->
        <div class="flex flex-wrap justify-center lg:justify-start gap-2">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-brand-coffee/30 text-brand-cream border border-brand-coffee/20">
            Café de Origen
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-brand-darker/50 text-brand-muted border border-brand-coffee/10">
            Pet Friendly
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-brand-darker/50 text-brand-muted border border-brand-coffee/10">
            Espacio Seguro
          </span>
        </div>

        <!-- Títulos -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-outfit font-black text-brand-cream leading-tight tracking-tight">
          El rincón de <br class="hidden sm:inline" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-caramel to-brand-cream">
            Café & Waffles
          </span> <br />
          más acogedor.
        </h1>

        <!-- Descripción -->
        <p class="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
          En <strong>Estación Cakao's</strong> tostamos granos de origen seleccionados y horneamos los waffles belgas más crujientes de Villa Alemana. Ven a disfrutar de un espacio acogedor diseñado para compartir contigo, tus amigos y tus mascotas.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2 justify-center lg:justify-start">
          <a 
            href="#builder" 
            class="bg-gradient-to-r from-brand-coffee to-brand-caramel hover:from-brand-caramel hover:to-brand-coffee text-brand-cream font-outfit font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-brand-coffee/20 transition-all duration-500 transform hover:scale-[1.02] text-center text-sm sm:text-base"
          >
            Arma tu Waffle en Línea
          </a>
          <a 
            href="#menu" 
            class="bg-brand-darker border border-brand-coffee/30 hover:border-brand-caramel text-brand-cream font-outfit font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-center text-sm sm:text-base"
          >
            Ver Menú Completo
          </a>
        </div>

        <!-- Estadísticas rápidas / Review Social -->
        <div class="pt-6 border-t border-brand-coffee/10 flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full lg:w-auto">
          <div class="text-center lg:text-left">
            <span class="block text-2xl sm:text-3xl font-bold font-outfit text-brand-cream">4.4 ★</span>
            <span class="text-[10px] sm:text-xs text-brand-muted">350+ Opiniones</span>
          </div>
          <div class="w-px h-8 bg-brand-coffee/20"></div>
          <div class="text-center lg:text-left">
            <span class="block text-2xl sm:text-3xl font-bold font-outfit text-brand-cream">100%</span>
            <span class="text-[10px] sm:text-xs text-brand-muted">Hecho con Amor</span>
          </div>
        </div>
      </div>

      <!-- Imagen Destacada (5 Columnas en LG) con animación de entrada -->
      <div class="lg:col-span-5 relative flex justify-center w-full animate-fade-in-left delay-300">
        <!-- Decoración trasera -->
        <div class="absolute -inset-1 bg-gradient-to-r from-brand-coffee to-brand-caramel rounded-2xl blur-lg opacity-25"></div>
        
        <div class="relative w-full max-w-md lg:max-w-full glass-panel p-2 rounded-2xl border border-brand-coffee/30 shadow-2xl overflow-hidden">
          <img 
            src="/waffle_hero.jpg" 
            alt="Waffle premium de Estación Cakao's" 
            class="rounded-xl object-cover w-full h-[240px] sm:h-[320px] md:h-[360px] lg:h-[420px]"
          />
          <!-- Tarjeta flotante en imagen -->
          <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-panel rounded-xl p-3 sm:p-4 flex items-center justify-between border border-brand-cream/10">
            <div>
              <span class="block font-outfit font-bold text-xs sm:text-sm text-brand-cream">Waffle Belga Especial</span>
              <span class="text-[10px] sm:text-xs text-brand-caramel font-bold">Desde $4.500 CLP</span>
            </div>
            <span class="text-[9px] sm:text-xs bg-brand-coffee px-2 py-0.5 sm:py-1 rounded text-brand-cream font-bold uppercase tracking-wider">
              Favorito
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-left {
  opacity: 0;
  animation: fadeInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-300 {
  animation-delay: 300ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
