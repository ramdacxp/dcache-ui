// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

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
      entrypoint: '/src/alpinejs-entrypoint'
    }),
  ],
});
