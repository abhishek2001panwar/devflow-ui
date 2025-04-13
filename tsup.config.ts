import { defineConfig } from 'tsup';
export default defineConfig({
    entry: ['src/index.ts'],
    dts: true,
    format: ['esm', 'cjs'],
    minify: false, // <== don't minify or you may lose Tailwind classes
    external: ['react', 'react-dom'],
  })