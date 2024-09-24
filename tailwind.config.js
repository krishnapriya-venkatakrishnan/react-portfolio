// during installation
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// from tailwind css website
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '370px',
        'xxl': '2048px',
      },
      boxShadow: {
        'custom': '0 0px 4px purple', // Custom shadow values
      },
    },
  },
  plugins: [],
}