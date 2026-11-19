import type { CollectionConfig } from 'payload'

const webp = { format: 'webp' as const, options: { quality: 80 } }

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    resizeOptions: {
      width: 2560,
      height: 2560,
      fit: 'inside',
      withoutEnlargement: true,
    },
    imageSizes: [
      { name: 'thumbnail', width: 640, height: 640, formatOptions: webp },
      { name: 'small', width: 640, withoutEnlargement: true, formatOptions: webp },
      { name: 'medium', width: 1024, withoutEnlargement: true, formatOptions: webp },
      { name: 'large', width: 1600, withoutEnlargement: true, formatOptions: webp },
      { name: 'xlarge', width: 2400, withoutEnlargement: true, formatOptions: webp },
      {
        name: 'og',
        width: 1200,
        height: 630,
        formatOptions: { format: 'jpeg', options: { quality: 82, mozjpeg: true } },
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
        name: 'caption',
        type: 'text'
    }
  ],
}
