
const GHOST_API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL || '';

const GHOST_BASE_URL = GHOST_API_URL.replace(/\/cms.*$/, '/cms');


export function fixImageUrl(url?: string | null): string | null {
  if (!url || !GHOST_BASE_URL) return null;
  if (url.startsWith('http')) {
    if (url.startsWith(process.env.NEXT_PUBLIC_SITE_URL || '')) {

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wetterstrucksi.de';
        return url.replace(siteUrl, GHOST_BASE_URL.replace('/cms', ''));
    }
    return url;
  }
  
  return `${GHOST_BASE_URL}${url}`;
}