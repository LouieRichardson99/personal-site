import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import remarkCodeTitles from 'remark-code-titles';

export default defineConfig({
  site: 'https://www.louierichardson.com',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
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
});
