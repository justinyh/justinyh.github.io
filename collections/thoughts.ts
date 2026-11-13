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
      name: 'subheading',
      type: 'textarea',
    },
    {
        name: 'hero',
        type: 'upload',
        relationTo: 'media'
    },
    {
        name: 'content',
        type: 'richText'
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show at the top of the Thoughts page. If several posts are featured, the most recent one wins.',
      },
    }
  ],
  hooks: {
    beforeChange: [
      async ({ data, operation, originalDoc, req: { payload } }) => {
        if (operation === 'create') {
          return data;
        }
        const currentDoc = await payload.findByID({
          collection: "thoughts",
          id: originalDoc.id,
        });
        if (
          data._status === 'published' &&
          currentDoc._status !== 'published'
        ) {
          data.publishedAt = data.updatedAt
        }

        return data
      },
    ],
  },
  versions: {
    drafts: {
      autosave: true,
    },
  }
}