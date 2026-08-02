import createMDX from '@next/mdx'
import withPayload from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
  images: {
    loader: "custom",
    loaderFile: "./image/loader.js",
  },
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true
  }
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

export default withPayload(withMDX(nextConfig)) 

