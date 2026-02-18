import { defineCollection, z } from 'astro:content';

// Pastikan skema ini sama persis dengan urutan di Markdown
const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    codename: z.string(),
    realName: z.string(),
    arcana: z.string(),
    level: z.string(),
    location: z.string(),
    abilities: z.array(z.object({
      name: z.string(),
      level: z.number()
    })),
  }),
});

export const collections = {
  'about': aboutCollection, // Nama ini harus 'about' sesuai folder
};