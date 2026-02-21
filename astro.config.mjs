// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://dannychristian.com',
vite: {
    plugins: [
      // @ts-expect-error
      tailwindcss()
    ]
  },

  integrations: [mdx(), react(), keystatic()]
  
});