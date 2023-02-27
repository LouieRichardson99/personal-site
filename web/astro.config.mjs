import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'zxttarpe',
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    useCdn: true
  }), react()]
});