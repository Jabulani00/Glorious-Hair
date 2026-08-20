/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/**/*.js'],
  // All classes appear as literal strings in HTML/JS, so content scanning covers them.
  // This tiny safelist only insures a few classes toggled purely via classList.
  safelist: [
    'flex', 'hidden', 'scale-0', 'top-3', 'top-11', 'shadow-glow', 'opacity-0', 'pointer-events-none',
    'bg-ink', 'text-white', 'bg-glory-50', 'border-glory-500', 'border-ink/10', 'border', 'border-ink',
  ],
  theme: {
    extend: {
      colors: {
        glory: {50:'#FFF1F7',100:'#FFE4F0',200:'#FECBE1',300:'#FDA5CC',400:'#FA6FAE',500:'#EC4899',600:'#E6007E',700:'#BE0568',800:'#9D0F58',900:'#831843'},
        ink: {DEFAULT:'#0A0A0A',800:'#141414',700:'#1E1E1E'},
        rosegold: '#B76E79', blush: '#FFF6FA',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        script: ['Parisienne', 'cursive'],
        body: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 40px -10px rgba(230,0,126,.45)',
        soft: '0 20px 60px -20px rgba(10,10,10,.25)',
      },
    },
  },
  plugins: [],
};
