/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'imperium-gold': '#C0A04D',
        'chaos-red': '#891111',
        'necro-green': '#24B72D',
        'tau-ochre': '#D88A2F',
        'ork-green': '#4C7031',
        'eldar-bone': '#F5E6C4',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
