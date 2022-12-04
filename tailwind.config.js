module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        'nav-white': '#F8F8F8',
        'section-gray': '#373B44',
        'section-orange': '#BD2C00',
        'section-blue': '#4078C0',
      }
    }
  }
}
