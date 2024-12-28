/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        montserrat: ['Montserrat', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'serif'],
        roboto: ['Roboto', 'serif'],
      },

      colors: {
        primary: '#FF5252',
        secondary: '#666',
        tertiary: '#',
        quaternary: '#',
        quinary: '#',
        senary: '#',
        septenary: '#',
        octonary: '#',
        nonary: '#',
        decenary: '#',
        border: '#0000001a',
        bgLight: '#e5e5e5',
      },
      backgroundColor: {
        primary: '#FF5252',
      },
    },
  },
  plugins: [],
}
