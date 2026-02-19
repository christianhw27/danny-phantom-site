import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // 1. Ambil semua data 'barang bukti' dari folder blog
  const blog = await getCollection('blog');

  // 2. Format jadi gelombang radio (XML)
  return rss({
    // Judul dan deskripsi Feed kamu
    title: 'Danny Christian | Mission Logs',
    description: 'Catatan misi dan isi pikiran dari Metaverse pribadiku.',
    
    // Tarik URL dari astro.config.mjs tadi
    site: context.site,
    
    // Looping otomatis untuk setiap blog post
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Bikin link yang langsung mengarah ke halaman blognya
      link: `/blog/${post.slug}/`,
    })),
    
    // Opsional: Kasih tau bahasa webnya Indonesia
    customData: `<language>id-id</language>`,
  });
}