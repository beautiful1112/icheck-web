import { loadEnvFile } from "node:process";

try {
  loadEnvFile();
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const configuredUrl = process.env.PUBLIC_SITE_URL?.trim();
let siteUrl;
if (configuredUrl) {
  const parsed = new URL(configuredUrl);
  if (
    parsed.protocol !== "https:" ||
    parsed.pathname !== "/" ||
    parsed.search ||
    parsed.hash ||
    parsed.username ||
    parsed.password
  ) {
    throw new Error(
      "PUBLIC_SITE_URL must be an HTTPS origin, for example https://icheck.tools.",
    );
  }
  if (
    parsed.hostname === "localhost" ||
    parsed.hostname.endsWith(".example") ||
    parsed.hostname.endsWith(".invalid")
  ) {
    throw new Error("PUBLIC_SITE_URL must be your actual public hostname.");
  }
  siteUrl = parsed.origin;
}

export { siteUrl };
