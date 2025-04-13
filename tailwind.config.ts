/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
        './src/lib/ui/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/docs/**/*.{js,ts,jsx,tsx}',
      './node_modules/devflow-ui/**/*.{js,ts,jsx,tsx}', // 👈 This is important!
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  