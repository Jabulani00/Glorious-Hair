# Glorious Hair — Storefront

A fast, animated, responsive multi-page storefront for **Glorious Hair** (South African luxury human-hair wigs). _We Serve Quality._

Built with **HTML5 + Tailwind CSS (precompiled) + GSAP + Font Awesome**. No framework, no runtime build — pure static files that deploy anywhere.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Landing page — video hero, product configurator, offers, founder, reviews |
| `shop.html` | Full price list + product cards (2 per row) |
| `product.html?id=…` | Single product page — gallery, colour/length picker, tabs, related |
| `about.html` | Founder story (Philile Nduli) |
| `checkout.html` | Cart, bank-transfer (EFT) / 3-month lay-by, proof-of-payment upload |
| `contact.html` | Contact form + FAQ |

## Project structure
```
assets/
  tailwind-input.css   → source for the Tailwind build
  tailwind.css         → compiled, minified CSS (committed)
  styles.css           → custom animations/components
  data.js              → catalogue, prices, colours, bank details, cart
  app.js               → shared header/footer/chrome + behaviour
  images/              → founder photo (Philile-removebg-preview.png)
tailwind.config.js     → theme (pink #E6007E / black palette, fonts)
```

## Develop locally
```bash
npm install          # once
npm run watch        # rebuild assets/tailwind.css on change
npx serve .          # serve at http://localhost:3000  (or: py -3 -m http.server 4173)
```
> The cart uses localStorage and `fetch`-free JS, but must be served over http:// (not opened as a file://).

## Build the CSS
```bash
npm run build        # → assets/tailwind.css (minified, ~31KB)
```

## Deploy to Vercel
1. Push this folder to a Git repo (GitHub/GitLab) **or** run `vercel` from the [Vercel CLI](https://vercel.com/cli).
2. Vercel reads `vercel.json`: it runs `npm run build` and serves the root as static output. The compiled CSS is also committed, so it works even without the build step.
3. After deploy, update the domain in `robots.txt` and `sitemap.xml`.

Drag-and-drop deploy also works: zip the folder (excluding `node_modules`) at [vercel.com/new](https://vercel.com/new).

## ⚠️ Before going live
- **Banking details** — replace the placeholders in `assets/data.js` → `BANK` (bank, account name, number, branch) and set `placeholder: false` to remove the demo warning on checkout.
- **Founder photo** — `assets/images/Philile-removebg-preview.png` is used on Home + About.
- **Product photography** — imagery currently uses licensed Pexels stock; swap for real product shots when available (update URLs in `assets/data.js`).
- **Social links** — set the real Instagram/Facebook/TikTok URLs in `assets/app.js` (footer).
