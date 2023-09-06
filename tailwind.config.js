/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        spinn: {
          '100%': { transform: 'rotateZ(360deg)' },
        },
       
      },
      animation: {
        spinn: 'spinn 10s linear infinite',
      
      }
     
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

