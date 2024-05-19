import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import postcssImport from "postcss-import";
import postcssNesting from "tailwindcss/nesting";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'ayu-dark'
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://www.madebydusk.com',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), 
  sitemap(), 
  mdx(), 
  playformCompress({
    CSS: true,
    HTML: true,
    Image: false,
    JavaScript: true,
    SVG: false
  })],
  vite: {
    server: {
      watch: {
        ignored: ["**/_scraps/**"]
      }
    },
    css: {
      postcss: {
        plugins: [postcssImport, postcssNesting, tailwindcss, autoprefixer]
      }
    }
  },
  build: {
    assets: 'assets'
  }
});