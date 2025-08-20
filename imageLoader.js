export default function imageLoader({ src, width, quality }) {
  // Cloudflare R2の画像URLはそのまま返す
  if (src.startsWith('https://contest001.pinyogram.com')) {
    return src;
  }
  return src;
}
