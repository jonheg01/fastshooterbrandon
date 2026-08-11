# fastshooterbrandon.com

Self-hosted link hub and gear list for Brandon Hegreness, competition shooter.
Built because Linktree removed the page over firearm parts links. We own the platform.

## Stack
Next.js 15 App Router, TypeScript, plain CSS with design tokens. No third party
scripts, no client analytics, no cookies, no forms, no PII collected.

## Structure
- `app/page.tsx` main page: hero, identity bar, category widgets, sponsors, coaching
- `app/rifle`, `app/pistol`, `app/pcc` category pages
- `lib/products.ts` the catalogue. Field names mirror the future `products` table
  exactly (slug, name, brand, description, specs, images, outbound_url,
  affiliate_code, price, inventory_count, is_sellable), so moving to Postgres is a
  straight insert. Every product carries `is_sellable: false` in Phase 1.
- `lib/site.ts` identity, socials, sponsors, coaching, hero video switch

## Hero video
Drop the compressed MP4 and poster JPG into `public/video/`, then set both paths in
`heroVideo` in `lib/site.ts`. Target: H.264, muted, under 8 MB, with a poster frame.
Until then the hero renders the typographic fallback and requests no missing files.

## Content rules
- Zero em dashes anywhere. Grep before every ship.
- No invented specs. Every spec and price on a card comes from that manufacturer's
  own product page. Anything unconfirmed sits in the `verify` field and is not
  rendered as fact.
- Product photography from other companies is NOT rendered. Manufacturer image URLs
  are recorded in `images` for reference only, pending a rights answer.

## Phase 2 (store) is not started
`is_sellable`, order schema, and a payment adapter are the planned path. Mainstream
processors restrict firearm parts, so a high risk gateway decision comes first.

## Affiliate links
`Product.affiliate_url` overrides `outbound_url` on the card button when set.
AvantLink issues a complete click URL per merchant, so the whole URL is stored
rather than a code appended to the destination. Vortex, RISE Armament, and
Double-Alpha Academy all run on AvantLink; one publisher account covers all three.

Site ownership verification: set `verificationScript.src` in `lib/site.ts` to the
snippet URL AvantLink emails, add their host to the `script-src` line in
`middleware.ts`, deploy, confirm, then revert both. The tag renders with the page
nonce so the strict CSP stays intact.

## Deploy
Coolify on the Hetzner box, Dockerfile build, port 3000. Push to main, then trigger
the deploy.
