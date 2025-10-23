export function fixImageUrl(url?: string | null): string | null {
  if (!url) return null;

  let fixedUrl: string;
  try {
    fixedUrl = new URL(url, process.env.NEXT_PUBLIC_SITE_URL).toString();
  } catch {
    return null;
  }
  

  const extRegex = /\.(png|jpe?g)$/i;
  
  if (extRegex.test(fixedUrl)) {
      fixedUrl = fixedUrl.replace(extRegex, '.webp');
  }

  fixedUrl = fixedUrl.replace("-2368", ""); 
  
  return fixedUrl;
}