import { defineConfig } from 'astro/config'
import sanity from 'astro-sanity'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
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
    })
  ]
})
