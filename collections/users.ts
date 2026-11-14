import type { CollectionConfig } from 'payload'

// Same slug and auth setup as Payload's built-in users collection, so existing
// admin accounts keep working; this just adds profile fields to them.
export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      admin: {
        description: 'Shown as "Posted by: <name>" on blog posts.',
      },
    },
    {
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Shown next to your name on blog posts.',
      },
    },
  ],
}
