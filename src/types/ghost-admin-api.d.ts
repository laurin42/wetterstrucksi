declare module "@tryghost/admin-api" {
export interface GhostPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string | null;
  featured: boolean;
  visibility: "public" | "members" | "paid";
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: string | null;
  canonical_url: string | null;
  url: string;
  plaintext: string;
  reading_time: number;
  access: boolean;
  comments: boolean;

  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  meta_title: string | null;
  meta_description: string | null;

  tags?: GhostTag[];
  authors?: GhostAuthor[];
}

export interface PostWithMeta {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string | null;
  featured: boolean;
  visibility: "public" | "members" | "paid";
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: string;
  canonical_url: string | null;
  url: string;
  plaintext: string;
  reading_time: number;
  access: boolean;
  comments: boolean;

  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  meta_title: string | null;
  meta_description: string | null;

  tags?: GhostTag[];
  authors?: GhostAuthor[];
}

export interface LocalPostWithMeta {
  id: string;
  title: string;
  slug: string;
  feature_image: string | null;
  og_image: string | null;
  twitter_image: string | null;
  published_at: string;
  plaintext: string | null;
  html: string | null;
  tags: string[];
}

  class GhostAdminAPI {
    constructor(config: { url: string; key: string; version: string });
    posts: {
      browse(options: Record<string>): Promise<GhostPost[]>;
    };
  }

  export default GhostAdminAPI;
}
