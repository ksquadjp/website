import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://ksquad.jp",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    image({
      cacheDir: "./node_modules/.cache/image",
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    preact(),
  ],
});
