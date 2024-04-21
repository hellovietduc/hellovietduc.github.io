import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import compress from 'astro-compress'
import robotsTxt from 'astro-robots-txt'
import { defineConfig, squooshImageService } from 'astro/config'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { h } from 'hastscript'

const headerLink = h('span', '#')

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
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-dark-dimmed',
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          headingProperties: { class: 'heading' },
          properties: { class: 'heading-link' },
          behavior: 'prepend',
          content: [headerLink],
        },
      ],
    ],
  },
})
