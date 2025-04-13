
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/devflow-ui/**/*.{js,ts,jsx,tsx}', // use path.join for safety
      ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  