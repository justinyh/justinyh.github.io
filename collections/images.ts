import type { CollectionConfig } from 'payload'

export const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true,
  },
  upload: {
    // Sharp not supported in Cloudflare Workers now
    crop: false,
    focalPoint: false
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
        name: 'caption',
        type: 'text'
    }
  ],
}