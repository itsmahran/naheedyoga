import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const classes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/classes' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Position on the Classes page. */
      order: z.number(),
      /** Position on the Book Now page; omit to leave the class off it. */
      bookOrder: z.number().optional(),
      focus: z.string().optional(),
      days: z.string(),
      time: z.string(),
      /** Short price shown on the Book Now card. */
      price: z.string().optional(),
      /** Full price line shown on the Classes page. */
      investment: z.string(),
      location: z.string(),
      image: image(),
      cardImage: image().optional(),
    }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      size: z.string(),
      price: z.string(),
      ingredients: z.string().optional(),
      howToBuy: z.string(),
      image: image().optional(),
      /** Google Drive file ID of a product video; shown instead of the image. */
      driveVideoId: z.string().optional(),
    }),
});

export const collections = { classes, products };
