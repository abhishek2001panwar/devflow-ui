import path from "path";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        path.join(__dirname, '../devflow-ui/src/lib/ui/**/*.{js,ts,jsx,tsx}'), // use path.join for safety
      ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  