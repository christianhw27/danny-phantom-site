import { defineCollection, z } from 'astro:content';

// Pastikan skema ini sama persis dengan urutan di Markdown
const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    
    // 👇 Tambahkan 3 baris ini agar Astro mengenali data blog kamu! 👇
    pubDate: z.coerce.date(), // z.coerce.date() penting agar bisa dibaca sebagai kalender
    image: z.string().optional(),
    category: z.string().optional(),
  }),
});

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

const galleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),          // Nama folder (cth: "Masa SMA")
    description: z.string(),    // Deskripsi singkat
    coverImage: z.string(),     // Gambar depan map
    stamp: z.string(),          // Tulisan stempel merah (cth: "CLASSIFIED", "EVIDENCE")
    order: z.number(),          // Urutan map mau ditaruh di mana (1, 2, 3...)
  }),
});

export const collections = {
  'about': aboutCollection, // Nama ini harus 'about' sesuai folder
  'gallery': galleryCollection,
  'blog': blogCollection
};