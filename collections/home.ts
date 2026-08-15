import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'body',
      type: 'richText',
    },
    {
      name: 'hero',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'resume',
      type: 'upload',
      relationTo: 'media'
    }
  ],
}