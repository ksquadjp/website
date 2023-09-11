import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://ksquad.jp/",
  integrations: [
    sitemap(),
    tailwind(),
    preact(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
