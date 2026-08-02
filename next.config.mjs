import withPayload from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
  images: {
    loader: "custom",
    loaderFile: "./image/loader.js",
  },
  // Optionally, add any other Next.js config below
  serverExternalPackages: ['jose', 'pg-cloudflare'],
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false })
