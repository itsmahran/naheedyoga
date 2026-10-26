// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.naheedyoga.com',
  // Keep the old Google Sites URL working.
  redirects: {
    '/home': '/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
