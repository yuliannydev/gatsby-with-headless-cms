module.exports = {
  purge: [
    //En cualquier clase de components y page, verifica si en estos archivos
    //hay clases de tailwind y las agrega aL archivo CSS
          "./src/components/**/*.{js,jsx,ts,tsx}", 
          "./src/pages/**/*.{js,jsx,ts,tsx}"
        ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
