import { config, fields, collection } from '@keystatic/core';
import { block } from '@keystatic/core/content-components'; 

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    
    // ==========================================
    // 1. KOLEKSI MISSION LOGS (BLOG)
    // ==========================================
    blog: collection({
      label: 'Mission Logs (Blog)',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' }, 
      schema: {
        title: fields.slug({ name: { label: 'Judul Mission Log' } }),
        author: fields.text({ label: 'Penulis (Author)' }),
        
        // ✨ FIX 1: Daftarin 'tags' biar dia gak ngamuk
        tags: fields.array(fields.text({ label: 'Tag' }), { 
          label: 'Daftar Tags',
          itemLabel: props => props.value 
        }),
        
        pubDate: fields.date({ label: 'Tanggal Publikasi', validation: { isRequired: true } }),
        category: fields.text({ label: 'Kategori (Contoh: TECH, STORY, OPINION)' }),
        description: fields.text({ label: 'Deskripsi Singkat (Preview)', multiline: true }),
        image: fields.image({
          label: 'Cover Image Artikel',
          directory: 'public/image/blog',
          publicPath: '/image/blog'
        }),
        content: fields.mdx({
          label: 'Isi Log (Konten)',
          options: {
            image: {
              directory: 'public/image/blog',
              publicPath: '/image/blog',
            }
          }
        }),
      },
    }),

    // ==========================================
    // 2. KOLEKSI ARCHIVES (GALLERY)
    // ==========================================
    gallery: collection({
      label: 'Archives (Gallery)',
      slugField: 'title',
      path: 'src/content/gallery/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Nama Judul / Event' } }),
        description: fields.text({ label: 'Deskripsi Pendek (Muka Depan)', multiline: true }),
        stamp: fields.text({ label: 'Stempel Merah (Contoh: EVIDENCE, CLASSIFIED)' }),
        order: fields.integer({ label: 'Urutan Tampil (1, 2, 3...)' }),
        coverImage: fields.image({
          label: 'Foto Momen',
          directory: 'public/image/memories', 
          publicPath: '/image/memories'
        }),
        content: fields.mdx({
          label: 'Deskripsi Panjang (Muka Belakang - Opsional)',
          components: {
            EvidenceBoard: block({
              label: 'Papan Bukti (Evidence Board)',
              // ✨ FIX 2: Kasih tau satpam kalau komponen ini butuh data 'images'
              schema: {
                images: fields.array(
                  fields.object({
                    src: fields.text({ label: 'URL / Path Foto' }),
                    alt: fields.text({ label: 'Alt Text (Deskripsi Gambar)' }),
                    caption: fields.text({ label: 'Judul Pendek Depan (caption)' }),
                    description: fields.text({ label: 'Cerita Belakang (description)' })
                  }),
                  { label: 'Daftar Foto Polaroid', itemLabel: props => props.fields.caption.value || 'Foto Baru' }
                )
              }
            })
          }
        }),
      },
    }),

  },
});