# Panino's Pizza & Pasta website

Production-quality Next.js, TypeScript, and Tailwind CSS website for a modern Downtown Orlando New York-style pizza and Italian-American restaurant.

## Setup

```bash
npm install
npm run dev
npm run build
```

## Edit menu content

Menu data lives in `content/menu.ts`. It is clearly marked as editable placeholder data; replace item names, descriptions, prices, and availability with the real Toast menu before launch.

## Update business info

Core NAP, hours, social links, directions URL, coordinates, and analytics variables live in `content/site.ts`. Keep this data consistent with Google Business Profile and Toast.

## Set Toast ordering URL

Create `.env.local`:

```bash
NEXT_PUBLIC_TOAST_ORDER_URL="https://www.toasttab.com/REAL-PANINOS-URL/order"
```

All Order Online CTAs read from this variable, with a placeholder fallback in `content/site.ts`.

## Add real photography

Current image areas are branded CSS placeholders to avoid copyrighted photos. Replace them with optimized local images or a trusted photographer's licensed files, ideally using `next/image` for hero, gallery, menu favorites, dining room, storefront, and team shots.

## Analytics and Search Console

Optional environment variables:

```bash
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"
```

Google Search Console verification options: DNS TXT record, HTML file upload in `public/`, meta tag in `app/layout.tsx`, or Google Analytics/Tag Manager verification.

## Contact form

The contact form is frontend-only. Connect it later with Formspree, Resend, a Next.js server action, or another approved email provider.

## Deploy

Deploy to Vercel or any Next.js-compatible host. Configure environment variables in the hosting dashboard, set the production domain in metadata/sitemap/robots, and run `npm run build` before launch.

## Post-launch SEO checklist

- Replace `https://example.com` with the real domain in metadata, sitemap, robots, and schema.
- Verify Google Business Profile NAP, hours, menu link, ordering link, photos, and categories.
- Submit sitemap in Google Search Console.
- Add real geo coordinates and Google Maps embed.
- Add verified review integrations or curated testimonial copy with permission.
- Track clicks on Order Online, Call Now, and Get Directions.
- Keep lunch and late-night content fresh for Downtown Orlando searches.
- Review Toast branding with `docs/toast-branding-checklist.md`.
