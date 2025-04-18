import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/devflow-ui/**/*.{js,ts,jsx,tsx}' // ✅ This is important
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
