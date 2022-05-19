module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff',
        'text-color': '#000',
        'secondary': '#F0F2F5',
        'primary-with-opacity': 'rgb(1, 25, 54, 0.5)',
        'grey': '#000000a9',
        'border-color': '#0000002c',
        'logo':'#1771E6'
      },
      fontSize: {
        'heading-size': '0.9375rem',
      }
    },
  },
  plugins: [],
}
