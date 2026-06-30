/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBg: '#Fdfbf7',
        themeCard: '#F5ECD5',
        themeGold: '#CFA876',
        themeText: '#2C1A0D',
        themeAccent: '#E0D0B8',
        darkBeige: '#8b7a66',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Amiri"', 'serif'],
        sans: ['"Inter"', '"Cairo"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'light-sweep': 'sweep 3s ease-in-out forwards',
        'fade-out-slow': 'fadeOut 2s ease-in-out forwards',
        'pulse-glow': 'pulseGlow 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'sparkle': 'sparkle 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'spin-slow': 'spin 15s linear infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'translateY(-150vh) rotate(35deg) scaleY(1)', opacity: '0' },
          '20%': { opacity: '0.8', transform: 'translateY(-50vh) rotate(35deg) scaleY(3)' },
          '80%': { opacity: '0.8', transform: 'translateY(50vh) rotate(35deg) scaleY(3)' },
          '100%': { transform: 'translateY(150vh) rotate(35deg) scaleY(1)', opacity: '0' },
        },
        fadeOut: {
          '0%': { opacity: '1', filter: 'brightness(1)' },
          '40%': { opacity: '1', filter: 'brightness(1.5)' }, 
          '100%': { opacity: '0', filter: 'brightness(2)', visibility: 'hidden' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)', boxShadow: '0 0 15px rgba(207, 168, 118, 0.4)' },
          '50%': { opacity: '1', transform: 'scale(1.05)', boxShadow: '0 0 30px rgba(207, 168, 118, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}