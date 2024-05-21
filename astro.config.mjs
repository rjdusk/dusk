import { defineConfig } from 'astro/config';
// import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import postcssImport from "postcss-import";
import postcssNesting from "tailwindcss/nesting";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import playformCompress from "@playform/compress";
// import sentry from "@sentry/astro";

// const env = loadEnv(process.env, process.cwd(), "");

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
    }), sitemap(), mdx(), playformCompress({
        CSS: true,
        HTML: true,
        Image: false,
        JavaScript: true,
        SVG: false
    }),
    // sentry({
    //     dsn: "https://c49bfa81828992749cf705acbf56772d@o4507291855290368.ingest.de.sentry.io/4507291858436176",
    //     sourceMapsUploadOptions: {
    //         project: "javascript-astro",
    //         authToken: env.SENTRY_AUTH_TOKEN,
    //         telemetry: false,
    //     },
    // }),
    ],
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