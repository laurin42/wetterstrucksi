declare module "@tryghost/content-api" {
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

export interface GhostTag {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface GhostAuthor {
  id: string;
  name: string;
  slug: string;
  profile_image?: string;
  bio?: string;
}

  
  export interface GhostContentAPIOptions {
    url: string;
    key: string;
    version: string;
  }

  export interface GhostPage {
    id: string;
    title: string;
    slug: string;
    html?: string;
    plaintext?: string;
    created_at: string;
    updated_at?: string;
    published_at?: string;
  }

  export default class GhostContentAPI {
    constructor(options: GhostContentAPIOptions);

    posts: {
      browse(options?: Record<string, unknown>): Promise<GhostPost[]>;
      read(data: { id?: string; slug?: string }, options?: Record<string, unknown>): Promise<GhostPost>;
    };

    pages: {
      browse(options?: Record<string, unknown>): Promise<GhostPage[]>;
      read(data: { id?: string; slug?: string }, options?: Record<string, unknown>): Promise<GhostPage>;
    };

    tags: {
      browse(options?: Record<string, unknown>): Promise<GhostTag[]>;
      read(data: { id?: string; slug?: string }, options?: Record<string, unknown>): Promise<GhostTag>;
    };

    authors: {
      browse(options?: Record<string, unknown>): Promise<GhostAuthor[]>;
      read(data: { id?: string; slug?: string }, options?: Record<string, unknown>): Promise<GhostAuthor>;
    };
  }
}
