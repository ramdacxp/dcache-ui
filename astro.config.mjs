// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import { transformerMetaHighlight } from "@shikijs/transformers";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // disable default base.css
      applyBaseStyles: false,

      // allow nested CSS
      nesting: true,
    }),
    alpinejs({
      // custom alpinejs entrypoint to add alpinejs plugins
      entrypoint: "/src/alpinejs-entrypoint",
    }),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "light-plus", // https://shiki.style/themes
      wrap: true,
      transformers: [transformerMetaHighlight()],
    },
  },
});
