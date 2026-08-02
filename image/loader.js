export default function cloudflareLoader({ src, width, quality }) {
    if (src.startsWith("/")) {
      return src;
    }
    const url = new URL(`https://${process.env.NEXT_PUBLIC_IMAGES_URL}/images/${src}`)
    return url.href
  }