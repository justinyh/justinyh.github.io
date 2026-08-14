import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { buildConfig } from 'payload'
import { Pages } from "../collections/pages"
import { Thoughts } from '../collections/thoughts'
import { Media } from '../collections/media'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    routes: {
      account: '/my-account', 
      logout: '/logout'
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => {
      return [
        ...defaultFeatures,
        HeadingFeature({
          enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"]
        })
      ];
    }
  }),

  // Define and configure your collections in this array
  collections: [Pages, Thoughts, Media],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || ''
  }),
  plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})