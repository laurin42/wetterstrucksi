export function fixImageUrl(url?: string | null): string | null {
  if (!url) return null;

  let cleanedUrl = url.trim();

  cleanedUrl = cleanedUrl.replace(/\/size\/w\d+\//, '/');

  cleanedUrl = cleanedUrl.replace(/^https?:\/\/(cms\.)?wetterstrucksi\.de\/?/, '');

  cleanedUrl = cleanedUrl.replace("jensstrucks-blog", "");
  cleanedUrl = cleanedUrl.replace("wp-content", "");
  cleanedUrl = cleanedUrl.replace("uploads", "");

  cleanedUrl = cleanedUrl.replace(/^\/+/, '').replace(/\/+$/, '');

  if (!cleanedUrl.startsWith('cms/')) {
    cleanedUrl = `/${cleanedUrl}`;
  }

  const finalUrl = `https://cms.wetterstrucksi.de/${cleanedUrl}`.replace(/([^:]\/)\/+/g, '$1');

  return finalUrl;
}
