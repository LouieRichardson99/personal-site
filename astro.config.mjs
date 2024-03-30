import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import remarkCodeTitles from 'remark-code-titles'

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
  integrations: [sitemap(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      langs: ['js', 'html', 'css', 'astro'],
      wrap: false
    },
    remarkPlugins: [remarkCodeTitles]
  }
})
