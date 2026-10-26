# Naheed Yoga

Static site for [naheedyoga.com](https://www.naheedyoga.com), rebuilt from Google Sites with [Astro](https://astro.build) and Tailwind CSS.

## Requirements

Node.js 22.23.4 or newer (see `.nvmrc`; with nvm: `nvm use 22.23.4`).

## Commands

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Dev server at `http://localhost:4321`   |
| `npm run build`   | Build the static site to `dist/`        |
| `npm run preview` | Serve the built site locally            |

## Editing content

- **Classes**: one Markdown file per class in `src/content/classes/`. The frontmatter holds the schedule and prices; the body is the description on the Classes page. `order` sets the position on the Classes page; `bookOrder` puts the class on the Book Now page (leave it out to hide it there).
- **Shop products**: one Markdown file per product in `src/content/products/`.
- **Phone, WhatsApp number, address, map link, nav**: `src/data/site.ts`.
- **Images**: `src/assets/images/`. They are resized and converted to WebP at build time.

The fields allowed in each file are defined in `src/content.config.ts`; the build fails with a clear error if one is missing or misspelled.

## Booking and orders

All Book Now / Buy Now buttons open WhatsApp with a pre-filled message naming the class or product.

## Project layout

```
src/
  assets/images/    photos, logo, background texture
  components/       Header, Footer, PageHero, Button, DetailList
  content/          classes and products (Markdown)
  data/site.ts      contact details and navigation
  layouts/          BaseLayout (head, header, footer)
  pages/            index, book-now, about, classes, shop
  styles/global.css Tailwind theme (colors, fonts)
```
