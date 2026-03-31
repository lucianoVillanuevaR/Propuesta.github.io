import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lucianoVillanuevaR.github.io',
  base: '/Propuesta.github.io/', 
  vite: {
    plugins: [tailwindcss()],
  },
});
