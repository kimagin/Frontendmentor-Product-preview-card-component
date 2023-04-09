/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './js/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    //Define Media queries
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    //Define Custom Fonts
    fontFamily: {
      serif: ['Fraunces', 'serif'], //or alternatively
      sans: ['Montserrat', 'sans-serif'], //and then you can apply it by 'font-just'
    },
    extend: {
      //Extend Tailwind Color Pallet
      colors: {
        //Generated with Uicolors.app
        'dark-cyan': 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%),',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)',
      },
      //Create Custom Animations
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        //You can call the keyframes
        bounce: 'bounce 2s ease-in-out infinite',
      },

      //Create custom Key-frames
      keyframes: {
        bounce: {
          //You can use css .style in js
          '0%, 100%': {
            transform: 'scale(1.1)',
          },
          '50%': {
            transform: 'scale(.9)',
          },
        },
      },
    },
  },
  plugins: [],
}
