# iCheck public website

Astro introduction and searchable public guides for [iCheck](https://github.com/beautiful1112/iCheck). The application source at `/home/zhao/Icheck` is separate from this website at `/home/zhao/icheck-web`.

The site is statically rendered and deploys to **Cloudflare Workers Static Assets**. It needs no server rendering adapter, database, AI key, or connection to the private infrastructure application. Fonts and assets are served locally.

## Develop

Use Node **22.23.4 or newer** (see `.nvmrc`).

```bash
npm ci
npm run dev
```

Open `http://localhost:4321`. Run `npm run check` for Astro/TypeScript diagnostics and `npm run build` for the static output in `dist/`.

## Public URL and search engines

Copy `.env.example` to `.env` and set `PUBLIC_SITE_URL` to the exact public HTTPS origin you own: either your custom domain or the Worker’s real `workers.dev` address. No path is allowed. The domain is intentionally unset until you choose it.

The production build uses that origin for canonical URLs, social sharing metadata, the XML sitemap, and the sitemap reference in `robots.txt`. Local builds without it still work and omit domain-dependent metadata. `npm run deploy` requires it to prevent publication with missing metadata. When using a custom CI deploy command, run `npm run predeploy` before `npm run build` as shown below.

After deployment, verify the domain in Google Search Console and submit `/sitemap-index.xml`. Indexing is controlled by search engines. If switching from `workers.dev` to a custom domain, rebuild with the new origin and redirect the old hostname to the chosen canonical hostname.

## Deploy to your Cloudflare account

For local deployment:

```bash
npx wrangler login
npm run deploy
```

The deployment script builds the site and uploads `dist/` with the checked-in `wrangler.jsonc`. It deploys the Worker named `icheck-web` in the account selected by Wrangler. No account ID or credentials are committed. If you manage multiple accounts, select the intended one with `CLOUDFLARE_ACCOUNT_ID`.

Before publishing, you can verify packaging without account access:

```bash
npm run deploy:dry-run
```

For **Workers Builds** connected to your website repository:

- Root directory: this website project’s root.
- Node version: `22.23.4` or newer (set `NODE_VERSION` if required).
- Install command: `npm ci`.
- Build command: `npm run predeploy && npm run build`.
- Deploy command: `npx wrangler deploy`.
- Build variable: `PUBLIC_SITE_URL` with the final origin. Configure it in the build environment, not only as a runtime Worker binding.

To attach a domain, open Cloudflare **Workers & Pages → icheck-web → Settings → Domains & Routes → Add → Custom Domain** and choose a hostname in an active Cloudflare zone. Rebuild with that final origin. Cloudflare provisions the DNS record and certificate for a Workers custom domain. Domain purchase is separate from website deployment.

This workspace has not been published to a Cloudflare account or registered a domain automatically.

## Content and behavior

- `src/pages/index.astro`: public introduction and FAQ.
- `src/components/WorkflowDemo.astro`: accessible, keyboard-operable example workflow. All incident data is illustrative; nothing calls the iCheck backend.
- `src/data/guides.ts`: five curated public guides, grounded in the source project’s current docs. Review after application releases. Only trusted authored HTML belongs in this file.
- `src/pages/docs/`: guide pages and browser-local full-text filtering, with shareable `?q=` queries. All guide links remain available without JavaScript.
- `src/layouts/Layout.astro`: navigation, metadata, JSON-LD, and footer.
- `public/_headers`: static asset response headers.

No private addresses, sample credentials, deployment receipts, runtime logs, or local databases are copied from the application.

## Hosting references

- [Astro on Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
- [Workers custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
