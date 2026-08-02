import withPayload from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
  images: {
    loader: "custom",
    loaderFile: "./image/loader.js",
  },
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

export default withPayload(nextConfig) 


import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
