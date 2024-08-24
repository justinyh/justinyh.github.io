export default function cloudinaryLoader({ src, width, quality }) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    const url = new URL(`https://res.cloudinary.com/do83ahau8/image/upload/${params.join(
        ','
      )}${src}`)
    return url.href
  }