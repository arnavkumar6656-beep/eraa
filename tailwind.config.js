/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eraa: {
          yellow: '#FFC800',
          'yellow-light': '#FFE066',
          'yellow-dark': '#E6B000',
          'yellow-soft': '#FFF4CC',
          cream: '#FFFDE7',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'Quicksand', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'stripes': 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,200,0,0.06) 8px, rgba(255,200,0,0.06) 16px)',
      },
    },
  },
  plugins: [],
}
