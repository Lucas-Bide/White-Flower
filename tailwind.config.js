/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '410px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
}
