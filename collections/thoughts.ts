import type { CollectionConfig } from 'payload'

export const Thoughts: CollectionConfig = {
  slug: 'thoughts',
  access: {
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) return true

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
  admin: {
    livePreview: {
      url: ({ data }) =>
        `thoughts/${data.id}?draft=true`
    }
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
        name: 'hero',
        type: 'upload',
        relationTo: 'media'
    },
    {
        name: 'content',
        type: 'richText'
    }
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  }
}