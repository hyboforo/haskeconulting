# HaskeConsulting — haskeconsulting.com

Next.js site exported as static files and served by Cloudflare. No server, database or environment variables are needed.

## Before launch

1. Edit **`lib/site.ts`**: emails, address, and everything in [square brackets] or marked `TODO`.
2. Search the rest of the code for placeholders:
   ```
   findstr /s /n /c:"TODO" /c:"[" app\*.tsx lib\*.ts components\*.tsx
   ```
3. Run `npm run build` and fix any errors before deploying.

## Run locally

```
npm install
npm run dev        # http://localhost:3000, hot reload
npm run preview    # builds, then serves out/ on Cloudflare's local runtime
```

## Deploy, option A: Git + Cloudflare (recommended)

Every push to `main` redeploys the site automatically.

1. Push this folder to its own GitHub repository.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Import a repository** and pick the repo.
3. Use these settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Root directory: `/` (the repo root)
4. Deploy. You'll get a `*.workers.dev` URL to check first.

## Deploy, option B: from your computer

```
npx wrangler login
npm run deploy
```

## Connect the domain

1. The domain **haskeconsulting.com** must be on Cloudflare (Add a domain → change nameservers at your registrar).
2. In the Worker, go to **Settings → Domains & Routes → Add → Custom domain** and add both
   `haskeconsulting.com` and `www.haskeconsulting.com`.
3. The site's canonical URL is `https://haskeconsulting.com` (set in `lib/site.ts`), without www. To send www there:
   - **DNS → Add record**: type `A`, name `www`, IPv4 `192.0.2.1`, **Proxied** (orange cloud). The IP is a placeholder;
     Cloudflare answers the request and the redirect below sends visitors on before it is ever used.
   - **Rules → Redirect Rules → Create from template → Redirect from WWW to root**.

## Contact form

The form on /contact/ posts to `/api/enquiry`, handled by `worker/index.js`. Until email is set up, a visitor who
sends the form is offered **Send on WhatsApp** and **Send by email** with their message already written in, so
nothing is lost. To have enquiries arrive by email instead:

1. In the Cloudflare dashboard, open **haskeconsulting.com → Email → Email Routing** and turn it on (it adds the
   DNS records it needs).
2. Under **Destination addresses**, add the inbox that should receive enquiries (e.g. your Gmail) and click the
   link Cloudflare emails to it.
3. In `wrangler.jsonc`, put a comma after the `"assets"` block and uncomment the `send_email` and `vars` lines,
   with that inbox in both places. Push to `main`.

Spam is kept out by a hidden field and a minimum time to fill the form; there is no captcha.

## Visitor statistics

Cloudflare Web Analytics, with no cookies (so no consent banner is needed):

1. In the dashboard, open **Analytics & Logs → Web Analytics → Add a site**, enter `haskeconsulting.com` and
   choose the manual (JS snippet) option.
2. Copy the `token` value from the snippet into `analyticsToken` in `lib/site.ts` and push to `main`.

Visits then appear under Web Analytics after a few minutes.

## What's configured

- `wrangler.jsonc`: serves `out/` as static assets, with the custom 404 page; `/api/*` goes to `worker/index.js`.
- `public/_headers`: security headers (including a Content-Security-Policy), and long-term caching for hashed build files.
- `.node-version`: Node 22 for Cloudflare's build.
- `app/opengraph-image.png`: the image shown when a link is shared on WhatsApp, LinkedIn or X.
- `app/sitemap.ts`, `app/robots.ts`: generate `sitemap.xml` and `robots.txt`.
- Fonts are self-hosted from npm, so the site makes no third-party requests (Web Analytics aside, once switched on).
