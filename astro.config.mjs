import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import compress from 'astro-compress'
import robotsTxt from 'astro-robots-txt'
import { defineConfig, squooshImageService } from 'astro/config'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { h } from 'hastscript'

// https://astro.build/config
export default defineConfig({
  site: 'https://duckwho.codes',
  integrations: [vue(), tailwind(), sitemap(), robotsTxt(), compress()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  image: {
    service: squooshImageService(),
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'rose-pine-dawn',
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          headingProperties: { class: 'heading' },
          properties: {
            class: 'heading-link',
            ariaHidden: 'true',
            tabIndex: -1,
          },
          behavior: 'append',
          content: [h(null, '#')],
        },
      ],
    ],
  },
})
