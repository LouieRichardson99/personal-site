import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import sanity from 'astro-sanity'

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'zxttarpe',
      dataset: 'production',
      apiVersion: 'v2021-10-21',
      useCdn: true
    })
  ]
})
