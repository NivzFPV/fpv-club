/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        'matte-black': '#0a0a0a',
        'cyan-neon': '#00ffff',
        'cyber-purple': '#b026ff',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        assistant: ['Assistant', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)',
        'neon-purple': '0 0 15px rgba(176, 38, 255, 0.5), 0 0 30px rgba(176, 38, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
