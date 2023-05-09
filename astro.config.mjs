import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import preact from "@astrojs/preact";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://ksquad.jp/",
  build: {
    format: "file",
  },
  integrations: [
    sitemap(),
    tailwind(),
    image({
      cacheDir: "./node_modules/.cache/image",
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    preact(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
