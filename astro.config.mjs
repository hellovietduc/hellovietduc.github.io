import { defineConfig } from 'astro/config';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro-imagetools-docs.vercel.app/en/installation
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  site: 'https://duckwho.codes',
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-dark-dimmed'
    }
  },
  integrations: [vue(), tailwind(), prefetch(), mdx(), compress(), robotsTxt(), astroImageTools]
});
