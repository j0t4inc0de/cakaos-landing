# Plan de Éxito Comercial y Técnico: Cakao's Coffee Bar ☕🧇
*We Are Samod - Propuesta y Hoja de Ruta*

Este plan define las fases para diseñar, programar y presentar un **Menú Virtual Inteligente** con configurador interactivo para la cafetería **Cakao's Coffee Bar** (Villa Alemana), con el objetivo de convertir el interés inicial en un contrato cerrado.

---

## 🎯 1. La Estrategia Comercial (El Caballo de Troya)

La mayoría de las agencias cometen el error de intentar vender "páginas web" abstractas. Nosotros les mostraremos una **experiencia real ya construida** para su propio negocio.

1. **El Enlace de Demostración:** Crearemos una landing page mobile-first ultra-rápida y limpia. Se la enviaremos directamente a su WhatsApp de contacto.
2. **El Gancho Visual:** Mostraremos su oferta estrella (Waffles y Cafés de especialidad) de forma interactiva (los clientes pueden armar su waffle en pantalla).
3. **Reducción de Fricción:** El menú no requiere descargas ni registros. Carga en menos de 1 segundo.

---

## 🛠️ 2. Arquitectura y Stack del Proyecto (`cakaos-landing`)

Implementaremos el proyecto sobre el stack tecnológico de producción de We Are Samod:

* **Frontend:** Vue 3 + Vite.
* **Estilo Visual:** Diseño moderno, Cozy & Dark (acordes a la identidad acogedora del local), bordes redondeados suaves y micro-animaciones en los botones.
* **Componentes Principales:**
  - `Navbar.vue`: Acceso rápido a categorías (Cafetería, Waffles, Cocktails) y horarios de atención.
  - `Hero.vue`: Banner de bienvenida destacando que son Pet Friendly y LGBTQ+ Friendly.
  - `WaffleBuilder.vue`: **El Configurador de Waffles**. Un widget dinámico donde el cliente selecciona:
    - *Tipo de masa* (Tradicional o Vegana).
    - *Toppings* (Frutilla, Plátano, Crema, Oreo).
    - *Salsas* (Chocolate, Manjar, Caramelo).
    - El widget calcula el precio total y habilita un botón: `"Pedir por WhatsApp"`.
  - `OrderSummary.vue`: Prepara el mensaje formateado para enviar a WhatsApp con un solo clic.

---

## 📅 3. Cronograma de Trabajo

### **Fase 1: Estructuración y Diseño Visual (Hoy) - [Completada]**
* [x] Configurar la base del proyecto y el sistema de estilos.
* [x] Crear los componentes del menú interactivo.
* [x] Desarrollar la lógica del configurador de waffles.
* [x] Diseñar e implementar transiciones y micro-animaciones premium en Vue.

### **Fase 2: Conexión y Pruebas locales - [Completada]**
* [x] Conectar el botón de pedidos para abrir WhatsApp Web / App con el texto dinámico.
* [x] Probar la responsividad móvil (pantallas de celulares).

### **Fase 3: Despliegue en Servidor (`jota-server`) - [Completada]**
* [x] Crear el archivo de configuración Docker (`Dockerfile` y `docker-compose.yml`).
* [x] Desplegar en servidor de producción expuesto en internet.
* [x] URL activa y funcionando: **[cakaos.wearesamod.com](https://cakaos.wearesamod.com)**

### **Fase 4: El Pitch de Cierre (Envío del Enlace)**
* [ ] Enviar la propuesta por WhatsApp junto con el enlace en producción:
  > *"¡Hola equipo de Cakao's! Pasé el otro día por el local y me encantó la cafetería. Les armé esta propuesta rápida de cómo se vería su menú interactivo para que los clientes armen sus waffles y pidan directo por WhatsApp. Pruébenlo en su celular: https://cakaos.wearesamod.com"*

---

## ❓ Decisiones Técnicas Tomadas

1. **Estilo:** Se configuró e instaló **Tailwind CSS v3** con una paleta Cozy & Dark personalizada.
2. **Precios y Datos:** Se mantuvo la estructura de base para los waffles y cafetería según los datos iniciales, complementándolos con transiciones suaves.
