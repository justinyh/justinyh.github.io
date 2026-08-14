import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'hero',
      type: 'upload',
      relationTo: 'media'
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  }
}