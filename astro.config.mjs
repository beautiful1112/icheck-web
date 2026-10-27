import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { siteUrl } from "./site.config.mjs";

export default defineConfig({
  site: siteUrl,
  output: "static",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  integrations: siteUrl
    ? [sitemap({ filter: (page) => !page.endsWith("/404/") })]
    : [],
});
