import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx"; // VS Code Theme is: Sequoiatheme.com

import postcssImport from "postcss-import";
import postcssNesting from "tailwindcss/nesting";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({

  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'monokai',
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://www.madebydusk.com',
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx()
  ],
  vite: {
    css: {
      postcss: {
        plugins: [postcssImport, postcssNesting, tailwindcss, autoprefixer],
      },
    },
  },
});