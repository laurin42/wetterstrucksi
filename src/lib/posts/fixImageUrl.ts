export function fixImageUrl(url?: string | null): string | null {
  if (!url) return null;

  let cleanedUrl = url;

  cleanedUrl = cleanedUrl.replace('https://wetterstrucksi.de', '');
  cleanedUrl = cleanedUrl.replace('http://wetterstrucksi.de', '');
  
  cleanedUrl = cleanedUrl.replace('/jensstrucks-blog/wp-content/uploads', '');
  cleanedUrl = cleanedUrl.replace('/wp-content/uploads', '');
  cleanedUrl = cleanedUrl.replace('/content/images', '');
  cleanedUrl = cleanedUrl.replace('content/images', '');
  cleanedUrl = cleanedUrl.replace('-2368', '');
  

  cleanedUrl = cleanedUrl.replace('cms', '');

  cleanedUrl = cleanedUrl.replace(/^\/+/g, '');
  
 
  const finalPath = `/content/images/${cleanedUrl}`;

  let finalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${finalPath}`;
  

  finalUrl = finalUrl.replace(/([^:]\/)\/+/g, '$1');

  if (finalUrl.includes('#')) {
    return finalUrl.split('#')[0];
  }

  return finalUrl;
}