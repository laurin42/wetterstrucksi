export function fixImageUrl(url?: string | null): string | null {
  if (!url) return null;

  try {
    return new URL(url, process.env.NEXT_PUBLIC_SITE_URL).toString();
  } catch {
    return null;
  }
}
