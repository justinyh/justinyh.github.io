import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
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
      required: true,
    },
    {
        name: 'caption',
        type: 'text'
    }
  ],
}