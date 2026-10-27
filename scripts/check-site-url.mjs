import { siteUrl } from "../site.config.mjs";

if (!siteUrl) {
  console.error(
    "Set PUBLIC_SITE_URL in .env or the build environment before deployment. Use your custom domain or the exact workers.dev origin.",
  );
  process.exit(1);
}
console.log(`Building public metadata for ${siteUrl}`);
