/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0C0A09',     // stone-950 (Cozy dark base)
          darker: '#1C1917',   // stone-900 (Cards and panels)
          lightDark: '#292524',// stone-800 (Inputs and elements)
          coffee: '#78350F',   // amber-900 (Deep roasted coffee)
          caramel: '#D97706',  // amber-600 (Warm golden caramel)
          cream: '#FEF3C7',    // amber-100 (Warm latte cream)
          latte: '#E6CCB2',    // Latte light brown
          muted: '#A8A29E',    // stone-400 (Muted texts)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

