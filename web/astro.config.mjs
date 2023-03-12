import { defineConfig } from 'astro/config'
import sanity from 'astro-sanity'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import sitemap from '@astrojs/sitemap'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  site: 'https://www.louierichardson.com',
  vite: {
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles')
      }
    }
  },
  integrations: [
    sanity({
      projectId: 'zxttarpe',
      dataset: 'production',
      apiVersion: 'v2021-10-21',
      useCdn: true
    }),
    sitemap()
  ]
})
